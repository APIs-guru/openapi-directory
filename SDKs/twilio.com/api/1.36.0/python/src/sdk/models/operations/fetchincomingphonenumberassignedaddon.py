from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_INCOMING_PHONE_NUMBER_ASSIGNED_ADD_ON_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class FetchIncomingPhoneNumberAssignedAddOnPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    resource_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ResourceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchIncomingPhoneNumberAssignedAddOnSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchIncomingPhoneNumberAssignedAddOnRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchIncomingPhoneNumberAssignedAddOnPathParams = field(default=None)
    security: FetchIncomingPhoneNumberAssignedAddOnSecurity = field(default=None)
    

@dataclass
class FetchIncomingPhoneNumberAssignedAddOnResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    api_v2010_account_incoming_phone_number_incoming_phone_number_assigned_add_on: Optional[shared.APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn] = field(default=None)
    
