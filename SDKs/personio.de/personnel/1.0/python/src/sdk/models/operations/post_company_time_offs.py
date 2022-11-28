from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass_json
@dataclass
class PostCompanyTimeOffs201ApplicationJSON:
    data: Optional[shared.CreateTimeOffPeriodResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass
class PostCompanyTimeOffsRequest:
    request: shared.CreateTimeOffPeriodRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostCompanyTimeOffsResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    post_company_time_offs_201_application_json_object: Optional[PostCompanyTimeOffs201ApplicationJSON] = field(default=None)
    
