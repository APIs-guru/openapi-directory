from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class StoryIDCollaboratorsInactivePostPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class StoryIDCollaboratorsInactivePostRequest:
    path_params: StoryIDCollaboratorsInactivePostPathParams = field()
    request: Any = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StoryIDCollaboratorsInactivePostResponse:
    content_type: str = field()
    status_code: int = field()
    problem_detail: Optional[Any] = field(default=None)
    story_collaborator: Optional[shared.StoryCollaborator] = field(default=None)
    
