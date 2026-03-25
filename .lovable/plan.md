

# Plano: Editar imagem — trocar revista por tema saúde/esporte

## Contexto
A imagem em questão provavelmente é a `clinic-reception.webp` (sala de espera) ou `about-wellness.jpg`, que mostra uma pessoa lendo uma revista no sofá. Vou identificar a imagem correta e usar IA generativa para editá-la.

## Passos

1. **Identificar a imagem correta** — Abrir o preview no browser para confirmar qual das imagens (`clinic-reception.webp`, `about-wellness.jpg`, etc.) mostra o rapaz no sofá lendo revista.

2. **Editar a imagem com IA** — Usar o modelo de edição de imagem (Gemini) para substituir a revista por uma com tema de saúde ou esporte (ex: capa com atleta, corrida, musculação ou tema fitness/wellness).

3. **Substituir o arquivo no projeto** — Salvar a imagem editada no lugar da original em `src/assets/`.

## Detalhes técnicos
- Será usado o modelo `google/gemini-2.5-flash-image` via API para edição de imagem
- A instrução para o modelo será algo como: "Replace the magazine the man is reading with a health/sports themed magazine cover"
- O arquivo original será substituído mantendo o mesmo nome e formato

