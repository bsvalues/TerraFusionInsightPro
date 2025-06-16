import React from 'react'
import { Link, useLocation } from 'wouter'
import { cn } from '@/lib/utils'

const Navigation = () => {
  const [location] = useLocation()

  const navItems = [
    { href: '/', label: 'Dashboard' },
    { href: '/reports', label: 'Reports' },
    { href: '/properties', label: 'Properties' },
  ]

  return (
    <nav className="border-b bg-card">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/">
              <a className="text-xl font-bold text-primary">TerraFusionPro</a>
            </Link>
            <div className="flex space-x-6">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <a
                    className={cn(
                      'text-sm font-medium transition-colors hover:text-primary',
                      location === item.href
                        ? 'text-primary'
                        : 'text-muted-foreground'
                    )}
                  >
                    {item.label}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation