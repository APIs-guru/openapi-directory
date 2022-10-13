from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class StoryIDCollaboratorsUseridDeletePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    story_collaborator_userid: str = field(default=None, metadata={'path_param': { 'field_name': 'story_collaborator_userid', 'style': 'simple', 'explode': False }})
    

@dataclass
class StoryIDCollaboratorsUseridDeleteRequest:
    path_params: StoryIDCollaboratorsUseridDeletePathParams = field(default=None)
    

@dataclass
class StoryIDCollaboratorsUseridDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    problem_detail: Optional[Any] = field(default=None)
    
