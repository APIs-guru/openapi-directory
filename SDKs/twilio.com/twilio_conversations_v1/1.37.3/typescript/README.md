# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```typescript
import { SDK, WithSecurity} from "openapi";
import { CreateConfigurationAddressRequest, CreateConfigurationAddressResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CreateConfigurationAddressRequest = {
  security: {
    accountSidAuthToken: {
      password: "YOUR_PASSWORD_HERE",
      username: "YOUR_USERNAME_HERE",
    },
  },
  request: {
    address: "sit",
    autoCreationConversationServiceSid: "numquam",
    autoCreationEnabled: true,
    autoCreationStudioFlowSid: "id",
    autoCreationStudioRetryCount: 4639119166983318124,
    autoCreationType: "default",
    autoCreationWebhookFilters: [
      "voluptas",
      "quis",
    ],
    autoCreationWebhookMethod: "POST",
    autoCreationWebhookUrl: "nam",
    friendlyName: "expedita",
    type: "whatsapp",
  },
};

sdk.sdk.createConfigurationAddress(req).then((res: CreateConfigurationAddressResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `createConfigurationAddress` - Create a new address configuration
* `createConversation` - Create a new conversation in your account's default service
* `createConversationMessage` - Add a new message to the conversation
* `createConversationParticipant` - Add a new participant to the conversation
* `createConversationScopedWebhook` - Create a new webhook scoped to the conversation
* `createCredential` - Add a new push notification credential to your account
* `createRole` - Create a new user role in your account's default service
* `createService` - Create a new conversation service on your account
* `createServiceConversation` - Create a new conversation in your service
* `createServiceConversationMessage` - Add a new message to the conversation in a specific service
* `createServiceConversationParticipant` - Add a new participant to the conversation in a specific service
* `createServiceConversationScopedWebhook` - Create a new webhook scoped to the conversation in a specific service
* `createServiceRole` - Create a new user role in your service
* `createServiceUser` - Add a new conversation user to your service
* `createUser` - Add a new conversation user to your account's default service
* `deleteConfigurationAddress` - Remove an existing address configuration
* `deleteConversation` - Remove a conversation from your account's default service
* `deleteConversationMessage` - Remove a message from the conversation
* `deleteConversationParticipant` - Remove a participant from the conversation
* `deleteConversationScopedWebhook` - Remove an existing webhook scoped to the conversation
* `deleteCredential` - Remove a push notification credential from your account
* `deleteRole` - Remove a user role from your account's default service
* `deleteService` - Remove a conversation service with all its nested resources from your account
* `deleteServiceBinding` - Remove a push notification binding from the conversation service
* `deleteServiceConversation` - Remove a conversation from your service
* `deleteServiceConversationMessage` - Remove a message from the conversation
* `deleteServiceConversationParticipant` - Remove a participant from the conversation
* `deleteServiceConversationScopedWebhook` - Remove an existing webhook scoped to the conversation
* `deleteServiceRole` - Remove a user role from your service
* `deleteServiceUser` - Remove a conversation user from your service
* `deleteServiceUserConversation` - Delete a specific User Conversation.
* `deleteUser` - Remove a conversation user from your account's default service
* `deleteUserConversation` - Delete a specific User Conversation.
* `fetchConfiguration` - Fetch the global configuration of conversations on your account
* `fetchConfigurationAddress` - Fetch an address configuration 
* `fetchConfigurationWebhook`
* `fetchConversation` - Fetch a conversation from your account's default service
* `fetchConversationMessage` - Fetch a message from the conversation
* `fetchConversationMessageReceipt` - Fetch the delivery and read receipts of the conversation message
* `fetchConversationParticipant` - Fetch a participant of the conversation
* `fetchConversationScopedWebhook` - Fetch the configuration of a conversation-scoped webhook
* `fetchCredential` - Fetch a push notification credential from your account
* `fetchRole` - Fetch a user role from your account's default service
* `fetchService` - Fetch a conversation service from your account
* `fetchServiceBinding` - Fetch a push notification binding from the conversation service
* `fetchServiceConfiguration` - Fetch the configuration of a conversation service
* `fetchServiceConversation` - Fetch a conversation from your service
* `fetchServiceConversationMessage` - Fetch a message from the conversation
* `fetchServiceConversationMessageReceipt` - Fetch the delivery and read receipts of the conversation message
* `fetchServiceConversationParticipant` - Fetch a participant of the conversation
* `fetchServiceConversationScopedWebhook` - Fetch the configuration of a conversation-scoped webhook
* `fetchServiceNotification` - Fetch push notification service settings
* `fetchServiceRole` - Fetch a user role from your service
* `fetchServiceUser` - Fetch a conversation user from your service
* `fetchServiceUserConversation` - Fetch a specific User Conversation.
* `fetchServiceWebhookConfiguration` - Fetch a specific service webhook configuration.
* `fetchUser` - Fetch a conversation user from your account's default service
* `fetchUserConversation` - Fetch a specific User Conversation.
* `listConfigurationAddress` - Retrieve a list of address configurations for an account
* `listConversation` - Retrieve a list of conversations in your account's default service
* `listConversationMessage` - Retrieve a list of all messages in the conversation
* `listConversationMessageReceipt` - Retrieve a list of all delivery and read receipts of the conversation message
* `listConversationParticipant` - Retrieve a list of all participants of the conversation
* `listConversationScopedWebhook` - Retrieve a list of all webhooks scoped to the conversation
* `listCredential` - Retrieve a list of all push notification credentials on your account
* `listParticipantConversation` - Retrieve a list of all Conversations that this Participant belongs to by identity or by address. Only one parameter should be specified.
* `listRole` - Retrieve a list of all user roles in your account's default service
* `listService` - Retrieve a list of all conversation services on your account
* `listServiceBinding` - Retrieve a list of all push notification bindings in the conversation service
* `listServiceConversation` - Retrieve a list of conversations in your service
* `listServiceConversationMessage` - Retrieve a list of all messages in the conversation
* `listServiceConversationMessageReceipt` - Retrieve a list of all delivery and read receipts of the conversation message
* `listServiceConversationParticipant` - Retrieve a list of all participants of the conversation
* `listServiceConversationScopedWebhook` - Retrieve a list of all webhooks scoped to the conversation
* `listServiceParticipantConversation` - Retrieve a list of all Conversations that this Participant belongs to by identity or by address. Only one parameter should be specified.
* `listServiceRole` - Retrieve a list of all user roles in your service
* `listServiceUser` - Retrieve a list of all conversation users in your service
* `listServiceUserConversation` - Retrieve a list of all User Conversations for the User.
* `listUser` - Retrieve a list of all conversation users in your account's default service
* `listUserConversation` - Retrieve a list of all User Conversations for the User.
* `updateConfiguration` - Update the global configuration of conversations on your account
* `updateConfigurationAddress` - Update an existing address configuration
* `updateConfigurationWebhook`
* `updateConversation` - Update an existing conversation in your account's default service
* `updateConversationMessage` - Update an existing message in the conversation
* `updateConversationParticipant` - Update an existing participant in the conversation
* `updateConversationScopedWebhook` - Update an existing conversation-scoped webhook
* `updateCredential` - Update an existing push notification credential on your account
* `updateRole` - Update an existing user role in your account's default service
* `updateServiceConfiguration` - Update configuration settings of a conversation service
* `updateServiceConversation` - Update an existing conversation in your service
* `updateServiceConversationMessage` - Update an existing message in the conversation
* `updateServiceConversationParticipant` - Update an existing participant in the conversation
* `updateServiceConversationScopedWebhook` - Update an existing conversation-scoped webhook
* `updateServiceNotification` - Update push notification service settings
* `updateServiceRole` - Update an existing user role in your service
* `updateServiceUser` - Update an existing conversation user in your service
* `updateServiceUserConversation` - Update a specific User Conversation.
* `updateServiceWebhookConfiguration` - Update a specific Webhook.
* `updateUser` - Update an existing conversation user in your account's default service
* `updateUserConversation` - Update a specific User Conversation.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
