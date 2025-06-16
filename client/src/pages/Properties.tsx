import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const Properties = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Properties</h1>
          <p className="text-muted-foreground">
            Manage property information and details
          </p>
        </div>
        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90">
          Add Property
        </button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Properties</CardTitle>
          <CardDescription>View and manage property listings</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <p className="text-muted-foreground">No properties found</p>
            <p className="text-sm text-muted-foreground mt-1">
              Add your first property to get started
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Properties