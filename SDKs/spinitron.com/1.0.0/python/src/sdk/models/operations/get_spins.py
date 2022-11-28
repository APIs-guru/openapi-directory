from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetSpinsQueryParams:
    count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    end: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'end', 'style': 'form', 'explode': True }})
    expand: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'expand', 'style': 'form', 'explode': True }})
    fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    playlist_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'playlist_id', 'style': 'form', 'explode': True }})
    show_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'show_id', 'style': 'form', 'explode': True }})
    start: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetSpins200ApplicationJSONLinks:
    self: Optional[shared.Link] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    

@dataclass_json
@dataclass
class GetSpins200ApplicationJSON:
    links: Optional[GetSpins200ApplicationJSONLinks] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    meta: Optional[shared.Pagination] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_meta') }})
    items: Optional[List[shared.Spin]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    

@dataclass
class GetSpinsRequest:
    query_params: GetSpinsQueryParams = field()
    

@dataclass
class GetSpinsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    get_spins_200_application_json_object: Optional[GetSpins200ApplicationJSON] = field(default=None)
    
