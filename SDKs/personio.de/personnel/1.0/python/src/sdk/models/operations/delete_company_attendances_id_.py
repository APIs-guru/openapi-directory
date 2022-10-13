from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteCompanyAttendancesIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteCompanyAttendancesIDRequest:
    path_params: DeleteCompanyAttendancesIDPathParams = field(default=None)
    

@dataclass
class DeleteCompanyAttendancesIDResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    response: Optional[shared.Response] = field(default=None)
    status_code: int = field(default=None)
    
