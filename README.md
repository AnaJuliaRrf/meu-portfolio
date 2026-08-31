# Portfólio — Ana Julia Ferreira Rodrigues

Portfólio profissional em HTML + Tailwind CSS + JavaScript vanilla, sem frameworks e sem build step. Basta abrir `index.html` no navegador.

## Estrutura

```
/index.html      → estrutura e conteúdo do site
/script.js       → interações (menu mobile, navbar, animações de entrada)
/assets/images/  → onde entram os screenshots reais dos projetos
/README.md       → este arquivo
```

## Como rodar

Abra `index.html` diretamente no navegador, ou sirva a pasta com qualquer servidor estático:

```bash
npx serve .
# ou
python3 -m http.server
```

## Placeholders que você precisa substituir

O conteúdo foi montado apenas com as informações que você forneceu. Tudo que não foi informado ficou marcado como placeholder — procure por `PLACEHOLDER_` e pelos links de exemplo no arquivo `index.html`:

### Links e contato
- `GITHUB_URL` (aparece no Hero, na navbar do menu e no Contato)
- `LINKEDIN_URL`
- `EMAIL`

### Imagens dos projetos
Coloque os arquivos reais em `assets/images/` com estes nomes (ou ajuste o `src` no HTML):
- `PROJECT_IMAGE_NEO_VINCULO.png`
- `PROJECT_IMAGE_BYTE_STORE.png`
- `PROJECT_IMAGE_INSIGHTHUB.png`
- `PROJECT_IMAGE_PEDE_MAIS.png`
- `PROJECT_IMAGE_SISTEMA_OCORRENCIAS.png`

Enquanto a imagem real não existir, um placeholder visual identificado aparece automaticamente (via `onerror` no `<img>`).

### Projeto NeoVínculo
- `PLACEHOLDER_MEU_PAPEL_NEOVINCULO` — seu papel específico no projeto

### Projeto Byte Store
- `PLACEHOLDER_DESCRICAO_BYTE_STORE`
- `PLACEHOLDER_TECNOLOGIAS_BYTE_STORE`
- `PLACEHOLDER_FUNCIONALIDADES_BYTE_STORE`
- `PLACEHOLDER_MEU_PAPEL_BYTE_STORE`
- `PLACEHOLDER_GITHUB_BYTE_STORE`

### Projeto InsightHub
- `PLACEHOLDER_DESCRICAO_INSIGHTHUB`
- `PLACEHOLDER_TECNOLOGIAS_INSIGHTHUB`
- `PLACEHOLDER_FUNCIONALIDADES_INSIGHTHUB`
- `PLACEHOLDER_MEU_PAPEL_INSIGHTHUB`
- `PLACEHOLDER_GITHUB_INSIGHTHUB`

### Projeto Pede Mais
- `PLACEHOLDER_DESCRICAO_PEDE_MAIS`
- `PLACEHOLDER_TECNOLOGIAS_PEDE_MAIS`
- `PLACEHOLDER_FUNCIONALIDADES_PEDE_MAIS`
- `PLACEHOLDER_MEU_PAPEL_PEDE_MAIS`

### Sistema de Ocorrências
- `PLACEHOLDER_MEU_PAPEL_SISTEMA_OCORRENCIAS`
- `PLACEHOLDER_GITHUB_SISTEMA_OCORRENCIAS` (link para planilha/documento/repositório, se houver)

### Experiência
- `PLACEHOLDER_CARGO`
- `PLACEHOLDER_INSTITUICAO`
- `PLACEHOLDER_PERIODO`

### Formação
- `PLACEHOLDER_INSTITUICAO_DSM`
- `PLACEHOLDER_PERIODO` (aparece em cada item de Formação — datas de ETEC, DSM e das duas Iniciações Científicas Júnior)

## Sobre a categorização das tecnologias

Na seção "Tecnologias" cada item tem uma cor que indica o nível de contato que você relatou:
- **Roxo (bolinha preenchida):** experiência prática
- **Rosa (bolinha preenchida):** experiência aplicada em projeto específico
- **Contorno tracejado:** conhecimento acadêmico

Se quiser reclassificar algum item, basta trocar as classes `bg-lilac-50`, `bg-rose-100` ou `border-dashed` na respectiva tag em `index.html` (seção `#tecnologias`).

## Personalização rápida

- **Cores:** definidas em `tailwind.config` dentro do `<head>` do `index.html` (paleta `lilac`, `rose`, `ink`, `paper`).
- **Fontes:** Space Grotesk (títulos), Inter (texto), JetBrains Mono (tags/labels técnicos) — carregadas via Google Fonts.
- **Animações:** classe `.reveal` + `IntersectionObserver` em `script.js`. Respeita `prefers-reduced-motion`.

## Checklist antes de publicar

- [ ] Substituir todos os `PLACEHOLDER_*`
- [ ] Substituir `GITHUB_URL`, `LINKEDIN_URL` e `EMAIL`
- [ ] Adicionar as imagens reais em `assets/images/`
- [ ] Revisar links dos projetos sem repositório público
- [ ] Testar em mobile, tablet e desktop
