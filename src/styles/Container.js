import styled from "styled-components";

const Container = styled.div`
  padding-left: 230px;

	@media screen and (max-width: 760px) {
		padding-left: 200px;
	}

	@media screen and (max-width: 638px) {
		padding-left: 180px;
	}

	@media screen and (max-width: 600px) {
		padding-left: 0;
	}
`;

export default Container;
