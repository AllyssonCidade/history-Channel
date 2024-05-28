import PostModelo from '../../Components/PostModelo'
import fotocapa from "../../assets/sobre_mim_capa.png"
import styles from './SobreMim.module.css'
import fotoSobreMim from '../../assets/sobre_mim_foto.jpg'

export default function SobreMim() {
    return (
        <PostModelo
        titulo="Sobre mim"
        fotoCapa={fotocapa}
            >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o [Seu nome]!
            </h3>
            <img src={fotoSobreMim}
                alt="Foto sobr mim"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Bem-vindos, entusiastas da história e buscadores do conhecimento! Sou [Seu Nome],
                apaixonado por explorar os intricados caminhos do passado e trazer à luz as histórias que moldaram nosso mundo.
                Como professor de história e entusiasta da educação, meu objetivo é transformar os estudos históricos
                em uma jornada envolvente e enriquecedora.
            </p>

            <p className={styles.paragrafo}>
                Ao longo dos anos, tenho tido a honra de compartilhar meu amor pela história por meio de uma variedade de plataformas,
                incluindo artigos minuciosamente pesquisados, vídeos instrutivos e transmissões ao vivo cativantes. Meu compromisso
                é tornar a história acessível a todos, desde alunos em busca de sucesso em concursos até curiosos que desejam desvendar
                os mistérios do passado.            </p>

            <p className={styles.paragrafo}>
                vídeos e transmissões ao vivo. Minha missão é descomplicar a histAcredito que a história não é apenas uma sequência de datas
                e eventos, mas sim uma tapeçaria complexa de narrativas humanas, inovações surpreendentes e reviravoltas inesperadas.
                Minhas explanações e resumos não apenas abrangem os fatos, mas também capturam a essência das épocas e das pessoas que
                as habitaram.ória,
            </p>

            <p className={styles.paragrafo}>
                Navegue pelo meu site para encontrar uma rica coleção de recursos que o levarão por viagens no tempo,
                desde as antigas civilizações até os momentos cruciais que forjaram o mundo moderno. Se você está se preparando
                para um concurso ou simplesmente deseja expandir seu conhecimento histórico, estou aqui para fornecer insights valiosos
                e uma perspectiva apaixonada.
            </p>
            <p className={styles.paragrafo}>
                Junte-se a mim nessa busca pela compreensão do passado e pelo aprendizado contínuo.
                Vamos desvendar os segredos que moldaram nossa sociedade e ganhar uma apreciação mais profunda pela riqueza da história humana.
                Obrigado por embarcar nessa jornada histórica emocionante!
            </p >

        </PostModelo >

    )
}