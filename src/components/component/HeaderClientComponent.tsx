import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
import '../../styles/Header.css'
import '../../Js/SlideShow.js'
const HeaderClientComponent = () => {
    return (
        <div>
            <header>
                <div className='header_matpet'>
                    <div className='header_matpet-menu hung'>
                        <ul className='matpet-menu'>
                            <li>
                                <Link to='' className='header_matpet-img'>
                                    <img
                                        src='https://matpetfamily.com/wp-content/uploads/2019/11/m%E1%BA%ADt-pet-logo-300x297.png'
                                        alt=''
                                    />
                                </Link>
                            </li>
                            <li className='matpet-menu--list'>
                                <Link className='matpet-menu--link matpet-menu--text' to=''>
                                    Trang chủ
                                </Link>
                            </li>
                            <li className='matpet-menu--list'>
                                <Link className='matpet-menu--link matpet-menu--hover' to=''>
                                    Phụ kiện
                                    {/* <Icon icon="mingcute:down-line" /> */}
                                </Link>
                                <ul>
                                    <li>
                                        <Link to=''>Chó A</Link>
                                    </li>
                                    <li>
                                        <Link to=''>Chó A</Link>
                                    </li>
                                    <li>
                                        <Link to=''>Chó A</Link>
                                    </li>
                                    <li>
                                        <Link to=''>Chó A</Link>
                                    </li>
                                    <li>
                                        <Link to=''>Chó A</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className='matpet-menu--list'>
                                <Link className='matpet-menu--link matpet-menu--hover' to=''>
                                    Đồ ăn
                                </Link>
                            </li>
                            <li className='matpet-menu--list'>
                                <Link className='matpet-menu--link matpet-menu--hover' to=''>
                                    Giới thiệu
                                </Link>
                            </li>
                            <li className='matpet-menu--list'>
                                <Link className='matpet-menu--link matpet-menu--hover' to=''>
                                    Liên hệ
                                </Link>
                            </li>
                            <li className='matpet-menu--list'>
                                <Link to='' className='matpet_btn'>
                                    Giỏ hàng
                                </Link>
                            </li>

                            <li className='matpet-menu--list'>
                                <Link className='matpet-menu--link matpet-menu--hover' to=''>
                                    <Icon icon='gg:profile' className='profile--width' />
                                </Link>
                                <ul className='profile--width-drop'>
                                    <li>
                                        <Link to=''>Đăng kí</Link>
                                    </li>
                                    <li>
                                        <Link to=''>Đăng nhập</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <div className='matpet_slideShow '>
                            <div className='matpet--goc'>
                                <img
                                    src='https://i.pinimg.com/564x/f9/64/22/f96422b03f440306bce44a1920998b4a.jpg'
                                    alt=''
                                    className='imgfluid'
                                />
                            </div>
                            <div className='matpet_slideShow--img'>
                                <div className='mySlides fade'>
                                    <img
                                        className='imgfluid'
                                        src='https://i.pinimg.com/564x/30/b2/a9/30b2a95f62483fb102ff509fc570c08d.jpg'
                                        alt='Slide 1'
                                    />
                                </div>

                                <div className='mySlides fade'>
                                    <img
                                        className='imgfluid'
                                        src='https://i.pinimg.com/564x/ba/37/7b/ba377b65fcd55c92760beba40710520b.jpg'
                                        alt='Slide 2'
                                    />
                                </div>

                                <div className='mySlides fade'>
                                    <img
                                        className='imgfluid'
                                        src='https://i.pinimg.com/564x/6d/7f/2a/6d7f2a2f0b03cc80e8ff305ae11f5008.jpg'
                                        alt='Slide 3'
                                    />
                                </div>

                                <div className='mySlides fade'>
                                    <img
                                        className='imgfluid'
                                        src='https://i.pinimg.com/564x/ff/75/57/ff7557321d42ee22c61564d2a22dff80.jpg'
                                        alt='Slide 4'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default HeaderClientComponent
