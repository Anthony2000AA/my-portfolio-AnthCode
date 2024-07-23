import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
  } from '@chakra-ui/react'

import { AddIcon } from "@chakra-ui/icons";
import { useState } from 'react'
import Carousel from '../carousel/Carousel'
import styles from './ModalAux.module.css'

interface ModalAuxProps {
    isDarkMode: boolean;
    infoProjectData: any;
    title: string;
}

export default function ModalAux({isDarkMode, infoProjectData, title}: ModalAuxProps) {

    const OverlayOne = () => (
        <ModalOverlay
          bg='blackAlpha.300'
          backdropFilter='blur(10px) hue-rotate(90deg)'
        />
      )
    
      const OverlayTwo = () => (
        <ModalOverlay
          bg='none'
          backdropFilter='auto'
          backdropInvert='80%'
          backdropBlur='2px'
        />
      )
    
      const { isOpen, onOpen, onClose } = useDisclosure()
      const [overlay, setOverlay] = useState(<OverlayOne />)
    
      return (
        <>
          <Button leftIcon={<AddIcon />} className= {styles.buttonAction} title='Ver mas imagenes'
            onClick={() => {
              setOverlay(<OverlayOne />)
              onOpen()
            }}
          >
            Mas detalles 
          </Button>
          
          <Modal isCentered isOpen={isOpen} onClose={onClose} size={'xl'}>
            {overlay}
            <ModalContent>
              <ModalHeader display={'flex'} justifyContent={'center'}>{title}</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <div className="contentModal">
                  <div className="images">
                      <Carousel isDarkMode={isDarkMode} resources={infoProjectData} modal={true}/>
                  </div>
                  
                </div>
              </ModalBody>
              <ModalFooter>
                <Button onClick={onClose}>Close</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )
}
