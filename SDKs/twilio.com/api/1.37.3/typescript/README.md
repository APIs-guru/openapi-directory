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
import { CreateAccountRequest, CreateAccountResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CreateAccountRequest = {
  security: {
    accountSidAuthToken: {
      password: "YOUR_PASSWORD_HERE",
      username: "YOUR_USERNAME_HERE",
    },
  },
  request: {
    friendlyName: "quis",
  },
};

sdk.sdk.createAccount(req).then((res: CreateAccountResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `createAccount` - Create a new Twilio Subaccount from the account making the request
* `createAddress`
* `createApplication` - Create a new application within your account
* `createCall` - Create a new outgoing call to phones, SIP-enabled endpoints or Twilio Client connections
* `createCallFeedbackSummary` - Create a FeedbackSummary resource for a call
* `createCallRecording` - Create a recording for the call
* `createIncomingPhoneNumber` - Purchase a phone-number for the account.
* `createIncomingPhoneNumberAssignedAddOn` - Assign an Add-on installation to the Number specified.
* `createIncomingPhoneNumberLocal`
* `createIncomingPhoneNumberMobile`
* `createIncomingPhoneNumberTollFree`
* `createMessage` - Send a message from the account used to make the request
* `createMessageFeedback`
* `createNewKey`
* `createNewSigningKey` - Create a new Signing Key for the account making the request.
* `createParticipant`
* `createPayments` - create an instance of payments. This will start a new payments session
* `createQueue` - Create a queue
* `createSipAuthCallsCredentialListMapping` - Create a new credential list mapping resource
* `createSipAuthCallsIpAccessControlListMapping` - Create a new IP Access Control List mapping
* `createSipAuthRegistrationsCredentialListMapping` - Create a new credential list mapping resource
* `createSipCredential` - Create a new credential resource.
* `createSipCredentialList` - Create a Credential List
* `createSipCredentialListMapping` - Create a CredentialListMapping resource for an account.
* `createSipDomain` - Create a new Domain
* `createSipIpAccessControlList` - Create a new IpAccessControlList resource
* `createSipIpAccessControlListMapping` - Create a new IpAccessControlListMapping resource.
* `createSipIpAddress` - Create a new IpAddress resource.
* `createSiprec` - Create a Siprec
* `createStream` - Create a Stream
* `createToken` - Create a new token for ICE servers
* `createUsageTrigger` - Create a new UsageTrigger
* `createUserDefinedMessage` - Create a new User Defined Message for the given Call SID.
* `createUserDefinedMessageSubscription` - Subscribe to User Defined Messages for a given Call SID.
* `createValidationRequest`
* `deleteAddress`
* `deleteApplication` - Delete the application by the specified application sid
* `deleteCall` - Delete a Call record from your account. Once the record is deleted, it will no longer appear in the API and Account Portal logs.
* `deleteCallFeedbackSummary` - Delete a FeedbackSummary resource from a call
* `deleteCallRecording` - Delete a recording from your account
* `deleteConferenceRecording` - Delete a recording from your account
* `deleteConnectApp` - Delete an instance of a connect-app
* `deleteIncomingPhoneNumber` - Delete a phone-numbers belonging to the account used to make the request.
* `deleteIncomingPhoneNumberAssignedAddOn` - Remove the assignment of an Add-on installation from the Number specified.
* `deleteKey`
* `deleteMedia` - Delete media from your account. Once delete, you will no longer be billed
* `deleteMessage` - Deletes a message record from your account
* `deleteOutgoingCallerId` - Delete the caller-id specified from the account
* `deleteParticipant` - Kick a participant from a given conference
* `deleteQueue` - Remove an empty queue
* `deleteRecording` - Delete a recording from your account
* `deleteRecordingAddOnResult` - Delete a result and purge all associated Payloads
* `deleteRecordingAddOnResultPayload` - Delete a payload from the result along with all associated Data
* `deleteRecordingTranscription`
* `deleteSigningKey`
* `deleteSipAuthCallsCredentialListMapping` - Delete a credential list mapping from the requested domain
* `deleteSipAuthCallsIpAccessControlListMapping` - Delete an IP Access Control List mapping from the requested domain
* `deleteSipAuthRegistrationsCredentialListMapping` - Delete a credential list mapping from the requested domain
* `deleteSipCredential` - Delete a credential resource.
* `deleteSipCredentialList` - Delete a Credential List
* `deleteSipCredentialListMapping` - Delete a CredentialListMapping resource from an account.
* `deleteSipDomain` - Delete an instance of a Domain
* `deleteSipIpAccessControlList` - Delete an IpAccessControlList from the requested account
* `deleteSipIpAccessControlListMapping` - Delete an IpAccessControlListMapping resource.
* `deleteSipIpAddress` - Delete an IpAddress resource.
* `deleteTranscription` - Delete a transcription from the account used to make the request
* `deleteUsageTrigger`
* `deleteUserDefinedMessageSubscription` - Delete a specific User Defined Message Subscription.
* `fetchAccount` - Fetch the account specified by the provided Account Sid
* `fetchAddress`
* `fetchApplication` - Fetch the application specified by the provided sid
* `fetchAuthorizedConnectApp` - Fetch an instance of an authorized-connect-app
* `fetchAvailablePhoneNumberCountry`
* `fetchBalance` - Fetch the balance for an Account based on Account Sid. Balance changes may not be reflected immediately. Child accounts do not contain balance information
* `fetchCall` - Fetch the call specified by the provided Call SID
* `fetchCallFeedback` - Fetch a Feedback resource from a call
* `fetchCallFeedbackSummary` - Fetch a FeedbackSummary resource from a call
* `fetchCallNotification`
* `fetchCallRecording` - Fetch an instance of a recording for a call
* `fetchConference` - Fetch an instance of a conference
* `fetchConferenceRecording` - Fetch an instance of a recording for a call
* `fetchConnectApp` - Fetch an instance of a connect-app
* `fetchIncomingPhoneNumber` - Fetch an incoming-phone-number belonging to the account used to make the request.
* `fetchIncomingPhoneNumberAssignedAddOn` - Fetch an instance of an Add-on installation currently assigned to this Number.
* `fetchIncomingPhoneNumberAssignedAddOnExtension` - Fetch an instance of an Extension for the Assigned Add-on.
* `fetchKey`
* `fetchMedia` - Fetch a single media instance belonging to the account used to make the request
* `fetchMember` - Fetch a specific member from the queue
* `fetchMessage` - Fetch a message belonging to the account used to make the request
* `fetchNotification` - Fetch a notification belonging to the account used to make the request
* `fetchOutgoingCallerId` - Fetch an outgoing-caller-id belonging to the account used to make the request
* `fetchParticipant` - Fetch an instance of a participant
* `fetchQueue` - Fetch an instance of a queue identified by the QueueSid
* `fetchRecording` - Fetch an instance of a recording
* `fetchRecordingAddOnResult` - Fetch an instance of an AddOnResult
* `fetchRecordingAddOnResultPayload` - Fetch an instance of a result payload
* `fetchRecordingTranscription`
* `fetchShortCode` - Fetch an instance of a short code
* `fetchSigningKey`
* `fetchSipAuthCallsCredentialListMapping` - Fetch a specific instance of a credential list mapping
* `fetchSipAuthCallsIpAccessControlListMapping` - Fetch a specific instance of an IP Access Control List mapping
* `fetchSipAuthRegistrationsCredentialListMapping` - Fetch a specific instance of a credential list mapping
* `fetchSipCredential` - Fetch a single credential.
* `fetchSipCredentialList` - Get a Credential List
* `fetchSipCredentialListMapping` - Fetch a single CredentialListMapping resource from an account.
* `fetchSipDomain` - Fetch an instance of a Domain
* `fetchSipIpAccessControlList` - Fetch a specific instance of an IpAccessControlList
* `fetchSipIpAccessControlListMapping` - Fetch an IpAccessControlListMapping resource.
* `fetchSipIpAddress` - Read one IpAddress resource.
* `fetchTranscription` - Fetch an instance of a Transcription
* `fetchUsageTrigger` - Fetch and instance of a usage-trigger
* `listAccount` - Retrieves a collection of Accounts belonging to the account used to make the request
* `listAddress`
* `listApplication` - Retrieve a list of applications representing an application within the requesting account
* `listAuthorizedConnectApp` - Retrieve a list of authorized-connect-apps belonging to the account used to make the request
* `listAvailablePhoneNumberCountry`
* `listAvailablePhoneNumberLocal`
* `listAvailablePhoneNumberMachineToMachine`
* `listAvailablePhoneNumberMobile`
* `listAvailablePhoneNumberNational`
* `listAvailablePhoneNumberSharedCost`
* `listAvailablePhoneNumberTollFree`
* `listAvailablePhoneNumberVoip`
* `listCall` - Retrieves a collection of calls made to and from your account
* `listCallEvent` - Retrieve a list of all events for a call.
* `listCallNotification`
* `listCallRecording` - Retrieve a list of recordings belonging to the call used to make the request
* `listConference` - Retrieve a list of conferences belonging to the account used to make the request
* `listConferenceRecording` - Retrieve a list of recordings belonging to the call used to make the request
* `listConnectApp` - Retrieve a list of connect-apps belonging to the account used to make the request
* `listDependentPhoneNumber`
* `listIncomingPhoneNumber` - Retrieve a list of incoming-phone-numbers belonging to the account used to make the request.
* `listIncomingPhoneNumberAssignedAddOn` - Retrieve a list of Add-on installations currently assigned to this Number.
* `listIncomingPhoneNumberAssignedAddOnExtension` - Retrieve a list of Extensions for the Assigned Add-on.
* `listIncomingPhoneNumberLocal`
* `listIncomingPhoneNumberMobile`
* `listIncomingPhoneNumberTollFree`
* `listKey`
* `listMedia` - Retrieve a list of Media resources belonging to the account used to make the request
* `listMember` - Retrieve the members of the queue
* `listMessage` - Retrieve a list of messages belonging to the account used to make the request
* `listNotification` - Retrieve a list of notifications belonging to the account used to make the request
* `listOutgoingCallerId` - Retrieve a list of outgoing-caller-ids belonging to the account used to make the request
* `listParticipant` - Retrieve a list of participants belonging to the account used to make the request
* `listQueue` - Retrieve a list of queues belonging to the account used to make the request
* `listRecording` - Retrieve a list of recordings belonging to the account used to make the request
* `listRecordingAddOnResult` - Retrieve a list of results belonging to the recording
* `listRecordingAddOnResultPayload` - Retrieve a list of payloads belonging to the AddOnResult
* `listRecordingTranscription`
* `listShortCode` - Retrieve a list of short-codes belonging to the account used to make the request
* `listSigningKey`
* `listSipAuthCallsCredentialListMapping` - Retrieve a list of credential list mappings belonging to the domain used in the request
* `listSipAuthCallsIpAccessControlListMapping` - Retrieve a list of IP Access Control List mappings belonging to the domain used in the request
* `listSipAuthRegistrationsCredentialListMapping` - Retrieve a list of credential list mappings belonging to the domain used in the request
* `listSipCredential` - Retrieve a list of credentials.
* `listSipCredentialList` - Get All Credential Lists
* `listSipCredentialListMapping` - Read multiple CredentialListMapping resources from an account.
* `listSipDomain` - Retrieve a list of domains belonging to the account used to make the request
* `listSipIpAccessControlList` - Retrieve a list of IpAccessControlLists that belong to the account used to make the request
* `listSipIpAccessControlListMapping` - Retrieve a list of IpAccessControlListMapping resources.
* `listSipIpAddress` - Read multiple IpAddress resources.
* `listTranscription` - Retrieve a list of transcriptions belonging to the account used to make the request
* `listUsageRecord` - Retrieve a list of usage-records belonging to the account used to make the request
* `listUsageRecordAllTime`
* `listUsageRecordDaily`
* `listUsageRecordLastMonth`
* `listUsageRecordMonthly`
* `listUsageRecordThisMonth`
* `listUsageRecordToday`
* `listUsageRecordYearly`
* `listUsageRecordYesterday`
* `listUsageTrigger` - Retrieve a list of usage-triggers belonging to the account used to make the request
* `updateAccount` - Modify the properties of a given Account
* `updateAddress`
* `updateApplication` - Updates the application's properties
* `updateCall` - Initiates a call redirect or terminates a call
* `updateCallFeedback` - Update a Feedback resource for a call
* `updateCallRecording` - Changes the status of the recording to paused, stopped, or in-progress. Note: Pass `Twilio.CURRENT` instead of recording sid to reference current active recording.
* `updateConference`
* `updateConferenceRecording` - Changes the status of the recording to paused, stopped, or in-progress. Note: To use `Twilio.CURRENT`, pass it as recording sid.
* `updateConnectApp` - Update a connect-app with the specified parameters
* `updateIncomingPhoneNumber` - Update an incoming-phone-number instance.
* `updateKey`
* `updateMember` - Dequeue a member from a queue and have the member's call begin executing the TwiML document at that URL
* `updateMessage` - To redact a message-body from a post-flight message record, post to the message instance resource with an empty body
* `updateOutgoingCallerId` - Updates the caller-id
* `updateParticipant` - Update the properties of the participant
* `updatePayments` - update an instance of payments with different phases of payment flows.
* `updateQueue` - Update the queue with the new parameters
* `updateShortCode` - Update a short code with the following parameters
* `updateSigningKey`
* `updateSipCredential` - Update a credential resource.
* `updateSipCredentialList` - Update a Credential List
* `updateSipDomain` - Update the attributes of a domain
* `updateSipIpAccessControlList` - Rename an IpAccessControlList
* `updateSipIpAddress` - Update an IpAddress resource.
* `updateSiprec` - Stop a Siprec using either the SID of the Siprec resource or the `name` used when creating the resource
* `updateStream` - Stop a Stream using either the SID of the Stream resource or the `name` used when creating the resource
* `updateUsageTrigger` - Update an instance of a usage trigger

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
