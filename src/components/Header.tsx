"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CartButton from "@/components/CartButton";
import Logo from "@/components/Logo";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/company",
    children: [
      { label: "Company Background", href: "/company#background" },
      { label: "Vision / Mission / Goals", href: "/company#vision" },
      { label: "Management Team", href: "/company#team" },
    ],
  },
  {
    label: "Products & Services",
    href: "/services",
    children: [
      { label: "All Services", href: "/services" },
      { label: "Consumables Shop", href: "/category/all-products" },
      { label: "Preventive Maintenance", href: "/services#preventive" },
      { label: "Emergency Support", href: "/services#emergency" },
    ],
  },
  {
    label: "Gallery",
    href: "/gallery",
    children: [
      { label: "Photos", href: "/gallery#photos" },
      { label: "Videos", href: "/gallery#videos" },
    ],
  },
  {
    label: "News & Blog",
    href: "/news",
    children: [
      { label: "Events", href: "/news#events" },
      { label: "News", href: "/news#news" },
      { label: "Blogs", href: "/news#blogs" },
    ],
  },
  {
    label: "Careers",
    href: "/careers",
    children: [
      { label: "Open Positions", href: "/careers#positions" },
      { label: "Vacancies", href: "/careers#positions" },
    ],
  },
  { label: "Contact Us", href: "/contact-us" },
];

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-3 w-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function NavLink({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group relative px-2 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] transition-colors duration-200 xl:px-2.5 xl:text-[11px] ${
        active ? "text-[#4069a5]" : "text-[#6b6b6b] hover:text-[#4069a5]"
      }`}
    >
      {label}
      <span
        className={`absolute -bottom-0.5 left-2 right-2 h-[2px] rounded-full bg-[#1a1a1a] transition-all duration-200 xl:left-2.5 xl:right-2.5 ${
          active ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-40"
        }`}
      />
    </Link>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    setOpenDropdown(null);
    setMobileDropdown(null);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!openDropdown) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenDropdown(null);
    };

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Element;
      if (!target.closest("[data-nav-dropdown]")) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openDropdown]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.split("#")[0]);

  const isChildActive = (href: string) => {
    const path = href.split("#")[0];
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileDropdown(null);
  };

  return (
    <>
      <div className="pointer-events-none fixed top-3 z-50 w-full px-3 sm:top-4 sm:px-5 lg:px-8">
        <header className="pointer-events-auto mx-auto flex max-w-[1320px] items-center justify-between gap-3 rounded-full border border-white/70 bg-white/80 px-3 py-2 shadow-[0_8px_40px_rgba(0,0,0,0.1)] backdrop-blur-xl sm:gap-4 sm:px-5 sm:py-2.5">
          <Logo />

          <nav className="hidden flex-1 items-center justify-center lg:flex">
            <ul className="flex items-center">
              {navItems.map((item) => (
                <li key={item.label} className="relative">
                  {item.children ? (
                    <div
                      className="relative"
                      data-nav-dropdown
                      onMouseEnter={() => setOpenDropdown(item.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <button
                        type="button"
                        onClick={() => setOpenDropdown(item.label)}
                        className={`group relative inline-flex items-center gap-0.5 px-2 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] transition-colors xl:px-2.5 xl:text-[11px] ${
                          isActive(item.href)
                            ? "text-[#4069a5]"
                            : "text-[#6b6b6b] hover:text-[#4069a5]"
                        }`}
                        aria-expanded={openDropdown === item.label}
                        aria-haspopup="true"
                      >
                        {item.label}
                        <Chevron open={openDropdown === item.label} />
                        <span
                          className={`absolute -bottom-0.5 left-2 right-2 h-[2px] rounded-full bg-[#1a1a1a] transition-all duration-200 xl:left-2.5 xl:right-2.5 ${
                            isActive(item.href)
                              ? "scale-x-100 opacity-100"
                              : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-40"
                          }`}
                        />
                      </button>

                      <div
                        className={`absolute left-1/2 top-full z-50 min-w-[240px] -translate-x-1/2 pt-3 transition-all duration-200 ${
                          openDropdown === item.label
                            ? "pointer-events-auto visible opacity-100"
                            : "pointer-events-none invisible opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-[0_16px_48px_rgba(0,0,0,0.12)]">
                          <div className="p-1.5">
                            <Link
                              href={item.href}
                              className={`mb-1 block rounded-xl px-4 py-2.5 text-xs font-semibold transition-colors ${
                                isActive(item.href)
                                  ? "bg-[#4069a5]/10 text-[#4069a5]"
                                  : "text-[#222] hover:bg-black/[0.04] hover:text-[#4069a5]"
                              }`}
                            >
                              {item.label} Overview
                            </Link>
                            {item.children.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href}
                                onClick={() => setOpenDropdown(null)}
                                className={`block rounded-xl px-4 py-2.5 text-xs font-medium transition-colors ${
                                  isChildActive(child.href)
                                    ? "bg-[#4069a5]/8 text-[#4069a5]"
                                    : "text-[#444] hover:bg-black/[0.04] hover:text-[#4069a5]"
                                }`}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <NavLink
                      href={item.href}
                      label={item.label}
                      active={isActive(item.href)}
                    />
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-2 lg:flex xl:gap-3">
            <CartButton />
            <Link
              href="/contact-us"
              className="rounded-lg bg-gradient-to-r from-[#4069a5] to-[#033250] px-4 py-2 text-[11px] font-semibold uppercase tracking-wide text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_4px_14px_rgba(64,105,165,0.35)] transition hover:brightness-110"
            >
              Service Request
            </Link>
          </div>

          <button
            type="button"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#2a2a2a] text-white transition hover:bg-[#4069a5] lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <div className="flex w-4 flex-col items-center justify-center gap-1">
              <span
                className={`block h-0.5 w-4 rounded-full bg-current transition-all duration-300 ${
                  mobileOpen ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-4 rounded-full bg-current transition-all duration-300 ${
                  mobileOpen ? "scale-0 opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-4 rounded-full bg-current transition-all duration-300 ${
                  mobileOpen ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </header>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeMobile}
        aria-hidden="true"
      />

      <div
        className={`fixed left-3 right-3 top-[72px] z-50 overflow-hidden rounded-3xl border border-white/70 bg-white/95 shadow-[0_20px_60px_rgba(0,0,0,0.15)] backdrop-blur-xl transition-all duration-300 lg:hidden ${
          mobileOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <nav className="max-h-[70vh] overflow-y-auto p-3">
          <ul className="space-y-0.5">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.children ? (
                  <div>
                    <button
                      type="button"
                      onClick={() =>
                        setMobileDropdown(
                          mobileDropdown === item.label ? null : item.label
                        )
                      }
                      className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-semibold uppercase tracking-wide ${
                        isActive(item.href)
                          ? "text-[#4069a5]"
                          : "text-[#333] hover:bg-black/[0.03]"
                      }`}
                    >
                      {item.label}
                      <Chevron open={mobileDropdown === item.label} />
                    </button>
                    <div
                      className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                        mobileDropdown === item.label
                          ? "grid-rows-[1fr]"
                          : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <ul className="mb-2 ml-4 space-y-0.5 border-l-2 border-[#4069a5]/20 pl-3">
                          <li>
                            <Link
                              href={item.href}
                              onClick={closeMobile}
                              className="block rounded-lg px-3 py-2 text-sm font-semibold text-[#333] hover:text-[#4069a5]"
                            >
                              {item.label} Overview
                            </Link>
                          </li>
                          {item.children.map((child) => (
                            <li key={child.label}>
                              <Link
                                href={child.href}
                                onClick={closeMobile}
                                className="block rounded-lg px-3 py-2 text-sm text-[#555] hover:text-[#4069a5]"
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={closeMobile}
                    className={`block rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-wide ${
                      isActive(item.href)
                        ? "text-[#4069a5]"
                        : "text-[#333] hover:bg-black/[0.03]"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center justify-end gap-3 border-t border-black/5 p-3">
          <CartButton />
          <Link
            href="/contact-us"
            onClick={closeMobile}
            className="rounded-lg bg-gradient-to-r from-[#4069a5] to-[#033250] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white"
          >
            Service Request
          </Link>
        </div>
      </div>
    </>
  );
}
