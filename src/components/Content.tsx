import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import { styled } from "styled-components";

type ContentProps = {
  data: string;
};

const Content: React.FC<ContentProps> = ({ data }) => {
  return (
    <StyledContent>
      <ReactMarkdown
        children={data}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                {...props}
                children={String(children).replace(/\n$/, "")}
                style={tomorrow}
                language={match[1]}
                PreTag="div"
              />
            ) : (
              <code {...props} className={className}>
                {children}
              </code>
            );
          },
        }}
        remarkPlugins={[remarkGfm]}
      />
    </StyledContent>
  );
};

const StyledContent = styled.div`
  width: 100%;

  & img {
    width: 100%;
  }
`;

export default Content;
