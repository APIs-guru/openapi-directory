from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetContinuousCheckPathParams:
    continuous_check_id: float = field(metadata={'path_param': { 'field_name': 'continuous_check_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetContinuousCheckSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetContinuousCheckRequest:
    path_params: GetContinuousCheckPathParams = field()
    security: GetContinuousCheckSecurity = field()
    

@dataclass
class GetContinuousCheckResponse:
    content_type: str = field()
    status_code: int = field()
    continuous_check: Optional[shared.ContinuousCheck] = field(default=None)
    
