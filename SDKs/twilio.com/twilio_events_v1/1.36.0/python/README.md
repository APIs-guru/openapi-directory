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
    
req = operations.CreateSinkRequest(
    security=operations.CreateSinkSecurity(
        account_sid_auth_token=shared.SchemeAccountSidAuthToken(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    request=operations.CreateSinkCreateSinkRequest(
        description="illum",
        sink_configuration="et",
        sink_type="kinesis",
    ),
)
    
res = s.create_sink(req)

if res.events_v1_sink is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations
* `CreateSink` - Create a new Sink
* `CreateSinkTest` - Create a new Sink Test Event for the given Sink.
* `CreateSinkValidate` - Validate that a test event for a Sink was received.
* `CreateSubscribedEvent` - Create a new Subscribed Event type for the subscription
* `CreateSubscription` - Create a new Subscription.
* `DeleteSink` - Delete a specific Sink.
* `DeleteSubscribedEvent` - Remove an event type from a subscription.
* `DeleteSubscription` - Delete a specific Subscription.
* `FetchEventType` - Fetch a specific Event Type.
* `FetchSchema` - Fetch a specific schema with its nested versions.
* `FetchSchemaVersion` - Fetch a specific schema and version.
* `FetchSink` - Fetch a specific Sink.
* `FetchSubscribedEvent` - Read an Event for a Subscription.
* `FetchSubscription` - Fetch a specific Subscription.
* `ListEventType` - Retrieve a paginated list of all the available Event Types.
* `ListSchemaVersion` - Retrieve a paginated list of versions of the schema.
* `ListSink` - Retrieve a paginated list of Sinks belonging to the account used to make the request.
* `ListSubscribedEvent` - Retrieve a list of all Subscribed Event types for a Subscription.
* `ListSubscription` - Retrieve a paginated list of Subscriptions belonging to the account used to make the request.
* `UpdateSink` - Update a specific Sink
* `UpdateSubscribedEvent` - Update an Event for a Subscription.
* `UpdateSubscription` - Update a Subscription.

<!-- End SDK Available Operations -->