# Reproducing a YouTube Listing Page with Grid Layout in CSS

Project developed in the CSS Web Developer Bootcamp at Digital Innovation One, with guidance from expert [Michele Ambrosio](https://github.com/micheleambrosio "Michele Ambrosio").
In this challenge, you will get hands-on experience building a YouTube video listing page using CSS, putting into practice all the concepts learned, especially about Grid Layout.

## Technologies Used

- **HTML** - semantic markup and page structure.
- **CSS** - styles, theme variables, responsiveness.
- **JavaScript** - theme switching, language selection, and minor interactions.

## Resources and Features

- **Grid Layout** implemented with **Flexbox** (3/2/1 columns depending on width).
- **Theme Mode**: *light* (default) and *dark* with persistence via `localStorage`. Moon/sun icons in the header.

- **Multilingual**: EN-US (default), PT-BR and ES-ES; texts dynamically changed via `data-i18n`. Preference saved in `localStorage`.
- **Accessibility**: use of semantic elements (`header`, `nav`, `main`, `section`, `article`, `footer`), `aria-*`, `tabindex`, visible focus and labels.
- **Responsiveness**: breakpoints for desktop, tablet and mobile.
- **No external dependencies** - only native HTML/CSS/JS.

## How to use (step by step)

1. Open the `index.html` file in your browser (double-click or drag to the browser window).
2. **Change theme**: click the button with the moon/sun icon in the header.
3. **Switch language**: select EN-US, PT-BR, or ES-ES in the language selector.
4. **Keyboard navigation**: use `Tab` to focus cards; `Enter` or `Space` simulates opening the video.

## Best practices and development notes

- Keep dynamic text in a translation object for easier maintenance.
- Use `prefers-color-scheme` as a fallback to detect the system theme, if desired.
- For production, optimize images and add lazy-loading (`loading="lazy"`) to `<img>` tags.

![Screenshot](/img/YT_List.png)

[LICENSE](/LICENSE)
