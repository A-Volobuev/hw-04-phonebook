import styled from '@emotion/styled';

export const List = styled.ul`
	margin: 10px 0px 0px 0px;
	padding: 0px 0px 20px 30px;
	display: flex;
	flex-direction: column;
	gap: 4px;
`;

export const ListItem = styled.li`
	width: 270px;
	padding: 5px 10px;
	border: 1px solid black;
	box-shadow: 0px 0px 1px 0px rgba(0,0,0,0.75);
	border-radius: 8px;
	display: flex;
	justify-content: space-between;
`;

export const DeleteBtn = styled.button`
	box-shadow: 0px 0px 1px 0px rgba(0,0,0,0.75);
	border-radius: 8px;
	border: none;
	background-color: #07575B;
	color: #ffffff;
`;	