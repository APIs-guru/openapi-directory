from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetDistrictsByYearPathParams:
    year: int = field(metadata={'path_param': { 'field_name': 'year', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDistrictsByYearHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDistrictsByYearSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetDistrictsByYearRequest:
    headers: GetDistrictsByYearHeaders = field()
    path_params: GetDistrictsByYearPathParams = field()
    security: GetDistrictsByYearSecurity = field()
    

@dataclass
class GetDistrictsByYearResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    district_lists: Optional[List[shared.DistrictList]] = field(default=None)
    
