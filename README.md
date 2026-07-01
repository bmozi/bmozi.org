# BMOZI.org

Community branch site for BMOZI, built with Next.js App Router and deployed on Vercel.

## Role

- `bmozi.com`: main company and content hub
- `bmozi.net`: technical branch and proof systems
- `bmozi.org`: community, service, learning, and human-centered technology

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Vercel

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Deployment

The intended production target is Vercel with GitHub integration:

1. Push this repo to `github.com/bmozi/bmozi.org`.
2. Import the repo in Vercel or run `npx vercel link` from the project root.
3. Deploy production with `npx vercel --prod`.
4. Add `bmozi.org` and `www.bmozi.org` to the Vercel project.

## Cloudflare DNS

When the domain is managed in Cloudflare and the site is hosted on Vercel, use DNS-only records while Vercel validates the domain.

Vercel currently recommends these records for this project:

| Type | Name | Target | Proxy |
| --- | --- | --- | --- |
| CNAME | `@` | `655a5b1a8fddf77c.vercel-dns-017.com` | DNS only |
| CNAME | `www` | `655a5b1a8fddf77c.vercel-dns-017.com` | DNS only |

Cloudflare may flatten the apex CNAME to Vercel edge A records when queried publicly. Vercel verification still recognizes this as valid.

Local Cloudflare API credentials are documented in `docs/LOCAL_SECRETS.md`.
