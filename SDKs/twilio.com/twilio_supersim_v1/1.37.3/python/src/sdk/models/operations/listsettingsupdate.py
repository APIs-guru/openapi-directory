from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_SETTINGS_UPDATE_SERVERS = [
	"https://supersim.twilio.com",
]


@dataclass
class ListSettingsUpdateQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    sim: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Sim', 'style': 'form', 'explode': True }})
    

@dataclass
class ListSettingsUpdateSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListSettingsUpdateListSettingsUpdateResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListSettingsUpdateListSettingsUpdateResponse:
    meta: Optional[ListSettingsUpdateListSettingsUpdateResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    settings_updates: Optional[List[shared.SupersimV1SettingsUpdate]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings_updates') }})
    

@dataclass
class ListSettingsUpdateRequest:
    query_params: ListSettingsUpdateQueryParams = field()
    security: ListSettingsUpdateSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListSettingsUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    list_settings_update_response: Optional[ListSettingsUpdateListSettingsUpdateResponse] = field(default=None)
    
