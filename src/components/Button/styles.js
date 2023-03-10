import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const LinkStyled = styled(Link)`
  background-color: var(--brand-color_9);
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.textColor};
  cursor: pointer;
  border: 1px solid transparent;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: opacity 0.05s;

  :hover {
    opacity: 0.75;
  }

  [disabled] {
    opacity: 0.3;
    pointer-events: none; /*To avoid multiple clicks*/
  }
`;

// export const ButtonStyled = LinkStyled.withComponent("button");

export const ButtonStyled = styled.button`
  background-color: var(--brand-color_9);
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.textColor};
  cursor: pointer;
  border: 1px solid transparent;

  padding: 0.5rem 1rem;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  border-top-right-radius: 28px;
  border-bottom-right-radius: 28px;
  transition: opacity 0.05s;

  :hover {
    opacity: 0.75;
  }

  [disabled] {
    opacity: 0.3;
    pointer-events: none; /*To avoid multiple clicks*/
  }
`;


// export const LinkStyled = styled.a`
//   background-color: var(--brand-color_3);
//   font-size: 1.5rem;
//   color: var(--theme-body-txt);
//   cursor: pointer;
//   border: 1px solid transparent;
//   padding: 0.5rem 1rem;

//   :hover {
//     background-color: var(--brand-color_9);
//   }

//   [disabled] {
//     opacity: 0.3;
//     pointer-events: none; /*To avoid multiple clicks*/
//   }

// `;
