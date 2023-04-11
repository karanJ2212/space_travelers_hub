import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, cleanup } from "@testing-library/react";
import Navbar from "../components/Navbar/Navbar";
import "@testing-library/jest-dom";

afterEach(() => {
  cleanup();
});
describe("Render All Components", () => {
  test("render navbar", () => {
    const { container } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
<nav
  class="nav-bar"
>
  <a
    class="header"
    href="/"
  >
    <img
      alt="logo"
      class="logo-img"
      src="logo.png"
    />
    <span
      class="logo-name"
    >
      Space Traveler‘s Hub
    </span>
  </a>
  <ul
    class="header-cate"
  >
    <li
      class="list"
    >
      <a
        activeclassname="active"
        aria-current="page"
        class="active"
        href="/"
      >
        Rockets
      </a>
    </li>
    <span
      class="line"
    >
      |
    </span>
    <li
      class="mission"
    >
      <a
        activeclassname="active"
        class=""
        href="/missions"
      >
        Mission
      </a>
    </li>
    <span
      class="line"
    >
      |
    </span>
    <li
      class="profile"
    >
      <a
        activeclassname="active"
        class=""
        href="/profile"
      >
        My profile
      </a>
    </li>
  </ul>
</nav>
`);
  });
});
