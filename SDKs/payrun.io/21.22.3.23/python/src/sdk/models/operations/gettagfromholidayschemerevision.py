from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class GetTagFromHolidaySchemeRevisionPathParams:
    effective_date: datetime = field(default=None, metadata={'path_param': { 'field_name': 'EffectiveDate', 'style': 'simple', 'explode': False }})
    employer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    holiday_scheme_id: str = field(default=None, metadata={'path_param': { 'field_name': 'HolidaySchemeId', 'style': 'simple', 'explode': False }})
    tag_id: str = field(default=None, metadata={'path_param': { 'field_name': 'TagId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTagFromHolidaySchemeRevisionHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTagFromHolidaySchemeRevisionRequest:
    path_params: GetTagFromHolidaySchemeRevisionPathParams = field(default=None)
    headers: GetTagFromHolidaySchemeRevisionHeaders = field(default=None)
    

@dataclass
class GetTagFromHolidaySchemeRevisionResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    status_code: int = field(default=None)
    tag: Optional[shared.Tag] = field(default=None)
    
