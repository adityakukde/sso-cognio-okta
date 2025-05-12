import { defineAuth, secret } from '@aws-amplify/backend';

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
    externalProviders: {
      oidc: [
        {
          name: 'okta',
          clientId: secret('clientId'),
          clientSecret: secret('clientSecret'),
          issuerUrl: 'https://trial-9496111.okta.com/oauth2/default',
        },
      ],
      logoutUrls: ['https://app.ecs-research.dev/'],
      callbackUrls: [
        'https://app.ecs-research.dev/'
      ],
    },
  },
});
