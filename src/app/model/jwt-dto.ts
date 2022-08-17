export interface JwtDto {
  token: string;
  type: string;
  nameUser: string;
  authorities: string[];
}
