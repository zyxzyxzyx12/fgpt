import { OPENAI_API_TYPE } from '../utils/app/const';

export interface OpenAIModel {
  id: string;
  name: string;
  maxLength: number; // maximum length of a message
  tokenLimit: number;
}

export enum OpenAIModelID {
  CHAT_BISOM_001 = 'chat-bisom-001',
  GPT_3_5_TURBO = 'gpt-3.5-turbo',
  GPT_3_5_TURBO_0613 = 'gpt-3.5-turbo-0613',
  GPT_3_5_TURBO_16K = 'gpt-3.5-turbo-16k',
  GPT_3_5_TURBO_16K_POE = 'gpt-3.5-turbo-16k-poe',
  GPT_3_5_TURBO_16K_0613 = 'gpt-3.5-turbo-16k-0613',
  GPT_4_0613 = 'gpt-4-0613',
  GPT_4 = 'gpt-4',
  GPT_4_POE = 'gpt-4-poe',
  GPT_4_32K_0613 = 'gpt-4-32k-0613',
  GPT_4_32K = 'gpt-4-32k',
  GPT_4_32K_POE = 'gpt-4-32k-poe',
  CLAUDE_2_100K = 'claude-2-100k',
}

// in case the `DEFAULT_MODEL` environment variable is not set or set to an unsupported model
export const fallbackModelID = OpenAIModelID.CHAT_BISOM_001;

export const OpenAIModels: Record<OpenAIModelID, OpenAIModel> = {
  [OpenAIModelID.CHAT_BISOM_001]: {
    id: OpenAIModelID.CHAT_BISOM_001,
    name: 'Chat Bisom 001',
    maxLength: 12000,
    tokenLimit: 10240,
  },
  [OpenAIModelID.GPT_3_5_TURBO]: {
    id: OpenAIModelID.GPT_3_5_TURBO,
    name: 'GPT-3.5 Turbo',
    maxLength: 4096,
    tokenLimit: 4096,
  },
  [OpenAIModelID.GPT_3_5_TURBO_0613]: {
    id: OpenAIModelID.GPT_3_5_TURBO_0613,
    name: 'GPT-3.5 Turbo 0613',
    maxLength: 4096,
    tokenLimit: 4096,
  },
  [OpenAIModelID.GPT_3_5_TURBO_16K]: {
    id: OpenAIModelID.GPT_3_5_TURBO_16K,
    name: 'GPT-3.5 Turbo 16K',
    maxLength: 16384,
    tokenLimit: 16384,
  },
  [OpenAIModelID.GPT_3_5_TURBO_16K_POE]: {
    id: OpenAIModelID.GPT_3_5_TURBO_16K_POE,
    name: 'GPT-3.5 Turbo 16K Poe',
    maxLength: 16384,
    tokenLimit: 16384,
  },
  [OpenAIModelID.GPT_3_5_TURBO_16K_0613]: {
    id: OpenAIModelID.GPT_3_5_TURBO_16K_0613,
    name: 'GPT-3.5 Turbo 16K 0613',
    maxLength: 16384,
    tokenLimit: 16384,
  },
  [OpenAIModelID.GPT_4_0613]: {
    id: OpenAIModelID.GPT_4_0613,
    name: 'GPT-4 0613',
    maxLength: 8192,
    tokenLimit: 8192,
  },
  [OpenAIModelID.GPT_4]: {
    id: OpenAIModelID.GPT_4,
    name: 'GPT-4',
    maxLength: 8192,
    tokenLimit: 8192,
  },
  [OpenAIModelID.GPT_4_POE]: {
    id: OpenAIModelID.GPT_4_POE,
    name: 'GPT-4 Poe',
    maxLength: 8192,
    tokenLimit: 8192,
  },
  [OpenAIModelID.GPT_4_32K_0613]: {
    id: OpenAIModelID.GPT_4_32K_0613,
    name: 'GPT-4 32K 0613',
    maxLength: 32768,
    tokenLimit: 32768,
  },
  [OpenAIModelID.GPT_4_32K]: {
    id: OpenAIModelID.GPT_4_32K,
    name: 'GPT-4 32K',
    maxLength: 32768,
    tokenLimit: 32768,
  },
  [OpenAIModelID.GPT_4_32K_POE]: {
    id: OpenAIModelID.GPT_4_32K_POE,
    name: 'GPT-4 32K Poe',
    maxLength: 32768,
    tokenLimit: 32768,
  },
  [OpenAIModelID.CLAUDE_2_100K]: {
    id: OpenAIModelID.CLAUDE_2_100K,
    name: 'Claude-2 100K',
    maxLength: 100000, // assuming max token changes to 100K
    tokenLimit: 100000, // assuming max token changes to 100K
  },
};
  
