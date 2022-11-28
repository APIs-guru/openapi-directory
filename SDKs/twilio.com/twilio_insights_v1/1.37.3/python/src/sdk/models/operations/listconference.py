from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_CONFERENCE_SERVERS = [
	"https://insights.twilio.com",
]


@dataclass
class ListConferenceQueryParams:
    conference_sid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ConferenceSid', 'style': 'form', 'explode': True }})
    created_after: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'CreatedAfter', 'style': 'form', 'explode': True }})
    created_before: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'CreatedBefore', 'style': 'form', 'explode': True }})
    detected_issues: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'DetectedIssues', 'style': 'form', 'explode': True }})
    end_reason: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'EndReason', 'style': 'form', 'explode': True }})
    friendly_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'FriendlyName', 'style': 'form', 'explode': True }})
    mixer_region: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MixerRegion', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    status: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Status', 'style': 'form', 'explode': True }})
    subaccount: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Subaccount', 'style': 'form', 'explode': True }})
    tags: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Tags', 'style': 'form', 'explode': True }})
    

@dataclass
class ListConferenceSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListConferenceListConferenceResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListConferenceListConferenceResponse:
    conferences: Optional[List[shared.InsightsV1Conference]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conferences') }})
    meta: Optional[ListConferenceListConferenceResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class ListConferenceRequest:
    query_params: ListConferenceQueryParams = field()
    security: ListConferenceSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListConferenceResponse:
    content_type: str = field()
    status_code: int = field()
    list_conference_response: Optional[ListConferenceListConferenceResponse] = field(default=None)
    
