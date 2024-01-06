import RevenueChart from "@/app/ui/dashboard/revenue-chart"
import LatestInvoices from "../../ui/dashboard/latest-invoices"
import { lusitana } from "@/app/ui/fonts"
import { Suspense } from "react"
import { RevenueChartSkeleton, InvoiceSkeleton, CardsSkeleton} from "@/app/ui/skeletons"
import CardWrapper from "@/app/ui/dashboard/cards"

export default async function Page(){
    return (
        <main>
            <h1 className = {`${lusitana.className} mb-4 text-x1 md:text-2x1`}>Dashboard</h1>
            <div className = "grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <Suspense fallback = {<CardsSkeleton />}>
                    <CardWrapper />
                </Suspense>
            </div>
            <div className="bg-red-100"></div>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                <Suspense fallback={<RevenueChartSkeleton />}>
                    <RevenueChart />
                </Suspense>
                <Suspense fallback={<InvoiceSkeleton />}>
                    <LatestInvoices />
                </Suspense>
            </div>
        </main>
    )
}