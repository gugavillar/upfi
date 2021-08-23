import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent bg="pGray.800" maxHeight="600px" maxWidth="900px">
        <ModalBody p="0">
          <Image src={imgUrl} alt={imgUrl} />
        </ModalBody>
        <ModalFooter
          h="32px"
          bg="pGray.800"
          borderBottomEndRadius={6}
          borderBottomStartRadius={6}
          justifyContent="left"
        >
          <Link align="left" href={imgUrl} isExternal>
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
