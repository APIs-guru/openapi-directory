from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class StoryIDMessagesPostPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class StoryIDMessagesPostRequest:
    path_params: StoryIDMessagesPostPathParams = field()
    request: str = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StoryIDMessagesPostResponse:
    content_type: str = field()
    status_code: int = field()
    problem_detail: Optional[Any] = field(default=None)
    
