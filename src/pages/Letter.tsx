import LetterCard from '../component/letterCard/letter-card'
import classes from './Letter.module.scss'
export default function LetterSingUp(){
    return(
        <>
        <main className={classes.bgColor}>
            <LetterCard/>
        </main>
        </>
    )
}