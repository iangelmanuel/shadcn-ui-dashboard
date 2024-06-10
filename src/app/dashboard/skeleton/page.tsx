import { Button } from '@/components/ui/button'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'

const getData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  return '1234567890'.split('')
}

export default async function SkeletonPage() {
  const data = await getData()
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {data.map((item) => (
        <Card key={item}>
          <CardHeader className="flex-row">
            <Image
              src="https://github.com/iangelmanuel.png"
              alt="Angel Manuel"
              width={40}
              height={40}
              className="rounded-full mr-2 w-10 h-10"
            />
          </CardHeader>

          <div className="p-5">
            <CardTitle>Card Title</CardTitle>
            <CardDescription>
              Una CardDescription es un texto que se muestra en la card
            </CardDescription>
          </div>

          <CardFooter className="flex justify-end">
            <Button>Más</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
