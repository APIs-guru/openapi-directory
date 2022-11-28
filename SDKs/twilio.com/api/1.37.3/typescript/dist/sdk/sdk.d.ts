import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.twilio.com"];
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
     * createAccount - Create a new Twilio Subaccount from the account making the request
    **/
    createAccount(req: operations.CreateAccountRequest, config?: AxiosRequestConfig): Promise<operations.CreateAccountResponse>;
    createAddress(req: operations.CreateAddressRequest, config?: AxiosRequestConfig): Promise<operations.CreateAddressResponse>;
    /**
     * createApplication - Create a new application within your account
    **/
    createApplication(req: operations.CreateApplicationRequest, config?: AxiosRequestConfig): Promise<operations.CreateApplicationResponse>;
    /**
     * createCall - Create a new outgoing call to phones, SIP-enabled endpoints or Twilio Client connections
    **/
    createCall(req: operations.CreateCallRequest, config?: AxiosRequestConfig): Promise<operations.CreateCallResponse>;
    /**
     * createCallFeedbackSummary - Create a FeedbackSummary resource for a call
    **/
    createCallFeedbackSummary(req: operations.CreateCallFeedbackSummaryRequest, config?: AxiosRequestConfig): Promise<operations.CreateCallFeedbackSummaryResponse>;
    /**
     * createCallRecording - Create a recording for the call
    **/
    createCallRecording(req: operations.CreateCallRecordingRequest, config?: AxiosRequestConfig): Promise<operations.CreateCallRecordingResponse>;
    /**
     * createIncomingPhoneNumber - Purchase a phone-number for the account.
    **/
    createIncomingPhoneNumber(req: operations.CreateIncomingPhoneNumberRequest, config?: AxiosRequestConfig): Promise<operations.CreateIncomingPhoneNumberResponse>;
    /**
     * createIncomingPhoneNumberAssignedAddOn - Assign an Add-on installation to the Number specified.
    **/
    createIncomingPhoneNumberAssignedAddOn(req: operations.CreateIncomingPhoneNumberAssignedAddOnRequest, config?: AxiosRequestConfig): Promise<operations.CreateIncomingPhoneNumberAssignedAddOnResponse>;
    createIncomingPhoneNumberLocal(req: operations.CreateIncomingPhoneNumberLocalRequest, config?: AxiosRequestConfig): Promise<operations.CreateIncomingPhoneNumberLocalResponse>;
    createIncomingPhoneNumberMobile(req: operations.CreateIncomingPhoneNumberMobileRequest, config?: AxiosRequestConfig): Promise<operations.CreateIncomingPhoneNumberMobileResponse>;
    createIncomingPhoneNumberTollFree(req: operations.CreateIncomingPhoneNumberTollFreeRequest, config?: AxiosRequestConfig): Promise<operations.CreateIncomingPhoneNumberTollFreeResponse>;
    /**
     * createMessage - Send a message from the account used to make the request
    **/
    createMessage(req: operations.CreateMessageRequest, config?: AxiosRequestConfig): Promise<operations.CreateMessageResponse>;
    createMessageFeedback(req: operations.CreateMessageFeedbackRequest, config?: AxiosRequestConfig): Promise<operations.CreateMessageFeedbackResponse>;
    createNewKey(req: operations.CreateNewKeyRequest, config?: AxiosRequestConfig): Promise<operations.CreateNewKeyResponse>;
    /**
     * createNewSigningKey - Create a new Signing Key for the account making the request.
    **/
    createNewSigningKey(req: operations.CreateNewSigningKeyRequest, config?: AxiosRequestConfig): Promise<operations.CreateNewSigningKeyResponse>;
    createParticipant(req: operations.CreateParticipantRequest, config?: AxiosRequestConfig): Promise<operations.CreateParticipantResponse>;
    /**
     * createPayments - create an instance of payments. This will start a new payments session
    **/
    createPayments(req: operations.CreatePaymentsRequest, config?: AxiosRequestConfig): Promise<operations.CreatePaymentsResponse>;
    /**
     * createQueue - Create a queue
    **/
    createQueue(req: operations.CreateQueueRequest, config?: AxiosRequestConfig): Promise<operations.CreateQueueResponse>;
    /**
     * createSipAuthCallsCredentialListMapping - Create a new credential list mapping resource
    **/
    createSipAuthCallsCredentialListMapping(req: operations.CreateSipAuthCallsCredentialListMappingRequest, config?: AxiosRequestConfig): Promise<operations.CreateSipAuthCallsCredentialListMappingResponse>;
    /**
     * createSipAuthCallsIpAccessControlListMapping - Create a new IP Access Control List mapping
    **/
    createSipAuthCallsIpAccessControlListMapping(req: operations.CreateSipAuthCallsIpAccessControlListMappingRequest, config?: AxiosRequestConfig): Promise<operations.CreateSipAuthCallsIpAccessControlListMappingResponse>;
    /**
     * createSipAuthRegistrationsCredentialListMapping - Create a new credential list mapping resource
    **/
    createSipAuthRegistrationsCredentialListMapping(req: operations.CreateSipAuthRegistrationsCredentialListMappingRequest, config?: AxiosRequestConfig): Promise<operations.CreateSipAuthRegistrationsCredentialListMappingResponse>;
    /**
     * createSipCredential - Create a new credential resource.
    **/
    createSipCredential(req: operations.CreateSipCredentialRequest, config?: AxiosRequestConfig): Promise<operations.CreateSipCredentialResponse>;
    /**
     * createSipCredentialList - Create a Credential List
    **/
    createSipCredentialList(req: operations.CreateSipCredentialListRequest, config?: AxiosRequestConfig): Promise<operations.CreateSipCredentialListResponse>;
    /**
     * createSipCredentialListMapping - Create a CredentialListMapping resource for an account.
    **/
    createSipCredentialListMapping(req: operations.CreateSipCredentialListMappingRequest, config?: AxiosRequestConfig): Promise<operations.CreateSipCredentialListMappingResponse>;
    /**
     * createSipDomain - Create a new Domain
    **/
    createSipDomain(req: operations.CreateSipDomainRequest, config?: AxiosRequestConfig): Promise<operations.CreateSipDomainResponse>;
    /**
     * createSipIpAccessControlList - Create a new IpAccessControlList resource
    **/
    createSipIpAccessControlList(req: operations.CreateSipIpAccessControlListRequest, config?: AxiosRequestConfig): Promise<operations.CreateSipIpAccessControlListResponse>;
    /**
     * createSipIpAccessControlListMapping - Create a new IpAccessControlListMapping resource.
    **/
    createSipIpAccessControlListMapping(req: operations.CreateSipIpAccessControlListMappingRequest, config?: AxiosRequestConfig): Promise<operations.CreateSipIpAccessControlListMappingResponse>;
    /**
     * createSipIpAddress - Create a new IpAddress resource.
    **/
    createSipIpAddress(req: operations.CreateSipIpAddressRequest, config?: AxiosRequestConfig): Promise<operations.CreateSipIpAddressResponse>;
    /**
     * createSiprec - Create a Siprec
    **/
    createSiprec(req: operations.CreateSiprecRequest, config?: AxiosRequestConfig): Promise<operations.CreateSiprecResponse>;
    /**
     * createStream - Create a Stream
    **/
    createStream(req: operations.CreateStreamRequest, config?: AxiosRequestConfig): Promise<operations.CreateStreamResponse>;
    /**
     * createToken - Create a new token for ICE servers
    **/
    createToken(req: operations.CreateTokenRequest, config?: AxiosRequestConfig): Promise<operations.CreateTokenResponse>;
    /**
     * createUsageTrigger - Create a new UsageTrigger
    **/
    createUsageTrigger(req: operations.CreateUsageTriggerRequest, config?: AxiosRequestConfig): Promise<operations.CreateUsageTriggerResponse>;
    /**
     * createUserDefinedMessage - Create a new User Defined Message for the given Call SID.
    **/
    createUserDefinedMessage(req: operations.CreateUserDefinedMessageRequest, config?: AxiosRequestConfig): Promise<operations.CreateUserDefinedMessageResponse>;
    /**
     * createUserDefinedMessageSubscription - Subscribe to User Defined Messages for a given Call SID.
    **/
    createUserDefinedMessageSubscription(req: operations.CreateUserDefinedMessageSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.CreateUserDefinedMessageSubscriptionResponse>;
    createValidationRequest(req: operations.CreateValidationRequestRequest, config?: AxiosRequestConfig): Promise<operations.CreateValidationRequestResponse>;
    deleteAddress(req: operations.DeleteAddressRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAddressResponse>;
    /**
     * deleteApplication - Delete the application by the specified application sid
    **/
    deleteApplication(req: operations.DeleteApplicationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteApplicationResponse>;
    /**
     * deleteCall - Delete a Call record from your account. Once the record is deleted, it will no longer appear in the API and Account Portal logs.
    **/
    deleteCall(req: operations.DeleteCallRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCallResponse>;
    /**
     * deleteCallFeedbackSummary - Delete a FeedbackSummary resource from a call
    **/
    deleteCallFeedbackSummary(req: operations.DeleteCallFeedbackSummaryRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCallFeedbackSummaryResponse>;
    /**
     * deleteCallRecording - Delete a recording from your account
    **/
    deleteCallRecording(req: operations.DeleteCallRecordingRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCallRecordingResponse>;
    /**
     * deleteConferenceRecording - Delete a recording from your account
    **/
    deleteConferenceRecording(req: operations.DeleteConferenceRecordingRequest, config?: AxiosRequestConfig): Promise<operations.DeleteConferenceRecordingResponse>;
    /**
     * deleteConnectApp - Delete an instance of a connect-app
    **/
    deleteConnectApp(req: operations.DeleteConnectAppRequest, config?: AxiosRequestConfig): Promise<operations.DeleteConnectAppResponse>;
    /**
     * deleteIncomingPhoneNumber - Delete a phone-numbers belonging to the account used to make the request.
    **/
    deleteIncomingPhoneNumber(req: operations.DeleteIncomingPhoneNumberRequest, config?: AxiosRequestConfig): Promise<operations.DeleteIncomingPhoneNumberResponse>;
    /**
     * deleteIncomingPhoneNumberAssignedAddOn - Remove the assignment of an Add-on installation from the Number specified.
    **/
    deleteIncomingPhoneNumberAssignedAddOn(req: operations.DeleteIncomingPhoneNumberAssignedAddOnRequest, config?: AxiosRequestConfig): Promise<operations.DeleteIncomingPhoneNumberAssignedAddOnResponse>;
    deleteKey(req: operations.DeleteKeyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteKeyResponse>;
    /**
     * deleteMedia - Delete media from your account. Once delete, you will no longer be billed
    **/
    deleteMedia(req: operations.DeleteMediaRequest, config?: AxiosRequestConfig): Promise<operations.DeleteMediaResponse>;
    /**
     * deleteMessage - Deletes a message record from your account
    **/
    deleteMessage(req: operations.DeleteMessageRequest, config?: AxiosRequestConfig): Promise<operations.DeleteMessageResponse>;
    /**
     * deleteOutgoingCallerId - Delete the caller-id specified from the account
    **/
    deleteOutgoingCallerId(req: operations.DeleteOutgoingCallerIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOutgoingCallerIdResponse>;
    /**
     * deleteParticipant - Kick a participant from a given conference
    **/
    deleteParticipant(req: operations.DeleteParticipantRequest, config?: AxiosRequestConfig): Promise<operations.DeleteParticipantResponse>;
    /**
     * deleteQueue - Remove an empty queue
    **/
    deleteQueue(req: operations.DeleteQueueRequest, config?: AxiosRequestConfig): Promise<operations.DeleteQueueResponse>;
    /**
     * deleteRecording - Delete a recording from your account
    **/
    deleteRecording(req: operations.DeleteRecordingRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRecordingResponse>;
    /**
     * deleteRecordingAddOnResult - Delete a result and purge all associated Payloads
    **/
    deleteRecordingAddOnResult(req: operations.DeleteRecordingAddOnResultRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRecordingAddOnResultResponse>;
    /**
     * deleteRecordingAddOnResultPayload - Delete a payload from the result along with all associated Data
    **/
    deleteRecordingAddOnResultPayload(req: operations.DeleteRecordingAddOnResultPayloadRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRecordingAddOnResultPayloadResponse>;
    deleteRecordingTranscription(req: operations.DeleteRecordingTranscriptionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRecordingTranscriptionResponse>;
    deleteSigningKey(req: operations.DeleteSigningKeyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSigningKeyResponse>;
    /**
     * deleteSipAuthCallsCredentialListMapping - Delete a credential list mapping from the requested domain
    **/
    deleteSipAuthCallsCredentialListMapping(req: operations.DeleteSipAuthCallsCredentialListMappingRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSipAuthCallsCredentialListMappingResponse>;
    /**
     * deleteSipAuthCallsIpAccessControlListMapping - Delete an IP Access Control List mapping from the requested domain
    **/
    deleteSipAuthCallsIpAccessControlListMapping(req: operations.DeleteSipAuthCallsIpAccessControlListMappingRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSipAuthCallsIpAccessControlListMappingResponse>;
    /**
     * deleteSipAuthRegistrationsCredentialListMapping - Delete a credential list mapping from the requested domain
    **/
    deleteSipAuthRegistrationsCredentialListMapping(req: operations.DeleteSipAuthRegistrationsCredentialListMappingRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSipAuthRegistrationsCredentialListMappingResponse>;
    /**
     * deleteSipCredential - Delete a credential resource.
    **/
    deleteSipCredential(req: operations.DeleteSipCredentialRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSipCredentialResponse>;
    /**
     * deleteSipCredentialList - Delete a Credential List
    **/
    deleteSipCredentialList(req: operations.DeleteSipCredentialListRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSipCredentialListResponse>;
    /**
     * deleteSipCredentialListMapping - Delete a CredentialListMapping resource from an account.
    **/
    deleteSipCredentialListMapping(req: operations.DeleteSipCredentialListMappingRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSipCredentialListMappingResponse>;
    /**
     * deleteSipDomain - Delete an instance of a Domain
    **/
    deleteSipDomain(req: operations.DeleteSipDomainRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSipDomainResponse>;
    /**
     * deleteSipIpAccessControlList - Delete an IpAccessControlList from the requested account
    **/
    deleteSipIpAccessControlList(req: operations.DeleteSipIpAccessControlListRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSipIpAccessControlListResponse>;
    /**
     * deleteSipIpAccessControlListMapping - Delete an IpAccessControlListMapping resource.
    **/
    deleteSipIpAccessControlListMapping(req: operations.DeleteSipIpAccessControlListMappingRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSipIpAccessControlListMappingResponse>;
    /**
     * deleteSipIpAddress - Delete an IpAddress resource.
    **/
    deleteSipIpAddress(req: operations.DeleteSipIpAddressRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSipIpAddressResponse>;
    /**
     * deleteTranscription - Delete a transcription from the account used to make the request
    **/
    deleteTranscription(req: operations.DeleteTranscriptionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTranscriptionResponse>;
    deleteUsageTrigger(req: operations.DeleteUsageTriggerRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUsageTriggerResponse>;
    /**
     * deleteUserDefinedMessageSubscription - Delete a specific User Defined Message Subscription.
    **/
    deleteUserDefinedMessageSubscription(req: operations.DeleteUserDefinedMessageSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserDefinedMessageSubscriptionResponse>;
    /**
     * fetchAccount - Fetch the account specified by the provided Account Sid
    **/
    fetchAccount(req: operations.FetchAccountRequest, config?: AxiosRequestConfig): Promise<operations.FetchAccountResponse>;
    fetchAddress(req: operations.FetchAddressRequest, config?: AxiosRequestConfig): Promise<operations.FetchAddressResponse>;
    /**
     * fetchApplication - Fetch the application specified by the provided sid
    **/
    fetchApplication(req: operations.FetchApplicationRequest, config?: AxiosRequestConfig): Promise<operations.FetchApplicationResponse>;
    /**
     * fetchAuthorizedConnectApp - Fetch an instance of an authorized-connect-app
    **/
    fetchAuthorizedConnectApp(req: operations.FetchAuthorizedConnectAppRequest, config?: AxiosRequestConfig): Promise<operations.FetchAuthorizedConnectAppResponse>;
    fetchAvailablePhoneNumberCountry(req: operations.FetchAvailablePhoneNumberCountryRequest, config?: AxiosRequestConfig): Promise<operations.FetchAvailablePhoneNumberCountryResponse>;
    /**
     * fetchBalance - Fetch the balance for an Account based on Account Sid. Balance changes may not be reflected immediately. Child accounts do not contain balance information
    **/
    fetchBalance(req: operations.FetchBalanceRequest, config?: AxiosRequestConfig): Promise<operations.FetchBalanceResponse>;
    /**
     * fetchCall - Fetch the call specified by the provided Call SID
    **/
    fetchCall(req: operations.FetchCallRequest, config?: AxiosRequestConfig): Promise<operations.FetchCallResponse>;
    /**
     * fetchCallFeedback - Fetch a Feedback resource from a call
    **/
    fetchCallFeedback(req: operations.FetchCallFeedbackRequest, config?: AxiosRequestConfig): Promise<operations.FetchCallFeedbackResponse>;
    /**
     * fetchCallFeedbackSummary - Fetch a FeedbackSummary resource from a call
    **/
    fetchCallFeedbackSummary(req: operations.FetchCallFeedbackSummaryRequest, config?: AxiosRequestConfig): Promise<operations.FetchCallFeedbackSummaryResponse>;
    fetchCallNotification(req: operations.FetchCallNotificationRequest, config?: AxiosRequestConfig): Promise<operations.FetchCallNotificationResponse>;
    /**
     * fetchCallRecording - Fetch an instance of a recording for a call
    **/
    fetchCallRecording(req: operations.FetchCallRecordingRequest, config?: AxiosRequestConfig): Promise<operations.FetchCallRecordingResponse>;
    /**
     * fetchConference - Fetch an instance of a conference
    **/
    fetchConference(req: operations.FetchConferenceRequest, config?: AxiosRequestConfig): Promise<operations.FetchConferenceResponse>;
    /**
     * fetchConferenceRecording - Fetch an instance of a recording for a call
    **/
    fetchConferenceRecording(req: operations.FetchConferenceRecordingRequest, config?: AxiosRequestConfig): Promise<operations.FetchConferenceRecordingResponse>;
    /**
     * fetchConnectApp - Fetch an instance of a connect-app
    **/
    fetchConnectApp(req: operations.FetchConnectAppRequest, config?: AxiosRequestConfig): Promise<operations.FetchConnectAppResponse>;
    /**
     * fetchIncomingPhoneNumber - Fetch an incoming-phone-number belonging to the account used to make the request.
    **/
    fetchIncomingPhoneNumber(req: operations.FetchIncomingPhoneNumberRequest, config?: AxiosRequestConfig): Promise<operations.FetchIncomingPhoneNumberResponse>;
    /**
     * fetchIncomingPhoneNumberAssignedAddOn - Fetch an instance of an Add-on installation currently assigned to this Number.
    **/
    fetchIncomingPhoneNumberAssignedAddOn(req: operations.FetchIncomingPhoneNumberAssignedAddOnRequest, config?: AxiosRequestConfig): Promise<operations.FetchIncomingPhoneNumberAssignedAddOnResponse>;
    /**
     * fetchIncomingPhoneNumberAssignedAddOnExtension - Fetch an instance of an Extension for the Assigned Add-on.
    **/
    fetchIncomingPhoneNumberAssignedAddOnExtension(req: operations.FetchIncomingPhoneNumberAssignedAddOnExtensionRequest, config?: AxiosRequestConfig): Promise<operations.FetchIncomingPhoneNumberAssignedAddOnExtensionResponse>;
    fetchKey(req: operations.FetchKeyRequest, config?: AxiosRequestConfig): Promise<operations.FetchKeyResponse>;
    /**
     * fetchMedia - Fetch a single media instance belonging to the account used to make the request
    **/
    fetchMedia(req: operations.FetchMediaRequest, config?: AxiosRequestConfig): Promise<operations.FetchMediaResponse>;
    /**
     * fetchMember - Fetch a specific member from the queue
    **/
    fetchMember(req: operations.FetchMemberRequest, config?: AxiosRequestConfig): Promise<operations.FetchMemberResponse>;
    /**
     * fetchMessage - Fetch a message belonging to the account used to make the request
    **/
    fetchMessage(req: operations.FetchMessageRequest, config?: AxiosRequestConfig): Promise<operations.FetchMessageResponse>;
    /**
     * fetchNotification - Fetch a notification belonging to the account used to make the request
    **/
    fetchNotification(req: operations.FetchNotificationRequest, config?: AxiosRequestConfig): Promise<operations.FetchNotificationResponse>;
    /**
     * fetchOutgoingCallerId - Fetch an outgoing-caller-id belonging to the account used to make the request
    **/
    fetchOutgoingCallerId(req: operations.FetchOutgoingCallerIdRequest, config?: AxiosRequestConfig): Promise<operations.FetchOutgoingCallerIdResponse>;
    /**
     * fetchParticipant - Fetch an instance of a participant
    **/
    fetchParticipant(req: operations.FetchParticipantRequest, config?: AxiosRequestConfig): Promise<operations.FetchParticipantResponse>;
    /**
     * fetchQueue - Fetch an instance of a queue identified by the QueueSid
    **/
    fetchQueue(req: operations.FetchQueueRequest, config?: AxiosRequestConfig): Promise<operations.FetchQueueResponse>;
    /**
     * fetchRecording - Fetch an instance of a recording
    **/
    fetchRecording(req: operations.FetchRecordingRequest, config?: AxiosRequestConfig): Promise<operations.FetchRecordingResponse>;
    /**
     * fetchRecordingAddOnResult - Fetch an instance of an AddOnResult
    **/
    fetchRecordingAddOnResult(req: operations.FetchRecordingAddOnResultRequest, config?: AxiosRequestConfig): Promise<operations.FetchRecordingAddOnResultResponse>;
    /**
     * fetchRecordingAddOnResultPayload - Fetch an instance of a result payload
    **/
    fetchRecordingAddOnResultPayload(req: operations.FetchRecordingAddOnResultPayloadRequest, config?: AxiosRequestConfig): Promise<operations.FetchRecordingAddOnResultPayloadResponse>;
    fetchRecordingTranscription(req: operations.FetchRecordingTranscriptionRequest, config?: AxiosRequestConfig): Promise<operations.FetchRecordingTranscriptionResponse>;
    /**
     * fetchShortCode - Fetch an instance of a short code
    **/
    fetchShortCode(req: operations.FetchShortCodeRequest, config?: AxiosRequestConfig): Promise<operations.FetchShortCodeResponse>;
    fetchSigningKey(req: operations.FetchSigningKeyRequest, config?: AxiosRequestConfig): Promise<operations.FetchSigningKeyResponse>;
    /**
     * fetchSipAuthCallsCredentialListMapping - Fetch a specific instance of a credential list mapping
    **/
    fetchSipAuthCallsCredentialListMapping(req: operations.FetchSipAuthCallsCredentialListMappingRequest, config?: AxiosRequestConfig): Promise<operations.FetchSipAuthCallsCredentialListMappingResponse>;
    /**
     * fetchSipAuthCallsIpAccessControlListMapping - Fetch a specific instance of an IP Access Control List mapping
    **/
    fetchSipAuthCallsIpAccessControlListMapping(req: operations.FetchSipAuthCallsIpAccessControlListMappingRequest, config?: AxiosRequestConfig): Promise<operations.FetchSipAuthCallsIpAccessControlListMappingResponse>;
    /**
     * fetchSipAuthRegistrationsCredentialListMapping - Fetch a specific instance of a credential list mapping
    **/
    fetchSipAuthRegistrationsCredentialListMapping(req: operations.FetchSipAuthRegistrationsCredentialListMappingRequest, config?: AxiosRequestConfig): Promise<operations.FetchSipAuthRegistrationsCredentialListMappingResponse>;
    /**
     * fetchSipCredential - Fetch a single credential.
    **/
    fetchSipCredential(req: operations.FetchSipCredentialRequest, config?: AxiosRequestConfig): Promise<operations.FetchSipCredentialResponse>;
    /**
     * fetchSipCredentialList - Get a Credential List
    **/
    fetchSipCredentialList(req: operations.FetchSipCredentialListRequest, config?: AxiosRequestConfig): Promise<operations.FetchSipCredentialListResponse>;
    /**
     * fetchSipCredentialListMapping - Fetch a single CredentialListMapping resource from an account.
    **/
    fetchSipCredentialListMapping(req: operations.FetchSipCredentialListMappingRequest, config?: AxiosRequestConfig): Promise<operations.FetchSipCredentialListMappingResponse>;
    /**
     * fetchSipDomain - Fetch an instance of a Domain
    **/
    fetchSipDomain(req: operations.FetchSipDomainRequest, config?: AxiosRequestConfig): Promise<operations.FetchSipDomainResponse>;
    /**
     * fetchSipIpAccessControlList - Fetch a specific instance of an IpAccessControlList
    **/
    fetchSipIpAccessControlList(req: operations.FetchSipIpAccessControlListRequest, config?: AxiosRequestConfig): Promise<operations.FetchSipIpAccessControlListResponse>;
    /**
     * fetchSipIpAccessControlListMapping - Fetch an IpAccessControlListMapping resource.
    **/
    fetchSipIpAccessControlListMapping(req: operations.FetchSipIpAccessControlListMappingRequest, config?: AxiosRequestConfig): Promise<operations.FetchSipIpAccessControlListMappingResponse>;
    /**
     * fetchSipIpAddress - Read one IpAddress resource.
    **/
    fetchSipIpAddress(req: operations.FetchSipIpAddressRequest, config?: AxiosRequestConfig): Promise<operations.FetchSipIpAddressResponse>;
    /**
     * fetchTranscription - Fetch an instance of a Transcription
    **/
    fetchTranscription(req: operations.FetchTranscriptionRequest, config?: AxiosRequestConfig): Promise<operations.FetchTranscriptionResponse>;
    /**
     * fetchUsageTrigger - Fetch and instance of a usage-trigger
    **/
    fetchUsageTrigger(req: operations.FetchUsageTriggerRequest, config?: AxiosRequestConfig): Promise<operations.FetchUsageTriggerResponse>;
    /**
     * listAccount - Retrieves a collection of Accounts belonging to the account used to make the request
    **/
    listAccount(req: operations.ListAccountRequest, config?: AxiosRequestConfig): Promise<operations.ListAccountResponse>;
    listAddress(req: operations.ListAddressRequest, config?: AxiosRequestConfig): Promise<operations.ListAddressResponse>;
    /**
     * listApplication - Retrieve a list of applications representing an application within the requesting account
    **/
    listApplication(req: operations.ListApplicationRequest, config?: AxiosRequestConfig): Promise<operations.ListApplicationResponse>;
    /**
     * listAuthorizedConnectApp - Retrieve a list of authorized-connect-apps belonging to the account used to make the request
    **/
    listAuthorizedConnectApp(req: operations.ListAuthorizedConnectAppRequest, config?: AxiosRequestConfig): Promise<operations.ListAuthorizedConnectAppResponse>;
    listAvailablePhoneNumberCountry(req: operations.ListAvailablePhoneNumberCountryRequest, config?: AxiosRequestConfig): Promise<operations.ListAvailablePhoneNumberCountryResponse>;
    listAvailablePhoneNumberLocal(req: operations.ListAvailablePhoneNumberLocalRequest, config?: AxiosRequestConfig): Promise<operations.ListAvailablePhoneNumberLocalResponse>;
    listAvailablePhoneNumberMachineToMachine(req: operations.ListAvailablePhoneNumberMachineToMachineRequest, config?: AxiosRequestConfig): Promise<operations.ListAvailablePhoneNumberMachineToMachineResponse>;
    listAvailablePhoneNumberMobile(req: operations.ListAvailablePhoneNumberMobileRequest, config?: AxiosRequestConfig): Promise<operations.ListAvailablePhoneNumberMobileResponse>;
    listAvailablePhoneNumberNational(req: operations.ListAvailablePhoneNumberNationalRequest, config?: AxiosRequestConfig): Promise<operations.ListAvailablePhoneNumberNationalResponse>;
    listAvailablePhoneNumberSharedCost(req: operations.ListAvailablePhoneNumberSharedCostRequest, config?: AxiosRequestConfig): Promise<operations.ListAvailablePhoneNumberSharedCostResponse>;
    listAvailablePhoneNumberTollFree(req: operations.ListAvailablePhoneNumberTollFreeRequest, config?: AxiosRequestConfig): Promise<operations.ListAvailablePhoneNumberTollFreeResponse>;
    listAvailablePhoneNumberVoip(req: operations.ListAvailablePhoneNumberVoipRequest, config?: AxiosRequestConfig): Promise<operations.ListAvailablePhoneNumberVoipResponse>;
    /**
     * listCall - Retrieves a collection of calls made to and from your account
    **/
    listCall(req: operations.ListCallRequest, config?: AxiosRequestConfig): Promise<operations.ListCallResponse>;
    /**
     * listCallEvent - Retrieve a list of all events for a call.
    **/
    listCallEvent(req: operations.ListCallEventRequest, config?: AxiosRequestConfig): Promise<operations.ListCallEventResponse>;
    listCallNotification(req: operations.ListCallNotificationRequest, config?: AxiosRequestConfig): Promise<operations.ListCallNotificationResponse>;
    /**
     * listCallRecording - Retrieve a list of recordings belonging to the call used to make the request
    **/
    listCallRecording(req: operations.ListCallRecordingRequest, config?: AxiosRequestConfig): Promise<operations.ListCallRecordingResponse>;
    /**
     * listConference - Retrieve a list of conferences belonging to the account used to make the request
    **/
    listConference(req: operations.ListConferenceRequest, config?: AxiosRequestConfig): Promise<operations.ListConferenceResponse>;
    /**
     * listConferenceRecording - Retrieve a list of recordings belonging to the call used to make the request
    **/
    listConferenceRecording(req: operations.ListConferenceRecordingRequest, config?: AxiosRequestConfig): Promise<operations.ListConferenceRecordingResponse>;
    /**
     * listConnectApp - Retrieve a list of connect-apps belonging to the account used to make the request
    **/
    listConnectApp(req: operations.ListConnectAppRequest, config?: AxiosRequestConfig): Promise<operations.ListConnectAppResponse>;
    listDependentPhoneNumber(req: operations.ListDependentPhoneNumberRequest, config?: AxiosRequestConfig): Promise<operations.ListDependentPhoneNumberResponse>;
    /**
     * listIncomingPhoneNumber - Retrieve a list of incoming-phone-numbers belonging to the account used to make the request.
    **/
    listIncomingPhoneNumber(req: operations.ListIncomingPhoneNumberRequest, config?: AxiosRequestConfig): Promise<operations.ListIncomingPhoneNumberResponse>;
    /**
     * listIncomingPhoneNumberAssignedAddOn - Retrieve a list of Add-on installations currently assigned to this Number.
    **/
    listIncomingPhoneNumberAssignedAddOn(req: operations.ListIncomingPhoneNumberAssignedAddOnRequest, config?: AxiosRequestConfig): Promise<operations.ListIncomingPhoneNumberAssignedAddOnResponse>;
    /**
     * listIncomingPhoneNumberAssignedAddOnExtension - Retrieve a list of Extensions for the Assigned Add-on.
    **/
    listIncomingPhoneNumberAssignedAddOnExtension(req: operations.ListIncomingPhoneNumberAssignedAddOnExtensionRequest, config?: AxiosRequestConfig): Promise<operations.ListIncomingPhoneNumberAssignedAddOnExtensionResponse>;
    listIncomingPhoneNumberLocal(req: operations.ListIncomingPhoneNumberLocalRequest, config?: AxiosRequestConfig): Promise<operations.ListIncomingPhoneNumberLocalResponse>;
    listIncomingPhoneNumberMobile(req: operations.ListIncomingPhoneNumberMobileRequest, config?: AxiosRequestConfig): Promise<operations.ListIncomingPhoneNumberMobileResponse>;
    listIncomingPhoneNumberTollFree(req: operations.ListIncomingPhoneNumberTollFreeRequest, config?: AxiosRequestConfig): Promise<operations.ListIncomingPhoneNumberTollFreeResponse>;
    listKey(req: operations.ListKeyRequest, config?: AxiosRequestConfig): Promise<operations.ListKeyResponse>;
    /**
     * listMedia - Retrieve a list of Media resources belonging to the account used to make the request
    **/
    listMedia(req: operations.ListMediaRequest, config?: AxiosRequestConfig): Promise<operations.ListMediaResponse>;
    /**
     * listMember - Retrieve the members of the queue
    **/
    listMember(req: operations.ListMemberRequest, config?: AxiosRequestConfig): Promise<operations.ListMemberResponse>;
    /**
     * listMessage - Retrieve a list of messages belonging to the account used to make the request
    **/
    listMessage(req: operations.ListMessageRequest, config?: AxiosRequestConfig): Promise<operations.ListMessageResponse>;
    /**
     * listNotification - Retrieve a list of notifications belonging to the account used to make the request
    **/
    listNotification(req: operations.ListNotificationRequest, config?: AxiosRequestConfig): Promise<operations.ListNotificationResponse>;
    /**
     * listOutgoingCallerId - Retrieve a list of outgoing-caller-ids belonging to the account used to make the request
    **/
    listOutgoingCallerId(req: operations.ListOutgoingCallerIdRequest, config?: AxiosRequestConfig): Promise<operations.ListOutgoingCallerIdResponse>;
    /**
     * listParticipant - Retrieve a list of participants belonging to the account used to make the request
    **/
    listParticipant(req: operations.ListParticipantRequest, config?: AxiosRequestConfig): Promise<operations.ListParticipantResponse>;
    /**
     * listQueue - Retrieve a list of queues belonging to the account used to make the request
    **/
    listQueue(req: operations.ListQueueRequest, config?: AxiosRequestConfig): Promise<operations.ListQueueResponse>;
    /**
     * listRecording - Retrieve a list of recordings belonging to the account used to make the request
    **/
    listRecording(req: operations.ListRecordingRequest, config?: AxiosRequestConfig): Promise<operations.ListRecordingResponse>;
    /**
     * listRecordingAddOnResult - Retrieve a list of results belonging to the recording
    **/
    listRecordingAddOnResult(req: operations.ListRecordingAddOnResultRequest, config?: AxiosRequestConfig): Promise<operations.ListRecordingAddOnResultResponse>;
    /**
     * listRecordingAddOnResultPayload - Retrieve a list of payloads belonging to the AddOnResult
    **/
    listRecordingAddOnResultPayload(req: operations.ListRecordingAddOnResultPayloadRequest, config?: AxiosRequestConfig): Promise<operations.ListRecordingAddOnResultPayloadResponse>;
    listRecordingTranscription(req: operations.ListRecordingTranscriptionRequest, config?: AxiosRequestConfig): Promise<operations.ListRecordingTranscriptionResponse>;
    /**
     * listShortCode - Retrieve a list of short-codes belonging to the account used to make the request
    **/
    listShortCode(req: operations.ListShortCodeRequest, config?: AxiosRequestConfig): Promise<operations.ListShortCodeResponse>;
    listSigningKey(req: operations.ListSigningKeyRequest, config?: AxiosRequestConfig): Promise<operations.ListSigningKeyResponse>;
    /**
     * listSipAuthCallsCredentialListMapping - Retrieve a list of credential list mappings belonging to the domain used in the request
    **/
    listSipAuthCallsCredentialListMapping(req: operations.ListSipAuthCallsCredentialListMappingRequest, config?: AxiosRequestConfig): Promise<operations.ListSipAuthCallsCredentialListMappingResponse>;
    /**
     * listSipAuthCallsIpAccessControlListMapping - Retrieve a list of IP Access Control List mappings belonging to the domain used in the request
    **/
    listSipAuthCallsIpAccessControlListMapping(req: operations.ListSipAuthCallsIpAccessControlListMappingRequest, config?: AxiosRequestConfig): Promise<operations.ListSipAuthCallsIpAccessControlListMappingResponse>;
    /**
     * listSipAuthRegistrationsCredentialListMapping - Retrieve a list of credential list mappings belonging to the domain used in the request
    **/
    listSipAuthRegistrationsCredentialListMapping(req: operations.ListSipAuthRegistrationsCredentialListMappingRequest, config?: AxiosRequestConfig): Promise<operations.ListSipAuthRegistrationsCredentialListMappingResponse>;
    /**
     * listSipCredential - Retrieve a list of credentials.
    **/
    listSipCredential(req: operations.ListSipCredentialRequest, config?: AxiosRequestConfig): Promise<operations.ListSipCredentialResponse>;
    /**
     * listSipCredentialList - Get All Credential Lists
    **/
    listSipCredentialList(req: operations.ListSipCredentialListRequest, config?: AxiosRequestConfig): Promise<operations.ListSipCredentialListResponse>;
    /**
     * listSipCredentialListMapping - Read multiple CredentialListMapping resources from an account.
    **/
    listSipCredentialListMapping(req: operations.ListSipCredentialListMappingRequest, config?: AxiosRequestConfig): Promise<operations.ListSipCredentialListMappingResponse>;
    /**
     * listSipDomain - Retrieve a list of domains belonging to the account used to make the request
    **/
    listSipDomain(req: operations.ListSipDomainRequest, config?: AxiosRequestConfig): Promise<operations.ListSipDomainResponse>;
    /**
     * listSipIpAccessControlList - Retrieve a list of IpAccessControlLists that belong to the account used to make the request
    **/
    listSipIpAccessControlList(req: operations.ListSipIpAccessControlListRequest, config?: AxiosRequestConfig): Promise<operations.ListSipIpAccessControlListResponse>;
    /**
     * listSipIpAccessControlListMapping - Retrieve a list of IpAccessControlListMapping resources.
    **/
    listSipIpAccessControlListMapping(req: operations.ListSipIpAccessControlListMappingRequest, config?: AxiosRequestConfig): Promise<operations.ListSipIpAccessControlListMappingResponse>;
    /**
     * listSipIpAddress - Read multiple IpAddress resources.
    **/
    listSipIpAddress(req: operations.ListSipIpAddressRequest, config?: AxiosRequestConfig): Promise<operations.ListSipIpAddressResponse>;
    /**
     * listTranscription - Retrieve a list of transcriptions belonging to the account used to make the request
    **/
    listTranscription(req: operations.ListTranscriptionRequest, config?: AxiosRequestConfig): Promise<operations.ListTranscriptionResponse>;
    /**
     * listUsageRecord - Retrieve a list of usage-records belonging to the account used to make the request
    **/
    listUsageRecord(req: operations.ListUsageRecordRequest, config?: AxiosRequestConfig): Promise<operations.ListUsageRecordResponse>;
    listUsageRecordAllTime(req: operations.ListUsageRecordAllTimeRequest, config?: AxiosRequestConfig): Promise<operations.ListUsageRecordAllTimeResponse>;
    listUsageRecordDaily(req: operations.ListUsageRecordDailyRequest, config?: AxiosRequestConfig): Promise<operations.ListUsageRecordDailyResponse>;
    listUsageRecordLastMonth(req: operations.ListUsageRecordLastMonthRequest, config?: AxiosRequestConfig): Promise<operations.ListUsageRecordLastMonthResponse>;
    listUsageRecordMonthly(req: operations.ListUsageRecordMonthlyRequest, config?: AxiosRequestConfig): Promise<operations.ListUsageRecordMonthlyResponse>;
    listUsageRecordThisMonth(req: operations.ListUsageRecordThisMonthRequest, config?: AxiosRequestConfig): Promise<operations.ListUsageRecordThisMonthResponse>;
    listUsageRecordToday(req: operations.ListUsageRecordTodayRequest, config?: AxiosRequestConfig): Promise<operations.ListUsageRecordTodayResponse>;
    listUsageRecordYearly(req: operations.ListUsageRecordYearlyRequest, config?: AxiosRequestConfig): Promise<operations.ListUsageRecordYearlyResponse>;
    listUsageRecordYesterday(req: operations.ListUsageRecordYesterdayRequest, config?: AxiosRequestConfig): Promise<operations.ListUsageRecordYesterdayResponse>;
    /**
     * listUsageTrigger - Retrieve a list of usage-triggers belonging to the account used to make the request
    **/
    listUsageTrigger(req: operations.ListUsageTriggerRequest, config?: AxiosRequestConfig): Promise<operations.ListUsageTriggerResponse>;
    /**
     * updateAccount - Modify the properties of a given Account
    **/
    updateAccount(req: operations.UpdateAccountRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAccountResponse>;
    updateAddress(req: operations.UpdateAddressRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAddressResponse>;
    /**
     * updateApplication - Updates the application's properties
    **/
    updateApplication(req: operations.UpdateApplicationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateApplicationResponse>;
    /**
     * updateCall - Initiates a call redirect or terminates a call
    **/
    updateCall(req: operations.UpdateCallRequest, config?: AxiosRequestConfig): Promise<operations.UpdateCallResponse>;
    /**
     * updateCallFeedback - Update a Feedback resource for a call
    **/
    updateCallFeedback(req: operations.UpdateCallFeedbackRequest, config?: AxiosRequestConfig): Promise<operations.UpdateCallFeedbackResponse>;
    /**
     * updateCallRecording - Changes the status of the recording to paused, stopped, or in-progress. Note: Pass `Twilio.CURRENT` instead of recording sid to reference current active recording.
    **/
    updateCallRecording(req: operations.UpdateCallRecordingRequest, config?: AxiosRequestConfig): Promise<operations.UpdateCallRecordingResponse>;
    updateConference(req: operations.UpdateConferenceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateConferenceResponse>;
    /**
     * updateConferenceRecording - Changes the status of the recording to paused, stopped, or in-progress. Note: To use `Twilio.CURRENT`, pass it as recording sid.
    **/
    updateConferenceRecording(req: operations.UpdateConferenceRecordingRequest, config?: AxiosRequestConfig): Promise<operations.UpdateConferenceRecordingResponse>;
    /**
     * updateConnectApp - Update a connect-app with the specified parameters
    **/
    updateConnectApp(req: operations.UpdateConnectAppRequest, config?: AxiosRequestConfig): Promise<operations.UpdateConnectAppResponse>;
    /**
     * updateIncomingPhoneNumber - Update an incoming-phone-number instance.
    **/
    updateIncomingPhoneNumber(req: operations.UpdateIncomingPhoneNumberRequest, config?: AxiosRequestConfig): Promise<operations.UpdateIncomingPhoneNumberResponse>;
    updateKey(req: operations.UpdateKeyRequest, config?: AxiosRequestConfig): Promise<operations.UpdateKeyResponse>;
    /**
     * updateMember - Dequeue a member from a queue and have the member's call begin executing the TwiML document at that URL
    **/
    updateMember(req: operations.UpdateMemberRequest, config?: AxiosRequestConfig): Promise<operations.UpdateMemberResponse>;
    /**
     * updateMessage - To redact a message-body from a post-flight message record, post to the message instance resource with an empty body
    **/
    updateMessage(req: operations.UpdateMessageRequest, config?: AxiosRequestConfig): Promise<operations.UpdateMessageResponse>;
    /**
     * updateOutgoingCallerId - Updates the caller-id
    **/
    updateOutgoingCallerId(req: operations.UpdateOutgoingCallerIdRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOutgoingCallerIdResponse>;
    /**
     * updateParticipant - Update the properties of the participant
    **/
    updateParticipant(req: operations.UpdateParticipantRequest, config?: AxiosRequestConfig): Promise<operations.UpdateParticipantResponse>;
    /**
     * updatePayments - update an instance of payments with different phases of payment flows.
    **/
    updatePayments(req: operations.UpdatePaymentsRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePaymentsResponse>;
    /**
     * updateQueue - Update the queue with the new parameters
    **/
    updateQueue(req: operations.UpdateQueueRequest, config?: AxiosRequestConfig): Promise<operations.UpdateQueueResponse>;
    /**
     * updateShortCode - Update a short code with the following parameters
    **/
    updateShortCode(req: operations.UpdateShortCodeRequest, config?: AxiosRequestConfig): Promise<operations.UpdateShortCodeResponse>;
    updateSigningKey(req: operations.UpdateSigningKeyRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSigningKeyResponse>;
    /**
     * updateSipCredential - Update a credential resource.
    **/
    updateSipCredential(req: operations.UpdateSipCredentialRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSipCredentialResponse>;
    /**
     * updateSipCredentialList - Update a Credential List
    **/
    updateSipCredentialList(req: operations.UpdateSipCredentialListRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSipCredentialListResponse>;
    /**
     * updateSipDomain - Update the attributes of a domain
    **/
    updateSipDomain(req: operations.UpdateSipDomainRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSipDomainResponse>;
    /**
     * updateSipIpAccessControlList - Rename an IpAccessControlList
    **/
    updateSipIpAccessControlList(req: operations.UpdateSipIpAccessControlListRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSipIpAccessControlListResponse>;
    /**
     * updateSipIpAddress - Update an IpAddress resource.
    **/
    updateSipIpAddress(req: operations.UpdateSipIpAddressRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSipIpAddressResponse>;
    /**
     * updateSiprec - Stop a Siprec using either the SID of the Siprec resource or the `name` used when creating the resource
    **/
    updateSiprec(req: operations.UpdateSiprecRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSiprecResponse>;
    /**
     * updateStream - Stop a Stream using either the SID of the Stream resource or the `name` used when creating the resource
    **/
    updateStream(req: operations.UpdateStreamRequest, config?: AxiosRequestConfig): Promise<operations.UpdateStreamResponse>;
    /**
     * updateUsageTrigger - Update an instance of a usage trigger
    **/
    updateUsageTrigger(req: operations.UpdateUsageTriggerRequest, config?: AxiosRequestConfig): Promise<operations.UpdateUsageTriggerResponse>;
}
export {};
