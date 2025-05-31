import {
  CopilotRuntime,
  OpenAIAdapter,
  copilotRuntimeNextJSAppRouterEndpoint,
} from '@copilotkit/runtime';

import { NextRequest } from 'next/server';


const serviceAdapter = new OpenAIAdapter();
const runtime = new CopilotRuntime({
    // ...existing configuration
    remoteEndpoints: [
        { url: `${process.env.REMOTE_ENDPOINT}/copilotkit_remote` },
    ],
});

export const POST = async (req: NextRequest) => {
  const { handleRequest } = copilotRuntimeNextJSAppRouterEndpoint({
    runtime,
    serviceAdapter,
    endpoint: '/api/copilotkit',
  });

  return handleRequest(req);
};