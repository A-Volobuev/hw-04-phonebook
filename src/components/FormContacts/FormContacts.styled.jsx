import styled from '@emotion/styled';

export const FormTitle = styled.h2`
	margin: 0px;
`;
export const FormField = styled.form`
	display: flex;
	flex-direction: column;
	width: 300px;
	align-items: center;
`;
export const FormItem = styled.label`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top:10px;
	gap:10px;
	font-size:16px;
	font-weight: 600;
`;
export const FormInput = styled.input`
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
export const FormBtn = styled.button`
	width: 100px;
	padding: 5px;
	margin-top: 10px;
	box-shadow: 0px 0px 1px 0px rgba(0,0,0,0.75);
	border-radius: 8px;
	border: none;
	background-color: #07575B;
	color: #ffffff;
`;