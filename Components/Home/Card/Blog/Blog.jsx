import styled from "styled-components";
import { motion } from "framer-motion";

const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem 10rem;
`;

const BlogWrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin: 5rem 0;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const BlogCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: #191919;
  border-radius: 40px;
  padding: 2rem;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  color: var(--white-bg);
  gap: 1rem;
  font-family: var(--font);

  &:hover {
    transform: translateY(-5px);
  }
`;

const BlogImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 20px;
`;

const BlogTitle = styled.h3`
  font-size: var(--heading-small);
  font-weight: 700;
  font-family: var(--bold);
  color: var(--white);
`;

const BlogDescription = styled.p`
  line-height: 1.5;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  font-size: var(--para-mini);
  font-weight: 400;
  font-family: var(--font);
  color: var(--text-para);
  letter-spacing: 0.5px;
  line-height: 1.8;
`;

const BlogCTA = styled.a`
  font-family: var(--font);
  font-size: 0.8rem;
  color: var(--white);
  padding: 10px 20px;
  border-radius: 100px;
  border: 2px solid var(--white);
  background: transparent;
  box-shadow: 5px 5px var(--white);
  cursor: pointer;
  -webkit-border-radius: 100px;
  -moz-border-radius: 100px;
  -ms-border-radius: 100px;
  -o-border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  &:active {
    box-shadow: none;
    transform: translate(5px, 5px);
    -webkit-transform: translate(5px, 5px);
    -moz-transform: translate(5px, 5px);
    -ms-transform: translate(5px, 5px);
    -o-transform: translate(5px, 5px);
  }
`;

const Blog = () => {
  const blogs = [
    {
      id: 1,
      image: "https://picsum.photos/400/300",
      title: "On-Time Delivery: The Vital Metric For...",
      description:
        "Introduction In the fast-paced world of eCommerce, on-time delivery plays a crucial role in customer",
      cta: "Continue Reading",
      link: "#",
    },
    {
      id: 2,
      image: "https://picsum.photos/400/300",
      title: " Accelerating Growth",
      description:
        "In the contemporary, hyper-competitive business environment, swift and efficient shipping serves as a linchpin for the triumph and enlargement of any enterprise. With the ascendancy of e-commerce and ever-increasing customer expectations, expedited shipping has assumed a pivotal role in fortifying customer satisfaction, ",
      cta: "Continue Reading",
      link: "#",
    },
    {
      id: 3,
      image: "https://picsum.photos/400/300",
      title: "Decoding RTO (Return to Origin) ",
      description:
        "In the realm of online business, the return of products, known as Return to Origin (RTO), has become a prevalent challenge. When a product fails to reach its intended destination and finds its way back to the online store, it triggers a series of complications that can affect revenue and profitability.",
      cta: "Continue Reading",
      link: "#",
    },
  ];

  return (
    <BlogContainer>
      <h2>For You</h2>
      <BlogWrapper
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {blogs.map((blog) => (
          <BlogCard key={blog.id}>
            <BlogImage src={blog.image} alt={blog.title} />
            <BlogTitle>{blog.title}</BlogTitle>
            <BlogDescription>{blog.description}</BlogDescription>
            <BlogCTA href={blog.link}>{blog.cta}</BlogCTA>
          </BlogCard>
        ))}
      </BlogWrapper>
    </BlogContainer>
  );
};

export default Blog;
