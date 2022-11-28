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
    
    req := operations.UpdateChannelRequest{
        Security: operations.UpdateChannelSecurity{
            AccountSidAuthToken: shared.SchemeAccountSidAuthToken{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        PathParams: operations.UpdateChannelPathParams{
            ServiceSid: "explicabo",
            Sid: "in",
        },
        Headers: operations.UpdateChannelHeaders{
            XTwilioWebhookEnabled: "true",
        },
        Request: &operations.UpdateChannelUpdateChannelRequest{
            MessagingServiceSid: "accusamus",
            Type: "private",
        },
    }
    
    res, err := s.UpdateChannel(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ChatV3Channel != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations
* `UpdateChannel` - Update a specific Channel.

<!-- End SDK Available Operations -->