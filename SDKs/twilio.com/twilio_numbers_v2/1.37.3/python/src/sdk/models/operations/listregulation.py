from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_REGULATION_SERVERS = [
	"https://numbers.twilio.com",
]


@dataclass
class ListRegulationQueryParams:
    end_user_type: Optional[shared.RegulationEnumEndUserTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'EndUserType', 'style': 'form', 'explode': True }})
    iso_country: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'IsoCountry', 'style': 'form', 'explode': True }})
    number_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NumberType', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListRegulationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListRegulationListRegulationResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListRegulationListRegulationResponse:
    meta: Optional[ListRegulationListRegulationResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    results: Optional[List[shared.NumbersV2RegulatoryComplianceRegulation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    

@dataclass
class ListRegulationRequest:
    query_params: ListRegulationQueryParams = field()
    security: ListRegulationSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListRegulationResponse:
    content_type: str = field()
    status_code: int = field()
    list_regulation_response: Optional[ListRegulationListRegulationResponse] = field(default=None)
    
