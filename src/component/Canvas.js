import {useRef, useEffect, useState} from 'react';
import Background from '../assets/pixels.svg';

export default function Canvas() {

    const canvasRef = useRef(undefined);

    const cellSize = 15;
    const width = 24;
    const height = 24;

    const canonicalize = (abs, pos) => Math.floor((abs - pos) / cellSize) * cellSize;

    function paint(event) {
        const canvas = canvasRef.current;
        const rect = canvas.getBoundingClientRect();
        canvas.getContext('2d').fillRect(
            canonicalize(event.clientX, rect.left),
            canonicalize(event.clientY, rect.top),
            cellSize,
            cellSize
        );
    }

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        ctx.fillStyle = '#ffffff';
    }, []);

    const clicking = useState(false);

    return (
        <div style={{
            backgroundImage: `url(${Background})`,
            backgroundSize: cellSize * 2,
            minHeight: '300px'
        }}>
            <canvas
                ref={canvasRef}
                width={width * cellSize}
                height={height * cellSize}
                onMouseMove={event => {
                    if (!clicking[0]) return;
                    paint(event);
                }}
                onClick={paint}
                onMouseDown={() => clicking[0] = true}
                onMouseLeave={() => clicking[0] = false}
                onMouseUp={() => clicking[0] = false}
            />
        </div>
    );
}