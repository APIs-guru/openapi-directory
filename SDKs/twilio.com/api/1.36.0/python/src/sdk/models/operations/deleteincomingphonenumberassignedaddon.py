from dataclasses import dataclass, field
from typing import Optional
DELETE_INCOMING_PHONE_NUMBER_ASSIGNED_ADD_ON_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class DeleteIncomingPhoneNumberAssignedAddOnPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    resource_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ResourceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteIncomingPhoneNumberAssignedAddOnSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteIncomingPhoneNumberAssignedAddOnRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteIncomingPhoneNumberAssignedAddOnPathParams = field(default=None)
    security: DeleteIncomingPhoneNumberAssignedAddOnSecurity = field(default=None)
    

@dataclass
class DeleteIncomingPhoneNumberAssignedAddOnResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
