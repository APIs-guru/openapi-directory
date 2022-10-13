from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostCompanyAttendancesRequest:
    request: shared.NewAttendancePeriodRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostCompanyAttendancesResponse:
    content_type: str = field(default=None)
    detailed_error_response: Optional[shared.DetailedErrorResponse] = field(default=None)
    new_attendance_period_response: Optional[shared.NewAttendancePeriodResponse] = field(default=None)
    status_code: int = field(default=None)
    
