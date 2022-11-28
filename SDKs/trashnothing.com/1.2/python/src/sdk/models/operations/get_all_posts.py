from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetAllPostsQueryParams:
    date_max: datetime = field(metadata={'query_param': { 'field_name': 'date_max', 'style': 'form', 'explode': True }})
    date_min: datetime = field(metadata={'query_param': { 'field_name': 'date_min', 'style': 'form', 'explode': True }})
    types: str = field(metadata={'query_param': { 'field_name': 'types', 'style': 'form', 'explode': True }})
    device_pixel_ratio: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'device_pixel_ratio', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAllPostsSecurity:
    api_key: Optional[shared.SchemeAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    oauth2_code: Optional[shared.SchemeOauth2Code] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2_implicit: Optional[shared.SchemeOauth2Implicit] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclass
class GetAllPosts200ApplicationJSON:
    posts: Optional[List[shared.Post]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('posts') }})
    

@dataclass
class GetAllPostsRequest:
    query_params: GetAllPostsQueryParams = field()
    security: GetAllPostsSecurity = field()
    

@dataclass
class GetAllPostsResponse:
    content_type: str = field()
    status_code: int = field()
    get_all_posts_200_application_json_object: Optional[GetAllPosts200ApplicationJSON] = field(default=None)
    
