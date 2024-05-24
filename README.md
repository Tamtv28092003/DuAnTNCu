# React + TypeScript + Vite

# Responsive Design
```css
@media only screen and (max-width: 639px) {
  /* CSS áp dụng cho màn hình điện thoại di động nhỏ - Độ rộng: Từ 320px đến 639px*/
  .example-element {
    width: 100%;
  }
}

@media only screen and (min-width: 640px) and (max-width: 767px) {
  /* CSS áp dụng cho màn hình Máy tính bảng lớn, điện thoại lớn - Độ rộng: Từ 640px đến 767px */
  .example-element {
    width: 100%;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1023px) {
  /* CSS áp dụng cho màn hình Máy tính bảng, máy tính xách tay - Độ rộng: Từ 768px đến 1023px */
  .example-element {
    width: 100%;
  }
}

@media only screen and (min-width: 1024px) and (max-width: 1279px) {
  /* CSS áp dụng cho màn hình Máy tính xách tay lớn, máy tính để bàn- Độ rộng: Từ 1024px đến 1279px */
  .example-element {
    width: 100%;
  }
}

@media only screen and (min-width: 1280px) and (max-width: 1535px) {
  /* CSS áp dụng cho màn hình Máy tính để bàn lớn - Độ rộng: 1280px đến 1535px */
  .example-element {
    width: 100%;
  }
}

@media only screen and (min-width: 1536px) {
  /* CSS áp dụng cho màn hình Máy tính để bàn lớn - Độ rộng: 1536px trở lên */
  .example-element {
    width: 100%;
  }
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
