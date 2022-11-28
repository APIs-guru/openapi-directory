# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CreateConfigurationAddressRequest(
    security=operations.CreateConfigurationAddressSecurity(
        account_sid_auth_token=shared.SchemeAccountSidAuthToken(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    request=operations.CreateConfigurationAddressCreateConfigurationAddressRequest(
        address="sit",
        auto_creation_conversation_service_sid="numquam",
        auto_creation_enabled=True,
        auto_creation_studio_flow_sid="id",
        auto_creation_studio_retry_count=4639119166983318124,
        auto_creation_type="default",
        auto_creation_webhook_filters=[
            "voluptas",
            "quis",
        ],
        auto_creation_webhook_method="POST",
        auto_creation_webhook_url="nam",
        friendly_name="expedita",
        type="whatsapp",
    ),
)
    
res = s.sdk.create_configuration_address(req)

if res.conversations_v1_configuration_address is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `create_configuration_address` - Create a new address configuration
* `create_conversation` - Create a new conversation in your account's default service
* `create_conversation_message` - Add a new message to the conversation
* `create_conversation_participant` - Add a new participant to the conversation
* `create_conversation_scoped_webhook` - Create a new webhook scoped to the conversation
* `create_credential` - Add a new push notification credential to your account
* `create_role` - Create a new user role in your account's default service
* `create_service` - Create a new conversation service on your account
* `create_service_conversation` - Create a new conversation in your service
* `create_service_conversation_message` - Add a new message to the conversation in a specific service
* `create_service_conversation_participant` - Add a new participant to the conversation in a specific service
* `create_service_conversation_scoped_webhook` - Create a new webhook scoped to the conversation in a specific service
* `create_service_role` - Create a new user role in your service
* `create_service_user` - Add a new conversation user to your service
* `create_user` - Add a new conversation user to your account's default service
* `delete_configuration_address` - Remove an existing address configuration
* `delete_conversation` - Remove a conversation from your account's default service
* `delete_conversation_message` - Remove a message from the conversation
* `delete_conversation_participant` - Remove a participant from the conversation
* `delete_conversation_scoped_webhook` - Remove an existing webhook scoped to the conversation
* `delete_credential` - Remove a push notification credential from your account
* `delete_role` - Remove a user role from your account's default service
* `delete_service` - Remove a conversation service with all its nested resources from your account
* `delete_service_binding` - Remove a push notification binding from the conversation service
* `delete_service_conversation` - Remove a conversation from your service
* `delete_service_conversation_message` - Remove a message from the conversation
* `delete_service_conversation_participant` - Remove a participant from the conversation
* `delete_service_conversation_scoped_webhook` - Remove an existing webhook scoped to the conversation
* `delete_service_role` - Remove a user role from your service
* `delete_service_user` - Remove a conversation user from your service
* `delete_service_user_conversation` - Delete a specific User Conversation.
* `delete_user` - Remove a conversation user from your account's default service
* `delete_user_conversation` - Delete a specific User Conversation.
* `fetch_configuration` - Fetch the global configuration of conversations on your account
* `fetch_configuration_address` - Fetch an address configuration 
* `fetch_configuration_webhook`
* `fetch_conversation` - Fetch a conversation from your account's default service
* `fetch_conversation_message` - Fetch a message from the conversation
* `fetch_conversation_message_receipt` - Fetch the delivery and read receipts of the conversation message
* `fetch_conversation_participant` - Fetch a participant of the conversation
* `fetch_conversation_scoped_webhook` - Fetch the configuration of a conversation-scoped webhook
* `fetch_credential` - Fetch a push notification credential from your account
* `fetch_role` - Fetch a user role from your account's default service
* `fetch_service` - Fetch a conversation service from your account
* `fetch_service_binding` - Fetch a push notification binding from the conversation service
* `fetch_service_configuration` - Fetch the configuration of a conversation service
* `fetch_service_conversation` - Fetch a conversation from your service
* `fetch_service_conversation_message` - Fetch a message from the conversation
* `fetch_service_conversation_message_receipt` - Fetch the delivery and read receipts of the conversation message
* `fetch_service_conversation_participant` - Fetch a participant of the conversation
* `fetch_service_conversation_scoped_webhook` - Fetch the configuration of a conversation-scoped webhook
* `fetch_service_notification` - Fetch push notification service settings
* `fetch_service_role` - Fetch a user role from your service
* `fetch_service_user` - Fetch a conversation user from your service
* `fetch_service_user_conversation` - Fetch a specific User Conversation.
* `fetch_service_webhook_configuration` - Fetch a specific service webhook configuration.
* `fetch_user` - Fetch a conversation user from your account's default service
* `fetch_user_conversation` - Fetch a specific User Conversation.
* `list_configuration_address` - Retrieve a list of address configurations for an account
* `list_conversation` - Retrieve a list of conversations in your account's default service
* `list_conversation_message` - Retrieve a list of all messages in the conversation
* `list_conversation_message_receipt` - Retrieve a list of all delivery and read receipts of the conversation message
* `list_conversation_participant` - Retrieve a list of all participants of the conversation
* `list_conversation_scoped_webhook` - Retrieve a list of all webhooks scoped to the conversation
* `list_credential` - Retrieve a list of all push notification credentials on your account
* `list_participant_conversation` - Retrieve a list of all Conversations that this Participant belongs to by identity or by address. Only one parameter should be specified.
* `list_role` - Retrieve a list of all user roles in your account's default service
* `list_service` - Retrieve a list of all conversation services on your account
* `list_service_binding` - Retrieve a list of all push notification bindings in the conversation service
* `list_service_conversation` - Retrieve a list of conversations in your service
* `list_service_conversation_message` - Retrieve a list of all messages in the conversation
* `list_service_conversation_message_receipt` - Retrieve a list of all delivery and read receipts of the conversation message
* `list_service_conversation_participant` - Retrieve a list of all participants of the conversation
* `list_service_conversation_scoped_webhook` - Retrieve a list of all webhooks scoped to the conversation
* `list_service_participant_conversation` - Retrieve a list of all Conversations that this Participant belongs to by identity or by address. Only one parameter should be specified.
* `list_service_role` - Retrieve a list of all user roles in your service
* `list_service_user` - Retrieve a list of all conversation users in your service
* `list_service_user_conversation` - Retrieve a list of all User Conversations for the User.
* `list_user` - Retrieve a list of all conversation users in your account's default service
* `list_user_conversation` - Retrieve a list of all User Conversations for the User.
* `update_configuration` - Update the global configuration of conversations on your account
* `update_configuration_address` - Update an existing address configuration
* `update_configuration_webhook`
* `update_conversation` - Update an existing conversation in your account's default service
* `update_conversation_message` - Update an existing message in the conversation
* `update_conversation_participant` - Update an existing participant in the conversation
* `update_conversation_scoped_webhook` - Update an existing conversation-scoped webhook
* `update_credential` - Update an existing push notification credential on your account
* `update_role` - Update an existing user role in your account's default service
* `update_service_configuration` - Update configuration settings of a conversation service
* `update_service_conversation` - Update an existing conversation in your service
* `update_service_conversation_message` - Update an existing message in the conversation
* `update_service_conversation_participant` - Update an existing participant in the conversation
* `update_service_conversation_scoped_webhook` - Update an existing conversation-scoped webhook
* `update_service_notification` - Update push notification service settings
* `update_service_role` - Update an existing user role in your service
* `update_service_user` - Update an existing conversation user in your service
* `update_service_user_conversation` - Update a specific User Conversation.
* `update_service_webhook_configuration` - Update a specific Webhook.
* `update_user` - Update an existing conversation user in your account's default service
* `update_user_conversation` - Update a specific User Conversation.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
