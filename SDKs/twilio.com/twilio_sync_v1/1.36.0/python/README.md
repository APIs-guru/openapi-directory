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
    
req = operations.CreateDocumentRequest(
    security=operations.CreateDocumentSecurity(
        account_sid_auth_token=shared.SchemeAccountSidAuthToken(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    path_params=operations.CreateDocumentPathParams(
        service_sid="nesciunt",
    ),
    request=operations.CreateDocumentCreateDocumentRequest(
        data="culpa",
        ttl=7943009243181636411,
        unique_name="architecto",
    ),
)
    
res = s.create_document(req)

if res.sync_v1_service_document is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations
* `CreateDocument`
* `CreateService`
* `CreateStreamMessage` - Create a new Stream Message.
* `CreateSyncList`
* `CreateSyncListItem`
* `CreateSyncMap`
* `CreateSyncMapItem`
* `CreateSyncStream` - Create a new Stream.
* `DeleteDocument`
* `DeleteDocumentPermission` - Delete a specific Sync Document Permission.
* `DeleteService`
* `DeleteSyncList`
* `DeleteSyncListItem`
* `DeleteSyncListPermission` - Delete a specific Sync List Permission.
* `DeleteSyncMap`
* `DeleteSyncMapItem`
* `DeleteSyncMapPermission` - Delete a specific Sync Map Permission.
* `DeleteSyncStream` - Delete a specific Stream.
* `FetchDocument`
* `FetchDocumentPermission` - Fetch a specific Sync Document Permission.
* `FetchService`
* `FetchSyncList`
* `FetchSyncListItem`
* `FetchSyncListPermission` - Fetch a specific Sync List Permission.
* `FetchSyncMap`
* `FetchSyncMapItem`
* `FetchSyncMapPermission` - Fetch a specific Sync Map Permission.
* `FetchSyncStream` - Fetch a specific Stream.
* `ListDocument`
* `ListDocumentPermission` - Retrieve a list of all Permissions applying to a Sync Document.
* `ListService`
* `ListSyncList`
* `ListSyncListItem`
* `ListSyncListPermission` - Retrieve a list of all Permissions applying to a Sync List.
* `ListSyncMap`
* `ListSyncMapItem`
* `ListSyncMapPermission` - Retrieve a list of all Permissions applying to a Sync Map.
* `ListSyncStream` - Retrieve a list of all Streams in a Service Instance.
* `UpdateDocument`
* `UpdateDocumentPermission` - Update an identity's access to a specific Sync Document.
* `UpdateService`
* `UpdateSyncList`
* `UpdateSyncListItem`
* `UpdateSyncListPermission` - Update an identity's access to a specific Sync List.
* `UpdateSyncMap`
* `UpdateSyncMapItem`
* `UpdateSyncMapPermission` - Update an identity's access to a specific Sync Map.
* `UpdateSyncStream` - Update a specific Stream.

<!-- End SDK Available Operations -->