from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetPlaylistsQueryParams:
    count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    end: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'end', 'style': 'form', 'explode': True }})
    expand: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'expand', 'style': 'form', 'explode': True }})
    fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    persona_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'persona_id', 'style': 'form', 'explode': True }})
    show_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'show_id', 'style': 'form', 'explode': True }})
    start: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPlaylistsRequest:
    query_params: GetPlaylistsQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetPlaylists200ApplicationJSONLinks:
    self: Optional[shared.Link] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    

@dataclass_json
@dataclass
class GetPlaylists200ApplicationJSON:
    links: Optional[GetPlaylists200ApplicationJSONLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    meta: Optional[shared.Pagination] = field(default=None, metadata={'dataclasses_json': { 'field_name': '_meta' }})
    items: Optional[List[shared.Playlist]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    

@dataclass
class GetPlaylistsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    get_playlists_200_application_json_object: Optional[GetPlaylists200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
