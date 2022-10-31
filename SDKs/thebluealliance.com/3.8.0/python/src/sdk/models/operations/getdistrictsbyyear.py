from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetDistrictsByYearPathParams:
    year: int = field(default=None, metadata={'path_param': { 'field_name': 'year', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDistrictsByYearHeaders:
    if_modified_since: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'If-Modified-Since', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDistrictsByYearSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetDistrictsByYearRequest:
    path_params: GetDistrictsByYearPathParams = field(default=None)
    headers: GetDistrictsByYearHeaders = field(default=None)
    security: GetDistrictsByYearSecurity = field(default=None)
    

@dataclass
class GetDistrictsByYearResponse:
    content_type: str = field(default=None)
    district_lists: Optional[List[shared.DistrictList]] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
