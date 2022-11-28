from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


UPDATE_END_USER_SERVERS = [
	"https://numbers.twilio.com",
]


@dataclass
class UpdateEndUserPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateEndUserUpdateEndUserRequest:
    attributes: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'Attributes' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclass
class UpdateEndUserSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateEndUserRequest:
    path_params: UpdateEndUserPathParams = field()
    security: UpdateEndUserSecurity = field()
    request: Optional[UpdateEndUserUpdateEndUserRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateEndUserResponse:
    content_type: str = field()
    status_code: int = field()
    numbers_v2_regulatory_compliance_end_user: Optional[shared.NumbersV2RegulatoryComplianceEndUser] = field(default=None)
    
