from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PatchHolidaySchemePathParams:
    employer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    holiday_scheme_id: str = field(default=None, metadata={'path_param': { 'field_name': 'HolidaySchemeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchHolidaySchemeHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version' }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class PatchHolidaySchemeRequest:
    path_params: PatchHolidaySchemePathParams = field(default=None)
    headers: PatchHolidaySchemeHeaders = field(default=None)
    request: shared.HolidayScheme = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PatchHolidaySchemeResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    holiday_scheme: Optional[shared.HolidayScheme] = field(default=None)
    status_code: int = field(default=None)
    
