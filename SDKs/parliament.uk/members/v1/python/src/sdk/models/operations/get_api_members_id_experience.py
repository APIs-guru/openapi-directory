from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPIMembersIDExperiencePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIMembersIDExperienceRequest:
    path_params: GetAPIMembersIDExperiencePathParams = field()
    

@dataclass
class GetAPIMembersIDExperienceResponse:
    content_type: str = field()
    status_code: int = field()
    biography_experience_list_item: Optional[shared.BiographyExperienceListItem] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
