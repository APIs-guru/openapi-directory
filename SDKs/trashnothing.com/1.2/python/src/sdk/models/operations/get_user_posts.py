from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetUserPostsPathParams:
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUserPostsQueryParams:
    date_max: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'date_max', 'style': 'form', 'explode': True }})
    date_min: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'date_min', 'style': 'form', 'explode': True }})
    device_pixel_ratio: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'device_pixel_ratio', 'style': 'form', 'explode': True }})
    group_ids: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'group_ids', 'style': 'form', 'explode': True }})
    latitude: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'latitude', 'style': 'form', 'explode': True }})
    longitude: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'longitude', 'style': 'form', 'explode': True }})
    outcomes: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'outcomes', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    radius: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'radius', 'style': 'form', 'explode': True }})
    sort_by: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort_by', 'style': 'form', 'explode': True }})
    sources: str = field(default=None, metadata={'query_param': { 'field_name': 'sources', 'style': 'form', 'explode': True }})
    types: str = field(default=None, metadata={'query_param': { 'field_name': 'types', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUserPostsSecurityOption1:
    oauth2_implicit: shared.SchemeOauth2Implicit = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetUserPostsSecurityOption2:
    oauth2_code: shared.SchemeOauth2Code = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetUserPostsSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class GetUserPostsSecurity:
    option1: Optional[GetUserPostsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetUserPostsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetUserPostsSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetUserPostsRequest:
    path_params: GetUserPostsPathParams = field(default=None)
    query_params: GetUserPostsQueryParams = field(default=None)
    security: GetUserPostsSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetUserPosts200ApplicationJSON:
    end_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end_index' }})
    group_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group_ids' }})
    last_listings_view: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_listings_view', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    num_pages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'num_pages' }})
    num_posts: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'num_posts' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    per_page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'per_page' }})
    posts: Optional[List[shared.Post]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'posts' }})
    start_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start_index' }})
    

@dataclass
class GetUserPostsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_user_posts_200_application_json_object: Optional[GetUserPosts200ApplicationJSON] = field(default=None)
    
