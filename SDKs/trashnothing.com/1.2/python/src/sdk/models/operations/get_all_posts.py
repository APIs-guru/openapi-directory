from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetAllPostsQueryParams:
    date_max: datetime = field(default=None, metadata={'query_param': { 'field_name': 'date_max', 'style': 'form', 'explode': True }})
    date_min: datetime = field(default=None, metadata={'query_param': { 'field_name': 'date_min', 'style': 'form', 'explode': True }})
    device_pixel_ratio: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'device_pixel_ratio', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    types: str = field(default=None, metadata={'query_param': { 'field_name': 'types', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAllPostsSecurityOption1:
    oauth2_implicit: shared.SchemeOauth2Implicit = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetAllPostsSecurityOption2:
    oauth2_code: shared.SchemeOauth2Code = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetAllPostsSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class GetAllPostsSecurity:
    option1: Optional[GetAllPostsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetAllPostsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetAllPostsSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetAllPostsRequest:
    query_params: GetAllPostsQueryParams = field(default=None)
    security: GetAllPostsSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetAllPosts200ApplicationJSON:
    posts: Optional[List[shared.Post]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'posts' }})
    

@dataclass
class GetAllPostsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_all_posts_200_application_json_object: Optional[GetAllPosts200ApplicationJSON] = field(default=None)
    
