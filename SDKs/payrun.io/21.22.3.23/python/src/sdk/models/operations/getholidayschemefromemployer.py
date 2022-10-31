from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetHolidaySchemeFromEmployerPathParams:
    employer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    holiday_scheme_id: str = field(default=None, metadata={'path_param': { 'field_name': 'HolidaySchemeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetHolidaySchemeFromEmployerHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetHolidaySchemeFromEmployerRequest:
    path_params: GetHolidaySchemeFromEmployerPathParams = field(default=None)
    headers: GetHolidaySchemeFromEmployerHeaders = field(default=None)
    

@dataclass
class GetHolidaySchemeFromEmployerResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    holiday_scheme: Optional[shared.HolidayScheme] = field(default=None)
    status_code: int = field(default=None)
    
