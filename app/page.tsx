import { AppSidebar } from "@/components/app-sidebar"
import { Chart1 } from "@/components/index/chart1"
import { Chart2 } from "@/components/index/chart2"
import { Chart4 } from "@/components/index/chart4"
import { DataTable } from "@/components/index/data-table"
import { Accordion, AccordionTrigger } from "@/components/ui/accordion"
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
import { AccordionContent, AccordionItem } from "@radix-ui/react-accordion"

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
        <div className="flex flex-1 flex-col gap-4 p-8 pt-0">
          <Accordion type="multiple" className="px-6"   defaultValue={['charts']}>

            <AccordionItem   value="charts" defaultChecked className="p-2 bg-slate-50 rounded-md">
            <AccordionTrigger className="px-2 ">charts</AccordionTrigger>

                <AccordionContent>

                  <div className="grid auto-rows-min gap-4 lg:grid-cols-3">

                    <Chart1/>
                    <Chart2/>
                    <Chart4/>
                  </div>
                </AccordionContent>
            </AccordionItem>
          </Accordion>
          
          
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
