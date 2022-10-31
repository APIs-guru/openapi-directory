from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteHolidaySchemeRevisionByNumberPathParams:
    employer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    holiday_scheme_id: str = field(default=None, metadata={'path_param': { 'field_name': 'HolidaySchemeId', 'style': 'simple', 'explode': False }})
    revision_number: str = field(default=None, metadata={'path_param': { 'field_name': 'RevisionNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteHolidaySchemeRevisionByNumberHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteHolidaySchemeRevisionByNumberRequest:
    path_params: DeleteHolidaySchemeRevisionByNumberPathParams = field(default=None)
    headers: DeleteHolidaySchemeRevisionByNumberHeaders = field(default=None)
    

@dataclass
class DeleteHolidaySchemeRevisionByNumberResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    status_code: int = field(default=None)
    
