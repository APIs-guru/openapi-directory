from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetUserAndRelatedDataPathParams:
    user_id: str = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GetUserAndRelatedData200ApplicationJSON:
    feedback: Optional[List[shared.Feedback]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('feedback') }})
    offer_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offer_count') }})
    posts: Optional[List[shared.Post]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('posts') }})
    user: Optional[shared.User] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    wanted_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wanted_count') }})
    

@dataclass
class GetUserAndRelatedDataRequest:
    path_params: GetUserAndRelatedDataPathParams = field()
    

@dataclass
class GetUserAndRelatedDataResponse:
    content_type: str = field()
    status_code: int = field()
    get_user_and_related_data_200_application_json_object: Optional[GetUserAndRelatedData200ApplicationJSON] = field(default=None)
    
