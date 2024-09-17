import s from './Loader.module.css'
import icon from  './assets/loading.svg'

export const Loader = () => <div className={s.loader}> <img src={icon} alt={"Loading ..."} /> </div>
