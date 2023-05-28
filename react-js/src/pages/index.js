import React, { useState } from 'react'
import ListRender from '@/components/ListRender'
import ConditionalRender from '@/components/ConditionalRender'
import ShowUserName from '@/components/ShowUserName'
import CarDetails from '@/components/CarDetails'
import Container from '@/components/Container'
import ExecuteFunction from '@/components/ExecuteFunction'
import Message from '@/components/Message'
import ChangeMessageState from '@/components/ChangeMessageState'
import UserDetails from '@/components/UserDetails'

export default function Home() {

  const cars = [
    { id: 1, brand: 'Polo', color: 'azul', km: 60000, newCar: true },
    { id: 2, brand: 'Gol Quadrado', color: 'verde', km: 20000, newCar: false },
    { id: 3, brand: 'Gol Bolinha', color: 'vermelho', km: 40000, newCar: true }
  ]

  function showMessage() {
    console.log("Evento do componente pai!")
  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  const peoples = [
    { nome: 'Vitor' },
    { idade: '16' },
    { profissão: 'Programador' }
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
        <CarDetails key={detailsCar.id} brand={detailsCar.brand} color={detailsCar.color} km={detailsCar.km} newCar={detailsCar.newCar} />
      ))}
      {/*children*/}
      <Container value="10">
        <p>Este é o conteúdo da tag p</p>
        <p>test do children</p>
      </Container>
      {/*executar função*/}
      <ExecuteFunction myFunction={showMessage} />
      {/* state lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
      {/*task*/}
      {peoples.map((details) => (
        <UserDetails idade={details.idade} />
      ))}
    </>
  )
}
