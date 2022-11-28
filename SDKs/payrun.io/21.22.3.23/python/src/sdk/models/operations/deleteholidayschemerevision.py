from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteHolidaySchemeRevisionPathParams:
    effective_date: date = field(metadata={'path_param': { 'field_name': 'EffectiveDate', 'style': 'simple', 'explode': False }})
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    holiday_scheme_id: str = field(metadata={'path_param': { 'field_name': 'HolidaySchemeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteHolidaySchemeRevisionHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteHolidaySchemeRevisionRequest:
    headers: DeleteHolidaySchemeRevisionHeaders = field()
    path_params: DeleteHolidaySchemeRevisionPathParams = field()
    

@dataclass
class DeleteHolidaySchemeRevisionResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    
