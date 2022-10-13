from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetContinuousCheckPathParams:
    continuous_check_id: float = field(default=None, metadata={'path_param': { 'field_name': 'continuous_check_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetContinuousCheckSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetContinuousCheckRequest:
    path_params: GetContinuousCheckPathParams = field(default=None)
    security: GetContinuousCheckSecurity = field(default=None)
    

@dataclass
class GetContinuousCheckResponse:
    content_type: str = field(default=None)
    continuous_check: Optional[shared.ContinuousCheck] = field(default=None)
    status_code: int = field(default=None)
    
