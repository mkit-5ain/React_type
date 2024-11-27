import styled from "styled-components";

const PhraseLayout = styled.div`
  position: sticky;
`;

const StickyPhrase = () => {
  return (
    <PhraseLayout>
      <p>MXXEMENT</p>
    </PhraseLayout>
  );
};

export default StickyPhrase;
