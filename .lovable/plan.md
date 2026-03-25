

## Problema

O logo no Hero usa `brightness-0 invert` para ficar branco, mas sobre áreas claras da imagem de fundo ele perde visibilidade. O mesmo acontece no Footer.

## Solução

1. **Hero**: Remover `brightness-0 invert` do logo e exibi-lo com suas cores originais (marrom sobre bege), adicionando um leve fundo com backdrop-blur ou sombra para garantir contraste sobre a imagem.

2. **Footer**: O footer tem fundo escuro (`bg-foreground`), então o `brightness-0 invert` faz sentido ali. Manter como está.

### Alternativa mais elegante
Usar o logo original (cores naturais) no Hero com um sutil `drop-shadow` para destacá-lo da imagem de fundo, mantendo a identidade visual da marca visível.

### Arquivo alterado
- `src/pages/Index.tsx` — linha 23: remover `brightness-0 invert opacity-90`, adicionar `drop-shadow-lg` para contraste.

