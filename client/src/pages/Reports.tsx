import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const Reports = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
          <p className="text-muted-foreground">
            Manage your appraisal reports and documentation
          </p>
        </div>
        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90">
          New Report
        </button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Reports</CardTitle>
          <CardDescription>View and manage your appraisal reports</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <p className="text-muted-foreground">No reports found</p>
            <p className="text-sm text-muted-foreground mt-1">
              Create your first report to get started
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Reports