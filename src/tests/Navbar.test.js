import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import Navbar from '../components/Navbar/Navbar';
import '@testing-library/jest-dom';

afterEach(() => {
  cleanup();
});
describe('Render All Components', () => {
  test('render navbar', () => {
    const { container } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
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
        aria-current="page"
        class="nav-links active"
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
        class="nav-links"
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
        class="nav-links"
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
