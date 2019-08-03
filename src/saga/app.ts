export function* startup(): IterableIterator<void> {
  const tag = '[STARTUP]';
  console.log(`${tag} Startup saga called`);
}
