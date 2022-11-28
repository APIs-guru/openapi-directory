from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetHealthCheckResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    health_check: Optional[shared.HealthCheck] = field(default=None)
    
