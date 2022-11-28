from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


CREATE_END_USER_SERVERS = [
	"https://numbers.twilio.com",
]


@dataclass
class CreateEndUserCreateEndUserRequest:
    friendly_name: str = field(metadata={'form': { 'field_name': 'FriendlyName' }})
    type: shared.EndUserEnumTypeEnum = field(metadata={'form': { 'field_name': 'Type' }})
    attributes: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'Attributes' }})
    

@dataclass
class CreateEndUserSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateEndUserRequest:
    security: CreateEndUserSecurity = field()
    request: Optional[CreateEndUserCreateEndUserRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateEndUserResponse:
    content_type: str = field()
    status_code: int = field()
    numbers_v2_regulatory_compliance_end_user: Optional[shared.NumbersV2RegulatoryComplianceEndUser] = field(default=None)
    
