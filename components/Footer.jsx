import React from 'react'
import styles from '../styles/Footer.module.css'
import {BsFacebook,BsPinterest} from 'react-icons/bs'
import {AiFillYoutube,AiOutlineTwitter,AiFillInstagram} from 'react-icons/ai'
import {FaMapMarkerAlt,FaPhoneVolume} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container1}>
        <h1 className={styles.title}>ĐĂNG KÍ ĐỂ NHẬN TƯ VẤN</h1>
        <div className={styles.textNote}>Bạn chưa chọn được mẫu đồng hồ ưng ý hoặc muốn tư vấn,hãy để lại số điện thoại hoặc email của bạn tại đây.</div>
        <form action="/send-data-here" method="post">
          <div className={styles.email}>
            <label>email:</label>
            <input type="text" id="first" name="first" />
            <button type="submit">Submit</button>
          </div>
          <div className={styles.phone}>
            <label>phone:</label>
            <input type="text" id="last" name="last" />
            <button type="submit">Submit</button>
          </div>
        </form>
        <div className={styles.iconContact}>
          <h1 className={styles.title}>KẾT NỐI MẠNG XÃ HỘI</h1>
          <BsFacebook className={styles.icon} size="40px"/>
          <BsPinterest className={styles.icon} size="40px"/>
          <AiFillYoutube className={styles.icon} size="40px"/>
          <AiOutlineTwitter className={styles.icon}  size="40px"/>
          <AiFillInstagram className={styles.icon}  size="40px"/>
        </div>
      </div>
      <div className={styles.container2}>
        <h1 className={styles.title}>CỬA HÀNG</h1>
        <h2 className={styles.nameCompany}>CÔNG TY CỔ PHẦN TRỰC TUYẾN ĐÔNG HỒ THÀNH NAM</h2>
        <div className={styles.buttonContact}>
          <FaMapMarkerAlt className={styles.icon2} size="30px"/>
          <a>VPGD: lệ chi, Gia Lâm, Hà Nội</a>
        </div>
        <div className={styles.buttonContact}>
          <FaPhoneVolume className={styles.icon2} size="30px"/>
          <a href='tel:0847807xxx'>084780XXX</a>
        </div>
        <div className={styles.buttonContact}>
          <MdEmail className={styles.icon2} size="30px"/>
          <a href='mailto:namnguyen3152001xtnd@gmail.com'>namnguyen3152001xtnd@gmail.com</a>
        </div>
      </div>
      <div className={styles.container3}>
        <h1 className={styles.title}>HỖ TRỢ</h1>
        <div className={styles.textSupport}>
        <li type= '1'><a href='#'>Chính sách bảo hành</a></li>
        <li type= '1'><a href='#'>Chính sách đổi hàng</a></li>
        <li type= '1'><a href='#'>Chính sách bảo mật</a></li>
        <li type= '1'><a href='#'>Chính sách vận chuyển</a></li>
        <li type= '1'><a href='#'>Hướng dẫn thanh toán</a></li>
        <li type= '1'><a href='#'>Hướng dẫn mua hàng</a></li>
        </div>
      </div>
      <div className={styles.container4}>
        <h1 className={styles.title}>THÔNG TIN THÊM</h1>
         <li style={{listStyle:"none"}}><a href='#'>Nhận Order Đồng Hồ</a></li>
         <li style={{listStyle:"none"}}><a href='#'>Tin Tức Đồng Hồ</a></li>
         <li style={{listStyle:"none"}}><a href='#'>Câu Hỏi Thường Gặp</a></li>
         <li style={{listStyle:"none"}}><a href='#'>Liên Hệ Phản Ánh</a></li>
         <li style={{listStyle:"none"}}><a href='#'>Chứng Nhận Đại Lý</a></li>
      </div>
    </div>
  )
}

export default Footer