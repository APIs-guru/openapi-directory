from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetCompanyTimeOffTypesQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCompanyTimeOffTypesRequest:
    query_params: GetCompanyTimeOffTypesQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetCompanyTimeOffTypes200ApplicationJSON:
    data: Optional[List[shared.TimeOffTypeResource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    success: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'success' }})
    

@dataclass
class GetCompanyTimeOffTypesResponse:
    content_type: str = field(default=None)
    get_company_time_off_types_200_application_json_object: Optional[GetCompanyTimeOffTypes200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
