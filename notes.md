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
    - you can group routes in a folder named "(auth)"
      - it wont count this as a route

- Layout.js

  - Everything in this file shows up on each page!
  - you can created specific layouts by making a "layouts.jsx" file in each app route folder

- Link Component in Next.js

  - This is important because it loads the page before clikcing the link. built into next.js

- Built in loading layouts?

  - You can create custom loading layouts for individual pages. Just add a loading.jsx file in the folder

- Error page

  - error.jsk

- default 404 page

  - we can make a custom with not-found.jsx

- Css Modules

  - Pretty cool concept

- usePathname from next/navigation hook

  - gives us access to the pathname
  - needs to be a client component

- ## Images in Next.js
  - Next.js caches and optimizes images using the Image tag from next.js
  - this tag takes attributes like: width, height, fill
  - optimizes images according to screen size
  - This does not allow us to use external images
    - we can remedy this by adjusting our next.js.config to allow remote urls

# Client vs Server

- Server Side Rendering

  - Server renders page and sends to client
  - Pros
    - Initial page load is faster
    - Better for old devices and slow internet
    - Better for SEO
  - Cons
    - Less interaction
    - more server loads
    - Slower subsequent page loads
    - State management complexity

- Client Side Rendering
  - Sends empty HTML and JS
  - User browser renders page
  - Pros
    - Better performance after initial load
    - Less Server load
    - Best for user interactivity
  - Cons
    - May affect SEO
    - Slower initial load
    - Dependent on client resources
