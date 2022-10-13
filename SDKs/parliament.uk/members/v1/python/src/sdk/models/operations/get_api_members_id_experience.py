from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAPIMembersIDExperiencePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIMembersIDExperienceRequest:
    path_params: GetAPIMembersIDExperiencePathParams = field(default=None)
    

@dataclass
class GetAPIMembersIDExperienceResponse:
    biography_experience_list_item: Optional[shared.BiographyExperienceListItem] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
