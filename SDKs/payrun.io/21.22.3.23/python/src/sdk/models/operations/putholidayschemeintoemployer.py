from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutHolidaySchemeIntoEmployerPathParams:
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    holiday_scheme_id: str = field(metadata={'path_param': { 'field_name': 'HolidaySchemeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutHolidaySchemeIntoEmployerHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutHolidaySchemeIntoEmployerRequest:
    headers: PutHolidaySchemeIntoEmployerHeaders = field()
    path_params: PutHolidaySchemeIntoEmployerPathParams = field()
    request: shared.HolidayScheme = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutHolidaySchemeIntoEmployerResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    holiday_scheme: Optional[shared.HolidayScheme] = field(default=None)
    
