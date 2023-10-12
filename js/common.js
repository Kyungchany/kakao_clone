document.addEventListener("DOMContentLoaded", ()=>{

    const emph_tit = document.querySelector('.emph_tit')
    const txt_date = document.querySelector('.txt_date')

    let kakaoDate = new Date()
    let year =kakaoDate.getFullYear()
    let month =kakaoDate.getMonth()
    let date =kakaoDate.getDate()

    emph_tit.innerHTML=`${month+1}월 ${date}일에 전하는`
    txt_date.innerHTML=`${year}.${month+1}.${date}`

    // logo.style.display='none';
    


})