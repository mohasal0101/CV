import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      

      <div className='container'>
        <div className='align'>
          <header className="cv-header">
        <p>Powered By</p><img style={{width:'10%', marginBottom: '100px'}}src={logo} className="App-logo" alt="logo" />
      </header>
        <img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png' alt='profile' className='profile-img' />
        <h1 className='name-header'> Salah Al-Hamawi</h1>
        <p className='job-title'>Job Title</p>
        </div>

        <div
        style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}
      >
        <div style={{flex: 1, height: '1px', backgroundColor: 'black'}} />

        <div>
          <p style={{width: '50px', textAlign: 'center'}}>Welcome</p>
        </div>

        <div style={{flex: 1, height: '1px', backgroundColor: 'black'}} />
      </div>


      <div className='cv-left'>
        
          <h3 className='cv-left-item-header'>ABOUT ME</h3>
          <p>I'm an LTUC student graduate in ASAC pursuing Master's in Software 
            Enigneer and developing myself continuously in developing websites🎓 . 
            I'm a passionate learner who's always willing to learn and work across 
            technologies and domains 💡. I love to explore new developments and leverage
           them to solve real-life problems ✨. Apart from that I also love to guide and
            mentor newbies👨🏻‍💻. I'm deep into Web 🕸️ Development.</p>
          <br/> <h3 className='cv-left-item-header'>CONTACT</h3>
          <p className='img-text'><img src='https://www.svgrepo.com/show/32524/telephone-auricular-hand-drawn-outline.svg' alt='phone' className='img-phone' />+970 597 000 000</p>

          <p className='img-text'><img src='https://t3.ftcdn.net/jpg/05/11/35/32/360_F_511353245_j5F7qWnhZu6VNNGQFbYNhsjWCwxs1WQ4.jpg' alt='location' className='location-img' />Amman - Jordan</p>
          <p className='img-text'><img src='https://static.vecteezy.com/system/resources/thumbnails/006/827/459/small/email-icon-sign-symbol-logo-vector.jpg' alt='location' className='email-img' />mohasal0101@gmail.com</p>
          <p className='img-text'><img src='https://cdn-icons-png.flaticon.com/512/20/20837.png' alt='location' className='facebook-img'  />Salah Al-Hamawi</p>
          <p className='img-text'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEX///8AAACmpqb5+fkgICDl5eXb29tfX19ubm58fHzz8/McHBzq6urNzc38/Pzw8PAPDw/X19c0NDSysrJPT0+srKx2dnYqKirf398VFRU9PT2IiIhGRkbFxcW6urpXV1eZmZllZWUxMTGSkpKWlpaBgYGfn59BQUGXtn/iAAAE9klEQVR4nO2dB3riQAxGYxxTXMCmmWYIEML9b7hxSNlQLGlgZyzv/w7gb16YqhkpT08AAAAAAACAOuDHwaw9Cwau2/Fv8JOXzjD1SqLFtjVz3Z5HE7wMvd9sRr7rRj2QYPnsXbKYNMZxcs2vZJW4btpDiDs3/Er2DfgZk7xC0PPGgesG3kuRVgq+j8bYdRPvI5kTgu+DUfXy2Cb9yo6qeCz2xxxDb++6nea8sAQ9T+2iMaNmmS9WrltqSpcp6HkT1001I2MLekedk82Bb+itXTfWhDASGG5dt9aEQiDopRrPi1OJoTdy3Vw5/k5k2HPdXjmBSFDjkihYK0ryvusGi1nLDOf6DlEjmaGn7yTcEhrqWy6a/xsKx2GqbxwmMsNc3967+ethWB1FPGfqur0G8M+/JRrPwLKpJnPdXAMGdKj0h42+TduTrJtq7KSi9WIXum6sGVWXTr95c91UQ9g/4k7fcv8JN9qmMtL2QXh+eX8dhRGMb1j9dKH6em1CC87brht5H6RirlyQvOYe6jvbX5CtKgS7+g6+VwiXN4egwkj3dbLtNb9oqXoSPSPrnd9EDfeN6KB/EYymw69JJzoeCqV7bYI4S4qiSNpN6p0AAAAAAACA/w4/HIS+2vB6FXGy3k87q2EepdFzvjuOO4dWkTXkgNpvj3qL69G+aDWdJNpPqtkrlQ6Rd0f3BFPiDpPuzRvgYsP7wJXR5a83hN5nwK8zMf4l2Q9O5jeHP/PtWHoxqMKJ4C1I2jMMvLMNn+81jM4M/dGC7/fBwaizOjNMeNlIv8hbBuuII8NBT+5XspAnJ7kxLG7l5NK8SN+8ODF8M9Ur2QpnVQeGfVkOxAXCjFb7hj5vCaxgJ3rJa91wYDCHniP6FW0bDqruYtmMBVtyy4b3d9ET3doabs2ELuHnJds1lKY/VMB+o2XVMOMmHTPYcZdFm4b9Bw3CE9x3aBYN/Qf20RLmo2x7hvnMfDN6FWbWrj3DVHocJClqZvh4xqxjhmZDXiUL1Yas6VS1ISupVbUhK39At+Gx8YacvF3lhoxuqtyw03jDiJ5NlRsyjonaDZeNN6TTPrUbPpNHfaeG8/H0rUhK1pNlh5didg65+3ZnOO+uf//9++2lgWSrrob567XQfPgmSb3+gDxfODLc3xo+wVb4pXEtDStTxbiFHD8hCx+5MCRq2gprylAXUQ4Mx9QEL/sgFVS0b5jTW0lRuQ5q32bfkBE+CiSR1de6GbKiR5KL/kPNDBl99J2B4AqHCn3bNmTWntjzv7ipl2HOvBNjFag+QUWjLBtyr277/Ov+nLjTt2zIfl/4yv5kRHQLu4bkJvIbQe1YYu6ya0itXT/E/EMGsW2za8h/WejzHxYRUWGrhpKiffznmcTG1KohtXSZfZXoGFYN6dDfD/waXcTW26qhpB7aTKUh72nBiZi9Na2ToaQsIb9qJVF8xaahqMKrz44s1siQu+0+ceR+lhjdNg1XomwJ9pJPxIRtGjKuM/+C/cyvRoayfx+xVWgoeLr8JAi4wdCioazSMgzraCirnwlDGMIQhjCEIQxhCEMYwhCGMIQhDGEIQxjCEIYwhCEMYQhDGMIQhjCEIQxhCEMYwhCGMIQhDGEIQxjCEIYwhCEMYQhDGMIQhjCEIQxh6NwwtZ1Dun2QYb/N5HYlnwH3E7L/CBdzP6v9f80CAAAAAACgkT8cAX1Rk70hTQAAAABJRU5ErkJggg==' alt='location' className='linkedin-img' />Salah M. Al-Hamawi</p>


          <h3 className='cv-left-item-header'>EDUCATION</h3>

          <div className='cv-left-item'>
            <h4 className='cv-left-item-text'>International Diploma   <span className='course-details-cv'>Course details</span></h4> 
            <p className='cv-left-item-text'>2020 - 2022</p>
            <h5 className='cv-left-item-text'>Luminus Technical University College</h5>
            <p className='cv-left-item-text'>Major: Software Enigneer</p>
            <p className='cv-left-item-text'>GPA: 3.5</p>
            <p className='cv-left-item-text'>Graduation: September 2022</p>
            </div>

          </div>

            <div className='cv-mid'>

            <h3 className='cv-mid-header'>CAREER</h3>
              <p className='cv-mid-item'>2020-2022 <span className='course-details-cv'>Job Title <p style={{marginLeft: '16%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et justo neque. Nunc sit amet vestibulum elit. Nullam magna tellus, porttitor et consequat et, aliquam sit amet velit. Curabitur pellentesque nisi sed odio congue, eget vehicula felis convallis. Mauris tincidunt iaculis elementum. Proin semper tellus nulla, sit amet vulputate nisi elementum nec. Praesent sodales dui sit amet accumsan molestie. Curabitur eget auctor quam.

</p></span></p>
              <p className='cv-mid-item'>2019-2020 <span className='course-details-cv'>Job Title <p style={{marginLeft: '16%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et justo neque. Nunc sit amet vestibulum elit. Nullam magna tellus, porttitor et consequat et, aliquam sit amet velit. Curabitur pellentesque nisi sed odio congue, eget vehicula felis convallis. Mauris tincidunt iaculis elementum. Proin semper tellus nulla, sit amet vulputate nisi elementum nec. Praesent sodales dui sit amet accumsan molestie. Curabitur eget auctor quam.

</p></span></p>
              <p className='cv-mid-item'>2018-2019 <span className='course-details-cv'>Job Title <p style={{marginLeft: '16%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et justo neque. Nunc sit amet vestibulum elit. Nullam magna tellus, porttitor et consequat et, aliquam sit amet velit. Curabitur pellentesque nisi sed odio congue, eget vehicula felis convallis. Mauris tincidunt iaculis elementum. Proin semper tellus nulla, sit amet vulputate nisi elementum nec. Praesent sodales dui sit amet accumsan molestie. Curabitur eget auctor quam.

</p></span></p>

              <h3 className='cv-mid-header-1'><span>  </span>SKILLS</h3>

              <h3 className='cv-mid-header-2'>REFERENCES</h3>
              </div>
{/* 
              <div className='cv-right'>

              <h3 className='cv-right-item'>EXPERIENCE</h3>

                </div> */}


      </div>


    </div>
  );
}

export default App;
