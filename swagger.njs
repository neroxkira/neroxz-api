var spec = {
  "openapi": "3.0.0",
  "info": {
    "description": "[API](/api)\n\nWelcome to Playground The purpose of this page is to document and test the API.\n\nInformation : [Channel WhatsApp](https://whatsapp.com/channel/0029VaG1DsA2kNFtAcwamK13)",
    "version": "1.0.0",
    "title": "Neroxz APIs",
    "contact": {
      "email": "tioclkp02@gmail.com"
    },
    "license": {
      "name": "Apache 2.0",
      "url": "http://www.apache.org/licenses/LICENSE-2.0.html"
    }
  },
  "servers": [
    {
      "url": "https://widipe.com",
      "description": "Widipe"
    },
    {
      "url": "https://meitang.xyz",
      "description": "美堂"
    },
    {
      "url": "https://aemt.uk.to",
      "description": "Aemt"
    }
  ],
  "paths": {
    "/openai": {
      "get": {
        "summary": "",
        "operationId": "get_chatGPT_completions_AI",
        "tags": [
          "AI"
        ],
        "parameters": [
          {
            "name": "text",
            "in": "query",
            "description": "Text",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/JsonResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
          }
        }
      }
    },
    "/post/openai": {
      "post": {
        "summary": "",
        "operationId": "post_chatGPT_completions",
        "tags": [
          "AI"
        ],
        "requestBody": {
          "description": "Text to be sent to OpenAI",
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "text": {
                    "type": "string",
                    "description": "Text to be sent to OpenAI"
                  }
                },
                "required": ["text"]
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "status": {
                      "type": "boolean",
                      "description": "Indicates if the request was successful"
                    },
                    "creator": {
                      "type": "string",
                      "description": "Creator of the response"
                    },
                    "result": {
                      "type": "string",
                      "description": "The generated response from OpenAI"
                    }
                  }
                }
              }
            }
          },
          "400": {
            "description": "Illegal input received."
          }
        }
      }
    },
  "/post/gpt-prompt": {
    "post": {
      "summary": "",
      "operationId": "post_gpt_prompt",
      "tags": [
        "AI"
      ],
      "requestBody": {
        "description": "Array of messages to be sent to GPT",
        "required": true,
        "content": {
          "application/json": {
            "schema": {
              "type": "object",
              "properties": {
                "messages": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "role": {
                        "type": "string",
                        "description": "Role of the message sender (e.g., 'user', 'assistant')"
                      },
                      "content": {
                        "type": "string",
                        "description": "Content of the message"
                      }
                    },
                    "required": ["role", "content"]
                  }
                }
              },
              "required": ["messages"],
              "example": {
                "messages": [
                  {
                    "role": "assistant",
                    "content": "Hello! How are you today?"
                  },
                  {
                    "role": "user",
                    "content": "Hello, my name is Tio"
                  },
                  {
                    "role": "assistant",
                    "content": "Hello, Tio! How are you today?"
                  },
                  {
                    "role": "user",
                    "content": "Can you repeat my name?"
                  }
                ]
              }
            }
          }
        }
      },
      "responses": {
        "200": {
          "description": "Success",
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "status": {
                    "type": "boolean",
                    "description": "Indicates if the request was successful"
                  },
                  "creator": {
                    "type": "string",
                    "description": "Creator of the response"
                  },
                  "result": {
                    "type": "string",
                    "description": "The generated response from GPT"
                  }
                }
              }
            }
          }
        },
        "400": {
          "description": "Please provide the messages in the request body."
        },
        "500": {
          "description": "An error occurred during data fetching."
          }
        }
      }
    },
      "/toanime": {
      "get": {
        "summary": "",
        "operationId": "get_image_toanime",
        "tags": [
          "AI"
        ],
        "parameters": [
          {
            "name": "url",
            "in": "query",
            "description": "image",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UrlResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
    "/dalle": {
      "get": {
        "summary": "",
        "operationId": "get_dall_e_image",
        "tags": [
          "AI"
        ],
        "parameters": [
          {
            "name": "text",
            "in": "query",
            "description": "Text",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "image/jpeg": {
                "schema": {
                  "$ref": "#/components/schemas/ImageResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
          }
        }
      }
    },
      "/ai/text2img": {
      "get": {
        "summary": "",
        "operationId": "get_text2img_image_1",
        "tags": [
          "AI"
        ],
        "parameters": [
          {
            "name": "text",
            "in": "query",
            "description": "Text",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "image/jpeg": {
                "schema": {
                  "$ref": "#/components/schemas/ImageResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
          }
        }
      }
    },
      "/v1/text2img": {
      "get": {
        "summary": "",
        "operationId": "get_text2img_image_2",
        "tags": [
          "AI"
        ],
        "parameters": [
          {
            "name": "text",
            "in": "query",
            "description": "Text",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "image/jpeg": {
                "schema": {
                  "$ref": "#/components/schemas/ImageResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
          }
        }
      }
    },
     "/v2/text2img": {
      "get": {
        "summary": "",
        "operationId": "get_text2img_image_3",
        "tags": [
          "AI"
        ],
        "parameters": [
          {
            "name": "text",
            "in": "query",
            "description": "Text",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "image/jpeg": {
                "schema": {
                  "$ref": "#/components/schemas/ImageResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
          }
        }
      }
    },
    "/v3/text2img": {
      "get": {
        "summary": "",
        "operationId": "get_text2img_image_5",
        "tags": [
          "AI"
        ],
        "parameters": [
          {
            "name": "text",
            "in": "query",
            "description": "Text",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "image/jpeg": {
                "schema": {
                  "$ref": "#/components/schemas/ImageResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
          }
        }
      }
    },
   "/v4/text2img": {
      "get": {
        "summary": "",
        "operationId": "get_text2img_image_6",
        "tags": [
          "AI"
        ],
        "parameters": [
          {
            "name": "text",
            "in": "query",
            "description": "Text",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "image/jpeg": {
                "schema": {
                  "$ref": "#/components/schemas/ImageResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
          }
        }
      }
    },
    "/v5/text2img": {
      "get": {
        "summary": "",
        "operationId": "get_text2img_image_7",
        "tags": [
          "AI"
        ],
        "parameters": [
          {
            "name": "text",
            "in": "query",
            "description": "Text",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "image/jpeg": {
                "schema": {
                  "$ref": "#/components/schemas/ImageResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
          }
        }
      }
    },
     "/v6/text2img": {
      "get": {
        "summary": "",
        "operationId": "get_text2img_image_8",
        "tags": [
          "AI"
        ],
        "parameters": [
          {
            "name": "text",
            "in": "query",
            "description": "Text",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "image/jpeg": {
                "schema": {
                  "$ref": "#/components/schemas/ImageResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
          }
        }
      }
    },
    "/openai-db": {
    "get": {
      "summary": "",
      "operationId": "get_chatGPT_completions_DB",
      "tags": [
        "AI"
      ],
      "parameters": [
        {
          "name": "user",
          "in": "query",
          "description": "User",
          "required": true,
          "schema": {
            "type": "string"
          }
        },
        {
          "name": "text",
          "in": "query",
          "description": "Text",
          "required": true,
          "schema": {
            "type": "string"
          }
        }
      ],
      "responses": {
        "200": {
          "description": "Success",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/JsonResponse"
              }
            }
          }
        },
        "400": {
          "$ref": "#/components/responses/IllegalInput"
          }
        }
      }
    },
  "/prompt/gpt": {
    "get": {
      "summary": "",
      "operationId": "get_chatGPT_completions_prompt",
      "tags": [
        "AI"
      ],
      "parameters": [
        {
          "name": "prompt",
          "in": "query",
          "description": "Prompt",
          "required": true,
          "schema": {
            "type": "string"
          }
        },
        {
          "name": "text",
          "in": "query",
          "description": "Text",
          "required": true,
          "schema": {
            "type": "string"
          }
        }
      ],
      "responses": {
        "200": {
          "description": "Success",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/JsonResponse"
              }
            }
          }
        },
        "400": {
          "$ref": "#/components/responses/IllegalInput"
          }
        }
      }
    },
    "/gptgo": {
      "get": {
        "summary": "",
        "operationId": "get_chatGPT_Go_completions",
        "tags": [
          "AI"
        ],
        "parameters": [
          {
            "name": "text",
            "in": "query",
            "description": "Text",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/JsonResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
          }
        }
      }
    },
      "/blackbox": {
      "get": {
        "summary": "",
        "operationId": "get_chat_AI_blackbox_completions",
        "tags": [
          "AI"
        ],
        "parameters": [
          {
            "name": "text",
            "in": "query",
            "description": "Text",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/JsonResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
          }
        }
      }
    },
     "/gpt4": {
      "get": {
        "summary": "",
        "operationId": "get_chatGPT_completions",
        "tags": [
          "AI"
        ],
        "parameters": [
          {
            "name": "text",
            "in": "query",
            "description": "Text",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/JsonResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
          }
        }
      }
    },
     "/v2/gpt4": {
      "get": {
        "summary": "",
        "operationId": "get_chatGPT_completions_ai",
        "tags": [
          "AI"
        ],
        "parameters": [
          {
            "name": "text",
            "in": "query",
            "description": "Text",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/JsonResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
          }
        }
      }
    },
     "/v3/gpt4": {
      "get": {
        "summary": "",
        "operationId": "get_chatGPT_completions_ai_3",
        "tags": [
          "AI"
        ],
        "parameters": [
          {
            "name": "text",
            "in": "query",
            "description": "Text",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/JsonResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
          }
        }
      }
    },
    "/turbo": {
      "get": {
        "summary": "",
        "operationId": "get_chatGPT_completions_turbo",
        "tags": [
          "AI"
        ],
        "parameters": [
          {
            "name": "text",
            "in": "query",
            "description": "Text",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/JsonResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
          }
        }
      }
    },
   "/v2/turbo": {
      "get": {
        "summary": "",
        "operationId": "get_chatGPT_completions_turbo2",
        "tags": [
          "AI"
        ],
        "parameters": [
          {
            "name": "text",
            "in": "query",
            "description": "Text",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/JsonResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
          }
        }
      }
    },
   "/v3/turbo": {
      "get": {
        "summary": "",
        "operationId": "get_chatGPT_completions_turbo3",
        "tags": [
          "AI"
        ],
        "parameters": [
          {
            "name": "text",
            "in": "query",
            "description": "Text",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/JsonResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
          }
        }
      }
    },
   "/gemini": {
      "get": {
        "summary": "",
        "operationId": "get_chatGPT_completions_gemini",
        "tags": [
          "AI"
        ],
        "parameters": [
          {
            "name": "text",
            "in": "query",
            "description": "Text",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/JsonResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
          }
        }
      }
    },
   "/bard": {
      "get": {
        "summary": "",
        "operationId": "get_chatGPT_bard_completions",
        "tags": [
          "AI"
        ],
        "parameters": [
          {
            "name": "text",
            "in": "query",
            "description": "Text",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/JsonResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
          }
        }
      }
    },
  "/bardimg": {
    "get": {
      "summary": "",
      "operationId": "get_bardImg_response",
      "tags": [
        "AI"
      ],
      "parameters": [
        {
          "name": "url",
          "in": "query",
          "description": "Image",
          "required": true,
          "schema": {
            "type": "string"
          }
        },
        {
          "name": "text",
          "in": "query",
          "description": "Text",
          "required": true,
          "schema": {
            "type": "string"
          }
        }
      ],
      "responses": {
        "200": {
          "description": "Success",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/JsonResponse"
              }
            }
          }
        },
        "400": {
          "$ref": "#/components/responses/IllegalInput"
          }
        }
      }
    },
   "/bingai": {
      "get": {
        "summary": "",
        "operationId": "get_chat_Ai_bing_completions",
        "tags": [
          "AI"
        ],
        "parameters": [
          {
            "name": "text",
            "in": "query",
            "description": "Text",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/JsonResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
          }
        }
      }
    },
     "/bingimg": {
      "get": {
        "summary": "",
        "operationId": "get_chat_ai_bing_image_completions",
        "tags": [
          "AI"
        ],
        "parameters": [
          {
            "name": "text",
            "in": "query",
            "description": "Text",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/JsonResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
          }
        }
      }
    },
    "/lepton": {
      "get": {
        "summary": "",
        "operationId": "get_ai_lepton",
        "tags": [
          "AI"
        ],
        "parameters": [
          {
            "name": "text",
            "in": "query",
            "description": "Text",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/JsonResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
          }
        }
      }
    },
    "/ai/c-ai": {
    "get": {
      "summary": "",
      "operationId": "get_chatGPT_ai_character",
      "tags": [
        "AI"
      ],
      "parameters": [
        {
          "name": "prompt",
          "in": "query",
          "description": "Prompt",
          "required": true,
          "schema": {
            "type": "string"
          }
        },
        {
          "name": "text",
          "in": "query",
          "description": "Text",
          "required": true,
          "schema": {
            "type": "string"
          }
        }
      ],
      "responses": {
        "200": {
          "description": "Success",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/JsonResponse"
              }
            }
          }
        },
        "400": {
          "$ref": "#/components/responses/IllegalInput"
          }
        }
      }
    },
  "/stablediffusion": {
      "get": {
       "summary": "",
        "operationId": "get_stablediffusion_image",
        "tags": [
          "AI"
        ],
        "parameters": [
          {
            "name": "text",
            "in": "query",
            "description": "Text",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "image/jpeg": {
                "schema": {
                  "$ref": "#/components/schemas/ImageResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
      }
    }
  }
},
 "/whatmusic": {
      "get": {
        "summary": "",
        "operationId": "get_info_title_music",
        "tags": [
          "AI"
        ],
        "parameters": [
          {
            "name": "url",
            "in": "query",
            "description": "music",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UrlResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
"/simi": {
      "get": {
        "summary": "",
        "operationId": "get_json_search_simi",
        "tags": [
          "AI"
        ],
        "parameters": [
          {
            "name": "text",
            "in": "query",
            "description": "Text",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/JsonResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
"/tts/tiktok": {
    "get": {
      "summary": "",
      "operationId": "get_data_ttstiktok",
      "tags": [
      "Downloader"
      ],
      "parameters": [
        {
          "name": "model",
          "in": "query",
          "description": "Model Ex: englishUS",
          "required": true,
          "schema": {
            "type": "string"
          }
        },
        {
          "name": "voice",
          "in": "query",
          "description": "Voice Ex: female",
          "required": true,
          "schema": {
            "type": "string"
          }
        },
        {
          "name": "text",
          "in": "query",
          "description": "Text TTS",
          "required": true,
          "schema": {
            "type": "string"
          }
        }
      ],
      "responses": {
        "200": {
          "description": "Success",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/JsonResponse"
              }
            }
          }
        },
        "400": {
          "$ref": "#/components/responses/IllegalInput"
          }
        }
      }
    },
"/tts/tiktok/endpoint": {
  "get": {
    "summary": "",
    "operationId": "get_json_tts_model",
    "tags": [
      "Downloader"
    ],
    "responses": {
      "200": {
        "description": "Success",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/JsonResponse"
            }
          }
        }
      },
      "400": {
        "$ref": "#/components/responses/BadRequestResponse"
      }
    }
  }
},
"/download/bingjson": {
  "get": {
    "summary": "",
    "operationId": "get_download_bing_json",
    "tags": [
      "Downloader"
    ],
    "responses": {
      "200": {
        "description": "Success",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/JsonResponse"
            }
          }
        }
      },
      "400": {
        "$ref": "#/components/responses/BadRequestResponse"
      }
    }
  }
},
  "/download/bing": {
  "get": {
    "summary": "",
    "operationId": "get_download_image",
    "tags": [
      "Downloader"
    ],
    "responses": {
      "200": {
        "description": "Success",
        "content": {
          "image/jpeg": {
            "schema": {
              "$ref": "#/components/schemas/ImageResponse"
            }
          }
        }
      },
      "400": {
        "$ref": "#/components/responses/BadRequestResponse"
        
      }
    }
  }
},
   
  "/download/storyanime": {
  "get": {
    "summary": "",
    "operationId": "get_download_story_anime",
    "tags": [
      "Downloader"
    ],
    "responses": {
      "200": {
        "description": "Success",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/JsonResponse"
            }
          }
        }
      },
      "400": {
        "$ref": "#/components/responses/BadRequestResponse"
        
      }
    }
  }
},
 "/download/tiktokslide": {
      "get": {
        "summary": "",
        "operationId": "get_download_tiktok_slide",
        "tags": [
          "Downloader"
        ],
        "parameters": [
          {
            "name": "url",
            "in": "query",
            "description": "Url",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UrlResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
 "/soundcloud": {
      "get": {
        "summary": "",
        "operationId": "get_download_json_scd",
        "tags": [
          "Downloader"
        ],
        "parameters": [
          {
            "name": "url",
            "in": "query",
            "description": "Url",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UrlResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
 "/filmapikdl": {
      "get": {
        "summary": "",
        "operationId": "get_download_json_flm",
        "tags": [
          "Downloader"
        ],
        "parameters": [
          {
            "name": "url",
            "in": "query",
            "description": "Url",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UrlResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},

"/gore": {
  "get": {
    "summary": "",
    "operationId": "get_download_json_gore",
    "tags": [
      "Downloader"
    ],
    "responses": {
      "200": {
        "description": "Success",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/JsonResponse"
            }
          }
        }
      },
      "400": {
        "$ref": "#/components/responses/BadRequestResponse"
      }
    }
  }
},
"/randomgore": {
  "get": {
    "summary": "",
    "operationId": "get_download_json_gore_1",
    "tags": [
      "Downloader"
    ],
    "responses": {
      "200": {
        "description": "Success",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/JsonResponse"
            }
          }
        }
      },
      "400": {
        "$ref": "#/components/responses/BadRequestResponse"
      }
    }
  }
},
 "/download/threads": {
      "get": {
        "summary": "",
        "operationId": "get_download_threadsdl",
        "tags": [
          "Downloader"
        ],
        "parameters": [
          {
            "name": "url",
            "in": "query",
            "description": "Url",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UrlResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
 "/download/pindl": {
      "get": {
        "summary": "",
        "operationId": "get_download_pinterest",
        "tags": [
          "Downloader"
        ],
        "parameters": [
          {
            "name": "url",
            "in": "query",
            "description": "Url",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UrlResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
 "/download/aio": {
      "get": {
        "summary": "",
        "operationId": "get_download_aio",
        "tags": [
          "Downloader"
        ],
        "parameters": [
          {
            "name": "url",
            "in": "query",
            "description": "Url",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UrlResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
 "/download/ttdl": {
      "get": {
        "summary": "",
        "operationId": "get_download_ttdl",
        "tags": [
          "Downloader"
        ],
        "parameters": [
          {
            "name": "url",
            "in": "query",
            "description": "Url",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UrlResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
 "/download/v2/ttdl": {
      "get": {
        "summary": "",
        "operationId": "get_download_ttdl_2",
        "tags": [
          "Downloader"
        ],
        "parameters": [
          {
            "name": "url",
            "in": "query",
            "description": "Url",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UrlResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
 "/download/tikdl": {
      "get": {
        "summary": "",
        "operationId": "get_download_tikdl",
        "tags": [
          "Downloader"
        ],
        "parameters": [
          {
            "name": "url",
            "in": "query",
            "description": "Url",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UrlResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
"/download/igdl": {
      "get": {
        "summary": "",
        "operationId": "get_download_igdl",
        "tags": [
          "Downloader"
        ],
        "parameters": [
          {
            "name": "url",
            "in": "query",
            "description": "Url",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UrlResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
 "/download/igstalk": {
      "get": {
        "summary": "",
        "operationId": "get_download_data_igstalk",
        "tags": [
          "Downloader"
        ],
        "parameters": [
          {
            "name": "username",
            "in": "query",
            "description": "Username",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/JsonResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
 "/download/tiktokdl": {
      "get": {
        "summary": "",
        "operationId": "get_download_tiktokdl",
        "tags": [
          "Downloader"
        ],
        "parameters": [
          {
            "name": "url",
            "in": "query",
            "description": "Url",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UrlResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
 "/download/asupantt": {
      "get": {
        "summary": "",
        "operationId": "get_download_asupan_tt",
        "tags": [
          "Downloader"
        ],
        "parameters": [
          {
            "name": "username",
            "in": "query",
            "description": "Uasername",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/JsonResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
 "/lirik": {
      "get": {
        "summary": "",
        "operationId": "get_download_lirik",
        "tags": [
          "Downloader"
        ],
        "parameters": [
          {
            "name": "text",
            "in": "query",
            "description": "Text",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/JsonResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},

 "/mediafire": {
      "get": {
        "summary": "",
        "operationId": "get_download_mediafire",
        "tags": [
          "Downloader"
        ],
        "parameters": [
          {
            "name": "link",
            "in": "query",
            "description": "Link",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UrlResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
  "/asupandouyin": {
  "get": {
    "summary": "",
    "operationId": "get_download_asupandouyin",
    "tags": [
      "Downloader"
    ],
    "responses": {
      "200": {
        "description": "Success",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/JsonResponse"
            }
          }
        }
      },
      "400": {
        "$ref": "#/components/responses/BadRequestResponse"
        
      }
    }
  }
},
  "/asupan": {
  "get": {
    "summary": "",
    "operationId": "get_download_asupan",
    "tags": [
      "Downloader"
    ],
    "responses": {
      "200": {
        "description": "Success",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/JsonResponse"
            }
          }
        }
      },
      "400": {
        "$ref": "#/components/responses/BadRequestResponse"
        
      }
    }
  }
},
      "/download/capcut": {
      "get": {
        "summary": "",
        "operationId": "get_download_capcut",
        "tags": [
          "Downloader"
        ],
        "parameters": [
          {
            "name": "url",
            "in": "query",
            "description": "Url",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UrlResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
 "/download/tiktokstalk": {
      "get": {
        "summary": "",
        "operationId": "get_download_tiktok_tiktokstalk",
        "tags": [
          "Downloader"
        ],
        "parameters": [
          {
            "name": "username",
            "in": "query",
            "description": "Username",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/JsonResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
    "/download/youtubestalk": {
      "get": {
        "summary": "",
        "operationId": "get_download_data_youtubestalk",
        "tags": [
          "Downloader"
        ],
        "parameters": [
          {
            "name": "text",
            "in": "query",
            "description": "text",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/JsonResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
"/download/fbdl": {
      "get": {
        "summary": "",
        "operationId": "get_download_fbdl",
        "tags": [
          "Downloader"
        ],
        "parameters": [
          {
            "name": "url",
            "in": "query",
            "description": "Url",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UrlResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
  "/download/fbdown": {
      "get": {
        "summary": "",
        "operationId": "get_download_fbown",
        "tags": [
          "Downloader"
        ],
        "parameters": [
          {
            "name": "url",
            "in": "query",
            "description": "Url",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UrlResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
  "/download/gdrive": {
      "get": {
        "summary": "",
        "operationId": "get_download_gdrive",
        "tags": [
          "Downloader"
        ],
        "parameters": [
          {
            "name": "url",
            "in": "query",
            "description": "Url",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UrlResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
 "/download/douyinslide": {
      "get": {
        "summary": "",
        "operationId": "get_download_douyinslide",
        "tags": [
          "Downloader"
        ],
        "parameters": [
          {
            "name": "url",
            "in": "query",
            "description": "Url",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UrlResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
"/download/douyin": {
      "get": {
        "summary": "",
        "operationId": "get_download_douyin",
        "tags": [
          "Downloader"
        ],
        "parameters": [
          {
            "name": "url",
            "in": "query",
            "description": "Url",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UrlResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
"/download/ytdl": {
      "get": {
        "summary": "",
        "operationId": "get_download_ytdl",
        "tags": [
          "Downloader"
        ],
        "parameters": [
          {
            "name": "url",
            "in": "query",
            "description": "Url",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UrlResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
"/download/twtdl": {
      "get": {
        "summary": "",
        "operationId": "get_download_twdl",
        "tags": [
          "Downloader"
        ],
        "parameters": [
          {
            "name": "url",
            "in": "query",
            "description": "Url",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UrlResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
"/download/likee": {
      "get": {
        "summary": "",
        "operationId": "get_download_likee",
        "tags": [
          "Downloader"
        ],
        "parameters": [
          {
            "name": "url",
            "in": "query",
            "description": "Url",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UrlResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
"/sshp": {
      "get": {
        "summary": "",
        "operationId": "get_screenshot_hp",
        "tags": [
          "Tools"
        ],
        "parameters": [
          {
            "name": "url",
            "in": "query",
            "description": "Ex: https://google.com",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "image/jpeg": {
                "schema": {
                  "$ref": "#/components/schemas/ImageResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
 "/sspc": {
      "get": {
        "summary": "",
        "operationId": "get_screenshot_pc",
        "tags": [
          "Tools"
        ],
        "parameters": [
          {
            "name": "url",
            "in": "query",
            "description": "Ex: https://google.com",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "image/jpeg": {
                "schema": {
                  "$ref": "#/components/schemas/ImageResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
 "/sstab": {
      "get": {
        "summary": "",
        "operationId": "get_screenshot_tab",
        "tags": [
          "Tools"
        ],
        "parameters": [
          {
            "name": "url",
            "in": "query",
            "description": "Ex: https://google.com",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "image/jpeg": {
                "schema": {
                  "$ref": "#/components/schemas/ImageResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
 "/ssfull": {
      "get": {
        "summary": "",
        "operationId": "get_screenshot_full",
        "tags": [
          "Tools"
        ],
        "parameters": [
          {
            "name": "url",
            "in": "query",
            "description": "Ex: https://google.com",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "image/jpeg": {
                "schema": {
                  "$ref": "#/components/schemas/ImageResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},

// Canvas 
      "/ttp": {
      "get": {
        "summary": "",
        "operationId": "get_canvas_ttp",
        "tags": [
          "Canvas"
        ],
        "parameters": [
          {
            "name": "text",
            "in": "query",
            "description": "Text",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "image/jpeg": {
                "schema": {
                  "$ref": "#/components/schemas/JsonResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/ImageResponse"
       }
    }
  }
},
     "/attp": {
      "get": {
        "summary": "",
        "operationId": "get_canvas_attp",
        "tags": [
          "Canvas"
        ],
        "parameters": [
          {
            "name": "text",
            "in": "query",
            "description": "Text",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "image/gif": {
                "schema": {
                  "$ref": "#/components/schemas/JsonResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
"/welcome": {
  "get": {
    "summary": "",
    "operationId": "get_canvas_welcome",
    "tags": [
      "Canvas"
    ],
    "parameters": [
      {
        "name": "name",
        "in": "query",
        "description": "Name",
        "required": true,
        "schema": {
          "type": "string"
        }
      },
      {
        "name": "gcname",
        "in": "query",
        "description": "GC Name",
        "required": false,
        "schema": {
          "type": "string"
        }
      },
      {
        "name": "ppgc",
        "in": "query",
        "description": "image",
        "required": false,
        "schema": {
          "type": "string"
        }
      },
      {
        "name": "member",
        "in": "query",
        "description": "Member",
        "required": false,
        "schema": {
          "type": "string"
        }
      },
      {
        "name": "pp",
        "in": "query",
        "description": "image",
        "required": false,
        "schema": {
          "type": "string"
        }
      },
      {
        "name": "bg",
        "in": "query",
        "description": "Background",
        "required": false,
        "schema": {
          "type": "string"
        }
      }
    ],
    "responses": {
      "200": {
        "description": "Success",
        "content": {
          "image/jpeg": {
            "schema": {
              "$ref": "#/components/schemas/ImageResponse"
            }
          }
        }
      },
      "400": {
        "$ref": "#/components/responses/IllegalInput"
      }
    }
  }
},
"/welcome2": {
  "get": {
    "summary": "",
    "operationId": "get_canvas_welcome2",
    "tags": [
      "Canvas"
    ],
    "parameters": [
      {
        "name": "name",
        "in": "query",
        "description": "Name",
        "required": true,
        "schema": {
          "type": "string"
        }
      },
      {
        "name": "gcname",
        "in": "query",
        "description": "GC Name",
        "required": false,
        "schema": {
          "type": "string"
        }
      },
      {
        "name": "ppgc",
        "in": "query",
        "description": "image",
        "required": false,
        "schema": {
          "type": "string"
        }
      },
      {
        "name": "member",
        "in": "query",
        "description": "Member",
        "required": false,
        "schema": {
          "type": "string"
        }
      },
      {
        "name": "pp",
        "in": "query",
        "description": "image",
        "required": false,
        "schema": {
          "type": "string"
        }
      },
      {
        "name": "bg",
        "in": "query",
        "description": "Background",
        "required": false,
        "schema": {
          "type": "string"
        }
      }
    ],
    "responses": {
      "200": {
        "description": "Success",
        "content": {
          "image/jpeg": {
            "schema": {
              "$ref": "#/components/schemas/ImageResponse"
            }
          }
        }
      },
      "400": {
        "$ref": "#/components/responses/IllegalInput"
      }
    }
  }
},
"/welcome3": {
  "get": {
    "summary": "",
    "operationId": "get_canvas_welcome3",
    "tags": [
      "Canvas"
    ],
    "parameters": [
      {
        "name": "name",
        "in": "query",
        "description": "Name",
        "required": true,
        "schema": {
          "type": "string"
        }
      },
      {
        "name": "gcname",
        "in": "query",
        "description": "GC Name",
        "required": false,
        "schema": {
          "type": "string"
        }
      },
      {
        "name": "ppgc",
        "in": "query",
        "description": "image",
        "required": false,
        "schema": {
          "type": "string"
        }
      },
      {
        "name": "member",
        "in": "query",
        "description": "Member",
        "required": false,
        "schema": {
          "type": "string"
        }
      },
      {
        "name": "pp",
        "in": "query",
        "description": "image",
        "required": false,
        "schema": {
          "type": "string"
        }
      },
      {
        "name": "bg",
        "in": "query",
        "description": "Background",
        "required": false,
        "schema": {
          "type": "string"
        }
      }
    ],
    "responses": {
      "200": {
        "description": "Success",
        "content": {
          "image/jpeg": {
            "schema": {
              "$ref": "#/components/schemas/ImageResponse"
            }
          }
        }
      },
      "400": {
        "$ref": "#/components/responses/IllegalInput"
      }
    }
  }
},

"/goodbye": {
  "get": {
    "summary": "",
    "operationId": "get_canvas_goodbye",
    "tags": [
      "Canvas"
    ],
    "parameters": [
      {
        "name": "name",
        "in": "query",
        "description": "Name",
        "required": true,
        "schema": {
          "type": "string"
        }
      },
      {
        "name": "gcname",
        "in": "query",
        "description": "GC Name",
        "required": false,
        "schema": {
          "type": "string"
        }
      },
      {
        "name": "ppgc",
        "in": "query",
        "description": "image",
        "required": false,
        "schema": {
          "type": "string"
        }
      },
      {
        "name": "member",
        "in": "query",
        "description": "Member",
        "required": false,
        "schema": {
          "type": "string"
        }
      },
      {
        "name": "pp",
        "in": "query",
        "description": "image",
        "required": false,
        "schema": {
          "type": "string"
        }
      },
      {
        "name": "bg",
        "in": "query",
        "description": "Background",
        "required": false,
        "schema": {
          "type": "string"
        }
      }
    ],
    "responses": {
      "200": {
        "description": "Success",
        "content": {
          "image/jpeg": {
            "schema": {
              "$ref": "#/components/schemas/ImageResponse"
            }
          }
        }
      },
      "400": {
        "$ref": "#/components/responses/IllegalInput"
      }
    }
  }
},
"/hacker": {
      "get": {
        "summary": "",
        "operationId": "get_canvas_hacker",
        "tags": [
          "Canvas"
        ],
        "parameters": [
          {
            "name": "link",
            "in": "query",
            "description": "image",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "image/jpeg": {
                "schema": {
                  "$ref": "#/components/schemas/ImageResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
"/hacker2": {
      "get": {
        "summary": "",
        "operationId": "get_canvas_hacker2",
        "tags": [
          "Canvas"
        ],
        "parameters": [
          {
            "name": "link",
            "in": "query",
            "description": "image",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "image/jpeg": {
                "schema": {
                  "$ref": "#/components/schemas/ImageResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
"/circle": {
      "get": {
        "summary": "",
        "operationId": "get_canvas_circle",
        "tags": [
          "Canvas"
        ],
        "parameters": [
          {
            "name": "url",
            "in": "query",
            "description": "image url",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "image/png": {
                "schema": {
                  "$ref": "#/components/schemas/ImageResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
"/beautiful": {
      "get": {
        "summary": "",
        "operationId": "get_canvas_beautiful",
        "tags": [
          "Canvas"
        ],
        "parameters": [
          {
            "name": "url",
            "in": "query",
            "description": "image url",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "image/png": {
                "schema": {
                  "$ref": "#/components/schemas/ImageResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
"/blur": {
      "get": {
        "summary": "",
        "operationId": "get_canvas_blur",
        "tags": [
          "Canvas"
        ],
        "parameters": [
          {
            "name": "url",
            "in": "query",
            "description": "image url",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "image/png": {
                "schema": {
                  "$ref": "#/components/schemas/ImageResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
"/facepalm": {
      "get": {
        "summary": "",
        "operationId": "get_canvas_facepalm",
        "tags": [
          "Canvas"
        ],
        "parameters": [
          {
            "name": "url",
            "in": "query",
            "description": "image url",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "image/png": {
                "schema": {
                  "$ref": "#/components/schemas/ImageResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
"/rainbow": {
      "get": {
        "summary": "",
        "operationId": "get_canvas_rainbow",
        "tags": [
          "Canvas"
        ],
        "parameters": [
          {
            "name": "url",
            "in": "query",
            "description": "image url",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "image/png": {
                "schema": {
                  "$ref": "#/components/schemas/ImageResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
"/invert": {
      "get": {
        "summary": "",
        "operationId": "get_canvas_invert",
        "tags": [
          "Canvas"
        ],
        "parameters": [
          {
            "name": "url",
            "in": "query",
            "description": "image url",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "image/png": {
                "schema": {
                  "$ref": "#/components/schemas/ImageResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
"/wanted": {
      "get": {
        "summary": "",
        "operationId": "get_canvas_wanted",
        "tags": [
          "Canvas"
        ],
        "parameters": [
          {
            "name": "url",
            "in": "query",
            "description": "image url",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "image/png": {
                "schema": {
                  "$ref": "#/components/schemas/ImageResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
"/wasted": {
      "get": {
        "summary": "",
        "operationId": "get_canvas_wasted",
        "tags": [
          "Canvas"
        ],
        "parameters": [
          {
            "name": "url",
            "in": "query",
            "description": "image url",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "image/png": {
                "schema": {
                  "$ref": "#/components/schemas/ImageResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
"/trigger": {
      "get": {
        "summary": "",
        "operationId": "get_canvas_trigger",
        "tags": [
          "Canvas"
        ],
        "parameters": [
          {
            "name": "url",
            "in": "query",
            "description": "image url",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "image/gif": {
                "schema": {
                  "$ref": "#/components/schemas/ImageResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
"/darkness": {
    "get": {
    "summary": "",
      "operationId": "get_canvas_darkness",
      "tags": [
        "Canvas"
      ],
      "parameters": [
        {
          "name": "url",
          "in": "query",
          "description": "Image",
          "required": true,
          "schema": {
            "type": "string"
          }
        },
        {
          "name": "no",
          "in": "query",
          "description": "number 1-100",
          "required": true,
          "schema": {
            "type": "string"
          }
        }
      ],
      "responses": {
        "200": {
          "description": "Success",
          "content": {
            "image/png": {
              "schema": {
                "$ref": "#/components/schemas/ImageResponse"
              }
            }
          }
        },
        "400": {
          "$ref": "#/components/responses/IllegalInput"
          }
        }
      }
    },
"/pixelate": {
    "get": {
    "summary": "",
      "operationId": "get_canvas_pixelate",
      "tags": [
        "Canvas"
      ],
      "parameters": [
        {
          "name": "url",
          "in": "query",
          "description": "Image",
          "required": true,
          "schema": {
            "type": "string"
          }
        },
        {
          "name": "amount",
          "in": "query",
          "description": "number 0-100",
          "required": true,
          "schema": {
            "type": "string"
          }
        }
      ],
      "responses": {
        "200": {
          "description": "Success",
          "content": {
            "image/png": {
              "schema": {
                "$ref": "#/components/schemas/ImageResponse"
              }
            }
          }
        },
        "400": {
          "$ref": "#/components/responses/IllegalInput"
          }
        }
      }
    },
"/emojimix": {
    "get": {
    "summary": "",
      "operationId": "get_canvas_emojimix",
      "tags": [
        "Canvas"
      ],
      "parameters": [
        {
          "name": "emoji1",
          "in": "query",
          "description": "Emoji 1",
          "required": true,
          "schema": {
            "type": "string"
          }
        },
        {
          "name": "emoji2",
          "in": "query",
          "description": "Emoji 2",
          "required": true,
          "schema": {
            "type": "string"
          }
        }
      ],
      "responses": {
        "200": {
          "description": "Success",
          "content": {
            "image/png": {
              "schema": {
                "$ref": "#/components/schemas/ImageResponse"
              }
            }
          }
        },
        "400": {
          "$ref": "#/components/responses/IllegalInput"
          }
        }
      }
    },
"/resize": {
    "get": {
    "summary": "",
      "operationId": "get_canvas_resize",
      "tags": [
        "Canvas"
      ],
      "parameters": [
        {
          "name": "url",
          "in": "query",
          "description": "Image",
          "required": true,
          "schema": {
            "type": "string"
          }
        },
        {
          "name": "width",
          "in": "query",
          "description": "number",
          "required": true,
          "schema": {
            "type": "string"
          }
        },
        {
          "name": "height",
          "in": "query",
          "description": "number",
          "required": true,
          "schema": {
            "type": "string"
          }
        }
      ],
      "responses": {
        "200": {
          "description": "Success",
          "content": {
            "image/png": {
              "schema": {
                "$ref": "#/components/schemas/ImageResponse"
              }
            }
          }
        },
        "400": {
          "$ref": "#/components/responses/IllegalInput"
          }
        }
      }
    },
  "/gay": {
    "get": {
      "summary": "",
      "operationId": "get_canvas_gay",
      "tags": [
        "Canvas"
      ],
      "parameters": [
        {
          "name": "link",
          "in": "query",
          "description": "image",
          "required": true,
          "schema": {
            "type": "string"
          }
        },
        {
          "name": "nama",
          "in": "query",
          "description": "Nama",
          "required": true,
          "schema": {
            "type": "string"
          }
        },
        {
          "name": "persen",
          "in": "query",
          "description": "Persen",
          "required": true,
          "schema": {
            "type": "string"
          }
        }
      ],
      "responses": {
        "200": {
          "description": "Success",
          "content": {
            "image/jpeg": {
              "schema": {
                "$ref": "#/components/schemas/ImageResponse"
              }
            }
          }
        },
        "400": {
          "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
"/jadigta": {
      "get": {
        "summary": "",
        "operationId": "get_image_togta",
        "tags": [
          "Canvas"
        ],
        "parameters": [
          {
            "name": "url",
            "in": "query",
            "description": "image",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/JsonResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
"/quotely": {
  "get": {
    "summary": "",
    "operationId": "get_canvas_quote",
    "tags": [
      "Canvas"
    ],
    "parameters": [
      {
        "name": "avatar",
        "in": "query",
        "description": "Url",
        "required": true,
        "schema": {
          "type": "string"
        }
      },
      {
        "name": "name",
        "in": "query",
        "description": "Username",
        "required": true,
        "schema": {
          "type": "string"
        }
      },
      {
        "name": "text",
        "in": "query",
        "description": "Text",
        "required": true,
        "schema": {
          "type": "string"
        }
      }
    ],
    "responses": {
      "200": {
        "description": "Success",
        "content": {
          "image/jpeg": {
            "schema": {
              "$ref": "#/components/schemas/ImageResponse"
            }
          }
        }
      },
      "400": {
        "$ref": "#/components/responses/IllegalInput"
      }
    }
  }
},
"/remini": {
    "get": {
    "summary": "",
      "operationId": "get_canvas_remini",
      "tags": [
        "Canvas"
      ],
      "parameters": [
        {
          "name": "url",
          "in": "query",
          "description": "Image",
          "required": true,
          "schema": {
            "type": "string"
          }
        },
        {
          "name": "resolusi",
          "in": "query",
          "description": "Resolution available 2",
          "required": true,
          "schema": {
            "type": "string"
          }
        }
      ],
      "responses": {
        "200": {
          "description": "Success",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/UrlResponse"
              }
            }
          }
        },
        "400": {
          "$ref": "#/components/responses/IllegalInput"
          }
        }
      }
    },
      "/removebg": {
      "get": {
        "summary": "",
        "operationId": "get_image_remover",
        "tags": [
          "Canvas"
        ],
        "parameters": [
          {
            "name": "url",
            "in": "query",
            "description": "Image",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UrlResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
"/carbon": {
      "get": {
        "summary": "",
        "operationId": "get_image_carbon",
        "tags": [
          "Canvas"
        ],
        "parameters": [
          {
            "name": "text",
            "in": "query",
            "description": "Text",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "image/jpeg": {
                "schema": {
                  "$ref": "#/components/schemas/ImageResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
"/converter/zombie": {
      "get": {
        "summary": "",
        "operationId": "get_canvas_zombie",
        "tags": [
          "Canvas"
        ],
        "parameters": [
          {
            "name": "url",
            "in": "query",
            "description": "image",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "image/jpeg": {
                "schema": {
                  "$ref": "#/components/schemas/ImageResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
"/rankup": {
      "get": {
        "summary": "",
        "operationId": "get_canvas_rankup",
        "tags": [
          "Canvas"
        ],
        "parameters": [
          {
            "name": "avatar",
            "in": "query",
            "description": "image",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "image/png": {
                "schema": {
                  "$ref": "#/components/schemas/ImageResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},

//Search
 "/findsong": {
      "get": {
        "summary": "",
        "operationId": "get_search_song",
        "tags": [
          "Search"
        ],
        "parameters": [
          {
            "name": "text",
            "in": "query",
            "description": "Text",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/JsonResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
 "/bukalapak": {
      "get": {
        "summary": "",
        "operationId": "get_search_shop",
        "tags": [
          "Search"
        ],
        "parameters": [
          {
            "name": "text",
            "in": "query",
            "description": "Text",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/JsonResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
 "/styletext": {
      "get": {
        "summary": "",
        "operationId": "get_search_styletext",
        "tags": [
          "Search"
        ],
        "parameters": [
          {
            "name": "text",
            "in": "query",
            "description": "Text",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/JsonResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
 "/similarband": {
      "get": {
        "summary": "",
        "operationId": "get_search_band_info",
        "tags": [
          "Search"
        ],
        "parameters": [
          {
            "name": "text",
            "in": "query",
            "description": "Text",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/JsonResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
  "/kalender": {
    "get": {
      "summary": "",
      "operationId": "get_search_kelender",
      "tags": [
      "Search"
      ],
      "parameters": [
        {
          "name": "bulan",
          "in": "query",
          "description": "Bulan",
          "required": true,
          "schema": {
            "type": "string"
          }
        },
        {
          "name": "tahun",
          "in": "query",
          "description": "Tahun",
          "required": true,
          "schema": {
            "type": "string"
          }
        }
      ],
      "responses": {
        "200": {
          "description": "Success",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/JsonResponse"
              }
            }
          }
        },
        "400": {
          "$ref": "#/components/responses/IllegalInput"
          }
        }
      }
    },
 "/weather": {
      "get": {
        "summary": "",
        "operationId": "get_json_search_weather",
        "tags": [
          "Search"
        ],
        "parameters": [
          {
            "name": "text",
            "in": "query",
            "description": "City",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/JsonResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
"/jarak": {
    "get": {
      "summary": "",
      "operationId": "get_download_jarak",
      "tags": [
      "Search"
      ],
      "parameters": [
        {
          "name": "dari",
          "in": "query",
          "description": "Dari",
          "required": true,
          "schema": {
            "type": "string"
          }
        },
        {
          "name": "ke",
          "in": "query",
          "description": "ke",
          "required": true,
          "schema": {
            "type": "string"
          }
        }
      ],
      "responses": {
        "200": {
          "description": "Success",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/JsonResponse"
              }
            }
          }
        },
        "400": {
          "$ref": "#/components/responses/IllegalInput"
          }
        }
      }
    },
   "/filmapiksearch": {
              "get": {
                "summary": "",
                "operationId": "get_json_search_flm",
                "tags": [
                  "Search"
                ],
                "parameters": [
                  {
                    "name": "query",
                    "in": "query",
                    "description": "Query",
                    "required": true,
                    "schema": {
                      "type": "string"
                    }
                  }
                ],
                "responses": {
                  "200": {
                    "description": "Success",
                    "content": {
                      "application/json": {
                        "schema": {
                          "$ref": "#/components/schemas/JsonResponse"
                        }
                      }
                    }
                  },
                  "400": {
                    "$ref": "#/components/responses/IllegalInput"
               }
            }
          }
        },
     "/otakudesusearch": {
              "get": {
                "summary": "",
                "operationId": "get_json_search_otaku",
                "tags": [
                  "Search"
                ],
                "parameters": [
                  {
                    "name": "query",
                    "in": "query",
                    "description": "Query",
                    "required": true,
                    "schema": {
                      "type": "string"
                    }
                  }
                ],
                "responses": {
                  "200": {
                    "description": "Success",
                    "content": {
                      "application/json": {
                        "schema": {
                          "$ref": "#/components/schemas/JsonResponse"
                        }
                      }
                    }
                  },
                  "400": {
                    "$ref": "#/components/responses/IllegalInput"
               }
            }
          }
        },
   "/standings": {
              "get": {
                "summary": "",
                "operationId": "get_json_search_bola",
                "tags": [
                  "Search"
                ],
                "parameters": [
                  {
                    "name": "query",
                    "in": "query",
                    "description": "indonesia, italia, inggris, dll",
                    "required": true,
                    "schema": {
                      "type": "string"
                    }
                  }
                ],
                "responses": {
                  "200": {
                    "description": "Success",
                    "content": {
                      "application/json": {
                        "schema": {
                          "$ref": "#/components/schemas/JsonResponse"
                        }
                      }
                    }
                  },
                  "400": {
                    "$ref": "#/components/responses/IllegalInput"
               }
            }
          }
        },
    "/surah": {
      "get": {
        "summary": "",
        "operationId": "get_surah",
        "tags": [
          "Search"
        ],
        "parameters": [
          {
            "name": "no",
            "in": "query",
            "description": "number",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/JsonResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
          }
        }
      }
    },
    "/tafsirsurah": {
      "get": {
        "summary": "",
        "operationId": "get_tafsirsurah",
        "tags": [
          "Search"
        ],
        "parameters": [
          {
            "name": "text",
            "in": "query",
            "description": "Ex : Adam",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/JsonResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
          }
        }
      }
    },
    "/ringtone": {
      "get": {
        "summary": "",
        "operationId": "get_ringtone",
        "tags": [
          "Search"
        ],
        "parameters": [
          {
            "name": "text",
            "in": "query",
            "description": "Ex : Iphone",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/JsonResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},

"/cariresep": {
      "get": {
        "summary": "",
        "operationId": "get_json_search_resep",
        "tags": [
          "Search"
        ],
        "parameters": [
          {
            "name": "query",
            "in": "query",
            "description": "Query",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/JsonResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
"/bacaresep": {
      "get": {
        "summary": "",
        "operationId": "get_json_search_resep_4",
        "tags": [
          "Search"
        ],
        "parameters": [
          {
            "name": "link",
            "in": "query",
            "description": "Link",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/JsonResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
"/caribacaresep": {
      "get": {
        "summary": "",
        "operationId": "get_json_search_61",
        "tags": [
          "Search"
        ],
        "parameters": [
          {
            "name": "query",
            "in": "query",
            "description": "Query",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/JsonResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
"/pinterest": {
      "get": {
        "summary": "",
        "operationId": "get_json_search_pin",
        "tags": [
          "Search"
        ],
        "parameters": [
          {
            "name": "query",
            "in": "query",
            "description": "Query",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/JsonResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
"/happymod": {
      "get": {
        "summary": "",
        "operationId": "get_json_search_mod",
        "tags": [
          "Search"
        ],
        "parameters": [
          {
            "name": "query",
            "in": "query",
            "description": "Query",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/JsonResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
"/searchmod": {
      "get": {
        "summary": "",
        "operationId": "get_json_search_smod",
        "tags": [
          "Search"
        ],
        "parameters": [
          {
            "name": "query",
            "in": "query",
            "description": "Query",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/JsonResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
"/dlapk": {
      "get": {
        "summary": "",
        "operationId": "get_json_search_apk",
        "tags": [
          "Search"
        ],
        "parameters": [
          {
            "name": "url",
            "in": "query",
            "description": "Url",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/JsonResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
 "/jadwaltv": {
      "get": {
        "summary": "",
        "operationId": "get_json_search_tv_s",
        "tags": [
          "Search"
        ],
        "parameters": [
          {
            "name": "tv",
            "in": "query",
            "description": "TV",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/JsonResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
 "/googlesearch": {
      "get": {
        "summary": "",
        "operationId": "get_search_google",
        "tags": [
          "Search"
        ],
        "parameters": [
          {
            "name": "query",
            "in": "query",
            "description": "Ex: Indonesia",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/JsonResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
 "/gimage": {
      "get": {
        "summary": "",
        "operationId": "get_image_sarch",
        "tags": [
          "Search"
        ],
        "parameters": [
          {
            "name": "query",
            "in": "query",
            "description": "Query",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "image/jpeg": {
                "schema": {
                  "$ref": "#/components/schemas/ImageResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
 "/googleimage": {
      "get": {
        "summary": "",
        "operationId": "get_json_search_gm_img",
        "tags": [
          "Search"
        ],
        "parameters": [
          {
            "name": "query",
            "in": "query",
            "description": "Query",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/JsonResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
 "/wallpaper": {
      "get": {
        "summary": "",
        "operationId": "get_image_search",
        "tags": [
          "Search"
        ],
        "parameters": [
          {
            "name": "query",
            "in": "query",
            "description": "Query",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "image/jpeg": {
                "schema": {
                  "$ref": "#/components/schemas/ImageResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
 "/pinimg": {
      "get": {
        "summary": "",
        "operationId": "get_image_search",
        "tags": [
          "Search"
        ],
        "parameters": [
          {
            "name": "query",
            "in": "query",
            "description": "Query",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "image/jpeg": {
                "schema": {
                  "$ref": "#/components/schemas/ImageResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
 "/chord": {
      "get": {
        "summary": "",
        "operationId": "get_music_chord",
        "tags": [
          "Search"
        ],
        "parameters": [
          {
            "name": "query",
            "in": "query",
            "description": "title",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/JsonResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
"/gempa": {
  "get": {
    "summary": "",
    "operationId": "get_json_search_gempa",
    "tags": [
      "Search"
    ],
    "responses": {
      "200": {
        "description": "Success",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/JsonResponse"
            }
          }
        }
      },
      "400": {
        "$ref": "#/components/responses/BadRequestResponse"
      }
    }
  }
},
"/turnbackhoax": {
  "get": {
    "summary": "",
    "operationId": "get_json_search_hoax",
    "tags": [
      "Search"
    ],
    "responses": {
      "200": {
        "description": "Success",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/JsonResponse"
            }
          }
        }
      },
      "400": {
        "$ref": "#/components/responses/BadRequestResponse"
      }
    }
  }
},
"/cnn": {
  "get": {
    "summary": "",
    "operationId": "get JSON",
    "tags": [
      "Search"
    ],
    "responses": {
      "200": {
        "description": "Success",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/JsonResponse"
            }
          }
        }
      },
      "400": {
        "$ref": "#/components/responses/BadRequestResponse"
      }
    }
  }
},
"/liputan6": {
  "get": {
    "summary": "",
    "operationId": "get_json_search_liputan",
    "tags": [
      "Search"
    ],
    "responses": {
      "200": {
        "description": "Success",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/JsonResponse"
            }
          }
        }
      },
      "400": {
        "$ref": "#/components/responses/BadRequestResponse"
      }
    }
  }
},
"/cnbindonesia": {
  "get": {
    "summary": "",
    "operationId": "get_json_search_cnb",
    "tags": [
      "Search"
    ],
    "responses": {
      "200": {
        "description": "Success",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/JsonResponse"
            }
          }
        }
      },
      "400": {
        "$ref": "#/components/responses/BadRequestResponse"
      }
    }
  }
},
"/kompas": {
  "get": {
    "summary": "",
    "operationId": "get_json_search_kompas",
    "tags": [
      "Search"
    ],
    "responses": {
      "200": {
        "description": "Success",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/JsonResponse"
            }
          }
        }
      },
      "400": {
        "$ref": "#/components/responses/BadRequestResponse"
      }
    }
  }
},
"/antaranews": {
  "get": {
    "summary": "",
    "operationId": "get_json_search_antara",
    "tags": [
      "Search"
    ],
    "responses": {
      "200": {
        "description": "Success",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/JsonResponse"
            }
          }
        }
      },
      "400": {
        "$ref": "#/components/responses/BadRequestResponse"
      }
    }
  }
},
"/pixiv": {
      "get": {
        "summary": "",
        "operationId": "get_json_search_pixiv",
        "tags": [
          "Search"
        ],
        "parameters": [
          {
            "name": "query",
            "in": "query",
            "description": "Query",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/JsonResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
"/nsfwpixiv": {
      "get": {
        "summary": "",
        "operationId": "get_json_search_pixiv_nsfw",
        "tags": [
          "Search"
        ],
        "parameters": [
          {
            "name": "query",
            "in": "query",
            "description": "Query",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/JsonResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
"/pixivdl": {
    "get": {
      "summary": "",
      "operationId": "get_json_search_pixiv_dl",
      "tags": [
        "Search"
      ],
      "parameters": [
        {
          "name": "id",
          "in": "query",
          "description": "pid",
          "required": true,
          "schema": {
            "type": "string"
          }
        },
        {
          "name": "ext",
          "in": "query",
          "description": "Example: .png, .jpg",
          "required": true,
          "schema": {
            "type": "string"
          }
        }
      ],
      "responses": {
        "200": {
          "description": "Success",
          "content": {
            "image/jpeg": {
              "schema": {
                "$ref": "#/components/schemas/ImageResponse"
              }
            }
          }
        },
        "400": {
          "$ref": "#/components/responses/IllegalInput"
          }
        }
      }
    },
 "/ffstalk": {
      "get": {
        "summary": "",
        "operationId": "get_data_freefire",
        "tags": [
          "Search"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "query",
            "description": "ID",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/JsonResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
 "/groupwa": {
      "get": {
        "summary": "",
        "operationId": "get_link_group_on_internet",
        "tags": [
          "Search"
        ],
        "parameters": [
          {
            "name": "text",
            "in": "query",
            "description": "Subject",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/JsonResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
 "/jadwalsholat": {
      "get": {
        "summary": "",
        "operationId": "get_jadwal_internet",
        "tags": [
          "Search"
        ],
        "parameters": [
          {
            "name": "text",
            "in": "query",
            "description": "Subject",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/JsonResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
 "/tiktoksearch": {
      "get": {
        "summary": "",
        "operationId": "get_data_from_tiktok",
        "tags": [
          "Search"
        ],
        "parameters": [
          {
            "name": "text",
            "in": "query",
            "description": "Subject",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/JsonResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},   
 "/ghstalk": {
      "get": {
        "summary": "",
        "operationId": "get_data_github",
        "tags": [
          "Search"
        ],
        "parameters": [
          {
            "name": "username",
            "in": "query",
            "description": "Username",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/JsonResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
 "/npmjs": {
      "get": {
        "summary": "",
        "operationId": "get_data_npmjs",
        "tags": [
          "Search"
        ],
        "parameters": [
          {
            "name": "text",
            "in": "query",
            "description": "Name NPM",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/JsonResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},

// Tools

 "/whois": {
      "get": {
        "summary": "",
        "operationId": "get_data_whois",
        "tags": [
          "Tools"
        ],
        "parameters": [
          {
            "name": "domain",
            "in": "query",
            "description": "Ex: qq.com",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/JsonResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
 "/v2/whois": {
      "get": {
        "summary": "",
        "operationId": "get_data_whois_v2",
        "tags": [
          "Tools"
        ],
        "parameters": [
          {
            "name": "domain",
            "in": "query",
            "description": "Ex: qq.com",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/JsonResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
 "/v3/whois": {
      "get": {
        "summary": "",
        "operationId": "get_data_whois_v3",
        "tags": [
          "Tools"
        ],
        "parameters": [
          {
            "name": "domain",
            "in": "query",
            "description": "Ex: qq.com",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/JsonResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
 "/tld/whois": {
      "get": {
        "summary": "",
        "operationId": "get_data_whois_tld",
        "tags": [
          "Tools"
        ],
        "parameters": [
          {
            "name": "domain",
            "in": "query",
            "description": "Ex: .com, .org, .me",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/JsonResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
 "/ip/whois": {
      "get": {
        "summary": "",
        "operationId": "get_data_ip_whois",
        "tags": [
          "Tools"
        ],
        "parameters": [
          {
            "name": "ip",
            "in": "query",
            "description": "Ex: 112.90.150.204",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/JsonResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
 "/iplocation": {
      "get": {
        "summary": "",
        "operationId": "get_data_ip_location",
        "tags": [
          "Tools"
        ],
        "parameters": [
          {
            "name": "ip",
            "in": "query",
            "description": "Ex: 112.90.150.204",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/JsonResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
 "/subdomain": {
      "get": {
        "summary": "",
        "operationId": "get_data_subdomain_finder_4",
        "tags": [
          "Tools"
        ],
        "parameters": [
          {
            "name": "domain",
            "in": "query",
            "description": "Ex: google.com",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/JsonResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
 "/v2/subdomain": {
      "get": {
        "summary": "",
        "operationId": "get_data_subdomain_finder",
        "tags": [
          "Tools"
        ],
        "parameters": [
          {
            "name": "domain",
            "in": "query",
            "description": "Ex: tioo.eu.org",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/JsonResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
 "/dnslookup": {
      "get": {
        "summary": "",
        "operationId": "get_data_dns",
        "tags": [
          "Tools"
        ],
        "parameters": [
          {
            "name": "domain",
            "in": "query",
            "description": "Ex: google.com",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/JsonResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
 "/ssl/certificate": {
      "get": {
        "summary": "",
        "operationId": "get_data_ssl",
        "tags": [
          "Tools"
        ],
        "parameters": [
          {
            "name": "domain",
            "in": "query",
            "description": "Ex: aemt.uk.to",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/JsonResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
 "/ssl/sslchecker": {
      "get": {
        "summary": "",
        "operationId": "get_data_ssl_c2",
        "tags": [
          "Tools"
        ],
        "parameters": [
          {
            "name": "domain",
            "in": "query",
            "description": "Ex: aemt.uk.to",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/JsonResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
 "/expireddomain": {
      "get": {
        "summary": "",
        "operationId": "get_data_expired_domain",
        "tags": [
          "Tools"
        ],
        "parameters": [
          {
            "name": "domain",
            "in": "query",
            "description": "Ex: google.com",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/JsonResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
 "/speedweb": {
      "get": {
        "summary": "",
        "operationId": "get_data_speedweb",
        "tags": [
          "Tools"
        ],
        "parameters": [
          {
            "name": "url",
            "in": "query",
            "description": "Ex: google.com",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/JsonResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
 "/emailchecker": {
      "get": {
        "summary": "",
        "operationId": "get_data_emailchecker",
        "tags": [
          "Tools"
        ],
        "parameters": [
          {
            "name": "email",
            "in": "query",
            "description": "Ex: jhondhue@gmail.com",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/JsonResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
 "/proxy": {
      "get": {
        "summary": "",
        "operationId": "get_data_fetcher_proxy",
        "tags": [
          "Tools"
        ],
        "parameters": [
          {
            "name": "url",
            "in": "query",
            "description": "Ex: https://google.com",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/JsonResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},

//shortlink 
"/short/btch": {
      "get": {
        "summary": "",
        "operationId": "get_json_short_btch",
        "tags": [
          "Short"
        ],
        "parameters": [
          {
            "name": "url",
            "in": "query",
            "description": "Url",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UrlResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
"/tinyurl": {
      "get": {
        "summary": "",
        "operationId": "get_json_short_1",
        "tags": [
          "Short"
        ],
        "parameters": [
          {
            "name": "url",
            "in": "query",
            "description": "Url",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UrlResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
"/tinyurl": {
      "get": {
        "summary": "",
        "operationId": "get_json_short_2",
        "tags": [
          "Short"
        ],
        "parameters": [
          {
            "name": "link",
            "in": "query",
            "description": "Link",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UrlResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
"/isgd": {
      "get": {
        "summary": "",
        "operationId": "get_json_shor_3t",
        "tags": [
          "Short"
        ],
        "parameters": [
          {
            "name": "link",
            "in": "query",
            "description": "Link",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "": {
                "schema": {
                  "$ref": "#/components/schemas/UrlResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
"/short/vurl": {
      "get": {
        "summary": "",
        "operationId": "get_json_short_4",
        "tags": [
          "Short"
        ],
        "parameters": [
          {
            "name": "link",
            "in": "query",
            "description": "Link",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UrlResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
"/vgd": {
      "get": {
        "summary": "",
        "operationId": "get_json_short_5",
        "tags": [
          "Short"
        ],
        "parameters": [
          {
            "name": "link",
            "in": "query",
            "description": "Link",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UrlResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
// Random
"/ppcp": {
  "get": {
    "summary": "",
    "operationId": "get_image_random_ppcp",
    "tags": [
      "Random"
    ],
    "responses": {
      "200": {
        "description": "Success",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/JsonResponse"
            }
          }
        }
      },
      "400": {
        "$ref": "#/components/responses/BadRequestResponse"
      }
    }
  }
},
"/china": {
  "get": {
    "summary": "",
    "operationId": "get_image_random_cn",
    "tags": [
      "Random"
    ],
    "responses": {
      "200": {
        "description": "Success",
        "content": {
          "image/jpeg": {
            "schema": {
              "$ref": "#/components/schemas/ImageResponse"
            }
          }
        }
      },
      "400": {
        "$ref": "#/components/responses/BadRequestResponse"
      }
    }
  }
},
"/vietnam": {
  "get": {
    "summary": "",
    "operationId": "get_image_random",
    "tags": [
      "Random"
    ],
    "responses": {
      "200": {
        "description": "Success",
        "content": {
          "image/jpeg": {
            "schema": {
              "$ref": "#/components/schemas/ImageResponse"
            }
          }
        }
      },
      "400": {
        "$ref": "#/components/responses/BadRequestResponse"
      }
    }
  }
},
"/thailand": {
  "get": {
    "summary": "",
    "operationId": "get_image_random_th",
    "tags": [
      "Random"
    ],
    "responses": {
      "200": {
        "description": "Success",
        "content": {
          "image/jpeg": {
            "schema": {
              "$ref": "#/components/schemas/ImageResponse"
            }
          }
        }
      },
      "400": {
        "$ref": "#/components/responses/BadRequestResponse"
      }
    }
  }
},
"/indonesia": {
  "get": {
    "summary": "",
    "operationId": "get_image_random_id",
    "tags": [
      "Random"
    ],
    "responses": {
      "200": {
        "description": "Success",
        "content": {
          "image/jpeg": {
            "schema": {
              "$ref": "#/components/schemas/ImageResponse"
            }
          }
        }
      },
      "400": {
        "$ref": "#/components/responses/BadRequestResponse"
      }
    }
  }
},
"/korea": {
  "get": {
    "summary": "",
    "operationId": "get_image_random_kr",
    "tags": [
      "Random"
    ],
    "responses": {
      "200": {
        "description": "Success",
        "content": {
          "image/jpeg": {
            "schema": {
              "$ref": "#/components/schemas/ImageResponse"
            }
          }
        }
      },
      "400": {
        "$ref": "#/components/responses/BadRequestResponse"
      }
    }
  }
},
"/japan": {
  "get": {
    "summary": "",
    "operationId": "get_image_random_jp",
    "tags": [
      "Random"
    ],
    "responses": {
      "200": {
        "description": "Success",
        "content": {
          "image/jpeg": {
            "schema": {
              "$ref": "#/components/schemas/ImageResponse"
            }
          }
        }
      },
      "400": {
        "$ref": "#/components/responses/BadRequestResponse"
      }
    }
  }
},
"/malaysia": {
  "get": {
    "summary": "",
    "operationId": "get_image_random_my",
    "tags": [
      "Random"
    ],
    "responses": {
      "200": {
        "description": "Success",
        "content": {
          "image/jpeg": {
            "schema": {
              "$ref": "#/components/schemas/ImageResponse"
            }
          }
        }
      },
      "400": {
        "$ref": "#/components/responses/BadRequestResponse"
      }
    }
  }
},
"/shinobu": {
  "get": {
    "summary": "",
    "operationId": "get_image_random_sbu",
    "tags": [
      "Random"
    ],
    "responses": {
      "200": {
        "description": "Success",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/JsonResponse"
            }
          }
        }
      },
      "400": {
        "$ref": "#/components/responses/BadRequestResponse"
      }
    }
  }
},
"/waifu": {
  "get": {
    "summary": "",
    "operationId": "get_image_random_wfu",
    "tags": [
      "Random"
    ],
    "responses": {
      "200": {
        "description": "Success",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/JsonResponse"
            }
          }
        }
      },
      "400": {
        "$ref": "#/components/responses/BadRequestResponse"
      }
    }
  }
},
"/neko": {
  "get": {
    "summary": "",
    "operationId": "get_image_random_nk",
    "tags": [
      "Random"
    ],
    "responses": {
      "200": {
        "description": "Success",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/JsonResponse"
            }
          }
        }
      },
      "400": {
        "$ref": "#/components/responses/BadRequestResponse"
      }
    }
  }
},
"/hubbleimg": {
  "get": {
    "summary": "",
    "operationId": "get_image_random_hbi",
    "tags": [
      "Random"
    ],
    "responses": {
      "200": {
        "description": "Success",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/JsonResponse"
            }
          }
        }
      },
      "400": {
        "$ref": "#/components/responses/BadRequestResponse"
      }
    }
  }
},
"/loli": {
  "get": {
    "summary": "",
    "operationId": "get_image_random_loli",
    "tags": [
      "Random"
    ],
    "responses": {
      "200": {
        "description": "Success",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/JsonResponse"
            }
          }
        }
      },
      "400": {
        "$ref": "#/components/responses/BadRequestResponse"
      }
    }
  }
},
// Game 
"/tebakgambar": {
  "get": {
    "summary": "",
    "operationId": "get_json_tebakgambar",
    "tags": [
      "Game"
    ],
    "responses": {
      "200": {
        "description": "Success",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/JsonResponse"
            }
          }
        }
      },
      "400": {
        "$ref": "#/components/responses/BadRequestResponse"
      }
    }
  }
},
  "/susunkata": {
    "get": {
      "summary": "",
      "operationId": "get_json_susunkata",
      "tags": [
        "Game"
      ],
      "responses": {
        "200": {
          "description": "Success",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/JsonResponse"
              }
            }
          }
        },
        "400": {
          "$ref": "#/components/responses/BadRequestResponse"
        }
      }
    }
  },
  "/tebakbendera": {
    "get": {
      "summary": "",
      "operationId": "get_json_tebakbendera",
      "tags": [
        "Game"
      ],
      "responses": {
        "200": {
          "description": "Success",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/JsonResponse"
              }
            }
          }
        },
        "400": {
          "$ref": "#/components/responses/BadRequestResponse"
        }
      }
    }
  },
  "/tebakgame": {
    "get": {
      "summary": "",
      "operationId": "get_json_tebakgame",
      "tags": [
        "Game"
      ],
      "responses": {
        "200": {
          "description": "Success",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/JsonResponse"
              }
            }
          }
        },
        "400": {
          "$ref": "#/components/responses/BadRequestResponse"
        }
      }
    }
  },
  "/tebakkata": {
    "get": {
      "summary": "",
      "operationId": "get_json_tebakkata",
      "tags": [
        "Game"
      ],
      "responses": {
        "200": {
          "description": "Success",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/JsonResponse"
              }
            }
          }
        },
        "400": {
          "$ref": "#/components/responses/BadRequestResponse"
        }
      }
    }
  },
  "/tebaklirik": {
    "get": {
      "summary": "",
      "operationId": "get_json_tebaklirik",
      "tags": [
        "Game"
      ],
      "responses": {
        "200": {
          "description": "Success",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/JsonResponse"
              }
            }
          }
        },
        "400": {
          "$ref": "#/components/responses/BadRequestResponse"
        }
      }
    }
  },
  "/tebaklagu": {
    "get": {
      "summary": "",
      "operationId": "get_json_tebaklagu",
      "tags": [
        "Game"
      ],
      "responses": {
        "200": {
          "description": "Success",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/JsonResponse"
              }
            }
          }
        },
        "400": {
          "$ref": "#/components/responses/BadRequestResponse"
        }
      }
    }
  },
  "/tebakkimia": {
    "get": {
      "summary": "",
      "operationId": "get_json_tebakkimia",
      "tags": [
        "Game"
      ],
      "responses": {
        "200": {
          "description": "Success",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/JsonResponse"
              }
            }
          }
        },
        "400": {
          "$ref": "#/components/responses/BadRequestResponse"
        }
      }
    }
  },
// Tempmail
"/tempmail": {
  "get": {
    "summary": "",
    "operationId": "get_data_random_mail",
    "tags": [
      "Tempmail"
    ],
    "responses": {
      "200": {
        "description": "Success",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/JsonResponse"
            }
          }
        }
      },
      "400": {
        "$ref": "#/components/responses/BadRequestResponse"
      }
    }
  }
},
 "/getmail": {
      "get": {
        "summary": "",
        "operationId": "get_message_tempmail",
        "tags": [
          "Tempmail"
        ],
        "parameters": [
          {
            "name": "email",
            "in": "query",
            "description": "Data Email Here",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/JsonResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
//Base64 & Binary
 "/base64": {
      "get": {
        "summary": "",
        "operationId": "base64_data_encrypt",
        "tags": [
          "Base64"
        ],
        "parameters": [
          {
            "name": "text",
            "in": "query",
            "description": "text",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/JsonResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
 "/debase64": {
      "get": {
        "summary": "",
        "operationId": "base64_data_decrypt",
        "tags": [
          "Base64"
        ],
        "parameters": [
          {
            "name": "text",
            "in": "query",
            "description": "base64 text",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/JsonResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
 "/etobinary": {
      "get": {
        "summary": "",
        "operationId": "base64_data_etobinary",
        "tags": [
          "Base64"
        ],
        "parameters": [
          {
            "name": "text",
            "in": "query",
            "description": "text",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/JsonResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},
 "/binaryttext": {
      "get": {
        "summary": "",
        "operationId": "base64_data_binary",
        "tags": [
          "Base64"
        ],
        "parameters": [
          {
            "name": "binary",
            "in": "query",
            "description": "binary text",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/JsonResponse"
                }
              }
            }
          },
          "400": {
            "$ref": "#/components/responses/IllegalInput"
       }
    }
  }
},

// Uploader
"/api/upload.php": {
      "post": {
        "summary": "",
        "operationId": "upload_file",
        "tags": [
          "Uploader"
        ],
        "requestBody": {
          "required": true,
          "content": {
            "multipart/form-data": {
              "schema": {
                "type": "object",
                "properties": {
                  "file": {
                    "type": "string",
                    "format": "binary",
                    "description": "File to upload"
                  }
                },
                "required": [
                  "file"
                ]
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "File uploaded successfully",
            "content": {
              "application/json": {
                "schema": {
                  "type": "string",
                  "$ref": "#/components/schemas/JsonResponse"
                }
              }
            }
          },
          "400": {
            "description": "No file uploaded",
            "content": {
              "application/json": {
                "schema": {
                  "type": "string",
                  "example": "No file uploaded."
                }
              }
            }
          }
        }
      }
    },
// Endpoint 
"/api": {
  "get": {
    "summary": "",
    "operationId": "get_infromation_list_features",
    "tags": [
      "Server"
    ],
    "responses": {
      "200": {
        "description": "Success",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/JsonResponse"
            }
          }
        }
      },
      "400": {
        "$ref": "#/components/responses/BadRequestResponse"
      }
    }
  }
},
"/endpoint": {
  "get": {
    "summary": "",
    "operationId": "get_info_info_endpoint",
    "tags": [
      "Server"
    ],
    "responses": {
      "200": {
        "description": "Success",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/JsonResponse"
            }
          }
        }
      },
      "400": {
        "$ref": "#/components/responses/BadRequestResponse"
      }
    }
  }
},
"/runtime": {
  "get": {
    "summary": "",
    "operationId": "get_info_info_rtm",
    "tags": [
      "Server"
    ],
    "responses": {
      "200": {
        "description": "Success",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/JsonResponse"
            }
          }
        }
      },
      "400": {
        "$ref": "#/components/responses/BadRequestResponse"
      }
    }
  }
},
"/os": {
  "get": {
    "summary": "",
    "operationId": "get_info_info_os",
    "tags": [
      "Server"
    ],
    "responses": {
      "200": {
        "description": "Success",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/JsonResponse"
            }
          }
        }
      },
      "400": {
        "$ref": "#/components/responses/BadRequestResponse"
      }
    }
  }
},
"/ip": {
  "get": {
    "summary": "",
    "operationId": "get_info_info_client_ip",
    "tags": [
      "Server"
    ],
    "responses": {
      "200": {
        "description": "Success",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/TextResponse"
            }
          }
        }
      },
      "400": {
        "$ref": "#/components/responses/BadRequestResponse"
      }
    }
  }
},
"/cpu": {
  "get": {
    "summary": "",
    "operationId": "get_info_info_cpu",
    "tags": [
      "Server"
    ],
    "responses": {
      "200": {
        "description": "Success",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/JsonResponse"
            }
          }
        }
      },
      "400": {
        "$ref": "#/components/responses/BadRequestResponse"

          }
        }
      }
    }
  },
// Handler Message
"components": {
  "schemas": {
  "TextResponse": {
      "type": "object",
      "properties": {
        "status": {
          "type": "boolean",
          "description": "Indicates if the request was successful"
        },
        "creator": {
          "type": "string",
          "description": "Creator of the response"
        },
        "result": {
          "type": "string",
          "description": "The generated response"
        }
      }
    },
    "ImageResponse": {
        "type": "object",
        "properties": {
          "status": {
            "type": "boolean",
            "description": "Indicates if the request was successful"
          },
          "creator": {
            "type": "string",
            "description": "Creator of the response"
          },
          "buffer": {
            "type": "string",
            "format": "binary",
            "description": "Base64 encoded image data"
          }
      }
    },
    "UrlResponse": {
      "type": "object",
      "properties": {
        "url": {
          "type": "string"
        }
      }
    },
    "JsonResponse": {
      "type": "object",
      "properties": {
        "status": {
          "type": "boolean",
          "description": "Indicates if the request was successful"
        },
        "creator": {
          "type": "string",
          "description": "Creator of the response"
        },
        "result": {
          "type": "string",
          "description": "The result of the request"
        }
      }
    }
  },
  "responses": {
    "BadRequestResponse": {
      "description": "Bad request received."
    },
    "IllegalInput": {
      "description": "Illegal input received."
        }
      }
    }
  }
  
