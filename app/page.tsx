import { AppSidebar } from "@/components/app-sidebar"
import { Chart1 } from "@/components/index/chart1"
import { Chart2 } from "@/components/index/chart2"
import { Chart3 } from "@/components/index/chart3"
import { Chart4 } from "@/components/index/chart4"
import { DataTable } from "@/components/index/data-table"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3 ">

            {/* <div className="aspect-video rounded-xl bg-muted/50" /> */}
            <Chart1/>
            <Chart2/>
            {/* <Chart3/> */}
            <Chart4/>

            {/* <div className="aspect-video rounded-xl bg-muted/50" /> */}
            {/* <div className="aspect-video rounded-xl bg-muted/50" /> */}
          </div>
          {/* <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min bg-slate-950" /> */}
          <div className="flex justify-center">
            <div className=" flex-1 px-5">
              <DataTable/>

            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
