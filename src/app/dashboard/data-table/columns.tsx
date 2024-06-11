'use client'

import { ColumnDef, SortDirection } from '@tanstack/react-table'
import { Badge } from '@/components/ui/badge'
import type { Payment } from '@/data/payments.data'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  ChevronDownIcon,
  ChevronUpIcon,
  DotsHorizontalIcon,
} from '@radix-ui/react-icons'
import { toast } from 'sonner'

const SorterIcon = ({ isSorted }: { isSorted: false | SortDirection }) => {
  if (isSorted === 'asc') {
    return <ChevronUpIcon className="h-4 w-4" />
  }
  if (isSorted === 'desc') {
    return <ChevronDownIcon className="h-4 w-4" />
  }
  return null
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'clientName',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Client Name
          <SorterIcon isSorted={column.getIsSorted()} />
        </Button>
      )
    },
  },
  {
    accessorKey: 'email',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Email
          <SorterIcon isSorted={column.getIsSorted()} />
        </Button>
      )
    },
  },
  {
    accessorKey: 'status',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Status
          <SorterIcon isSorted={column.getIsSorted()} />
        </Button>
      )
    },
    cell: ({ row }) => {
      const status = row.getValue('status') as string
      const variant =
        {
          pending: 'info',
          processing: 'secondary',
          success: 'success',
          failed: 'destructive',
        }[status] ?? ('defaut' as any)
      return (
        <Badge variant={variant} capitalize>
          {status}
        </Badge>
      )
    },
  },
  {
    accessorKey: 'amount',
    header: ({ column }) => {
      return (
        <div className="text-right">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Amount
            <SorterIcon isSorted={column.getIsSorted()} />
          </Button>
        </div>
      )
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('amount'))
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount)
      return <div className="text-right font-medium">{formatted}</div>
    },
  },

  {
    accessorKey: 'actions',
    header: () => <div></div>,
    cell: ({ row }) => {
      const payment = row.original
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => {
                navigator.clipboard.writeText(payment.id)
                toast('Payment ID copied to clipboard', {
                  position: 'top-right',
                })
              }}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
