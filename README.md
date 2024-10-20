# Duck Cloud fullstack web developer course Group02
## Git CLI setup
### Git Command Line Interface (CLI) ကို Download လုပ်ရန်
- git-scm.com သို့သွားပါ
- Windows ကိုသွားပါ
- Download for Windows ကို နှိပ်ပါ
- installer ဖိုင်ကို download လုပ်ပါ

### Git Install လုပ်ခြင်း
- Download လုပ်ထားသော installer ကို double-click နှိပ်ပါ
- Next ကို အဆင့်ဆင့်နှိပ်သွားပါ (default settings များအတိုင်း ထားနိုင်သည်)
- Default Editor used by Git တွင် Visual Studio Code ကိုရွေးပါ၊ ကျန်အဆင့်များ default အတိုင်းပဲ Next နှိပ်ပါ
- Install ကို နှိပ်ပါ
- Finish နှိပ်ပါ

### Git ကို စတင်အသုံးပြုခြင်း
- Start Menu မှ Git Bash ကို ဖွင့်ပါ
- အောက်ပါ commands များဖြင့် Git ကို configure လုပ်ပါ:

```bash
git config --global user.name "မိမိ၏ git username"
```
```bash
git config --global user.email "မိမိ email"
```
`exit` command ရိုက်ထည့်ပြီးပိတ်ပါ

## Repository ကို Clone လုပ်ခြင်း
Windows Explorer ကနေ project သိမ်းဆည်းထားချင်တဲ့ folder ကိုသွားပါ။ address bar မှာ cursor ချပြီး `cmd` ရိုက်ထည့်ပြီး Enter နှိပ်ပါ။ အောက်ပါ command ကို run ပါ
```
git clone https://github.com/duckcloud-gp02/duckcloud-gp02.github.io.git portfolio-group-project
```
```
cd portfolio-group-project
```
Project ကို VSCode ဖြင့်ဖွင့်ရန် အောက်ပါ command ကို run ပါ
```bash
code ./
```
## Branch အသစ်လုပ်ခြင်း
1. Main branch ကနေ မိမိသင်တန်းသားနံပါတ်ဖြင့် checkout လုပ်ရန်လိုပါတယ်။ မိမိ branch မှာပြင်စရာရှိတာပြင်ပြီးမှ main branch မှာလာပေါင်းလို့ရမှာဖြစ်ပါတယ်။
Main branch သို့အရင်ဝင်ရန်
```bash
git checkout main
```
Branch မခွဲခင် Main ထံမှ pull အရင်လုပ်ပါ
```bash
git pull origin main
```
မိမိ branch ကို checkout ခွဲထုတ်ပါ။
```bash
git checkout -b <သင်တန်းသားနံပါတ်>
# ဥပမာ - `git checkout -b 1011`
```
မိမိလက်ရှိရောက်နေသည့် branch ကိုစစ်ဆေးရန်
```bash
git branch
```
## ကွန်ပြူတာမှ Remote branch သို့ push လုပ်ခြင်း
ကွန်ပြူတာမှ project file များကို edit လုပ်ပြီးလျှင် remote branch သို့ push လုပ်ရန်လိုပါတယ်
- ဖိုင်များကို staging area သို့ထည့်ရန်
```bash
git add .
```
- changes များကို commit လုပ်ရန်
```bash
git commit -m "နှစ်သက်ရာ commit message ထည့်ပါ"
```
- changes များကို push လုပ်ရန်
```bash
git push -u origin <သင်တန်းသားနံပါတ်>
# ဥပမာ - `git push -u origin 1011`
```
Git CLI တွင် Github account login မဝင်ရသေးပါက Login ကိုနှိပ်ပါ။
အထက်ပါ အဆင့်များအတိုင်း လုပ်ဆောင်ပြီးပါက မိမိ branch ကို GitHub သို့ push လုပ်ခြင်းအောင်မြင်ပါသည်။ 

## Project တွင်ပါဝင်ရေးသားခြင်းဆိုင်ရာ စည်းမျဉ်းများ
- Pure HTML, CSS နှင့် JavaScript ကိုသာ အသုံးပြုရပါမည်
- သင်တန်း project ဖြစ်သည့်အတွက် မည်သည့် CSS Framework များ (Bootstrap, Tailwind စသည်) ကိုမှ မသုံးရပါ
- မည်သည့် JavaScript Library များ (jQuery, React စသည်) ကိုမှ မသုံးရပါ
- External CSS/JS files များကို project folder ထဲတွင်သာ ထားရှိရပါမည်

### Pull Request တင်ခြင်း
- GitHub တွင် ယခု repository စာမျက်နှာသို့ သွားပါ
https://github.com/duckcloud-gp02/duckcloud-gp02.github.io
- Pull requests tab ကိုသွားပါ
- New Pull Request ခလုတ်ကို နှိပ်ပါ
- မိမိ သင်တန်းသားနံပါတ် branch ကို ရွေးချယ်ပါ
- pull request description တွင်နှစ်သက်ရာရေးပါ
- Create pull request ကို နှိပ်ပါ

**လိုက်နာရမည့်အချက်များ**
- အမြဲတမ်း main branch ကို up-to-date ဖြစ်အောင် pull လုပ်ထားပါ
- Commit message များ ရှင်းလင်းစွာ ရေးပါ
- Code မရေးခင် main branch ကနေ pull လုပ်ပါ
- Conflicts များ ဖြစ်ပါက local တွင် ဖြေရှင်းပြီးမှ push လုပ်ပါ

**အကူအညီ လိုအပ်ပါက**
- Issue tracker တွင် issue အသစ်ဖွင့်ပါ
- Repository maintainer များကို mention လုပ်ပါ (@username)
- Pull request တွင် comment ရေးပါ