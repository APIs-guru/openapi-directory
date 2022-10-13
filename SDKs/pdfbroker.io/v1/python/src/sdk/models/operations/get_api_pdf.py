from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPIPdfResponse:
    content_type: str = field(default=None)
    error_response_dto: Optional[shared.ErrorResponseDto] = field(default=None)
    status_code: int = field(default=None)
    
