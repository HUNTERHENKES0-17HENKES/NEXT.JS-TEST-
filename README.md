# Next.js Docker Demo

A simple Hello World application built with Next.js 14.1.0 and Docker.

## Prerequisites

- Docker installed on your system
- Node.js 18 or later (for local development)

## Building the Docker Image

To build the Docker image, run:

```bash
docker build -t nextjs-docker-demo .
```

## Running the Container

To run the container, use:

```bash
docker run -p 3000:3000 nextjs-docker-demo
```

The application will be available at http://localhost:3000

## Development

For local development without Docker:

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

The development server will be available at http://localhost:3000 