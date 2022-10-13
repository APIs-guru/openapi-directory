from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PostCompanyTimeOffsRequest:
    request: shared.CreateTimeOffPeriodRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostCompanyTimeOffs201ApplicationJSON:
    data: Optional[shared.CreateTimeOffPeriodResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

@dataclass
class PostCompanyTimeOffsResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    post_company_time_offs_201_application_json_object: Optional[PostCompanyTimeOffs201ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
