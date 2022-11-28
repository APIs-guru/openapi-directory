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
    
    req := operations.CreateBindingRequest{
        Security: operations.CreateBindingSecurity{
            AccountSidAuthToken: shared.SchemeAccountSidAuthToken{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        PathParams: operations.CreateBindingPathParams{
            ServiceSid: "sint",
        },
        Request: &operations.CreateBindingCreateBindingRequest{
            Address: "laborum",
            BindingType: "sms",
            CredentialSid: "et",
            Endpoint: "et",
            Identity: "magni",
            NotificationProtocolVersion: "fuga",
            Tag: []string{
                "autem",
                "dolorum",
                "deserunt",
            },
        },
    }
    
    res, err := s.CreateBinding(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.NotifyV1ServiceBinding != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations
* `CreateBinding`
* `CreateCredential`
* `CreateNotification`
* `CreateService`
* `DeleteBinding`
* `DeleteCredential`
* `DeleteService`
* `FetchBinding`
* `FetchCredential`
* `FetchService`
* `ListBinding`
* `ListCredential`
* `ListService`
* `UpdateCredential`
* `UpdateService`

<!-- End SDK Available Operations -->