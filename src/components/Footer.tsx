import { GitHubLogo } from '@/assets/StaticAssets'
import styled from 'styled-components'

const GITHUB_LINK = 'https://github.com/RiccardoImperiale/just-todo-it'

export const Footer = () => {
    return (
        <FooterStyled>
            <a href={GITHUB_LINK} target="_blank">
                <img width={40} src={GitHubLogo} alt="github logo - link to project repository" />
            </a>
        </FooterStyled>
    )
}

const FooterStyled = styled.footer`
    text-align: center;
    padding: 2rem 0;
    margin-top: 5rem;
`
