from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_ASSET_SERVERS = [
	"https://serverless.twilio.com",
]


@dataclass
class UpdateAssetPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateAssetSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateAssetRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateAssetPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateAssetSecurity = field(default=None)
    

@dataclass
class UpdateAssetResponses:
    serverless_v1_service_asset: Optional[shared.ServerlessV1ServiceAsset] = field(default=None)
    

@dataclass
class UpdateAssetResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateAssetResponses]] = field(default=None)
    status_code: int = field(default=None)
    
