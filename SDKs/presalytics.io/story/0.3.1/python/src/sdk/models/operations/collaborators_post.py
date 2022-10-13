from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class CollaboratorsPostRequest:
    request: Any = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CollaboratorsPostResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    permission_types: Optional[List[shared.PermissionType]] = field(default=None)
    problem_detail: Optional[Any] = field(default=None)
    
