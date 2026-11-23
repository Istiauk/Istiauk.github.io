# How to update this website

This site is plain **HTML + CSS + a little JavaScript**. There is nothing to install or build.
Open any file in VS Code, change it, save, and upload it to GitHub again.

## Folder map

```
index.html                  ← the home page (all 9 sections)
404.html                    ← shown when a link is broken
projects/                   ← one page per project
interests/                  ← travelling.html, sports.html, movies.html
assets/css/style.css        ← all colours, fonts and layout (colours are at the top)
assets/js/main.js           ← phone menu + menu highlighting
assets/fonts/               ← Space Grotesk, Inter, JetBrains Mono (self-hosted)
assets/img/profile/         ← your hero photo (rifat-portrait.jpg, portrait 4:5)
assets/img/projects/        ← project figures and photos (one folder per project)
assets/img/projects/thumbs/ ← project card images (800 × 500)
assets/img/experience/      ← Air Force Academy photos
assets/img/beyond/          ← volunteering photo
assets/img/interests/       ← create travel/, sports/, movies/ folders here for interest photos
assets/img/updates/         ← create this folder for Latest Updates photos
assets/resume/              ← Md_Istiauk_Hossain_Rifat_Resume.pdf (the download button)
```

## Common changes

| I want to…                    | Do this |
|-------------------------------|---------|
| Change my profile photo        | Replace `assets/img/profile/rifat-portrait.jpg` with a new photo of the **same name** (portrait shape works best). |
| Change the downloadable résumé | Replace `assets/resume/Md_Istiauk_Hossain_Rifat_Resume.pdf` with your PDF, keeping the **same name**. |
| Add a Beyond Engineering photo | Save it in `assets/img/beyond/` (e.g. `volunteering.jpg`). In `index.html` search for `PHOTO SLOT` — each one tells you exactly which line to replace. |
| Add / edit / remove a Latest Update | In `index.html` search for `LATEST UPDATES`. The comment above the section has a copy-paste template. Newest goes at the top; delete an `<article class="update">` block to remove it. |
| Fill in Travelling / Sports / Movies | Open the page in `interests/`. Grey italic text is placeholder: type over it. Each block has a comment showing how to add a photo or copy the block. |
| Add an Experience photo | Put it in `assets/img/experience/` and copy one `<a>…</a>` line inside `photo-wall` in `index.html`. |
| Change a colour                | Edit the values at the top of `assets/css/style.css` (section 2, "Design tokens"). |
| Edit text                      | Search for the sentence in `index.html` or the project page and type over it. |
| Add the VLSI GitHub link       | In `projects/digital-alarm-clock-vlsi.html`, replace the "GitHub repository coming soon" button and the note under **Links** with your repo link. |

## Publishing on GitHub Pages

1. Create a repository named exactly **`Istiauk.github.io`**.
2. Upload **everything inside this folder** (not the folder itself), so `index.html` is at the top level.
3. Go to **Settings → Pages**, choose **Deploy from a branch**, branch `main`, folder `/ (root)`, and save.
4. After about a minute the site is live at **https://istiauk.github.io**.

To update later: upload the changed files again with the same names (GitHub replaces them).

## Deploying on Vercel (optional)

1. Sign in at vercel.com with your GitHub account.
2. **Add New → Project**, pick the `Istiauk.github.io` repository and click **Deploy**. No settings are needed: it's a static site.
3. Every time you upload changes to GitHub, both GitHub Pages and Vercel update automatically.
