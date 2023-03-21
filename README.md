![image](https://user-images.githubusercontent.com/101726102/226490421-d9748694-297e-4af7-b908-bbe06a630bd4.png)

<a href="https://www.producthunt.com/posts/chroma-ai?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-chroma&#0045;ai" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=385012&theme=dark" alt="Chroma&#0032;AI - Generate&#0032;gradients&#0032;based&#0032;on&#0032;your&#0032;mood&#0032;using&#0032;AI | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>

## Getting Started

You will need a `OPENAI_API_KEY` in your `.env` file to run this locally.

You can then start a development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to access the application.

## How does it work?

This app uses OpenAI's `gpt-3.5-turbo` model and Vercel Edge functions with streaming. The model is instructed to analyze the sentiment of the provided text and identify the emotions present in the text. Using those emotions, the model generates a list of 4 colors commonly associated with those emotions to create a gradient.

#### Credits

- [Kevin Hufnagl for Stripe Gradient animation](https://kevinhufnagl.com/)
