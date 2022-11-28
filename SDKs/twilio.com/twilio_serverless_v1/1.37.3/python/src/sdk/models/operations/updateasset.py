from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


UPDATE_ASSET_SERVERS = [
	"https://serverless.twilio.com",
]


@dataclass
class UpdateAssetPathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateAssetUpdateAssetRequest:
    friendly_name: str = field(metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclass
class UpdateAssetSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateAssetRequest:
    path_params: UpdateAssetPathParams = field()
    security: UpdateAssetSecurity = field()
    request: Optional[UpdateAssetUpdateAssetRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateAssetResponse:
    content_type: str = field()
    status_code: int = field()
    serverless_v1_service_asset: Optional[shared.ServerlessV1ServiceAsset] = field(default=None)
    
