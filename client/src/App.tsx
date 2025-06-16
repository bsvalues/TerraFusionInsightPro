import React from 'react'
import { Route, Switch } from 'wouter'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from 'next-themes'
import Dashboard from './pages/Dashboard'
import Reports from './pages/Reports'
import Properties from './pages/Properties'
import Navigation from './components/Navigation'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <div className="min-h-screen bg-background">
          <Navigation />
          <main className="container mx-auto px-4 py-8">
            <Switch>
              <Route path="/" component={Dashboard} />
              <Route path="/reports" component={Reports} />
              <Route path="/properties" component={Properties} />
              <Route>
                <div className="text-center py-12">
                  <h1 className="text-2xl font-bold text-foreground">Page Not Found</h1>
                  <p className="text-muted-foreground mt-2">The page you're looking for doesn't exist.</p>
                </div>
              </Route>
            </Switch>
          </main>
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App