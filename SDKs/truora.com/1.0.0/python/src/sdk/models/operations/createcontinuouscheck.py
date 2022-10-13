from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class CreateContinuousCheckSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CreateContinuousCheckRequest:
    request: shared.CreateContinuousCheckInput = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateContinuousCheckSecurity = field(default=None)
    

@dataclass
class CreateContinuousCheckResponse:
    content_type: str = field(default=None)
    continuous_check: Optional[shared.ContinuousCheck] = field(default=None)
    error: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
