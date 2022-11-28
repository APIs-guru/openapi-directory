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
    
    req := operations.CreateSinkRequest{
        Security: operations.CreateSinkSecurity{
            AccountSidAuthToken: shared.SchemeAccountSidAuthToken{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        Request: &operations.CreateSinkCreateSinkRequest{
            Description: "illum",
            SinkConfiguration: "et",
            SinkType: "kinesis",
        },
    }
    
    res, err := s.CreateSink(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.EventsV1Sink != nil {
        // handle response
    }
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