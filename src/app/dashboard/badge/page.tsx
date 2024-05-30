import { Badge } from '@/components/ui/badge'

export default function BadgePage() {
  return (
    <div className="flex gap-4">
      <Badge variant="default">Default</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="secondary">Secondary</Badge>
    </div>
  )
}
