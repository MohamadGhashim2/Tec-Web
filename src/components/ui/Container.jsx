import { cn } from '../../lib/cn'

function Container({ as = 'div', className, children }) {
  const Tag = as

  return <Tag className={cn('site-container', className)}>{children}</Tag>
}

export default Container
