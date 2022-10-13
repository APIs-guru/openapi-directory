from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class StoryIDMessagesPostPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class StoryIDMessagesPostRequest:
    path_params: StoryIDMessagesPostPathParams = field(default=None)
    request: str = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StoryIDMessagesPostResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    problem_detail: Optional[Any] = field(default=None)
    
