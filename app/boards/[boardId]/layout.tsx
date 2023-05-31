import React, { PropsWithChildren } from 'react'

export default function Layout({
    params,
    children,
  }: PropsWithChildren<{
    params: { boardId: string };
  }>) {

  return (
    <div>Boards ({params.boardId})
    {children}
    </div>
  )
}
