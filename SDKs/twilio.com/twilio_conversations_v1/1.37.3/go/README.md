# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.CreateConfigurationAddressRequest{
        Security: operations.CreateConfigurationAddressSecurity{
            AccountSidAuthToken: shared.SchemeAccountSidAuthToken{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        Request: &operations.CreateConfigurationAddressCreateConfigurationAddressRequest{
            Address: "sit",
            AutoCreationConversationServiceSid: "numquam",
            AutoCreationEnabled: true,
            AutoCreationStudioFlowSid: "id",
            AutoCreationStudioRetryCount: 4639119166983318124,
            AutoCreationType: "default",
            AutoCreationWebhookFilters: []string{
                "voluptas",
                "quis",
            },
            AutoCreationWebhookMethod: "POST",
            AutoCreationWebhookURL: "nam",
            FriendlyName: "expedita",
            Type: "whatsapp",
        },
    }
    
    res, err := s.Sdk.CreateConfigurationAddress(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ConversationsV1ConfigurationAddress != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `CreateConfigurationAddress` - Create a new address configuration
* `CreateConversation` - Create a new conversation in your account's default service
* `CreateConversationMessage` - Add a new message to the conversation
* `CreateConversationParticipant` - Add a new participant to the conversation
* `CreateConversationScopedWebhook` - Create a new webhook scoped to the conversation
* `CreateCredential` - Add a new push notification credential to your account
* `CreateRole` - Create a new user role in your account's default service
* `CreateService` - Create a new conversation service on your account
* `CreateServiceConversation` - Create a new conversation in your service
* `CreateServiceConversationMessage` - Add a new message to the conversation in a specific service
* `CreateServiceConversationParticipant` - Add a new participant to the conversation in a specific service
* `CreateServiceConversationScopedWebhook` - Create a new webhook scoped to the conversation in a specific service
* `CreateServiceRole` - Create a new user role in your service
* `CreateServiceUser` - Add a new conversation user to your service
* `CreateUser` - Add a new conversation user to your account's default service
* `DeleteConfigurationAddress` - Remove an existing address configuration
* `DeleteConversation` - Remove a conversation from your account's default service
* `DeleteConversationMessage` - Remove a message from the conversation
* `DeleteConversationParticipant` - Remove a participant from the conversation
* `DeleteConversationScopedWebhook` - Remove an existing webhook scoped to the conversation
* `DeleteCredential` - Remove a push notification credential from your account
* `DeleteRole` - Remove a user role from your account's default service
* `DeleteService` - Remove a conversation service with all its nested resources from your account
* `DeleteServiceBinding` - Remove a push notification binding from the conversation service
* `DeleteServiceConversation` - Remove a conversation from your service
* `DeleteServiceConversationMessage` - Remove a message from the conversation
* `DeleteServiceConversationParticipant` - Remove a participant from the conversation
* `DeleteServiceConversationScopedWebhook` - Remove an existing webhook scoped to the conversation
* `DeleteServiceRole` - Remove a user role from your service
* `DeleteServiceUser` - Remove a conversation user from your service
* `DeleteServiceUserConversation` - Delete a specific User Conversation.
* `DeleteUser` - Remove a conversation user from your account's default service
* `DeleteUserConversation` - Delete a specific User Conversation.
* `FetchConfiguration` - Fetch the global configuration of conversations on your account
* `FetchConfigurationAddress` - Fetch an address configuration 
* `FetchConfigurationWebhook`
* `FetchConversation` - Fetch a conversation from your account's default service
* `FetchConversationMessage` - Fetch a message from the conversation
* `FetchConversationMessageReceipt` - Fetch the delivery and read receipts of the conversation message
* `FetchConversationParticipant` - Fetch a participant of the conversation
* `FetchConversationScopedWebhook` - Fetch the configuration of a conversation-scoped webhook
* `FetchCredential` - Fetch a push notification credential from your account
* `FetchRole` - Fetch a user role from your account's default service
* `FetchService` - Fetch a conversation service from your account
* `FetchServiceBinding` - Fetch a push notification binding from the conversation service
* `FetchServiceConfiguration` - Fetch the configuration of a conversation service
* `FetchServiceConversation` - Fetch a conversation from your service
* `FetchServiceConversationMessage` - Fetch a message from the conversation
* `FetchServiceConversationMessageReceipt` - Fetch the delivery and read receipts of the conversation message
* `FetchServiceConversationParticipant` - Fetch a participant of the conversation
* `FetchServiceConversationScopedWebhook` - Fetch the configuration of a conversation-scoped webhook
* `FetchServiceNotification` - Fetch push notification service settings
* `FetchServiceRole` - Fetch a user role from your service
* `FetchServiceUser` - Fetch a conversation user from your service
* `FetchServiceUserConversation` - Fetch a specific User Conversation.
* `FetchServiceWebhookConfiguration` - Fetch a specific service webhook configuration.
* `FetchUser` - Fetch a conversation user from your account's default service
* `FetchUserConversation` - Fetch a specific User Conversation.
* `ListConfigurationAddress` - Retrieve a list of address configurations for an account
* `ListConversation` - Retrieve a list of conversations in your account's default service
* `ListConversationMessage` - Retrieve a list of all messages in the conversation
* `ListConversationMessageReceipt` - Retrieve a list of all delivery and read receipts of the conversation message
* `ListConversationParticipant` - Retrieve a list of all participants of the conversation
* `ListConversationScopedWebhook` - Retrieve a list of all webhooks scoped to the conversation
* `ListCredential` - Retrieve a list of all push notification credentials on your account
* `ListParticipantConversation` - Retrieve a list of all Conversations that this Participant belongs to by identity or by address. Only one parameter should be specified.
* `ListRole` - Retrieve a list of all user roles in your account's default service
* `ListService` - Retrieve a list of all conversation services on your account
* `ListServiceBinding` - Retrieve a list of all push notification bindings in the conversation service
* `ListServiceConversation` - Retrieve a list of conversations in your service
* `ListServiceConversationMessage` - Retrieve a list of all messages in the conversation
* `ListServiceConversationMessageReceipt` - Retrieve a list of all delivery and read receipts of the conversation message
* `ListServiceConversationParticipant` - Retrieve a list of all participants of the conversation
* `ListServiceConversationScopedWebhook` - Retrieve a list of all webhooks scoped to the conversation
* `ListServiceParticipantConversation` - Retrieve a list of all Conversations that this Participant belongs to by identity or by address. Only one parameter should be specified.
* `ListServiceRole` - Retrieve a list of all user roles in your service
* `ListServiceUser` - Retrieve a list of all conversation users in your service
* `ListServiceUserConversation` - Retrieve a list of all User Conversations for the User.
* `ListUser` - Retrieve a list of all conversation users in your account's default service
* `ListUserConversation` - Retrieve a list of all User Conversations for the User.
* `UpdateConfiguration` - Update the global configuration of conversations on your account
* `UpdateConfigurationAddress` - Update an existing address configuration
* `UpdateConfigurationWebhook`
* `UpdateConversation` - Update an existing conversation in your account's default service
* `UpdateConversationMessage` - Update an existing message in the conversation
* `UpdateConversationParticipant` - Update an existing participant in the conversation
* `UpdateConversationScopedWebhook` - Update an existing conversation-scoped webhook
* `UpdateCredential` - Update an existing push notification credential on your account
* `UpdateRole` - Update an existing user role in your account's default service
* `UpdateServiceConfiguration` - Update configuration settings of a conversation service
* `UpdateServiceConversation` - Update an existing conversation in your service
* `UpdateServiceConversationMessage` - Update an existing message in the conversation
* `UpdateServiceConversationParticipant` - Update an existing participant in the conversation
* `UpdateServiceConversationScopedWebhook` - Update an existing conversation-scoped webhook
* `UpdateServiceNotification` - Update push notification service settings
* `UpdateServiceRole` - Update an existing user role in your service
* `UpdateServiceUser` - Update an existing conversation user in your service
* `UpdateServiceUserConversation` - Update a specific User Conversation.
* `UpdateServiceWebhookConfiguration` - Update a specific Webhook.
* `UpdateUser` - Update an existing conversation user in your account's default service
* `UpdateUserConversation` - Update a specific User Conversation.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
