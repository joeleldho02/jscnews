import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  flashNews = 'കൊളവല്ലൂർ പൊലീസ് സ്റ്റേഷൻ പരിധിയിലെ ഈസ്റ്റ് ചെറ്റക്കണ്ടിയിലെ കാക്രോട്ട് കുന്നിൻമുകളിലെ ആളൊഴിഞ്ഞ പറമ്...സ്‌ഫോടനത്തിൽ പാർട്ടിക്കു പങ്കില്ലെന്നും തെറ്റായ വിവരങ്ങൾ പ്രചരിപ്പിച്ച് എതിരാളികൾ രാഷ്ട്രീയ നേട്ടത്ത...';
  smeTitle = 'sImfhÃqÀ s]meokv kvtäj³ kvt^mS\¯nÂ ]mÀ«n¡p ]¦nsÃ¶pw sXämb hnhc§Ä {]Ncn¸n¨v FXncmfnIÄ cm{ãob t\«¯...'
  smeTxt = 'കൊളവല്ലൂർ പൊലീസ് സ്റ്റേഷൻ പരിധിയിലെ ഈസ്റ്റ് ചെറ്റക്കണ്ടിയിലെ കാക്രോട്ട് കുന്നിൻമുകളിലെ ആളൊഴിഞ്ഞ പറമ്...സ്‌ഫോടനത്തിൽ പാർട്ടിക്കു പങ്കില്ലെന്നും തെറ്റായ വിവരങ്ങൾ പ്രചരിപ്പിച്ച് എതിരാളികൾ രാഷ്ട്രീയ നേട്ടത്ത...';
  smeCategory ='Latest News';
  smeDate = new Date(Date.now());
  smeUrl='/news/123456';
  latestNews = {
    title:'കൊളവല്ലൂർ പൊലീസ് സ്റ്റേഷൻ പരിധിയിലെ ഈസ്റ്റ് ചെറ്റക്കണ്ടിയിലെ കാക്രോട്ട് കുന്നിൻമുകളിലെ ആളൊഴിഞ്ഞ പറമ്',
    // image:'assets\\images\\jsc-logo-white-bg.jpg',
    image:'https://drive.google.com/thumbnail?id=19dfuFpxFhRGYqrCTpiYGHCVqjcwBBoE0&sz=w1000',
    url:'#'
  }
  // latestNews = {
  //   title:'',
  //   image:''
  // }



  show(){
    
  }
}

// Use Meera for content and Indulekha for headings after unicodwe to mltt conversion