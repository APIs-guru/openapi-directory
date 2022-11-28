from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_ASSET_SERVERS = [
	"https://serverless.twilio.com",
]


@dataclass
class CreateAssetPathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateAssetCreateAssetRequest:
    friendly_name: str = field(metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclass
class CreateAssetSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateAssetRequest:
    path_params: CreateAssetPathParams = field()
    security: CreateAssetSecurity = field()
    request: Optional[CreateAssetCreateAssetRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateAssetResponse:
    content_type: str = field()
    status_code: int = field()
    serverless_v1_service_asset: Optional[shared.ServerlessV1ServiceAsset] = field(default=None)
    
