import styled from '@emotion/styled';

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 26px;
  border: 1px solid gray;
  border-radius: 5px;
  background: rgb(252, 244, 5);
  box-shadow: 1px 1px 5px gray;
  padding: 10px 20px;
  margin-bottom: 15px;
`;

export const ContactData = styled.p`
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ButtonDelete = styled.button`
  border-radius: 4px;
  height: 35px;
  padding: 0 5px;
  background: rgb(5, 252, 244);
  color: white;
  text-shadow: 5px 5px 10px black;
  font-size: 18px;

  :hover,
  :focus {
    cursor: pointer;
    background: #f5070b;
  }
`;
