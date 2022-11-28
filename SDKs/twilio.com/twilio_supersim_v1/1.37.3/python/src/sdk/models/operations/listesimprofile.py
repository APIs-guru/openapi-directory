from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_ESIM_PROFILE_SERVERS = [
	"https://supersim.twilio.com",
]


@dataclass
class ListEsimProfileQueryParams:
    eid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Eid', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    sim_sid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'SimSid', 'style': 'form', 'explode': True }})
    status: Optional[shared.EsimProfileEnumStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Status', 'style': 'form', 'explode': True }})
    

@dataclass
class ListEsimProfileSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListEsimProfileListEsimProfileResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListEsimProfileListEsimProfileResponse:
    esim_profiles: Optional[List[shared.SupersimV1EsimProfile]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('esim_profiles') }})
    meta: Optional[ListEsimProfileListEsimProfileResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class ListEsimProfileRequest:
    query_params: ListEsimProfileQueryParams = field()
    security: ListEsimProfileSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListEsimProfileResponse:
    content_type: str = field()
    status_code: int = field()
    list_esim_profile_response: Optional[ListEsimProfileListEsimProfileResponse] = field(default=None)
    
