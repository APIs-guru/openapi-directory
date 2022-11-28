from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class StoryIDCollaboratorsUseridGetPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    story_collaborator_userid: str = field(metadata={'path_param': { 'field_name': 'story_collaborator_userid', 'style': 'simple', 'explode': False }})
    

@dataclass
class StoryIDCollaboratorsUseridGetRequest:
    path_params: StoryIDCollaboratorsUseridGetPathParams = field()
    

@dataclass
class StoryIDCollaboratorsUseridGetResponse:
    content_type: str = field()
    status_code: int = field()
    problem_detail: Optional[Any] = field(default=None)
    story_collaborator: Optional[shared.StoryCollaborator] = field(default=None)
    
