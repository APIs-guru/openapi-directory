from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_INCOMING_PHONE_NUMBER_ASSIGNED_ADD_ON_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class DeleteIncomingPhoneNumberAssignedAddOnPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    resource_sid: str = field(metadata={'path_param': { 'field_name': 'ResourceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteIncomingPhoneNumberAssignedAddOnSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteIncomingPhoneNumberAssignedAddOnRequest:
    path_params: DeleteIncomingPhoneNumberAssignedAddOnPathParams = field()
    security: DeleteIncomingPhoneNumberAssignedAddOnSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteIncomingPhoneNumberAssignedAddOnResponse:
    content_type: str = field()
    status_code: int = field()
    
