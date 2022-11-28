from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


UPDATE_NETWORK_ACCESS_PROFILE_SERVERS = [
	"https://supersim.twilio.com",
]


@dataclass
class UpdateNetworkAccessProfilePathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateNetworkAccessProfileUpdateNetworkAccessProfileRequest:
    unique_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclass
class UpdateNetworkAccessProfileSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateNetworkAccessProfileRequest:
    path_params: UpdateNetworkAccessProfilePathParams = field()
    security: UpdateNetworkAccessProfileSecurity = field()
    request: Optional[UpdateNetworkAccessProfileUpdateNetworkAccessProfileRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateNetworkAccessProfileResponse:
    content_type: str = field()
    status_code: int = field()
    supersim_v1_network_access_profile: Optional[shared.SupersimV1NetworkAccessProfile] = field(default=None)
    
