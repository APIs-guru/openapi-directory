from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared
UPDATE_END_USER_SERVERS = [
	"https://numbers.twilio.com",
]


@dataclass
class UpdateEndUserPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateEndUserRequestBodyUpdateEndUserRequest:
    attributes: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'Attributes' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclass
class UpdateEndUserSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateEndUserRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateEndUserPathParams = field(default=None)
    request: Optional[UpdateEndUserRequestBodyUpdateEndUserRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateEndUserSecurity = field(default=None)
    

@dataclass
class UpdateEndUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    numbers_v2_regulatory_compliance_end_user: Optional[shared.NumbersV2RegulatoryComplianceEndUser] = field(default=None)
    
