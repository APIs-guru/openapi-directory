from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ListContinuousChecksResponse:
    content_type: str = field(default=None)
    list_continuous_checks_output: Optional[shared.ListContinuousChecksOutput] = field(default=None)
    status_code: int = field(default=None)
    
