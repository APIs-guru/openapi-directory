from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPIPdfResponse:
    content_type: str = field()
    status_code: int = field()
    error_response_dto: Optional[shared.ErrorResponseDto] = field(default=None)
    
