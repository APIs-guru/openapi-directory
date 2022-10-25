from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_INCOMING_PHONE_NUMBER_ASSIGNED_ADD_ON_EXTENSION_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class ListIncomingPhoneNumberAssignedAddOnExtensionPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    assigned_add_on_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AssignedAddOnSid', 'style': 'simple', 'explode': False }})
    resource_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ResourceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListIncomingPhoneNumberAssignedAddOnExtensionQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListIncomingPhoneNumberAssignedAddOnExtensionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListIncomingPhoneNumberAssignedAddOnExtensionRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListIncomingPhoneNumberAssignedAddOnExtensionPathParams = field(default=None)
    query_params: ListIncomingPhoneNumberAssignedAddOnExtensionQueryParams = field(default=None)
    security: ListIncomingPhoneNumberAssignedAddOnExtensionSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListIncomingPhoneNumberAssignedAddOnExtensionListIncomingPhoneNumberAssignedAddOnExtensionResponse:
    end: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end' }})
    extensions: Optional[List[shared.APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOnIncomingPhoneNumberAssignedAddOnExtension]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'extensions' }})
    first_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_uri' }})
    next_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_uri' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_uri' }})
    start: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass
class ListIncomingPhoneNumberAssignedAddOnExtensionResponse:
    content_type: str = field(default=None)
    list_incoming_phone_number_assigned_add_on_extension_response: Optional[ListIncomingPhoneNumberAssignedAddOnExtensionListIncomingPhoneNumberAssignedAddOnExtensionResponse] = field(default=None)
    status_code: int = field(default=None)
    
