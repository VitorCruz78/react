import ListRender from '@/components/ListRender'
import ConditionalRender from '@/components/ConditionalRender'
import ShowUserName from '@/components/ShowUserName'

export default function Home() {
  return (
    <>
      <ListRender />
      <ConditionalRender />
      <ShowUserName name="Vitão" />
    </>
  )
}
