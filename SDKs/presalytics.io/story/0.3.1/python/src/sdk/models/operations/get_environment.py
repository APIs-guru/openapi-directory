from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetEnvironmentResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_environment_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    problem_detail: Optional[Any] = field(default=None)
    
