from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetCompanyTimeOffsIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCompanyTimeOffsIDRequest:
    path_params: GetCompanyTimeOffsIDPathParams = field()
    

@dataclass
class GetCompanyTimeOffsIDResponse:
    content_type: str = field()
    status_code: int = field()
    absence_period_response: Optional[dict[str, Any]] = field(default=None)
    
