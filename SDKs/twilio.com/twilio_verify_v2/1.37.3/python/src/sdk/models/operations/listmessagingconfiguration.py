from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_MESSAGING_CONFIGURATION_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class ListMessagingConfigurationPathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListMessagingConfigurationQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListMessagingConfigurationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListMessagingConfigurationListMessagingConfigurationResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListMessagingConfigurationListMessagingConfigurationResponse:
    messaging_configurations: Optional[List[shared.VerifyV2ServiceMessagingConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messaging_configurations') }})
    meta: Optional[ListMessagingConfigurationListMessagingConfigurationResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class ListMessagingConfigurationRequest:
    path_params: ListMessagingConfigurationPathParams = field()
    query_params: ListMessagingConfigurationQueryParams = field()
    security: ListMessagingConfigurationSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListMessagingConfigurationResponse:
    content_type: str = field()
    status_code: int = field()
    list_messaging_configuration_response: Optional[ListMessagingConfigurationListMessagingConfigurationResponse] = field(default=None)
    
