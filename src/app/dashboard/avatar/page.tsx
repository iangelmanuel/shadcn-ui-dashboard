import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function AvatarPage() {
  return (
    <div>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  )
}
