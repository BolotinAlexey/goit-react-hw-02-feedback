import styled from 'styled-components';

export const Item = styled.li`
  background-color: ${() => {
    let clr = 0xffffff;
    while (clr > 0x999999) {
      clr = Math.floor(Math.random() * 0xffffff);
    }
    return `#${clr.toString(16)}`;
  }};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2em;
  padding: 0.2em;

  width: ${({ length }) => `${100 / length}%`};
`;

/* width: ${100 / stats.length}%; */
