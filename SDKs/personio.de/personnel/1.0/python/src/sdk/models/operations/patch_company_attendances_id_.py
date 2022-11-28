from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class PatchCompanyAttendancesIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchCompanyAttendancesIDRequest:
    path_params: PatchCompanyAttendancesIDPathParams = field()
    request: shared.UpdateAttendancePeriodRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PatchCompanyAttendancesIDResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    response: Optional[shared.Response] = field(default=None)
    
