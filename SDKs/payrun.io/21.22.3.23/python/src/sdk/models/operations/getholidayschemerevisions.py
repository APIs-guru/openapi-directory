from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetHolidaySchemeRevisionsPathParams:
    employer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    holiday_scheme_id: str = field(default=None, metadata={'path_param': { 'field_name': 'HolidaySchemeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetHolidaySchemeRevisionsHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version' }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class GetHolidaySchemeRevisionsRequest:
    path_params: GetHolidaySchemeRevisionsPathParams = field(default=None)
    headers: GetHolidaySchemeRevisionsHeaders = field(default=None)
    

@dataclass
class GetHolidaySchemeRevisionsResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    link_collection: Optional[shared.LinkCollection] = field(default=None)
    status_code: int = field(default=None)
    
