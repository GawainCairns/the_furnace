import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SideNav({ children, links = [] }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // prevent body scroll when drawer is open
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Toggle button - fixed top-left */}
      <button
        aria-label={open ? "Close side navigation" : "Open side navigation"}
        onClick={() => setOpen((s) => !s)}
        className="fixed left-4 z-50 flex h-10 w-10 items-center justify-center rounded-md bg-white/90 shadow-md backdrop-blur-sm dark:bg-gray-800/90"
        style={{ top: 'var(--navbar-height, 4rem)' }}
      >
        {open ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Overlay */}
      <div
        className={`fixed left-0 right-0 z-40 bg-black/40 transition-opacity ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
        style={{ top: 'var(--navbar-height, 4rem)', height: 'calc(100% - var(--navbar-height, 4rem))' }}
      />

      {/* Drawer */}
      <aside
        className={`fixed left-0 z-50 w-72 transform bg-white shadow-lg transition-transform dark:bg-gray-900 ${open ? "translate-x-0" : "-translate-x-full"}`}
        aria-hidden={!open}
        style={{ top: 'var(--navbar-height, 4rem)', height: 'calc(100% - var(--navbar-height, 4rem))' }}
      >
        <div className="flex h-full flex-col overflow-y-auto py-6 px-4">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Menu</h2>
            <button
              onClick={() => setOpen(false)}
              className="p-1 text-gray-600 hover:text-gray-900 dark:text-gray-300"
              aria-label="Close side navigation"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="mb-6 flex-1">
            <ul className="space-y-1">
              {links.map((item, idx) => (
                <li key={idx}>
                  {item.to ? (
                    <button
                      onClick={() => {
                        if (item.onClick) item.onClick();
                        if (item.to) navigate(item.to);
                        setOpen(false);
                      }}
                      className="w-full text-left rounded-md px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      {item.label}
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        if (item.onClick) item.onClick();
                        setOpen(false);
                      }}
                      className="w-full text-left rounded-md px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      {item.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* children slot for custom links/components */}
          <div className="mt-auto">{children}</div>
        </div>
      </aside>
    </>
  );
}

export default SideNav;