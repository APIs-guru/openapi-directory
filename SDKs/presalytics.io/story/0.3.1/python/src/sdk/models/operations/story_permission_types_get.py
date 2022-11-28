from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class StoryPermissionTypesGetResponse:
    content_type: str = field()
    status_code: int = field()
    permission_types: Optional[List[shared.PermissionType]] = field(default=None)
    problem_detail: Optional[Any] = field(default=None)
    
