# Migração do npm para pnpm

## ✅ Migração Concluída

Este projeto foi migrado com sucesso do npm para o pnpm.

## 📋 O que foi alterado:

1. **Removido**: `node_modules/` e `package-lock.json`
2. **Criado**: `pnpm-lock.yaml` (gerado automaticamente)
3. **Atualizado**: Scripts no `package.json` para usar `pnpm dlx` em vez de `npx`
4. **Criado**: `.npmrc` com configurações otimizadas para pnpm

## 🚀 Comandos equivalentes:

| npm | pnpm |
|-----|------|
| `npm install` | `pnpm install` |
| `npm run dev` | `pnpm dev` |
| `npm run build` | `pnpm build` |
| `npm install package` | `pnpm add package` |
| `npm install -D package` | `pnpm add -D package` |
| `npx command` | `pnpm dlx command` |

## ⚡ Vantagens do pnpm:

- **Mais rápido**: Instalação e execução mais rápidas
- **Menos espaço**: Armazenamento eficiente com links simbólicos
- **Mais seguro**: Melhor isolamento de dependências
- **Melhor cache**: Cache global mais eficiente

## 🔧 Configurações no .npmrc:

```ini
auto-install-peers=true
strict-peer-dependencies=false
shamefully-hoist=true
prefer-frozen-lockfile=true
```

## 📝 Próximos passos:

1. Use `pnpm` em vez de `npm` para todos os comandos
2. Compartilhe o `pnpm-lock.yaml` com a equipe
3. Configure CI/CD para usar pnpm se necessário

## 🐛 Solução de problemas:

Se encontrar problemas:
1. Delete `node_modules/` e `pnpm-lock.yaml`
2. Execute `pnpm install`
3. Verifique se todas as dependências estão corretas
