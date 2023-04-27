import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: -9px 16px 27px -6px rgba(10, 14, 17, 0.19);
  &:last-child {
    margin-bottom: 0;
  }
`;

export const Status = styled.span`
  width: 10px;
  height: 10px;
  margin-right: 10px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  margin-right: 10px;
  box-shadow: 0px 5px 10px 2px rgba(10, 14, 17, 0.06);
  border-radius: 5px;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 1.25;
  color: #000000;
`;
