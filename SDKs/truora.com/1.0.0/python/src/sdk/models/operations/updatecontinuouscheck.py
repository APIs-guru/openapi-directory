from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateContinuousCheckPathParams:
    continuous_check_id: float = field(default=None, metadata={'path_param': { 'field_name': 'continuous_check_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateContinuousCheckSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UpdateContinuousCheckRequest:
    path_params: UpdateContinuousCheckPathParams = field(default=None)
    request: shared.UpdateContinuousCheckInput = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateContinuousCheckSecurity = field(default=None)
    

@dataclass
class UpdateContinuousCheckResponse:
    content_type: str = field(default=None)
    continuous_check: Optional[shared.ContinuousCheck] = field(default=None)
    status_code: int = field(default=None)
    
