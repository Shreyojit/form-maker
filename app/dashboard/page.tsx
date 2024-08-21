import { redirect } from 'next/navigation'
import React from 'react'

function DashboardPage() {
  
    redirect("/dashboard/forms");
  
}

export default DashboardPage