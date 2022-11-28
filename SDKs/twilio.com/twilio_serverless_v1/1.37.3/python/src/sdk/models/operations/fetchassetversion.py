from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_ASSET_VERSION_SERVERS = [
	"https://serverless.twilio.com",
]


@dataclass
class FetchAssetVersionPathParams:
    asset_sid: str = field(metadata={'path_param': { 'field_name': 'AssetSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchAssetVersionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchAssetVersionRequest:
    path_params: FetchAssetVersionPathParams = field()
    security: FetchAssetVersionSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchAssetVersionResponse:
    content_type: str = field()
    status_code: int = field()
    serverless_v1_service_asset_asset_version: Optional[shared.ServerlessV1ServiceAssetAssetVersion] = field(default=None)
    
