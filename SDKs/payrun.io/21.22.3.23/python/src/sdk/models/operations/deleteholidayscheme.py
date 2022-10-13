from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteHolidaySchemePathParams:
    employer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    holiday_scheme_id: str = field(default=None, metadata={'path_param': { 'field_name': 'HolidaySchemeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteHolidaySchemeHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version' }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class DeleteHolidaySchemeRequest:
    path_params: DeleteHolidaySchemePathParams = field(default=None)
    headers: DeleteHolidaySchemeHeaders = field(default=None)
    

@dataclass
class DeleteHolidaySchemeResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    status_code: int = field(default=None)
    
