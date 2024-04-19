import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-category-news',
  templateUrl: './category-news.component.html',
  styleUrls: ['./category-news.component.css']
})
export class CategoryNewsComponent implements OnInit, OnDestroy{
  
  category!:string;
  sub!:Subscription;

  // smeTitle = 'sImfhÃqÀ s]meokv kvtäj³ kvt^mS\¯nÂ ]mÀ«n¡p ]¦nsÃ¶pw sXämb hnhc§Ä {]Ncn¸n¨v FXncmfnIÄ cm{ãob t\«¯sImfhÃqÀ s]meokv kvtäj³ kvt^mS\¯nÂ ]mÀ«n¡p ]¦nsÃ¶pw sXämb hnhc§Ä {]Ncn¸n¨v FXncmfnIÄ cm{ãob t\«¯...'
  smeTitle = 'കൊളവല്ലൂർ പൊലീസ് സ്റ്റേഷൻ പരിധിയിലെ ഈസ്റ്റ് ചെറ്റക്കണ്ടിയിലെ കാക്രോട്ട് കുന്നിൻമുകളിലെ ആളൊഴിഞ്ഞ പറമ്'
  smeTxt = 'കൊളവല്ലൂർ പൊലീസ് സ്റ്റേഷൻ പരിധിയിലെ ഈസ്റ്റ് ചെറ്റക്കണ്ടിയിലെ കാക്രോട്ട് കുന്നിൻമുകളിലെ ആളൊഴിഞ്ഞ പറമ്...സ്‌ഫോടനത്തിൽ പാർട്ടിക്കു പങ്കില്ലെന്നും തെറ്റായ വിവരങ്ങൾ പ്രചരിപ്പിച്ച് എതിരാളികൾ രാഷ്ട്രീയ നേട്ടത്ത... കൊളവല്ലൂർ പൊലീസ് സ്റ്റേഷൻ പരിധിയിലെ ഈസ്റ്റ് ചെറ്റക്കണ്ടിയിലെ കാക്രോട്ട് കുന്നിൻമുകളിലെ ആളൊഴിഞ്ഞ പറമ്...സ്‌ഫോടനത്തിൽ പാർട്ടിക്കു പങ്കില്ലെന്നും തെറ്റായ വിവരങ്ങൾ പ്രചരിപ്പിച്ച് എതിരാളികൾ രാഷ്ട്രീയ നേട്ടത്ത... കൊളവല്ലൂർ പൊലീസ് സ്റ്റേഷൻ പരിധിയിലെ ഈസ്റ്റ് ചെറ്റക്കണ്ടിയിലെ കാക്രോട്ട് കുന്നിൻമുകളിലെ ആളൊഴിഞ്ഞ പറമ്...സ്‌ഫോടനത്തിൽ പാർട്ടിക്കു പങ്കില്ലെന്നും തെറ്റായ വിവരങ്ങൾ പ്രചരിപ്പിച്ച് എതിരാളികൾ രാഷ്ട്രീയ നേട്ടത്ത...';
  smeCategory ='Read More';
  smeDate = new Date(Date.now());
  smeUrl='/news/article-slug';

  constructor(private _actRoute:ActivatedRoute){}

  ngOnInit(): void {
    this.sub = this._actRoute.data.subscribe(({category}) => {
      this.category = category;  
    });
    console.log(this.category);    
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
