from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ListContinuousChecksResponse:
    content_type: str = field()
    status_code: int = field()
    list_continuous_checks_output: Optional[shared.ListContinuousChecksOutput] = field(default=None)
    
