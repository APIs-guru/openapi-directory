from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class StoryIDCollaboratorsGetPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class StoryIDCollaboratorsGetRequest:
    path_params: StoryIDCollaboratorsGetPathParams = field()
    

@dataclass
class StoryIDCollaboratorsGetResponse:
    content_type: str = field()
    status_code: int = field()
    problem_detail: Optional[Any] = field(default=None)
    story_collaborators: Optional[List[shared.StoryCollaborator]] = field(default=None)
    
