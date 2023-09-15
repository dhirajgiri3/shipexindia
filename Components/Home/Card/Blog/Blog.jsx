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
`;

const BlogCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

const BlogImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 1rem;
`;

const BlogTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const BlogDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
  line-height: 1.5;
  text-align: justify;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;

const BlogCTA = styled.a`
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  color: #fff;
  background-color: #0070f3;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #0058c7;
  }
`;

const Blog = () => {
  const blogs = [
    {
      id: 1,
      image: "https://picsum.photos/400/300",
      title: "Blog Title 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, sapien vel bibendum bibendum, velit sapien bibendum sapien, vel bibendum sapien velit sapien bibendum sapien.",
      cta: "Continue Reading",
      link: "#",
    },
    {
      id: 2,
      image: "https://picsum.photos/400/300",
      title: "Blog Title 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, sapien vel bibendum bibendum, velit sapien bibendum sapien, vel bibendum sapien velit sapien bibendum sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, sapien vel bibendum bibendum, velit sapien bibendum sapien, vel bibendum sapien velit sapien bibendum sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, sapien vel bibendum bibendum, velit sapien bibendum sapien, vel bibendum sapien velit sapien bibendum sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, sapien vel bibendum bibendum, velit sapien bibendum sapien, vel bibendum sapien velit sapien bibendum sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, sapien vel bibendum bibendum, velit sapien bibendum sapien, vel bibendum sapien velit sapien bibendum sapien.",
      cta: "Continue Reading",
      link: "#",
    },
    {
      id: 3,
      image: "https://picsum.photos/400/300",
      title: "Blog Title 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, sapien vel bibendum bibendum, velit sapien bibendum sapien, vel bibendum sapien velit sapien bibendum sapien.",
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
