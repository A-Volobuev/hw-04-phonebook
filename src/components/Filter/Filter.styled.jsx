import styled from '@emotion/styled';

export const FilterLabel = styled.label`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-size:16px;
	font-weight: 600;
`;

export const FilterInput = styled.input`
	margin-top: 4px;
	width: 200px;
	padding: 5px;
	border: 1px solid #003B46;
	border-radius: 5px;
	box-shadow: 0px 0px 1px 0px rgba(0,0,0,0.75);

	&:hover{
		border: 1px solid #07575B;
	}
	&:focus{
		border: 1.5px solid #07575B;
	}
`;