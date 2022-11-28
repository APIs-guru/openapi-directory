from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


UPDATE_TRUNK_SERVERS = [
	"https://trunking.twilio.com",
]


@dataclass
class UpdateTrunkPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    
class UpdateTrunkUpdateTrunkRequestDisasterRecoveryMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass
class UpdateTrunkUpdateTrunkRequest:
    cnam_lookup_enabled: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'CnamLookupEnabled' }})
    disaster_recovery_method: Optional[UpdateTrunkUpdateTrunkRequestDisasterRecoveryMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'DisasterRecoveryMethod' }})
    disaster_recovery_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'DisasterRecoveryUrl' }})
    domain_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'DomainName' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    secure: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'Secure' }})
    transfer_caller_id: Optional[shared.TrunkEnumTransferCallerIDEnum] = field(default=None, metadata={'form': { 'field_name': 'TransferCallerId' }})
    transfer_mode: Optional[shared.TrunkEnumTransferSettingEnum] = field(default=None, metadata={'form': { 'field_name': 'TransferMode' }})
    

@dataclass
class UpdateTrunkSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateTrunkRequest:
    path_params: UpdateTrunkPathParams = field()
    security: UpdateTrunkSecurity = field()
    request: Optional[UpdateTrunkUpdateTrunkRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateTrunkResponse:
    content_type: str = field()
    status_code: int = field()
    trunking_v1_trunk: Optional[shared.TrunkingV1Trunk] = field(default=None)
    
