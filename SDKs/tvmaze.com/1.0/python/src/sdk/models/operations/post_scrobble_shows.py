from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class PostScrobbleShowsQueryParams:
    imdb_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'imdb_id', 'style': 'form', 'explode': True }})
    thetvdb_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'thetvdb_id', 'style': 'form', 'explode': True }})
    tvmaze_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'tvmaze_id', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class PostScrobbleShowsRequestBody:
    airdate: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'airdate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    episode: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'episode' }})
    marked_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'marked_at' }})
    season: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'season' }})
    type: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class PostScrobbleShowsRequest:
    query_params: PostScrobbleShowsQueryParams = field(default=None)
    request: Optional[List[PostScrobbleShowsRequestBody]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostScrobbleShowsResponse:
    bulk_response: Optional[List[Any]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
