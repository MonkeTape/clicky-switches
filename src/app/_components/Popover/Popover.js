// what if we made this a compound component that always lives together?

import { useState, Children, cloneElement } from "react";
import useOutsideClick from "@/hooks/useOutsideClick";

/*
  This one handles the state management between all the popover menus
  It adds a click handler and active property to each child
*/
function Group({ children }) {
  const [openMenu, setOpenMenu] = useState(null);

  function handleMenuClick(name) {
    if (name === openMenu) {
      setOpenMenu(null);
    } else {
      setOpenMenu(name);
    }
  }

  const newChildren = Children.map(children, (child) => {
    return cloneElement(child, {
      handleMenuClick: handleMenuClick,
      active: child.props.name === openMenu,
    });
  });

  return newChildren;
}

function Section({ children, name, active, handleMenuClick }) {
  const newChildren = Children.map(children, (child) => {
    return cloneElement(child, {
      handleMenuClick,
      active,
      name,
    });
  });

  return <div className="relative">{newChildren}</div>;
}

// This is the actual button that opens the menu
// Icon takes priority over displaying the name!
function Button({ active, children, name, handleMenuClick }) {
  return (
    <button
      className={`${active ? "bg-black text-white" : ""} hover:bg-black hover:text-white cursor-pointer m-auto py-1 relative`}
      onClick={() => handleMenuClick(name)}
    >
      {children}
    </button>
  );
}

function Menu({ children, active, handleMenuClick }) {
  const ref = useOutsideClick(() => handleMenuClick(null));

  const newChildren = Children.map(children, (child) => {
    return cloneElement(child, {
      handleMenuClick,
    });
  });

  return (
    <menu
      className={`${active ? "block" : "hidden"} absolute border-2 bg-computer-green-500 min-w-50`}
      ref={ref}
    >
      {newChildren}
    </menu>
  );
}

function MenuItem({ children, handleMenuClick }) {
  return (
    <div
      className="hover:bg-black hover:text-computer-green-500"
      onClick={() => handleMenuClick(null)}
    >
      {children}
    </div>
  );
}

const Popover = { Group, Section, Button, Menu, MenuItem };

export default Popover;
