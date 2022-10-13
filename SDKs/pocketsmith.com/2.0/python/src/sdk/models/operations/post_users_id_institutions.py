from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PostUsersIDInstitutionsPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostUsersIDInstitutionsRequestBody:
    currency_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency_code' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    

@dataclass
class PostUsersIDInstitutionsRequest:
    path_params: PostUsersIDInstitutionsPathParams = field(default=None)
    request: Optional[PostUsersIDInstitutionsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostUsersIDInstitutionsResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    institution: Optional[shared.Institution] = field(default=None)
    status_code: int = field(default=None)
    
