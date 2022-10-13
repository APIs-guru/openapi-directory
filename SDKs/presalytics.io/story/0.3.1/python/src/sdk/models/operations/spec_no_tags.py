from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class SpecNoTagsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    problem_detail: Optional[Any] = field(default=None)
    
