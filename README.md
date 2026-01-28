# coffee-shop

- **Demo**: https://victor0601yu.github.io/coffee-shop/

## 專案簡介

- **名稱**：咖啡店單頁式網站
- **用途**：練習切版、RWD 與互動效果（hover 動畫等）

## 使用技術

- **HTML5**
- **SCSS**（編譯後輸出 `css/style-sass.css`）
- **Bootstrap 5 Grid**（`assets/vender/bootstrap-5.3.8/`）
- **Normalize.css**
- **Font Awesome**（CDN）

## 專案結構（重點）

- `index.html`：主頁面
- `style-sass.scss`：主要樣式與 RWD 設定
- `css/style-sass.css`：由 SCSS 編譯出的 CSS
- `assets/images/`：圖片資源（jumbotron、about、contact 等）
- `assets/vender/`：第三方 CSS（Bootstrap grid、Normalize）

## 開發與預覽

- 用瀏覽器開啟 `index.html` 即可預覽。
``

## 版面區塊

- **Header**：導覽列、品牌名稱、Order 按鈕
- **Jumbotron**：主視覺、標題、描述與 CTA
- **About**：品牌介紹與特色卡片
- **Menu**：咖啡與餐點列表（含 hover 動畫與分隔線）
- **Visit**：地址、營業時間、電話與 Google Map
- **Contact**：聯絡表單（Name / Email / Message）
- **Footer**：品牌、社群連結與版權資訊

## 自訂方向

- 在 `style-sass.scss` 中可調整色系、斷點與動畫。
- 在 `index.html` 中可修改文案、菜單內容與圖片路徑。

### RWD 斷點說明

在 `style-sass.scss` 中使用自訂 mixin 控制斷點（以 max-width 為主）：

- `@include rwd-xl`：1199px 以下
- `@include rwd-lg`：991px 以下
- `@include rwd-md`：767px 以下
- `@include rwd-sm`：575px 以下
- `@include rwd-xs`：425px 以下

### 互動與動畫重點

- 按鈕（`.btn`）：hover 有顏色變化、陰影與輕微位移。
- 導覽列連結：底線滑入動畫、顏色變化。
- 卡片與 menu item：hover 時抬升、背景與文字顏色改變，menu 之間有固定分隔線。
- 圖片容器：hover 時圖片輕微放大。
- Visit / Contact / Footer 等區塊亦有基本 hover 效果，增加互動感。

### 已知限制

- 聯絡表單目前僅為前端展示，未串接實際後端 API。