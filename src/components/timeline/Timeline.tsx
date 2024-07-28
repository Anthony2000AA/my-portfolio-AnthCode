import {Box, chakra, Container, Text, HStack,
        VStack, Flex, useColorModeValue, useBreakpointValue
  } from '@chakra-ui/react';
import ModalAux from '../modal/ModalAux';
import { infoProjectsTornella } from '../../utils/Resourse';


  const milestones = [
    {
      id: 1,
      date: 'Marzo - Febrero, 2024',
      title: 'Pasteleria Tornella',
      description: `Realize una aplicacion fullstack para la gestion del stock de productos, promociones, y demas servicios de la pasteleria. Tuvo una vista de clientes y otra vista para el administrador de estos productos y servicios en mencion. Me encargue desde la parte de UX/UI hasta el desarrollo del front-end, back-end y el despliegue.`
    },
    
  ];

  interface propsTimeline{
    isDarkMode: boolean;
  }
  


export default function Timeline({isDarkMode}:propsTimeline  ) {

    const isMobile = useBreakpointValue({ base: true, md: false });
    const isDesktop = useBreakpointValue({ base: false, md: true });

    
  return (
    <Container maxWidth="7xl" p={{ base: 2, sm: 10 }}>

      {milestones.map((milestone) => (
        <Flex key={milestone.id} mb="10px">
          {/* Desktop view(left card) */}
          {isDesktop && milestone.id % 2 === 0 && (
            <>
              <EmptyCard />
              <LineWithDot />
              <Card {...milestone} isDarkMode={isDarkMode}/>
            </>
          )}

          {/* Mobile view */}
          {isMobile && (
            <>
              <LineWithDot />
              <Card {...milestone} isDarkMode={isDarkMode}/>
            </>
          )}

          {/* Desktop view(right card) */}
          {isDesktop && milestone.id % 2 !== 0 && (
            <>
              <Card {...milestone} isDarkMode={isDarkMode} />

              <LineWithDot />
              <EmptyCard />
            </>
          )}
        </Flex>
      ))}
    </Container>
  );

}


interface CardProps {
    id: number;
    title: string;
    description: string;
    date: string;
    isDarkMode: boolean;
  }

  const nameProjectTornella="Tornella-Pasteleria";
  const moreInfoTornella="La aplicacion fue hecha con Angular v.17, Spring Boot, MySQL y Firebase. Cuenta con diversas secciones que son los servicios que da la pasteleria. El cliente puede ver todos los productos y promociones, y el manejo y visibilidad de las mismas son controladas por el administrador. Es totalmente responsive.";

  const Card = ({ id, title, description, date, isDarkMode }: CardProps) => {
    // For even id show card on left side
    // For odd id show card on right side
    const isEvenId = id % 2 == 0;
    let borderWidthValue = isEvenId ? '15px 15px 15px 0' : '15px 0 15px 15px';
    let leftValue = isEvenId ? '-15px' : 'unset';
    let rightValue = isEvenId ? 'unset' : '-15px';
  
    const isMobile = useBreakpointValue({ base: true, md: false });
    if (isMobile) {
      leftValue = '-15px';
      rightValue = 'unset';
      borderWidthValue = '15px 15px 15px 0';
    }
  
    return (
      <HStack
        flex={1}
        p={{ base: 3, sm: 6 }}
        bg= {isDarkMode ? useColorModeValue('transparent', 'transparent'): useColorModeValue('white', 'white')}
        spacing={5}
        rounded="lg"
        alignItems="center"
        pos="relative"
        _before={{
          content: `""`,
          w: '0',
          h: '0',
          borderColor: `transparent ${useColorModeValue('#edf2f6', '#1a202c')} transparent`,
          borderStyle: 'solid',
          borderWidth: borderWidthValue,
          position: 'absolute',
          left: leftValue,
          right: rightValue,
          display: 'block'
        }}
      >
        <Box >
          <Text fontSize="lg" color={isEvenId ? 'teal.400' : 'blue.400'}>
            {date}
          </Text>
  
          <VStack spacing={2} mb={3} textAlign="left">
            <chakra.h1 fontSize="2xl" lineHeight={1.2} fontWeight="bold" w="100%">
              {title}
            </chakra.h1>
            <Text fontSize="md">{description}</Text>
          </VStack>
          <VStack>
            <ModalAux isDarkMode={isDarkMode} infoProjectData={infoProjectsTornella} title={"Screens de la Aplicacion Web"} moreInfo={moreInfoTornella} nameProject={nameProjectTornella}/>
          </VStack>
        </Box>
      </HStack>
    );
  };
  
  const LineWithDot = () => {
    return (
      <Flex
        pos="relative"
        alignItems="center"
        mr={{ base: '40px', md: '40px' }}
        ml={{ base: '0', md: '40px' }}
      >
        <chakra.span
          position="absolute"
          left="50%"
          height="calc(100% + 10px)"
          border="1px solid"
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          top="0px"
        ></chakra.span>
        <Box pos="relative" p="10px">
          <Box
            pos="absolute"
            top="0"
            left="0"
            bottom="0"
            right="0"
            width="100%"
            height="100%"
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            backgroundPosition="center center"
            bg={useColorModeValue('gray.600', 'gray.200')}
            borderRadius="100px"
            backgroundImage="none"
            opacity={1}
          ></Box>
        </Box>
      </Flex>
    );
  };
  
  const EmptyCard = () => {
    return <Box flex={{ base: 0, md: 1 }} p={{ base: 0, md: 6 }} bg="transparent"></Box>;
  };