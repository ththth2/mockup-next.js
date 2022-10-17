import React from 'react'

type Props = {
    title: string,
}

function Hello({ title }: Props) {
  return (
    <div>{ title }</div>
  )
}
export async function getServerSideProps() {
    return {
      props: { title: 'This is title from getServerSideProps' },
    }
  }

export default Hello