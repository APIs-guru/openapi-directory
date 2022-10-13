from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_INCOMING_PHONE_NUMBER_ASSIGNED_ADD_ON_EXTENSION_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class FetchIncomingPhoneNumberAssignedAddOnExtensionPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    assigned_add_on_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AssignedAddOnSid', 'style': 'simple', 'explode': False }})
    resource_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ResourceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchIncomingPhoneNumberAssignedAddOnExtensionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchIncomingPhoneNumberAssignedAddOnExtensionRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchIncomingPhoneNumberAssignedAddOnExtensionPathParams = field(default=None)
    security: FetchIncomingPhoneNumberAssignedAddOnExtensionSecurity = field(default=None)
    

@dataclass
class FetchIncomingPhoneNumberAssignedAddOnExtensionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    api_v2010_account_incoming_phone_number_incoming_phone_number_assigned_add_on_incoming_phone_number_assigned_add_on_extension: Optional[shared.APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOnIncomingPhoneNumberAssignedAddOnExtension] = field(default=None)
    
