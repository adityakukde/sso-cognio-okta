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
              name: 'okta2',
              clientId: secret('clientId'),
              clientSecret: secret('clientSecret'),
              issuerUrl: 'https://trial-9496111.okta.com/oauth2/default',
              scopes: ['email','openid'],
              attributeMapping: {
                email: 'email'
              }
            },
          ],
          logoutUrls: ['http://localhost:8080/', 'https://app.ecs-research.dev/'],
          callbackUrls: [
            'http://localhost:8080',
            'https://app.ecs-research.dev/',
          ],
        },
  },
});