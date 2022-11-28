from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteCompanyTimeOffsIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteCompanyTimeOffsIDRequest:
    path_params: DeleteCompanyTimeOffsIDPathParams = field()
    

@dataclass
class DeleteCompanyTimeOffsIDResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    response: Optional[shared.Response] = field(default=None)
    
