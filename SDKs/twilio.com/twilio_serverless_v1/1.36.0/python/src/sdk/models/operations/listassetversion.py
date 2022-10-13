from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_ASSET_VERSION_SERVERS = [
	"https://serverless.twilio.com",
]


@dataclass
class ListAssetVersionPathParams:
    asset_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AssetSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListAssetVersionQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListAssetVersionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListAssetVersionRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListAssetVersionPathParams = field(default=None)
    query_params: ListAssetVersionQueryParams = field(default=None)
    security: ListAssetVersionSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListAssetVersion200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListAssetVersion200ApplicationJSONListAssetVersionResponse:
    asset_versions: Optional[List[shared.ServerlessV1ServiceAssetAssetVersion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'asset_versions' }})
    meta: Optional[ListAssetVersion200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListAssetVersionResponse:
    content_type: str = field(default=None)
    list_asset_version_response: Optional[ListAssetVersion200ApplicationJSONListAssetVersionResponse] = field(default=None)
    status_code: int = field(default=None)
    
