from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_INCOMING_PHONE_NUMBER_ASSIGNED_ADD_ON_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class CreateIncomingPhoneNumberAssignedAddOnPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    resource_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ResourceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateIncomingPhoneNumberAssignedAddOnSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateIncomingPhoneNumberAssignedAddOnRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateIncomingPhoneNumberAssignedAddOnPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateIncomingPhoneNumberAssignedAddOnSecurity = field(default=None)
    

@dataclass
class CreateIncomingPhoneNumberAssignedAddOnResponses:
    api_v2010_account_incoming_phone_number_incoming_phone_number_assigned_add_on: Optional[shared.APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn] = field(default=None)
    

@dataclass
class CreateIncomingPhoneNumberAssignedAddOnResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateIncomingPhoneNumberAssignedAddOnResponses]] = field(default=None)
    status_code: int = field(default=None)
    
