module.exports = {
  useNavigate: () => jest.fn(),
  useLocation: () => ({ pathname: '/' }),
  BrowserRouter: ({ children }) => children,
  HashRouter: ({ children }) => children,
  MemoryRouter: ({ children }) => children,
  Link: ({ children }) => children,
  Routes: ({ children }) => children,
  Route: ({ children }) => children,
  Navigate: () => null,
};
