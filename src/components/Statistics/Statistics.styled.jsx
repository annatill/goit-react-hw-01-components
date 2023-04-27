import styled from '@emotion/styled';

export const StatisticsSection = styled.section`
  width: 300px;
  margin: 0 auto;
  padding-top: 20px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: -9px -8px 16px -6px rgba(10, 14, 17, 0.19);
  margin-bottom: 40px;
`;

export const Title = styled.h2`
  margin: 0 0 20px;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 50px;
  padding: 10px;
  background-color: #f3f3f3;
`;

export const Label = styled.span`
  margin-bottom: 10px;
  font-size: 14px;
  color: white;
`;

export const Percentage = styled.span`
  font-size: 20px;
  font-weight: 500;
  color: white;
`;
