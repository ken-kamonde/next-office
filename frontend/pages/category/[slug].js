import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Text, Button } from '@chakra-ui/react';


const Banner = ({ purpose, title1, title2, desc1, desc2, buttonText, linkName, imageUrl})  => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl} width={500} height={300} alt="banner" />
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
      <Text fontSize="3xl" fontWeight="bold">{title1} <br />{title2}</Text>
      <Text color="gray.700" fontSize="lg" paddingTop="3" paddingBottom="3" fontWeight="medium">{desc1} <br /> {desc2}</Text>
      <Button fontSize="xl">
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
)

export default function Home({ posts }) {
  return (
    <Box>  

      <Flex flexWrap="wrap">
        {/* Fetch the properties and map over them... */}

        {posts.map((post) => (
          <Link href={`product/${encodeURIComponent(post.slug)}`} passHref key={post.id}>
              <Flex flexWrap="wrap" w="420px" p="5" paddingTop="0" justifyContent="flex-start" cursor="pointer">
                  <Box>
                      <Image src={ post.product_image[0].image} 
                        width={400} 
                        height={260} 
                        alt="house"  
                      />
                  </Box>

                  <Box w="full">
                      <Flex paddingTop="2" alignItems="center" justifyContent="space-between">
                          <Flex alignItems="center">
                              {/* <Box paddingRight="3" color="green.400"> {isVerified && <GoVerified />} </Box> */}
                              <Text fontWeight="bold" fontSize="lg"> {post.title} </Text>
                              
                          </Flex>
                          <Box>
                              {/* <Avatar size="sm" src={agency?.logo?.url} /> */}
                          </Box>
                      </Flex>
                      <Flex alignItems="center" p="1" justifyContent="space-between" w="250px" color="blue.400">
                        <Text fontWeight="bold" fontSize="lg">USD {post.regular_price} </Text>
                          {/* {room} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill /> */}
                      </Flex>
                      <Text fontSize="lg">
                          {/* {title.length > 30 ? title.substring(0, 30) + '...' : title} */}
                      </Text>
                  </Box>
              </Flex>
          </Link>
        ))}
      </Flex>

    </Box>
  )
}


export async function getServerSideProps({ params }) {
  const res = await fetch(`http://127.0.0.1:8000/api/category/${params.slug}`);
  const posts = await res.json();

  const ress = await fetch("http://127.0.0.1:8000/api/category/");
  const categories = await ress.json();

  return {
    props: {
      posts,
      categories,
    },
  };
}
