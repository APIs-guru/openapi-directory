from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class StoryIDSessionPostPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class StoryIDSessionPostRequest:
    path_params: StoryIDSessionPostPathParams = field(default=None)
    request: Any = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StoryIDSessionPostResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    problem_detail: Optional[Any] = field(default=None)
    session: Optional[shared.Session] = field(default=None)
    
