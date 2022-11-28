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
    
req = operations.CreateAccountRequest(
    security=operations.CreateAccountSecurity(
        account_sid_auth_token=shared.SchemeAccountSidAuthToken(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    request=operations.CreateAccountCreateAccountRequest(
        friendly_name="explicabo",
    ),
)
    
res = s.create_account(req)

if res.api_v2010_account is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations
* `CreateAccount` - Create a new Twilio Subaccount from the account making the request
* `CreateAddress`
* `CreateApplication` - Create a new application within your account
* `CreateCall` - Create a new outgoing call to phones, SIP-enabled endpoints or Twilio Client connections
* `CreateCallFeedbackSummary` - Create a FeedbackSummary resource for a call
* `CreateCallRecording` - Create a recording for the call
* `CreateIncomingPhoneNumber` - Purchase a phone-number for the account.
* `CreateIncomingPhoneNumberAssignedAddOn` - Assign an Add-on installation to the Number specified.
* `CreateIncomingPhoneNumberLocal`
* `CreateIncomingPhoneNumberMobile`
* `CreateIncomingPhoneNumberTollFree`
* `CreateMessage` - Send a message from the account used to make the request
* `CreateMessageFeedback`
* `CreateNewKey`
* `CreateNewSigningKey` - Create a new Signing Key for the account making the request.
* `CreateParticipant`
* `CreatePayments` - create an instance of payments. This will start a new payments session
* `CreateQueue` - Create a queue
* `CreateSipAuthCallsCredentialListMapping` - Create a new credential list mapping resource
* `CreateSipAuthCallsIpAccessControlListMapping` - Create a new IP Access Control List mapping
* `CreateSipAuthRegistrationsCredentialListMapping` - Create a new credential list mapping resource
* `CreateSipCredential` - Create a new credential resource.
* `CreateSipCredentialList` - Create a Credential List
* `CreateSipCredentialListMapping` - Create a CredentialListMapping resource for an account.
* `CreateSipDomain` - Create a new Domain
* `CreateSipIpAccessControlList` - Create a new IpAccessControlList resource
* `CreateSipIpAccessControlListMapping` - Create a new IpAccessControlListMapping resource.
* `CreateSipIpAddress` - Create a new IpAddress resource.
* `CreateSiprec` - Create a Siprec
* `CreateStream` - Create a Stream
* `CreateToken` - Create a new token for ICE servers
* `CreateUsageTrigger` - Create a new UsageTrigger
* `CreateValidationRequest`
* `DeleteAddress`
* `DeleteApplication` - Delete the application by the specified application sid
* `DeleteCall` - Delete a Call record from your account. Once the record is deleted, it will no longer appear in the API and Account Portal logs.
* `DeleteCallFeedbackSummary` - Delete a FeedbackSummary resource from a call
* `DeleteCallRecording` - Delete a recording from your account
* `DeleteConferenceRecording` - Delete a recording from your account
* `DeleteConnectApp` - Delete an instance of a connect-app
* `DeleteIncomingPhoneNumber` - Delete a phone-numbers belonging to the account used to make the request.
* `DeleteIncomingPhoneNumberAssignedAddOn` - Remove the assignment of an Add-on installation from the Number specified.
* `DeleteKey`
* `DeleteMedia` - Delete media from your account. Once delete, you will no longer be billed
* `DeleteMessage` - Deletes a message record from your account
* `DeleteOutgoingCallerId` - Delete the caller-id specified from the account
* `DeleteParticipant` - Kick a participant from a given conference
* `DeleteQueue` - Remove an empty queue
* `DeleteRecording` - Delete a recording from your account
* `DeleteRecordingAddOnResult` - Delete a result and purge all associated Payloads
* `DeleteRecordingAddOnResultPayload` - Delete a payload from the result along with all associated Data
* `DeleteRecordingTranscription`
* `DeleteSigningKey`
* `DeleteSipAuthCallsCredentialListMapping` - Delete a credential list mapping from the requested domain
* `DeleteSipAuthCallsIpAccessControlListMapping` - Delete an IP Access Control List mapping from the requested domain
* `DeleteSipAuthRegistrationsCredentialListMapping` - Delete a credential list mapping from the requested domain
* `DeleteSipCredential` - Delete a credential resource.
* `DeleteSipCredentialList` - Delete a Credential List
* `DeleteSipCredentialListMapping` - Delete a CredentialListMapping resource from an account.
* `DeleteSipDomain` - Delete an instance of a Domain
* `DeleteSipIpAccessControlList` - Delete an IpAccessControlList from the requested account
* `DeleteSipIpAccessControlListMapping` - Delete an IpAccessControlListMapping resource.
* `DeleteSipIpAddress` - Delete an IpAddress resource.
* `DeleteTranscription` - Delete a transcription from the account used to make the request
* `DeleteUsageTrigger`
* `FetchAccount` - Fetch the account specified by the provided Account Sid
* `FetchAddress`
* `FetchApplication` - Fetch the application specified by the provided sid
* `FetchAuthorizedConnectApp` - Fetch an instance of an authorized-connect-app
* `FetchAvailablePhoneNumberCountry`
* `FetchBalance` - Fetch the balance for an Account based on Account Sid. Balance changes may not be reflected immediately. Child accounts do not contain balance information
* `FetchCall` - Fetch the call specified by the provided Call SID
* `FetchCallFeedback` - Fetch a Feedback resource from a call
* `FetchCallFeedbackSummary` - Fetch a FeedbackSummary resource from a call
* `FetchCallNotification`
* `FetchCallRecording` - Fetch an instance of a recording for a call
* `FetchConference` - Fetch an instance of a conference
* `FetchConferenceRecording` - Fetch an instance of a recording for a call
* `FetchConnectApp` - Fetch an instance of a connect-app
* `FetchIncomingPhoneNumber` - Fetch an incoming-phone-number belonging to the account used to make the request.
* `FetchIncomingPhoneNumberAssignedAddOn` - Fetch an instance of an Add-on installation currently assigned to this Number.
* `FetchIncomingPhoneNumberAssignedAddOnExtension` - Fetch an instance of an Extension for the Assigned Add-on.
* `FetchKey`
* `FetchMedia` - Fetch a single media instance belonging to the account used to make the request
* `FetchMember` - Fetch a specific member from the queue
* `FetchMessage` - Fetch a message belonging to the account used to make the request
* `FetchNotification` - Fetch a notification belonging to the account used to make the request
* `FetchOutgoingCallerId` - Fetch an outgoing-caller-id belonging to the account used to make the request
* `FetchParticipant` - Fetch an instance of a participant
* `FetchQueue` - Fetch an instance of a queue identified by the QueueSid
* `FetchRecording` - Fetch an instance of a recording
* `FetchRecordingAddOnResult` - Fetch an instance of an AddOnResult
* `FetchRecordingAddOnResultPayload` - Fetch an instance of a result payload
* `FetchRecordingTranscription`
* `FetchShortCode` - Fetch an instance of a short code
* `FetchSigningKey`
* `FetchSipAuthCallsCredentialListMapping` - Fetch a specific instance of a credential list mapping
* `FetchSipAuthCallsIpAccessControlListMapping` - Fetch a specific instance of an IP Access Control List mapping
* `FetchSipAuthRegistrationsCredentialListMapping` - Fetch a specific instance of a credential list mapping
* `FetchSipCredential` - Fetch a single credential.
* `FetchSipCredentialList` - Get a Credential List
* `FetchSipCredentialListMapping` - Fetch a single CredentialListMapping resource from an account.
* `FetchSipDomain` - Fetch an instance of a Domain
* `FetchSipIpAccessControlList` - Fetch a specific instance of an IpAccessControlList
* `FetchSipIpAccessControlListMapping` - Fetch an IpAccessControlListMapping resource.
* `FetchSipIpAddress` - Read one IpAddress resource.
* `FetchTranscription` - Fetch an instance of a Transcription
* `FetchUsageTrigger` - Fetch and instance of a usage-trigger
* `ListAccount` - Retrieves a collection of Accounts belonging to the account used to make the request
* `ListAddress`
* `ListApplication` - Retrieve a list of applications representing an application within the requesting account
* `ListAuthorizedConnectApp` - Retrieve a list of authorized-connect-apps belonging to the account used to make the request
* `ListAvailablePhoneNumberCountry`
* `ListAvailablePhoneNumberLocal`
* `ListAvailablePhoneNumberMachineToMachine`
* `ListAvailablePhoneNumberMobile`
* `ListAvailablePhoneNumberNational`
* `ListAvailablePhoneNumberSharedCost`
* `ListAvailablePhoneNumberTollFree`
* `ListAvailablePhoneNumberVoip`
* `ListCall` - Retrieves a collection of calls made to and from your account
* `ListCallEvent` - Retrieve a list of all events for a call.
* `ListCallNotification`
* `ListCallRecording` - Retrieve a list of recordings belonging to the call used to make the request
* `ListConference` - Retrieve a list of conferences belonging to the account used to make the request
* `ListConferenceRecording` - Retrieve a list of recordings belonging to the call used to make the request
* `ListConnectApp` - Retrieve a list of connect-apps belonging to the account used to make the request
* `ListDependentPhoneNumber`
* `ListIncomingPhoneNumber` - Retrieve a list of incoming-phone-numbers belonging to the account used to make the request.
* `ListIncomingPhoneNumberAssignedAddOn` - Retrieve a list of Add-on installations currently assigned to this Number.
* `ListIncomingPhoneNumberAssignedAddOnExtension` - Retrieve a list of Extensions for the Assigned Add-on.
* `ListIncomingPhoneNumberLocal`
* `ListIncomingPhoneNumberMobile`
* `ListIncomingPhoneNumberTollFree`
* `ListKey`
* `ListMedia` - Retrieve a list of Media resources belonging to the account used to make the request
* `ListMember` - Retrieve the members of the queue
* `ListMessage` - Retrieve a list of messages belonging to the account used to make the request
* `ListNotification` - Retrieve a list of notifications belonging to the account used to make the request
* `ListOutgoingCallerId` - Retrieve a list of outgoing-caller-ids belonging to the account used to make the request
* `ListParticipant` - Retrieve a list of participants belonging to the account used to make the request
* `ListQueue` - Retrieve a list of queues belonging to the account used to make the request
* `ListRecording` - Retrieve a list of recordings belonging to the account used to make the request
* `ListRecordingAddOnResult` - Retrieve a list of results belonging to the recording
* `ListRecordingAddOnResultPayload` - Retrieve a list of payloads belonging to the AddOnResult
* `ListRecordingTranscription`
* `ListShortCode` - Retrieve a list of short-codes belonging to the account used to make the request
* `ListSigningKey`
* `ListSipAuthCallsCredentialListMapping` - Retrieve a list of credential list mappings belonging to the domain used in the request
* `ListSipAuthCallsIpAccessControlListMapping` - Retrieve a list of IP Access Control List mappings belonging to the domain used in the request
* `ListSipAuthRegistrationsCredentialListMapping` - Retrieve a list of credential list mappings belonging to the domain used in the request
* `ListSipCredential` - Retrieve a list of credentials.
* `ListSipCredentialList` - Get All Credential Lists
* `ListSipCredentialListMapping` - Read multiple CredentialListMapping resources from an account.
* `ListSipDomain` - Retrieve a list of domains belonging to the account used to make the request
* `ListSipIpAccessControlList` - Retrieve a list of IpAccessControlLists that belong to the account used to make the request
* `ListSipIpAccessControlListMapping` - Retrieve a list of IpAccessControlListMapping resources.
* `ListSipIpAddress` - Read multiple IpAddress resources.
* `ListTranscription` - Retrieve a list of transcriptions belonging to the account used to make the request
* `ListUsageRecord` - Retrieve a list of usage-records belonging to the account used to make the request
* `ListUsageRecordAllTime`
* `ListUsageRecordDaily`
* `ListUsageRecordLastMonth`
* `ListUsageRecordMonthly`
* `ListUsageRecordThisMonth`
* `ListUsageRecordToday`
* `ListUsageRecordYearly`
* `ListUsageRecordYesterday`
* `ListUsageTrigger` - Retrieve a list of usage-triggers belonging to the account used to make the request
* `UpdateAccount` - Modify the properties of a given Account
* `UpdateAddress`
* `UpdateApplication` - Updates the application's properties
* `UpdateCall` - Initiates a call redirect or terminates a call
* `UpdateCallFeedback` - Update a Feedback resource for a call
* `UpdateCallRecording` - Changes the status of the recording to paused, stopped, or in-progress. Note: Pass `Twilio.CURRENT` instead of recording sid to reference current active recording.
* `UpdateConference`
* `UpdateConferenceRecording` - Changes the status of the recording to paused, stopped, or in-progress. Note: To use `Twilio.CURRENT`, pass it as recording sid.
* `UpdateConnectApp` - Update a connect-app with the specified parameters
* `UpdateIncomingPhoneNumber` - Update an incoming-phone-number instance.
* `UpdateKey`
* `UpdateMember` - Dequeue a member from a queue and have the member's call begin executing the TwiML document at that URL
* `UpdateMessage` - To redact a message-body from a post-flight message record, post to the message instance resource with an empty body
* `UpdateOutgoingCallerId` - Updates the caller-id
* `UpdateParticipant` - Update the properties of the participant
* `UpdatePayments` - update an instance of payments with different phases of payment flows.
* `UpdateQueue` - Update the queue with the new parameters
* `UpdateShortCode` - Update a short code with the following parameters
* `UpdateSigningKey`
* `UpdateSipCredential` - Update a credential resource.
* `UpdateSipCredentialList` - Update a Credential List
* `UpdateSipDomain` - Update the attributes of a domain
* `UpdateSipIpAccessControlList` - Rename an IpAccessControlList
* `UpdateSipIpAddress` - Update an IpAddress resource.
* `UpdateSiprec` - Stop a Siprec using either the SID of the Siprec resource or the `name` used when creating the resource
* `UpdateStream` - Stop a Stream using either the SID of the Stream resource or the `name` used when creating the resource
* `UpdateUsageTrigger` - Update an instance of a usage trigger

<!-- End SDK Available Operations -->