from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class CreateContinuousCheckSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CreateContinuousCheckRequest:
    request: shared.CreateContinuousCheckInput = field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateContinuousCheckSecurity = field()
    

@dataclass
class CreateContinuousCheckResponse:
    content_type: str = field()
    status_code: int = field()
    continuous_check: Optional[shared.ContinuousCheck] = field(default=None)
    error: Optional[Any] = field(default=None)
    
