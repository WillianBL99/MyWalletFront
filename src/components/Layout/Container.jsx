import styled from "styled-components";

  /* background-color: ${(props) => props.theme.colors.altTertiary}; */

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 30px;
  height: 100vh;
  width: 100vw;  

  background-color: var(--color-main);
`;

export default Container;