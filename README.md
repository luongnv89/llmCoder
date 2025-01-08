# Ollama Coder: AI-Powered Code Generation

Ollama Coder is a web application that generates React components from natural language prompts.  It leverages the power of the Ollama API to translate your descriptions into functional, styled TypeScript code.

**Features:**

* **Natural Language Input:** Describe the React component you need in plain English.
* **AI-Powered Code Generation:** Ollama's powerful models translate your prompt into working code.
* **TypeScript Support:**  Generated code is written in TypeScript for type safety and maintainability.
* **Tailwind CSS Styling:** Components are automatically styled using Tailwind CSS classes for a consistent and professional look.
* **Interactive Components:** The generated code includes state management where necessary to create fully functional components.
* **Model Selection:** Choose between different Ollama models (`qwen2.5-coder:14b`, `phi3:14b` are recommended) for varied code generation capabilities.  (See instructions below on how to add more models).
* **Streaming Response (Implicit):** The application fetches and displays the generated code progressively as it's received from the Ollama API.


**Technology Stack:**

* **Frontend:** Next.js, React, TypeScript, Tailwind CSS, Radix UI, Framer Motion
* **Backend:** Next.js API routes
* **AI Model:** Any LLM model support by Ollama. By default uses `qwen2.5-coder:14b` and `phi3:14b`
* **Code Display:**  Custom CodeViewer component


**Getting Started (For Developers):**

1. **Clone the repository:** `git clone https://github.com/luongnv89/ollama-coder`
2. **Install dependencies:** `npm install`
3. **Set up Ollama API:**  The API endpoint (`ollamaApiUrl`) is **not** included in this repository and needs to be configured within the `route.ts` file.  Refer to the Ollama documentation for setting up your API key and endpoint.
4. **Run the development server:** `npm run dev`

**Adding More Models:**

To add more models to the available options, modify the `models` array in `page.tsx`.  Ensure that the `value` property accurately reflects the name of the model as it's recognized by the Ollama API.

**Important Considerations:**

* This project is a personal project and is not officially affiliated with Ollama.
* The quality of the generated code depends on the clarity and precision of your prompt.
* Error handling is implemented to catch issues with API requests, but unexpected behavior may still occur.

**Contributing:**

Contributions are welcome! Please open an issue or submit a pull request.


**License:**

MIT License (See `LICENSE` file)

This project is inspired by [geminicoder](https://github.com/osanseviero/geminicoder).
