#!/bin/sh
# Veröffentlicht die Webanwendung als Cloudflare-Worker „bav“.
set -eu
cd "$(dirname "$0")"
exec npx --yes wrangler@latest deploy "$@"
