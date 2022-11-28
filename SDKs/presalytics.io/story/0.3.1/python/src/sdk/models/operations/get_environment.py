from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetEnvironmentResponse:
    content_type: str = field()
    status_code: int = field()
    get_environment_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    problem_detail: Optional[Any] = field(default=None)
    
