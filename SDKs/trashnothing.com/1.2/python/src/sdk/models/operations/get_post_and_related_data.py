from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetPostAndRelatedDataPathParams:
    post_id: str = field(metadata={'path_param': { 'field_name': 'post_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPostAndRelatedDataSecurity:
    api_key: Optional[shared.SchemeAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    oauth2_code: Optional[shared.SchemeOauth2Code] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2_implicit: Optional[shared.SchemeOauth2Implicit] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclass
class GetPostAndRelatedData200ApplicationJSON:
    author: Optional[shared.User] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('author') }})
    author_offer_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('author_offer_count') }})
    author_posts: Optional[List[shared.Post]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('author_posts') }})
    author_wanted_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('author_wanted_count') }})
    bookmarked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bookmarked') }})
    feedback: Optional[List[shared.Feedback]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('feedback') }})
    geolocate_bounds: Optional[shared.GeolocateBounds] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('geolocate_bounds') }})
    groups: Optional[List[shared.Group]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groups') }})
    post: Optional[shared.Post] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('post') }})
    replied: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replied') }})
    user_can_reply: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_can_reply') }})
    viewed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('viewed') }})
    

@dataclass
class GetPostAndRelatedDataRequest:
    path_params: GetPostAndRelatedDataPathParams = field()
    security: GetPostAndRelatedDataSecurity = field()
    

@dataclass
class GetPostAndRelatedDataResponse:
    content_type: str = field()
    status_code: int = field()
    get_post_and_related_data_200_application_json_object: Optional[GetPostAndRelatedData200ApplicationJSON] = field(default=None)
    
