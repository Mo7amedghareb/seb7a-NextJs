import Link from "next/link";
export default function contact() {
    return (
        <>
        <title> تواصل معنا</title>
        <div style={{backgroundImage: `url(${'contact.jpg'})`, backgroundSize:'cover'}}>
       
            <div id="contdiv">
                <ul id="contul">
                    <li>FaceBook    </li>
                    <li>Whatsapp</li>
                    <li>Gmail</li>
                </ul>
                <ul id="contuldata">
                    <li><Link href="www.facebook.com">facebook.com/seb7a</Link></li>
                    <li >01115483277</li>
                    <li><Link href="www.gmail.com">https://mail.google.com</Link></li>
                </ul>
            </div>
        </div>
            
        </>
    )
}