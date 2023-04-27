import styled from '@emotion/styled';

export const Profile = styled.div`
  border: 1px solid #000;
  border-radius: 4px;
  background-color: #fff;
  padding: 0px;
  width: 300px;
  text-align: center;
  padding-top: 20px;
  margin-bottom: 40px;
`;

export const Avatar = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  border-radius: 100%;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  margin-bottom: 40px;
`;

export const Name = styled.p`
  font-weight: 700;
  margin: 0;
  margin-bottom: 10px;
  font-size: 25px;
`;

export const Tag = styled.p`
  margin: 0;
  margin-bottom: 10px;
  color: grey;
`;

export const Location = styled.p`
  margin: 0;
  margin-bottom: 10px;
  color: grey;
  font-weight: 500;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: rgb(244, 246, 249);
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 80px;
  border-top: 1px solid rgb(232, 236, 241);
  border-right: 1px solid rgb(232, 236, 241);
  padding: 10px;
`;

export const Label = styled.span`
  font-size: 14px;
  color: grey;
  margin-bottom: 10px;
  font-weight: 500;
`;

export const Quantity = styled.span`
  font-size: 18px;
  font-weight: 700;
`;
