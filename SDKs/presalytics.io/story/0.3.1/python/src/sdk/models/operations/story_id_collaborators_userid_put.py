from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class StoryIDCollaboratorsUseridPutPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    story_collaborator_userid: str = field(default=None, metadata={'path_param': { 'field_name': 'story_collaborator_userid', 'style': 'simple', 'explode': False }})
    

@dataclass
class StoryIDCollaboratorsUseridPutRequest:
    path_params: StoryIDCollaboratorsUseridPutPathParams = field(default=None)
    request: shared.StoryCollaborator = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StoryIDCollaboratorsUseridPutResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    problem_detail: Optional[Any] = field(default=None)
    story_collaborator: Optional[shared.StoryCollaborator] = field(default=None)
    
