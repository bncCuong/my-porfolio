import github from '../assets/github-mark-white.png'
import facebook from '../assets/facebook.png'
import gmail from '../assets/gmail.png'
const SocicalMediaIcon = () => {
  return (
    <div className='flex justify-center md:justify-start my-10 gap-7 '>
        <a 
            className='hover:opacity-50 transition duration-500'
            href="https://github.com/bncCuong"
            target='_blank'
            rel="noreferren"
        >
            <img alt='github' src={github} width='32' />
        </a>
        <a 
            className='hover:opacity-50 transition duration-500'
            href="https://www.facebook.com/cuong.buingoc.71"
            target='_blank'
            rel="noreferren"
        >
            <img alt='facebook' src={facebook} />
        </a>
        <a 
            className='hover:opacity-50 transition duration-500 bg-white rounded-full'
            href="https://gmail.com"
            target='_blank'
            rel="noreferren"
        >
            <img alt='gmail' src={gmail} width='30'/>
        </a>
  
    </div>
  )
}

export default SocicalMediaIcon