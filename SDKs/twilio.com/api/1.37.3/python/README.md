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
        friendly_name="quis",
    ),
)
    
res = s.sdk.create_account(req)

if res.api_v2010_account is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `create_account` - Create a new Twilio Subaccount from the account making the request
* `create_address`
* `create_application` - Create a new application within your account
* `create_call` - Create a new outgoing call to phones, SIP-enabled endpoints or Twilio Client connections
* `create_call_feedback_summary` - Create a FeedbackSummary resource for a call
* `create_call_recording` - Create a recording for the call
* `create_incoming_phone_number` - Purchase a phone-number for the account.
* `create_incoming_phone_number_assigned_add_on` - Assign an Add-on installation to the Number specified.
* `create_incoming_phone_number_local`
* `create_incoming_phone_number_mobile`
* `create_incoming_phone_number_toll_free`
* `create_message` - Send a message from the account used to make the request
* `create_message_feedback`
* `create_new_key`
* `create_new_signing_key` - Create a new Signing Key for the account making the request.
* `create_participant`
* `create_payments` - create an instance of payments. This will start a new payments session
* `create_queue` - Create a queue
* `create_sip_auth_calls_credential_list_mapping` - Create a new credential list mapping resource
* `create_sip_auth_calls_ip_access_control_list_mapping` - Create a new IP Access Control List mapping
* `create_sip_auth_registrations_credential_list_mapping` - Create a new credential list mapping resource
* `create_sip_credential` - Create a new credential resource.
* `create_sip_credential_list` - Create a Credential List
* `create_sip_credential_list_mapping` - Create a CredentialListMapping resource for an account.
* `create_sip_domain` - Create a new Domain
* `create_sip_ip_access_control_list` - Create a new IpAccessControlList resource
* `create_sip_ip_access_control_list_mapping` - Create a new IpAccessControlListMapping resource.
* `create_sip_ip_address` - Create a new IpAddress resource.
* `create_siprec` - Create a Siprec
* `create_stream` - Create a Stream
* `create_token` - Create a new token for ICE servers
* `create_usage_trigger` - Create a new UsageTrigger
* `create_user_defined_message` - Create a new User Defined Message for the given Call SID.
* `create_user_defined_message_subscription` - Subscribe to User Defined Messages for a given Call SID.
* `create_validation_request`
* `delete_address`
* `delete_application` - Delete the application by the specified application sid
* `delete_call` - Delete a Call record from your account. Once the record is deleted, it will no longer appear in the API and Account Portal logs.
* `delete_call_feedback_summary` - Delete a FeedbackSummary resource from a call
* `delete_call_recording` - Delete a recording from your account
* `delete_conference_recording` - Delete a recording from your account
* `delete_connect_app` - Delete an instance of a connect-app
* `delete_incoming_phone_number` - Delete a phone-numbers belonging to the account used to make the request.
* `delete_incoming_phone_number_assigned_add_on` - Remove the assignment of an Add-on installation from the Number specified.
* `delete_key`
* `delete_media` - Delete media from your account. Once delete, you will no longer be billed
* `delete_message` - Deletes a message record from your account
* `delete_outgoing_caller_id` - Delete the caller-id specified from the account
* `delete_participant` - Kick a participant from a given conference
* `delete_queue` - Remove an empty queue
* `delete_recording` - Delete a recording from your account
* `delete_recording_add_on_result` - Delete a result and purge all associated Payloads
* `delete_recording_add_on_result_payload` - Delete a payload from the result along with all associated Data
* `delete_recording_transcription`
* `delete_signing_key`
* `delete_sip_auth_calls_credential_list_mapping` - Delete a credential list mapping from the requested domain
* `delete_sip_auth_calls_ip_access_control_list_mapping` - Delete an IP Access Control List mapping from the requested domain
* `delete_sip_auth_registrations_credential_list_mapping` - Delete a credential list mapping from the requested domain
* `delete_sip_credential` - Delete a credential resource.
* `delete_sip_credential_list` - Delete a Credential List
* `delete_sip_credential_list_mapping` - Delete a CredentialListMapping resource from an account.
* `delete_sip_domain` - Delete an instance of a Domain
* `delete_sip_ip_access_control_list` - Delete an IpAccessControlList from the requested account
* `delete_sip_ip_access_control_list_mapping` - Delete an IpAccessControlListMapping resource.
* `delete_sip_ip_address` - Delete an IpAddress resource.
* `delete_transcription` - Delete a transcription from the account used to make the request
* `delete_usage_trigger`
* `delete_user_defined_message_subscription` - Delete a specific User Defined Message Subscription.
* `fetch_account` - Fetch the account specified by the provided Account Sid
* `fetch_address`
* `fetch_application` - Fetch the application specified by the provided sid
* `fetch_authorized_connect_app` - Fetch an instance of an authorized-connect-app
* `fetch_available_phone_number_country`
* `fetch_balance` - Fetch the balance for an Account based on Account Sid. Balance changes may not be reflected immediately. Child accounts do not contain balance information
* `fetch_call` - Fetch the call specified by the provided Call SID
* `fetch_call_feedback` - Fetch a Feedback resource from a call
* `fetch_call_feedback_summary` - Fetch a FeedbackSummary resource from a call
* `fetch_call_notification`
* `fetch_call_recording` - Fetch an instance of a recording for a call
* `fetch_conference` - Fetch an instance of a conference
* `fetch_conference_recording` - Fetch an instance of a recording for a call
* `fetch_connect_app` - Fetch an instance of a connect-app
* `fetch_incoming_phone_number` - Fetch an incoming-phone-number belonging to the account used to make the request.
* `fetch_incoming_phone_number_assigned_add_on` - Fetch an instance of an Add-on installation currently assigned to this Number.
* `fetch_incoming_phone_number_assigned_add_on_extension` - Fetch an instance of an Extension for the Assigned Add-on.
* `fetch_key`
* `fetch_media` - Fetch a single media instance belonging to the account used to make the request
* `fetch_member` - Fetch a specific member from the queue
* `fetch_message` - Fetch a message belonging to the account used to make the request
* `fetch_notification` - Fetch a notification belonging to the account used to make the request
* `fetch_outgoing_caller_id` - Fetch an outgoing-caller-id belonging to the account used to make the request
* `fetch_participant` - Fetch an instance of a participant
* `fetch_queue` - Fetch an instance of a queue identified by the QueueSid
* `fetch_recording` - Fetch an instance of a recording
* `fetch_recording_add_on_result` - Fetch an instance of an AddOnResult
* `fetch_recording_add_on_result_payload` - Fetch an instance of a result payload
* `fetch_recording_transcription`
* `fetch_short_code` - Fetch an instance of a short code
* `fetch_signing_key`
* `fetch_sip_auth_calls_credential_list_mapping` - Fetch a specific instance of a credential list mapping
* `fetch_sip_auth_calls_ip_access_control_list_mapping` - Fetch a specific instance of an IP Access Control List mapping
* `fetch_sip_auth_registrations_credential_list_mapping` - Fetch a specific instance of a credential list mapping
* `fetch_sip_credential` - Fetch a single credential.
* `fetch_sip_credential_list` - Get a Credential List
* `fetch_sip_credential_list_mapping` - Fetch a single CredentialListMapping resource from an account.
* `fetch_sip_domain` - Fetch an instance of a Domain
* `fetch_sip_ip_access_control_list` - Fetch a specific instance of an IpAccessControlList
* `fetch_sip_ip_access_control_list_mapping` - Fetch an IpAccessControlListMapping resource.
* `fetch_sip_ip_address` - Read one IpAddress resource.
* `fetch_transcription` - Fetch an instance of a Transcription
* `fetch_usage_trigger` - Fetch and instance of a usage-trigger
* `list_account` - Retrieves a collection of Accounts belonging to the account used to make the request
* `list_address`
* `list_application` - Retrieve a list of applications representing an application within the requesting account
* `list_authorized_connect_app` - Retrieve a list of authorized-connect-apps belonging to the account used to make the request
* `list_available_phone_number_country`
* `list_available_phone_number_local`
* `list_available_phone_number_machine_to_machine`
* `list_available_phone_number_mobile`
* `list_available_phone_number_national`
* `list_available_phone_number_shared_cost`
* `list_available_phone_number_toll_free`
* `list_available_phone_number_voip`
* `list_call` - Retrieves a collection of calls made to and from your account
* `list_call_event` - Retrieve a list of all events for a call.
* `list_call_notification`
* `list_call_recording` - Retrieve a list of recordings belonging to the call used to make the request
* `list_conference` - Retrieve a list of conferences belonging to the account used to make the request
* `list_conference_recording` - Retrieve a list of recordings belonging to the call used to make the request
* `list_connect_app` - Retrieve a list of connect-apps belonging to the account used to make the request
* `list_dependent_phone_number`
* `list_incoming_phone_number` - Retrieve a list of incoming-phone-numbers belonging to the account used to make the request.
* `list_incoming_phone_number_assigned_add_on` - Retrieve a list of Add-on installations currently assigned to this Number.
* `list_incoming_phone_number_assigned_add_on_extension` - Retrieve a list of Extensions for the Assigned Add-on.
* `list_incoming_phone_number_local`
* `list_incoming_phone_number_mobile`
* `list_incoming_phone_number_toll_free`
* `list_key`
* `list_media` - Retrieve a list of Media resources belonging to the account used to make the request
* `list_member` - Retrieve the members of the queue
* `list_message` - Retrieve a list of messages belonging to the account used to make the request
* `list_notification` - Retrieve a list of notifications belonging to the account used to make the request
* `list_outgoing_caller_id` - Retrieve a list of outgoing-caller-ids belonging to the account used to make the request
* `list_participant` - Retrieve a list of participants belonging to the account used to make the request
* `list_queue` - Retrieve a list of queues belonging to the account used to make the request
* `list_recording` - Retrieve a list of recordings belonging to the account used to make the request
* `list_recording_add_on_result` - Retrieve a list of results belonging to the recording
* `list_recording_add_on_result_payload` - Retrieve a list of payloads belonging to the AddOnResult
* `list_recording_transcription`
* `list_short_code` - Retrieve a list of short-codes belonging to the account used to make the request
* `list_signing_key`
* `list_sip_auth_calls_credential_list_mapping` - Retrieve a list of credential list mappings belonging to the domain used in the request
* `list_sip_auth_calls_ip_access_control_list_mapping` - Retrieve a list of IP Access Control List mappings belonging to the domain used in the request
* `list_sip_auth_registrations_credential_list_mapping` - Retrieve a list of credential list mappings belonging to the domain used in the request
* `list_sip_credential` - Retrieve a list of credentials.
* `list_sip_credential_list` - Get All Credential Lists
* `list_sip_credential_list_mapping` - Read multiple CredentialListMapping resources from an account.
* `list_sip_domain` - Retrieve a list of domains belonging to the account used to make the request
* `list_sip_ip_access_control_list` - Retrieve a list of IpAccessControlLists that belong to the account used to make the request
* `list_sip_ip_access_control_list_mapping` - Retrieve a list of IpAccessControlListMapping resources.
* `list_sip_ip_address` - Read multiple IpAddress resources.
* `list_transcription` - Retrieve a list of transcriptions belonging to the account used to make the request
* `list_usage_record` - Retrieve a list of usage-records belonging to the account used to make the request
* `list_usage_record_all_time`
* `list_usage_record_daily`
* `list_usage_record_last_month`
* `list_usage_record_monthly`
* `list_usage_record_this_month`
* `list_usage_record_today`
* `list_usage_record_yearly`
* `list_usage_record_yesterday`
* `list_usage_trigger` - Retrieve a list of usage-triggers belonging to the account used to make the request
* `update_account` - Modify the properties of a given Account
* `update_address`
* `update_application` - Updates the application's properties
* `update_call` - Initiates a call redirect or terminates a call
* `update_call_feedback` - Update a Feedback resource for a call
* `update_call_recording` - Changes the status of the recording to paused, stopped, or in-progress. Note: Pass `Twilio.CURRENT` instead of recording sid to reference current active recording.
* `update_conference`
* `update_conference_recording` - Changes the status of the recording to paused, stopped, or in-progress. Note: To use `Twilio.CURRENT`, pass it as recording sid.
* `update_connect_app` - Update a connect-app with the specified parameters
* `update_incoming_phone_number` - Update an incoming-phone-number instance.
* `update_key`
* `update_member` - Dequeue a member from a queue and have the member's call begin executing the TwiML document at that URL
* `update_message` - To redact a message-body from a post-flight message record, post to the message instance resource with an empty body
* `update_outgoing_caller_id` - Updates the caller-id
* `update_participant` - Update the properties of the participant
* `update_payments` - update an instance of payments with different phases of payment flows.
* `update_queue` - Update the queue with the new parameters
* `update_short_code` - Update a short code with the following parameters
* `update_signing_key`
* `update_sip_credential` - Update a credential resource.
* `update_sip_credential_list` - Update a Credential List
* `update_sip_domain` - Update the attributes of a domain
* `update_sip_ip_access_control_list` - Rename an IpAccessControlList
* `update_sip_ip_address` - Update an IpAddress resource.
* `update_siprec` - Stop a Siprec using either the SID of the Siprec resource or the `name` used when creating the resource
* `update_stream` - Stop a Stream using either the SID of the Stream resource or the `name` used when creating the resource
* `update_usage_trigger` - Update an instance of a usage trigger

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
