from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_ASSET_SERVERS = [
	"https://serverless.twilio.com",
]


@dataclass
class ListAssetPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListAssetQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListAssetSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListAssetRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListAssetPathParams = field(default=None)
    query_params: ListAssetQueryParams = field(default=None)
    security: ListAssetSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListAssetListAssetResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListAssetListAssetResponse:
    assets: Optional[List[shared.ServerlessV1ServiceAsset]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assets' }})
    meta: Optional[ListAssetListAssetResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListAssetResponse:
    content_type: str = field(default=None)
    list_asset_response: Optional[ListAssetListAssetResponse] = field(default=None)
    status_code: int = field(default=None)
    
