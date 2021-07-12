import BlogPost from "components/BlogLanding/BlogList"
import { Button } from "components/Button"
import usePosts from "hooks/blogs"
import React from "react"
import styled from "styled-components"


const BlogPage = styled.div`
`

const RecentPostsWrapper = styled.div`
    margin-bottom: 40px;
`

const RecentPostDiv = styled.div`
    padding:40px;
    width: 100%;
    margin: 0 auto;
    display: inline-block;
`


const RecentImageDiv = styled.div`
    width: 50%;
    height: 300px;
    float: left;
    > .img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        box-shadow: 0px 0px 8px 0px #ada8a8;
    }
`

const RecentPostText = styled.div`
    padding: 20px;
    float: right;
    width: 40%;
    > .PostTitle-Blog {
        font-size: 18px;
        font-weight: bold;
        font-style: italic;
        margin-bottom: 5px;
      }
    > .PostAuthor-Blog{
        font-size: 12px;
        font-weight: bold;
        margin: 20px 0;
    }
    > .PostDescription-Blog {
        margin: 10px 0;
        font-size: 14px;
    }
    > .PostReadButton-Blog {
        margin: 25px 0;
        > .ButtonDiv {
            padding: 10px 40px;
            > .ButtonText {
                font-size: 18px;
            }
        }
    }
`

const Blogs: React.FC = () => {
    const posts = usePosts();
    posts.posts.sort((a,b) => {
        return new Date(b.date).valueOf() - new Date(a.date).valueOf();
    });
    const recent = posts.posts.length > 2 ? posts.posts.slice(0,2) : posts.posts
    const rest = posts.posts.length > 2 ? posts.posts.slice(2,) : []
    return (
        <BlogPage>
            <RecentPostsWrapper>
                {
                    recent.map((post) => (
                        <RecentPostDiv>
                            <RecentImageDiv>
                                <img className="img" src={post.image} />
                            </RecentImageDiv>
                            <RecentPostText>
                                <div className="PostTitle-Blog">{post.title}</div>
                                <div className="PostAuthor-Blog">Written by: {post.author}</div>
                                <div className="PostDescription-Blog">{post.summary}</div>
                                <div className="PostReadButton-Blog"><Button
                                    backgroundColor="yellow"
                                    textColor="black"
                                    text="READ"
                                    onClick={(): Window | null => window.open('blog', '_self')}
                                /></div>
                            </RecentPostText>
                        </RecentPostDiv>
                    ))}
            </RecentPostsWrapper>

            <div className="Block-BlogPosts">
                <div className="PostsBlock-Blog">
                    {
                        rest.map(d => (
                            <BlogPost postId={d.id} />
                        ))
                    }
                </div>
            </div>
        </BlogPage>
    )
}

export default Blogs