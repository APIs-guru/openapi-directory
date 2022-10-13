from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetCompanyTimeOffsIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCompanyTimeOffsIDRequest:
    path_params: GetCompanyTimeOffsIDPathParams = field(default=None)
    

@dataclass
class GetCompanyTimeOffsIDResponse:
    absence_period_response: Optional[dict[str, Any]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
