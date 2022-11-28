from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class SpecNoTagsResponse:
    content_type: str = field()
    status_code: int = field()
    problem_detail: Optional[Any] = field(default=None)
    
