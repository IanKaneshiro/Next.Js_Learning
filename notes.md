# Next Js Notes

## Folder Structure

- next.config.js
  - Able to use next.js experimental features
- jsconfig.json
  - Can change the default packs
  - can change "@" to equal the src directory in this example
- public
  - images media and other content
- .next

  - This contains our cached website

- Next.js App Router
  - We can router using the app folder
    - we can create all our pages using this app directory
    - / === page.js
    - in a sub folder called "about" will containe another page.js
    - we use a nested folder structure to route the website.
    - What about Dynamic pages?
      - name the folder "[slug]" with page.js inside it.
      - so it could be /blog/:slug
