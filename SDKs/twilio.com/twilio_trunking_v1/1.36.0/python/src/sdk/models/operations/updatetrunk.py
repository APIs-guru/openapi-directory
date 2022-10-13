from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared
UPDATE_TRUNK_SERVERS = [
	"https://trunking.twilio.com",
]


@dataclass
class UpdateTrunkPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    
class UpdateTrunkRequestBodyDisasterRecoveryMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass
class UpdateTrunkRequestBodyUpdateTrunkRequest:
    cnam_lookup_enabled: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'CnamLookupEnabled' }})
    disaster_recovery_method: Optional[UpdateTrunkRequestBodyDisasterRecoveryMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'DisasterRecoveryMethod' }})
    disaster_recovery_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'DisasterRecoveryUrl' }})
    domain_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'DomainName' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    secure: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'Secure' }})
    transfer_caller_id: Optional[shared.TrunkEnumTransferCallerIDEnum] = field(default=None, metadata={'form': { 'field_name': 'TransferCallerId' }})
    transfer_mode: Optional[shared.TrunkEnumTransferSettingEnum] = field(default=None, metadata={'form': { 'field_name': 'TransferMode' }})
    

@dataclass
class UpdateTrunkSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateTrunkRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateTrunkPathParams = field(default=None)
    request: Optional[UpdateTrunkRequestBodyUpdateTrunkRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateTrunkSecurity = field(default=None)
    

@dataclass
class UpdateTrunkResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    trunking_v1_trunk: Optional[shared.TrunkingV1Trunk] = field(default=None)
    
