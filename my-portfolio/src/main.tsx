import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import App from './App.tsx';
import ChallengesPage from './ChallengesPage.tsx';
import ProjectsPage from './ProjectsPage.tsx';
import TimelinePage from './TimelinePage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/projects',
    element: <ProjectsPage />,
  },
  {
    path: '/challenges',
    element: <ChallengesPage />,
  },
  {
    path: '/timeline',
    element: <TimelinePage />,
  },
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
