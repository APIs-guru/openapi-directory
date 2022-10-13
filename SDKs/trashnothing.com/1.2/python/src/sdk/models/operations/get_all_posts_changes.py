from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetAllPostsChangesQueryParams:
    date_max: datetime = field(default=None, metadata={'query_param': { 'field_name': 'date_max', 'style': 'form', 'explode': True }})
    date_min: datetime = field(default=None, metadata={'query_param': { 'field_name': 'date_min', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAllPostsChangesSecurityOption1:
    oauth2_implicit: shared.SchemeOauth2Implicit = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetAllPostsChangesSecurityOption2:
    oauth2_code: shared.SchemeOauth2Code = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetAllPostsChangesSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class GetAllPostsChangesSecurity:
    option1: Optional[GetAllPostsChangesSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetAllPostsChangesSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetAllPostsChangesSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetAllPostsChangesRequest:
    query_params: GetAllPostsChangesQueryParams = field(default=None)
    security: GetAllPostsChangesSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetAllPostsChanges200ApplicationJSONChanges:
    date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    post_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'post_id' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class GetAllPostsChanges200ApplicationJSON:
    changes: Optional[List[GetAllPostsChanges200ApplicationJSONChanges]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'changes' }})
    

@dataclass
class GetAllPostsChangesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_all_posts_changes_200_application_json_object: Optional[GetAllPostsChanges200ApplicationJSON] = field(default=None)
    
