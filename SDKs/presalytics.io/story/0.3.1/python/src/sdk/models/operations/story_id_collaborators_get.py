from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class StoryIDCollaboratorsGetPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class StoryIDCollaboratorsGetRequest:
    path_params: StoryIDCollaboratorsGetPathParams = field(default=None)
    

@dataclass
class StoryIDCollaboratorsGetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    problem_detail: Optional[Any] = field(default=None)
    story_collaborators: Optional[List[shared.StoryCollaborator]] = field(default=None)
    
