from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_ASSET_SERVERS = [
	"https://serverless.twilio.com",
]


@dataclass
class FetchAssetPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchAssetSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchAssetRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchAssetPathParams = field(default=None)
    security: FetchAssetSecurity = field(default=None)
    

@dataclass
class FetchAssetResponses:
    serverless_v1_service_asset: Optional[shared.ServerlessV1ServiceAsset] = field(default=None)
    

@dataclass
class FetchAssetResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchAssetResponses]] = field(default=None)
    status_code: int = field(default=None)
    
