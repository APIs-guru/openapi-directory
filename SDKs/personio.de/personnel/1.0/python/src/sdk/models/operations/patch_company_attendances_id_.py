from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PatchCompanyAttendancesIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchCompanyAttendancesIDRequest:
    path_params: PatchCompanyAttendancesIDPathParams = field(default=None)
    request: shared.UpdateAttendancePeriodRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PatchCompanyAttendancesIDResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    response: Optional[shared.Response] = field(default=None)
    status_code: int = field(default=None)
    
