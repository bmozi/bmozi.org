# Local Secrets

Do not commit secret values to this repository.

Cloudflare DNS continuity for BMOZI domains uses local env files outside the repo:

```bash
source ~/.config/bmozi/cloudflare.env
```

Expected variables when operating on a Cloudflare zone:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ZONE_ID`
- `CLOUDFLARE_ZONE_NAME`

`bmozi.org` uses a separate Cloudflare zone pointer:

```bash
source ~/.config/bmozi/cloudflare-bmozi-org.env
```

Keep local secret files outside Git and permissioned as `600`.
