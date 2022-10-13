from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_END_USER_SERVERS = [
	"https://numbers.twilio.com",
]


@dataclass
class CreateEndUserSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateEndUserRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateEndUserSecurity = field(default=None)
    

@dataclass
class CreateEndUserResponses:
    numbers_v2_regulatory_compliance_end_user: Optional[shared.NumbersV2RegulatoryComplianceEndUser] = field(default=None)
    

@dataclass
class CreateEndUserResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateEndUserResponses]] = field(default=None)
    status_code: int = field(default=None)
    
