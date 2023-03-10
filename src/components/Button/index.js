import { LinkStyled, ButtonStyled} from "./styles";

export default function Button({ children, to }) {
  return to
  ? <LinkStyled to={to}>{children}</LinkStyled>
  : <ButtonStyled>{children}</ButtonStyled>
}
