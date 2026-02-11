export function tg() {
  return window?.Telegram?.WebApp ?? null;
}

export function initTg() {
  const webapp = tg();
  if (!webapp) return { insideTelegram: false, user: null };

  webapp.ready();
  webapp.expand?.();

  return {
    insideTelegram: true,
    user: webapp.initDataUnsafe?.user ?? null,
  };
}
