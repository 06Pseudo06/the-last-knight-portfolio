export interface Chapter {
  number: string;
  id: string;
  label: string;
  title: string;
  subtitle: string;
  href: string;
}

export interface NavAction {
  label: string;
  href: string;
  isExternal?: boolean;
}
