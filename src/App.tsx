import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './components/Layout'
import { AgentsPage } from './pages/AgentsPage'
import { ClaudeRechargePage } from './pages/ClaudeRechargePage'
import { HomePage } from './pages/HomePage'
import { HelpCenterPage } from './pages/HelpCenterPage'
import { OrderPage } from './pages/OrderPage'
import { SelfRechargePage } from './pages/SelfRechargePage'
import { PrivacyPage } from './pages/PrivacyPage'
import { SupportPage } from './pages/SupportPage'
import { TermsPage } from './pages/TermsPage'
import { I18nProvider } from './lib/i18n'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'claude', element: <ClaudeRechargePage /> },
      { path: 'help', element: <HelpCenterPage /> },
      { path: 'order', element: <OrderPage /> },
      { path: 'self-recharge', element: <SelfRechargePage /> },
      { path: 'privacy', element: <PrivacyPage /> },
      { path: 'terms', element: <TermsPage /> },
      { path: 'support', element: <SupportPage /> },
      { path: 'agents', element: <AgentsPage /> },
    ],
  },
])

export default function App() {
  return <I18nProvider><RouterProvider router={router} /></I18nProvider>
}
