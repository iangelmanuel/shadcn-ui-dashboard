import { columns } from './columns'
import { DataTable } from './data-table'
import { Payment, payments } from '@/data/payments.data'

async function getData(): Promise<Payment[]> {
  return payments
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
