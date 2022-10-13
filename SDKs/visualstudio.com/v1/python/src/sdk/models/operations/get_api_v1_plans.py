from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetAPIV1PlansResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    plan_results: Optional[List[shared.PlanResult]] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
