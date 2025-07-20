import styled from 'styled-components'
import { TodoLogo } from '@assets/StaticAssets'

export const Header = () => {
    return (
        <Head>
            <img src={TodoLogo} width={80} alt="just todo it app logo" />
        </Head>
    )
}

const Head = styled.header`
    text-align: center;
    background-color: var(--todo-darker);
    padding-top: 1rem;
    padding-bottom: 0.6rem;
    color: var(--todo-primary);
    margin-bottom: 3rem;
`
