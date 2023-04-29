import ListRender from '@/components/ListRender'
import ConditionalRender from '@/components/ConditionalRender'
import ShowUserName from '@/components/ShowUserName'
import CarDetails from '@/components/CarDetails'

export default function Home() {
  return (
    <>
      <ListRender />
      <ConditionalRender />
      {/*props*/}
      <ShowUserName name="Vitão" />
      {/*destructuring*/}
      <CarDetails brand="BMW" km={20000} color="azul" />
    </>
  )
}
