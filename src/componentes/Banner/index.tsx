import './Banner.css'

interface BannerProps {
    endereçoImagem: string
    textAlternativo?: string
}

export const Banner = ({ endereçoImagem, textAlternativo }: BannerProps) => {
    // JSX
    return (
        <header className="banner">
            {/*<img src="/imagens/banner.png" alt="O banner principal da página do Organo" />*/}
            <img src={endereçoImagem} alt={textAlternativo} />
        </header>
    )
}