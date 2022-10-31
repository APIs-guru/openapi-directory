from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetHolidaySchemeRevisionByNumberPathParams:
    employer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    holiday_scheme_id: str = field(default=None, metadata={'path_param': { 'field_name': 'HolidaySchemeId', 'style': 'simple', 'explode': False }})
    revision_number: str = field(default=None, metadata={'path_param': { 'field_name': 'RevisionNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetHolidaySchemeRevisionByNumberHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetHolidaySchemeRevisionByNumberRequest:
    path_params: GetHolidaySchemeRevisionByNumberPathParams = field(default=None)
    headers: GetHolidaySchemeRevisionByNumberHeaders = field(default=None)
    

@dataclass
class GetHolidaySchemeRevisionByNumberResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    holiday_scheme: Optional[shared.HolidayScheme] = field(default=None)
    status_code: int = field(default=None)
    
