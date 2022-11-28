import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://conversations.twilio.com"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * createConfigurationAddress - Create a new address configuration
    **/
    createConfigurationAddress(req: operations.CreateConfigurationAddressRequest, config?: AxiosRequestConfig): Promise<operations.CreateConfigurationAddressResponse>;
    /**
     * createConversation - Create a new conversation in your account's default service
    **/
    createConversation(req: operations.CreateConversationRequest, config?: AxiosRequestConfig): Promise<operations.CreateConversationResponse>;
    /**
     * createConversationMessage - Add a new message to the conversation
    **/
    createConversationMessage(req: operations.CreateConversationMessageRequest, config?: AxiosRequestConfig): Promise<operations.CreateConversationMessageResponse>;
    /**
     * createConversationParticipant - Add a new participant to the conversation
    **/
    createConversationParticipant(req: operations.CreateConversationParticipantRequest, config?: AxiosRequestConfig): Promise<operations.CreateConversationParticipantResponse>;
    /**
     * createConversationScopedWebhook - Create a new webhook scoped to the conversation
    **/
    createConversationScopedWebhook(req: operations.CreateConversationScopedWebhookRequest, config?: AxiosRequestConfig): Promise<operations.CreateConversationScopedWebhookResponse>;
    /**
     * createCredential - Add a new push notification credential to your account
    **/
    createCredential(req: operations.CreateCredentialRequest, config?: AxiosRequestConfig): Promise<operations.CreateCredentialResponse>;
    /**
     * createRole - Create a new user role in your account's default service
    **/
    createRole(req: operations.CreateRoleRequest, config?: AxiosRequestConfig): Promise<operations.CreateRoleResponse>;
    /**
     * createService - Create a new conversation service on your account
    **/
    createService(req: operations.CreateServiceRequest, config?: AxiosRequestConfig): Promise<operations.CreateServiceResponse>;
    /**
     * createServiceConversation - Create a new conversation in your service
    **/
    createServiceConversation(req: operations.CreateServiceConversationRequest, config?: AxiosRequestConfig): Promise<operations.CreateServiceConversationResponse>;
    /**
     * createServiceConversationMessage - Add a new message to the conversation in a specific service
    **/
    createServiceConversationMessage(req: operations.CreateServiceConversationMessageRequest, config?: AxiosRequestConfig): Promise<operations.CreateServiceConversationMessageResponse>;
    /**
     * createServiceConversationParticipant - Add a new participant to the conversation in a specific service
    **/
    createServiceConversationParticipant(req: operations.CreateServiceConversationParticipantRequest, config?: AxiosRequestConfig): Promise<operations.CreateServiceConversationParticipantResponse>;
    /**
     * createServiceConversationScopedWebhook - Create a new webhook scoped to the conversation in a specific service
    **/
    createServiceConversationScopedWebhook(req: operations.CreateServiceConversationScopedWebhookRequest, config?: AxiosRequestConfig): Promise<operations.CreateServiceConversationScopedWebhookResponse>;
    /**
     * createServiceRole - Create a new user role in your service
    **/
    createServiceRole(req: operations.CreateServiceRoleRequest, config?: AxiosRequestConfig): Promise<operations.CreateServiceRoleResponse>;
    /**
     * createServiceUser - Add a new conversation user to your service
    **/
    createServiceUser(req: operations.CreateServiceUserRequest, config?: AxiosRequestConfig): Promise<operations.CreateServiceUserResponse>;
    /**
     * createUser - Add a new conversation user to your account's default service
    **/
    createUser(req: operations.CreateUserRequest, config?: AxiosRequestConfig): Promise<operations.CreateUserResponse>;
    /**
     * deleteConfigurationAddress - Remove an existing address configuration
    **/
    deleteConfigurationAddress(req: operations.DeleteConfigurationAddressRequest, config?: AxiosRequestConfig): Promise<operations.DeleteConfigurationAddressResponse>;
    /**
     * deleteConversation - Remove a conversation from your account's default service
    **/
    deleteConversation(req: operations.DeleteConversationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteConversationResponse>;
    /**
     * deleteConversationMessage - Remove a message from the conversation
    **/
    deleteConversationMessage(req: operations.DeleteConversationMessageRequest, config?: AxiosRequestConfig): Promise<operations.DeleteConversationMessageResponse>;
    /**
     * deleteConversationParticipant - Remove a participant from the conversation
    **/
    deleteConversationParticipant(req: operations.DeleteConversationParticipantRequest, config?: AxiosRequestConfig): Promise<operations.DeleteConversationParticipantResponse>;
    /**
     * deleteConversationScopedWebhook - Remove an existing webhook scoped to the conversation
    **/
    deleteConversationScopedWebhook(req: operations.DeleteConversationScopedWebhookRequest, config?: AxiosRequestConfig): Promise<operations.DeleteConversationScopedWebhookResponse>;
    /**
     * deleteCredential - Remove a push notification credential from your account
    **/
    deleteCredential(req: operations.DeleteCredentialRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCredentialResponse>;
    /**
     * deleteRole - Remove a user role from your account's default service
    **/
    deleteRole(req: operations.DeleteRoleRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRoleResponse>;
    /**
     * deleteService - Remove a conversation service with all its nested resources from your account
    **/
    deleteService(req: operations.DeleteServiceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteServiceResponse>;
    /**
     * deleteServiceBinding - Remove a push notification binding from the conversation service
    **/
    deleteServiceBinding(req: operations.DeleteServiceBindingRequest, config?: AxiosRequestConfig): Promise<operations.DeleteServiceBindingResponse>;
    /**
     * deleteServiceConversation - Remove a conversation from your service
    **/
    deleteServiceConversation(req: operations.DeleteServiceConversationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteServiceConversationResponse>;
    /**
     * deleteServiceConversationMessage - Remove a message from the conversation
    **/
    deleteServiceConversationMessage(req: operations.DeleteServiceConversationMessageRequest, config?: AxiosRequestConfig): Promise<operations.DeleteServiceConversationMessageResponse>;
    /**
     * deleteServiceConversationParticipant - Remove a participant from the conversation
    **/
    deleteServiceConversationParticipant(req: operations.DeleteServiceConversationParticipantRequest, config?: AxiosRequestConfig): Promise<operations.DeleteServiceConversationParticipantResponse>;
    /**
     * deleteServiceConversationScopedWebhook - Remove an existing webhook scoped to the conversation
    **/
    deleteServiceConversationScopedWebhook(req: operations.DeleteServiceConversationScopedWebhookRequest, config?: AxiosRequestConfig): Promise<operations.DeleteServiceConversationScopedWebhookResponse>;
    /**
     * deleteServiceRole - Remove a user role from your service
    **/
    deleteServiceRole(req: operations.DeleteServiceRoleRequest, config?: AxiosRequestConfig): Promise<operations.DeleteServiceRoleResponse>;
    /**
     * deleteServiceUser - Remove a conversation user from your service
    **/
    deleteServiceUser(req: operations.DeleteServiceUserRequest, config?: AxiosRequestConfig): Promise<operations.DeleteServiceUserResponse>;
    /**
     * deleteServiceUserConversation - Delete a specific User Conversation.
    **/
    deleteServiceUserConversation(req: operations.DeleteServiceUserConversationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteServiceUserConversationResponse>;
    /**
     * deleteUser - Remove a conversation user from your account's default service
    **/
    deleteUser(req: operations.DeleteUserRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserResponse>;
    /**
     * deleteUserConversation - Delete a specific User Conversation.
    **/
    deleteUserConversation(req: operations.DeleteUserConversationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserConversationResponse>;
    /**
     * fetchConfiguration - Fetch the global configuration of conversations on your account
    **/
    fetchConfiguration(req: operations.FetchConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.FetchConfigurationResponse>;
    /**
     * fetchConfigurationAddress - Fetch an address configuration
    **/
    fetchConfigurationAddress(req: operations.FetchConfigurationAddressRequest, config?: AxiosRequestConfig): Promise<operations.FetchConfigurationAddressResponse>;
    fetchConfigurationWebhook(req: operations.FetchConfigurationWebhookRequest, config?: AxiosRequestConfig): Promise<operations.FetchConfigurationWebhookResponse>;
    /**
     * fetchConversation - Fetch a conversation from your account's default service
    **/
    fetchConversation(req: operations.FetchConversationRequest, config?: AxiosRequestConfig): Promise<operations.FetchConversationResponse>;
    /**
     * fetchConversationMessage - Fetch a message from the conversation
    **/
    fetchConversationMessage(req: operations.FetchConversationMessageRequest, config?: AxiosRequestConfig): Promise<operations.FetchConversationMessageResponse>;
    /**
     * fetchConversationMessageReceipt - Fetch the delivery and read receipts of the conversation message
    **/
    fetchConversationMessageReceipt(req: operations.FetchConversationMessageReceiptRequest, config?: AxiosRequestConfig): Promise<operations.FetchConversationMessageReceiptResponse>;
    /**
     * fetchConversationParticipant - Fetch a participant of the conversation
    **/
    fetchConversationParticipant(req: operations.FetchConversationParticipantRequest, config?: AxiosRequestConfig): Promise<operations.FetchConversationParticipantResponse>;
    /**
     * fetchConversationScopedWebhook - Fetch the configuration of a conversation-scoped webhook
    **/
    fetchConversationScopedWebhook(req: operations.FetchConversationScopedWebhookRequest, config?: AxiosRequestConfig): Promise<operations.FetchConversationScopedWebhookResponse>;
    /**
     * fetchCredential - Fetch a push notification credential from your account
    **/
    fetchCredential(req: operations.FetchCredentialRequest, config?: AxiosRequestConfig): Promise<operations.FetchCredentialResponse>;
    /**
     * fetchRole - Fetch a user role from your account's default service
    **/
    fetchRole(req: operations.FetchRoleRequest, config?: AxiosRequestConfig): Promise<operations.FetchRoleResponse>;
    /**
     * fetchService - Fetch a conversation service from your account
    **/
    fetchService(req: operations.FetchServiceRequest, config?: AxiosRequestConfig): Promise<operations.FetchServiceResponse>;
    /**
     * fetchServiceBinding - Fetch a push notification binding from the conversation service
    **/
    fetchServiceBinding(req: operations.FetchServiceBindingRequest, config?: AxiosRequestConfig): Promise<operations.FetchServiceBindingResponse>;
    /**
     * fetchServiceConfiguration - Fetch the configuration of a conversation service
    **/
    fetchServiceConfiguration(req: operations.FetchServiceConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.FetchServiceConfigurationResponse>;
    /**
     * fetchServiceConversation - Fetch a conversation from your service
    **/
    fetchServiceConversation(req: operations.FetchServiceConversationRequest, config?: AxiosRequestConfig): Promise<operations.FetchServiceConversationResponse>;
    /**
     * fetchServiceConversationMessage - Fetch a message from the conversation
    **/
    fetchServiceConversationMessage(req: operations.FetchServiceConversationMessageRequest, config?: AxiosRequestConfig): Promise<operations.FetchServiceConversationMessageResponse>;
    /**
     * fetchServiceConversationMessageReceipt - Fetch the delivery and read receipts of the conversation message
    **/
    fetchServiceConversationMessageReceipt(req: operations.FetchServiceConversationMessageReceiptRequest, config?: AxiosRequestConfig): Promise<operations.FetchServiceConversationMessageReceiptResponse>;
    /**
     * fetchServiceConversationParticipant - Fetch a participant of the conversation
    **/
    fetchServiceConversationParticipant(req: operations.FetchServiceConversationParticipantRequest, config?: AxiosRequestConfig): Promise<operations.FetchServiceConversationParticipantResponse>;
    /**
     * fetchServiceConversationScopedWebhook - Fetch the configuration of a conversation-scoped webhook
    **/
    fetchServiceConversationScopedWebhook(req: operations.FetchServiceConversationScopedWebhookRequest, config?: AxiosRequestConfig): Promise<operations.FetchServiceConversationScopedWebhookResponse>;
    /**
     * fetchServiceNotification - Fetch push notification service settings
    **/
    fetchServiceNotification(req: operations.FetchServiceNotificationRequest, config?: AxiosRequestConfig): Promise<operations.FetchServiceNotificationResponse>;
    /**
     * fetchServiceRole - Fetch a user role from your service
    **/
    fetchServiceRole(req: operations.FetchServiceRoleRequest, config?: AxiosRequestConfig): Promise<operations.FetchServiceRoleResponse>;
    /**
     * fetchServiceUser - Fetch a conversation user from your service
    **/
    fetchServiceUser(req: operations.FetchServiceUserRequest, config?: AxiosRequestConfig): Promise<operations.FetchServiceUserResponse>;
    /**
     * fetchServiceUserConversation - Fetch a specific User Conversation.
    **/
    fetchServiceUserConversation(req: operations.FetchServiceUserConversationRequest, config?: AxiosRequestConfig): Promise<operations.FetchServiceUserConversationResponse>;
    /**
     * fetchServiceWebhookConfiguration - Fetch a specific service webhook configuration.
    **/
    fetchServiceWebhookConfiguration(req: operations.FetchServiceWebhookConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.FetchServiceWebhookConfigurationResponse>;
    /**
     * fetchUser - Fetch a conversation user from your account's default service
    **/
    fetchUser(req: operations.FetchUserRequest, config?: AxiosRequestConfig): Promise<operations.FetchUserResponse>;
    /**
     * fetchUserConversation - Fetch a specific User Conversation.
    **/
    fetchUserConversation(req: operations.FetchUserConversationRequest, config?: AxiosRequestConfig): Promise<operations.FetchUserConversationResponse>;
    /**
     * listConfigurationAddress - Retrieve a list of address configurations for an account
    **/
    listConfigurationAddress(req: operations.ListConfigurationAddressRequest, config?: AxiosRequestConfig): Promise<operations.ListConfigurationAddressResponse>;
    /**
     * listConversation - Retrieve a list of conversations in your account's default service
    **/
    listConversation(req: operations.ListConversationRequest, config?: AxiosRequestConfig): Promise<operations.ListConversationResponse>;
    /**
     * listConversationMessage - Retrieve a list of all messages in the conversation
    **/
    listConversationMessage(req: operations.ListConversationMessageRequest, config?: AxiosRequestConfig): Promise<operations.ListConversationMessageResponse>;
    /**
     * listConversationMessageReceipt - Retrieve a list of all delivery and read receipts of the conversation message
    **/
    listConversationMessageReceipt(req: operations.ListConversationMessageReceiptRequest, config?: AxiosRequestConfig): Promise<operations.ListConversationMessageReceiptResponse>;
    /**
     * listConversationParticipant - Retrieve a list of all participants of the conversation
    **/
    listConversationParticipant(req: operations.ListConversationParticipantRequest, config?: AxiosRequestConfig): Promise<operations.ListConversationParticipantResponse>;
    /**
     * listConversationScopedWebhook - Retrieve a list of all webhooks scoped to the conversation
    **/
    listConversationScopedWebhook(req: operations.ListConversationScopedWebhookRequest, config?: AxiosRequestConfig): Promise<operations.ListConversationScopedWebhookResponse>;
    /**
     * listCredential - Retrieve a list of all push notification credentials on your account
    **/
    listCredential(req: operations.ListCredentialRequest, config?: AxiosRequestConfig): Promise<operations.ListCredentialResponse>;
    /**
     * listParticipantConversation - Retrieve a list of all Conversations that this Participant belongs to by identity or by address. Only one parameter should be specified.
    **/
    listParticipantConversation(req: operations.ListParticipantConversationRequest, config?: AxiosRequestConfig): Promise<operations.ListParticipantConversationResponse>;
    /**
     * listRole - Retrieve a list of all user roles in your account's default service
    **/
    listRole(req: operations.ListRoleRequest, config?: AxiosRequestConfig): Promise<operations.ListRoleResponse>;
    /**
     * listService - Retrieve a list of all conversation services on your account
    **/
    listService(req: operations.ListServiceRequest, config?: AxiosRequestConfig): Promise<operations.ListServiceResponse>;
    /**
     * listServiceBinding - Retrieve a list of all push notification bindings in the conversation service
    **/
    listServiceBinding(req: operations.ListServiceBindingRequest, config?: AxiosRequestConfig): Promise<operations.ListServiceBindingResponse>;
    /**
     * listServiceConversation - Retrieve a list of conversations in your service
    **/
    listServiceConversation(req: operations.ListServiceConversationRequest, config?: AxiosRequestConfig): Promise<operations.ListServiceConversationResponse>;
    /**
     * listServiceConversationMessage - Retrieve a list of all messages in the conversation
    **/
    listServiceConversationMessage(req: operations.ListServiceConversationMessageRequest, config?: AxiosRequestConfig): Promise<operations.ListServiceConversationMessageResponse>;
    /**
     * listServiceConversationMessageReceipt - Retrieve a list of all delivery and read receipts of the conversation message
    **/
    listServiceConversationMessageReceipt(req: operations.ListServiceConversationMessageReceiptRequest, config?: AxiosRequestConfig): Promise<operations.ListServiceConversationMessageReceiptResponse>;
    /**
     * listServiceConversationParticipant - Retrieve a list of all participants of the conversation
    **/
    listServiceConversationParticipant(req: operations.ListServiceConversationParticipantRequest, config?: AxiosRequestConfig): Promise<operations.ListServiceConversationParticipantResponse>;
    /**
     * listServiceConversationScopedWebhook - Retrieve a list of all webhooks scoped to the conversation
    **/
    listServiceConversationScopedWebhook(req: operations.ListServiceConversationScopedWebhookRequest, config?: AxiosRequestConfig): Promise<operations.ListServiceConversationScopedWebhookResponse>;
    /**
     * listServiceParticipantConversation - Retrieve a list of all Conversations that this Participant belongs to by identity or by address. Only one parameter should be specified.
    **/
    listServiceParticipantConversation(req: operations.ListServiceParticipantConversationRequest, config?: AxiosRequestConfig): Promise<operations.ListServiceParticipantConversationResponse>;
    /**
     * listServiceRole - Retrieve a list of all user roles in your service
    **/
    listServiceRole(req: operations.ListServiceRoleRequest, config?: AxiosRequestConfig): Promise<operations.ListServiceRoleResponse>;
    /**
     * listServiceUser - Retrieve a list of all conversation users in your service
    **/
    listServiceUser(req: operations.ListServiceUserRequest, config?: AxiosRequestConfig): Promise<operations.ListServiceUserResponse>;
    /**
     * listServiceUserConversation - Retrieve a list of all User Conversations for the User.
    **/
    listServiceUserConversation(req: operations.ListServiceUserConversationRequest, config?: AxiosRequestConfig): Promise<operations.ListServiceUserConversationResponse>;
    /**
     * listUser - Retrieve a list of all conversation users in your account's default service
    **/
    listUser(req: operations.ListUserRequest, config?: AxiosRequestConfig): Promise<operations.ListUserResponse>;
    /**
     * listUserConversation - Retrieve a list of all User Conversations for the User.
    **/
    listUserConversation(req: operations.ListUserConversationRequest, config?: AxiosRequestConfig): Promise<operations.ListUserConversationResponse>;
    /**
     * updateConfiguration - Update the global configuration of conversations on your account
    **/
    updateConfiguration(req: operations.UpdateConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateConfigurationResponse>;
    /**
     * updateConfigurationAddress - Update an existing address configuration
    **/
    updateConfigurationAddress(req: operations.UpdateConfigurationAddressRequest, config?: AxiosRequestConfig): Promise<operations.UpdateConfigurationAddressResponse>;
    updateConfigurationWebhook(req: operations.UpdateConfigurationWebhookRequest, config?: AxiosRequestConfig): Promise<operations.UpdateConfigurationWebhookResponse>;
    /**
     * updateConversation - Update an existing conversation in your account's default service
    **/
    updateConversation(req: operations.UpdateConversationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateConversationResponse>;
    /**
     * updateConversationMessage - Update an existing message in the conversation
    **/
    updateConversationMessage(req: operations.UpdateConversationMessageRequest, config?: AxiosRequestConfig): Promise<operations.UpdateConversationMessageResponse>;
    /**
     * updateConversationParticipant - Update an existing participant in the conversation
    **/
    updateConversationParticipant(req: operations.UpdateConversationParticipantRequest, config?: AxiosRequestConfig): Promise<operations.UpdateConversationParticipantResponse>;
    /**
     * updateConversationScopedWebhook - Update an existing conversation-scoped webhook
    **/
    updateConversationScopedWebhook(req: operations.UpdateConversationScopedWebhookRequest, config?: AxiosRequestConfig): Promise<operations.UpdateConversationScopedWebhookResponse>;
    /**
     * updateCredential - Update an existing push notification credential on your account
    **/
    updateCredential(req: operations.UpdateCredentialRequest, config?: AxiosRequestConfig): Promise<operations.UpdateCredentialResponse>;
    /**
     * updateRole - Update an existing user role in your account's default service
    **/
    updateRole(req: operations.UpdateRoleRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRoleResponse>;
    /**
     * updateServiceConfiguration - Update configuration settings of a conversation service
    **/
    updateServiceConfiguration(req: operations.UpdateServiceConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateServiceConfigurationResponse>;
    /**
     * updateServiceConversation - Update an existing conversation in your service
    **/
    updateServiceConversation(req: operations.UpdateServiceConversationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateServiceConversationResponse>;
    /**
     * updateServiceConversationMessage - Update an existing message in the conversation
    **/
    updateServiceConversationMessage(req: operations.UpdateServiceConversationMessageRequest, config?: AxiosRequestConfig): Promise<operations.UpdateServiceConversationMessageResponse>;
    /**
     * updateServiceConversationParticipant - Update an existing participant in the conversation
    **/
    updateServiceConversationParticipant(req: operations.UpdateServiceConversationParticipantRequest, config?: AxiosRequestConfig): Promise<operations.UpdateServiceConversationParticipantResponse>;
    /**
     * updateServiceConversationScopedWebhook - Update an existing conversation-scoped webhook
    **/
    updateServiceConversationScopedWebhook(req: operations.UpdateServiceConversationScopedWebhookRequest, config?: AxiosRequestConfig): Promise<operations.UpdateServiceConversationScopedWebhookResponse>;
    /**
     * updateServiceNotification - Update push notification service settings
    **/
    updateServiceNotification(req: operations.UpdateServiceNotificationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateServiceNotificationResponse>;
    /**
     * updateServiceRole - Update an existing user role in your service
    **/
    updateServiceRole(req: operations.UpdateServiceRoleRequest, config?: AxiosRequestConfig): Promise<operations.UpdateServiceRoleResponse>;
    /**
     * updateServiceUser - Update an existing conversation user in your service
    **/
    updateServiceUser(req: operations.UpdateServiceUserRequest, config?: AxiosRequestConfig): Promise<operations.UpdateServiceUserResponse>;
    /**
     * updateServiceUserConversation - Update a specific User Conversation.
    **/
    updateServiceUserConversation(req: operations.UpdateServiceUserConversationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateServiceUserConversationResponse>;
    /**
     * updateServiceWebhookConfiguration - Update a specific Webhook.
    **/
    updateServiceWebhookConfiguration(req: operations.UpdateServiceWebhookConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateServiceWebhookConfigurationResponse>;
    /**
     * updateUser - Update an existing conversation user in your account's default service
    **/
    updateUser(req: operations.UpdateUserRequest, config?: AxiosRequestConfig): Promise<operations.UpdateUserResponse>;
    /**
     * updateUserConversation - Update a specific User Conversation.
    **/
    updateUserConversation(req: operations.UpdateUserConversationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateUserConversationResponse>;
}
export {};
