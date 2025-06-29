# BoxMedia - Frontend Only Setup

هذا دليل لتشغيل موقع BoxMedia بالفرونت إند فقط بدون خادم.

## 📁 الملفات المطلوبة

المجلدات والملفات التي تحتاجها:
```
client/                 # مجلد الفرونت إند الرئيسي
├── src/               # الكود المصدري
├── index.html         # ملف HTML الأساسي
├── public/            # الملفات الثابتة (إذا وجدت)

shared/                # البيانات المشتركة
└── schema.ts          # يمكن حذفه إذا لم تحتجه

components.json        # إعدادات المكونات
tailwind.config.ts     # إعدادات Tailwind
postcss.config.js      # إعدادات PostCSS
tsconfig.json          # إعدادات TypeScript
```

## 🗑️ الملفات التي يمكن حذفها

```
server/                # مجلد الخادم بالكامل
drizzle.config.ts      # إعدادات قاعدة البيانات
frontend-package.json  # ملف package.json للفرونت إند فقط
```

## 🚀 طريقة التشغيل البديلة

### الطريقة الأولى: باستخدام Vite
```bash
# في المجلد الجذر
npm run dev
```

### الطريقة الثانية: إنشاء مشروع جديد للفرونت إند فقط

1. إنشاء مجلد جديد:
```bash
mkdir boxmedia-frontend
cd boxmedia-frontend
```

2. نسخ الملفات المطلوبة:
```bash
# نسخ مجلد الفرونت إند
cp -r ../client/* .

# نسخ ملفات الإعداد
cp ../tailwind.config.ts .
cp ../postcss.config.js .
cp ../tsconfig.json .
cp ../components.json .
```

3. إنشاء package.json جديد:
```bash
cp ../frontend-package.json ./package.json
```

4. تثبيت الحزم:
```bash
npm install
```

5. تشغيل المشروع:
```bash
npm run dev
```

## 🎨 المميزات المتاحة

✅ **يعمل بدون خادم:**
- جميع الحركات والتأثيرات البصرية
- النمط الليلي/النهاري
- القوائم التفاعلية
- النماذج (عرض فقط)
- جميع المكونات البصرية

❌ **لا يعمل:**
- حفظ البيانات في قاعدة البيانات
- معالجة النماذج من الخادم
- APIs

## 📦 التوزيع والنشر

لبناء الموقع للنشر:
```bash
npm run build
```

سينشئ مجلد `dist` يحتوي على الملفات الجاهزة للنشر على أي استضافة ثابتة مثل:
- Netlify
- Vercel
- GitHub Pages
- Firebase Hosting

## 🔧 تخصيص البيانات

البيانات محفوظة في ملف `client/src/lib/data.ts` ويمكن تعديلها بسهولة:
- معلومات الأعمال (Portfolio)
- الخدمات (Services)
- الفريق (Team)
- الشهادات (Testimonials)
- المهارات (Skills)

الموقع الآن جاهز للعمل بالفرونت إند فقط! 🚀