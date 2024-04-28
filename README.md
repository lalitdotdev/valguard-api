# Valguard -- Detection and filtering API for profanity , hate and toxic content.

This API provides powerful profanity detection and filtering capabilities for text-based content. It utilizes Upstash Vector for efficient word querying and filtering, enabling developers to integrate profanity detection seamlessly into their applications.

## Features

- **Profanity Detection:** Detect and filter out profane words and language in text-based content.
- **Efficient Filtering:** Utilizes Upstash Vector for efficient word querying and filtering.
- **Customizable:** Easily customize filtering settings and thresholds to suit your application's needs.
- **Error Handling:** Handles edge cases such as message length limits and responds with appropriate error messages.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your_username/valguard-api.git
   ```

2. Install dependencies:

   ```bash
    pnpm  install
   ```

3. Set up environment variables:

   - `VECTOR_URL`: URL of the Upstash Vector database
   - `VECTOR_TOKEN`: Token for accessing the Upstash Vector database

4. Start the server:

   ```bash
     yarn wrangler dev index
   ```

   `running yarn wrangler dev index would start the development server for the Cloudflare Worker script defined in index.js, allowing you to test and debug your Workers script locally before deploying it to the Cloudflare platform.
`

5. The API server will start on `http://localhost:8787`.

## Usage

Make HTTP POST requests to the endpoint `http://localhost:8787` with JSON data containing the text to be analyzed. The API will respond with the result of the profanity detection.

Example request:

```json
POST (http://localhost:8787)
Content-Type: application/json

{
  "message": "This is a sample text containing profane words."
}
```

Example response:

```json
{
  "isProfanity": true,
  "score": 0.85,
  "flaggedFor": "profane words",
  "text": "You have been flagged for using inappropriate language. Please refrain from using the following word: profane words in your message. Thank you."
}
```

## Contributing

Contributions are welcome! Please follow the [contribution guidelines](CONTRIBUTING.md).

```markdown
## Dependencies

- **@upstash/vector:** ^1.0.7
- **csv-parser:** ^3.0.0
- **openai:** ^4.38.3
- **wrangler:** ^3.51.2
- **hono:** ^4.2.7
- **langchain:** ^0.1.35
- **ts-node:** ^10.9.2

## Support

For any issues or questions, please open an issue on [GitHub](link-to-issues) or reach out to us on [Discord](link-to-discord).

## Roadmap

- Implement support for additional languages.
- Enhance performance and scalability.
- Provide more customization options for profanity filtering.

## License

This project is licensed under the [MIT License](LICENSE).
```

```

```

```

```
