interface Props {
  label: string;
  href: string;
  device: 'mobile' | 'desktop';
}

export function NavItem(item: Props) {
  const classes = "px-4 hover:text-pink";
  const classMobile = "py-2 block";
  const classNamesByDevice = item.device === 'mobile' ? `${classes} ${classMobile}` : classes;

  return (
    <a className={classNamesByDevice} href={item.href}>{item.label}</a>
  )
}