from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared
CREATE_TRUNK_SERVERS = [
	"https://trunking.twilio.com",
]

class CreateTrunkRequestBodyDisasterRecoveryMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass
class CreateTrunkRequestBodyCreateTrunkRequest:
    cnam_lookup_enabled: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'CnamLookupEnabled' }})
    disaster_recovery_method: Optional[CreateTrunkRequestBodyDisasterRecoveryMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'DisasterRecoveryMethod' }})
    disaster_recovery_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'DisasterRecoveryUrl' }})
    domain_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'DomainName' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    secure: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'Secure' }})
    transfer_caller_id: Optional[shared.TrunkEnumTransferCallerIDEnum] = field(default=None, metadata={'form': { 'field_name': 'TransferCallerId' }})
    transfer_mode: Optional[shared.TrunkEnumTransferSettingEnum] = field(default=None, metadata={'form': { 'field_name': 'TransferMode' }})
    

@dataclass
class CreateTrunkSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateTrunkRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[CreateTrunkRequestBodyCreateTrunkRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateTrunkSecurity = field(default=None)
    

@dataclass
class CreateTrunkResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    trunking_v1_trunk: Optional[shared.TrunkingV1Trunk] = field(default=None)
    
