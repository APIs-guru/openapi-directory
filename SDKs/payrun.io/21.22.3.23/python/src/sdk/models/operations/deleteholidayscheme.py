from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteHolidaySchemePathParams:
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    holiday_scheme_id: str = field(metadata={'path_param': { 'field_name': 'HolidaySchemeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteHolidaySchemeHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteHolidaySchemeRequest:
    headers: DeleteHolidaySchemeHeaders = field()
    path_params: DeleteHolidaySchemePathParams = field()
    

@dataclass
class DeleteHolidaySchemeResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    
