from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetAllPostsChangesQueryParams:
    date_max: datetime = field(metadata={'query_param': { 'field_name': 'date_max', 'style': 'form', 'explode': True }})
    date_min: datetime = field(metadata={'query_param': { 'field_name': 'date_min', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAllPostsChangesSecurity:
    api_key: Optional[shared.SchemeAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    oauth2_code: Optional[shared.SchemeOauth2Code] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    oauth2_implicit: Optional[shared.SchemeOauth2Implicit] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclass
class GetAllPostsChanges200ApplicationJSONChanges:
    date_: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    post_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('post_id') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class GetAllPostsChanges200ApplicationJSON:
    changes: Optional[List[GetAllPostsChanges200ApplicationJSONChanges]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changes') }})
    

@dataclass
class GetAllPostsChangesRequest:
    query_params: GetAllPostsChangesQueryParams = field()
    security: GetAllPostsChangesSecurity = field()
    

@dataclass
class GetAllPostsChangesResponse:
    content_type: str = field()
    status_code: int = field()
    get_all_posts_changes_200_application_json_object: Optional[GetAllPostsChanges200ApplicationJSON] = field(default=None)
    
