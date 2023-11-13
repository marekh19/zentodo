import type { FC } from 'react'

type Props = {
  className?: string
}

export const Layout: FC<Props> = ({ className }) => {
  return (
    <section className={className}>
      <div>Layout</div>
    </section>
  )
}
