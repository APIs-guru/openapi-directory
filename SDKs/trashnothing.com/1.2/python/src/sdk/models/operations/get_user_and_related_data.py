from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetUserAndRelatedDataPathParams:
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUserAndRelatedDataRequest:
    path_params: GetUserAndRelatedDataPathParams = field(default=None)
    

@dataclass_json
@dataclass
class GetUserAndRelatedData200ApplicationJSON:
    feedback: Optional[List[shared.Feedback]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'feedback' }})
    offer_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offer_count' }})
    posts: Optional[List[shared.Post]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'posts' }})
    user: Optional[shared.User] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    wanted_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wanted_count' }})
    

@dataclass
class GetUserAndRelatedDataResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_user_and_related_data_200_application_json_object: Optional[GetUserAndRelatedData200ApplicationJSON] = field(default=None)
    
