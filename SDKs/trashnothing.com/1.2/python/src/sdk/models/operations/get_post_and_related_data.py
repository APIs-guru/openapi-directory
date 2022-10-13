from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetPostAndRelatedDataPathParams:
    post_id: str = field(default=None, metadata={'path_param': { 'field_name': 'post_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPostAndRelatedDataSecurityOption1:
    oauth2_implicit: shared.SchemeOauth2Implicit = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetPostAndRelatedDataSecurityOption2:
    oauth2_code: shared.SchemeOauth2Code = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetPostAndRelatedDataSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class GetPostAndRelatedDataSecurity:
    option1: Optional[GetPostAndRelatedDataSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetPostAndRelatedDataSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetPostAndRelatedDataSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetPostAndRelatedDataRequest:
    path_params: GetPostAndRelatedDataPathParams = field(default=None)
    security: GetPostAndRelatedDataSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetPostAndRelatedData200ApplicationJSON:
    author: Optional[shared.User] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'author' }})
    author_offer_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'author_offer_count' }})
    author_posts: Optional[List[shared.Post]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'author_posts' }})
    author_wanted_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'author_wanted_count' }})
    bookmarked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bookmarked' }})
    feedback: Optional[List[shared.Feedback]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'feedback' }})
    geolocate_bounds: Optional[shared.GeolocateBounds] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'geolocate_bounds' }})
    groups: Optional[List[shared.Group]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groups' }})
    post: Optional[shared.Post] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'post' }})
    replied: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replied' }})
    user_can_reply: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_can_reply' }})
    viewed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'viewed' }})
    

@dataclass
class GetPostAndRelatedDataResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_post_and_related_data_200_application_json_object: Optional[GetPostAndRelatedData200ApplicationJSON] = field(default=None)
    
