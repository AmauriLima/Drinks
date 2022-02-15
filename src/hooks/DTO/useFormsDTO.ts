export type FieldName<T> = keyof T & string;

export type InputProps = {
  label: string;
  type?: string,
  errorMessage?: string;
  validateField?: boolean;
}

export type InputObjectProps<T> = {
  [field in FieldName<T>]: InputProps;
}
