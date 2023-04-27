import styled from '@emotion/styled';

export const StringTable = styled.tr`
  &:nth-of-type(even) {
    background-color: rgb(237, 241, 243);
  }
  &:nth-of-type(odd) {
    background-color: #fff;
  }
`;

export const CellTable = styled.td`
  padding: 10px;
  border: 1px solid white;
  color: rgb(155, 157, 160);
`;
