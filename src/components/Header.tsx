import type { FC } from 'react'

import { cn } from '@/lib/utils'
import Logo from '@/assets/icons/zentodo.svg?react'
import Logo from '@/assets/icons/zentodo.svg?react'

type Props = {
  className?: string
}

export const Header: FC<Props> = ({ className }) => (
  <div
    className={cn(
      'mx-auto flex w-full items-center justify-center space-x-2',
      className
    )}
  >
    <Logo className="h-12 w-12" />
    <span className="text-4xl font-light tracking-wider">ZenToDo</span>
  </div>
)
