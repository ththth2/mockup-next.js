import React from 'react'
import Image from 'next/image'


type Props = {
    meow: any
}

function Meow({ meow }: Props) {
  return (
    <div>
      <h2>Meow</h2>
      <Image src={meow.url} width="300" height="300" alt={meow.file} />
    </div>
  )
}
export async function getStaticProps() {
    const res = await fetch('https://meow.senither.com/v1/random')
    const response = await res.json()
  
    return {
      props: {
        meow: response.data,
      },
      revalidate: 5,
    }
  }

export default Meow