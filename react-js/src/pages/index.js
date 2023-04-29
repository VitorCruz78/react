import ListRender from '@/components/ListRender'
import ConditionalRender from '@/components/ConditionalRender'
import ShowUserName from '@/components/ShowUserName'
import CarDetails from '@/components/CarDetails'

export default function Home() {

  const cars = [
    { id: 1, brand: 'Polo', color: 'azul', km: 60000, newCar: true },
    { id: 2, brand: 'Gol Quadrado', color: 'verde', km: 20000, newCar: false },
    { id: 3, brand: 'Gol Bolinha', color: 'vermelho', km: 40000, newCar: true }
  ]
  return (
    <>
      <ListRender />
      <ConditionalRender />
      {/*props*/}
      <ShowUserName name="Vitão" />
      {/*destructuring*/}
      <CarDetails brand="BMW" km={20000} color="azul" newCar={true} />
      {/*reaproveitamento de componentes*/}
      <CarDetails brand="Picasso" km={10000} color="cinza" newCar={false} />
      <CarDetails brand="Ford" km={5000} color="amarelo" newCar={true} />
      {/*loop em array de objetos*/}
      {cars.map((detailsCar) => (
        <CarDetails brand={detailsCar.brand} color={detailsCar.color} km={detailsCar.km} newCar={detailsCar.newCar} />
      ))}
    </>
  )
}
