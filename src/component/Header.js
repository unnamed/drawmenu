import {useState} from 'react';

function Menu({label, children}) {
  const [visible, setVisible] = useState(false);
  return (
    <div
      className="cursor-pointer"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}>
      <h3 className="text-base">{label}</h3>
      <div className={`${visible ? 'block' : 'hidden'} flex flex-col absolute w-max gap-2 p-2 bg-night-300`}>
        {children}
      </div>
    </div>
  );
}

function MenuEntry({label, onClick}) {
  return (
    <div onClick={onClick}>
      {label}
    </div>
  );
}

export default function Header() {
  return (
    <header className="flex flex-row px-5 bg-night-300 justify-between">
      <div className="flex flex-row gap-4 items-center h-100">
        <h1 className="font-medium text-xl">drawmenu</h1>

        <Menu label="File">
          <MenuEntry label="Import"/>
          <MenuEntry label="Export"/>
        </Menu>

        <Menu label="Edit"/>
        <Menu label="View"/>
        <Menu label="Help"/>
      </div>

      <div>
      </div>
    </header>
  );
}