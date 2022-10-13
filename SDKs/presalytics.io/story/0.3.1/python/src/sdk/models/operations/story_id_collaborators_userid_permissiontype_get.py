from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class StoryIDCollaboratorsUseridPermissiontypeGetPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    permissiontype: str = field(default=None, metadata={'path_param': { 'field_name': 'permissiontype', 'style': 'simple', 'explode': False }})
    story_collaborator_userid: str = field(default=None, metadata={'path_param': { 'field_name': 'story_collaborator_userid', 'style': 'simple', 'explode': False }})
    

@dataclass
class StoryIDCollaboratorsUseridPermissiontypeGetRequest:
    path_params: StoryIDCollaboratorsUseridPermissiontypeGetPathParams = field(default=None)
    

@dataclass
class StoryIDCollaboratorsUseridPermissiontypeGetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    problem_detail: Optional[Any] = field(default=None)
    
