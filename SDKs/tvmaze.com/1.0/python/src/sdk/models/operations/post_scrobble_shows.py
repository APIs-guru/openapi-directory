from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class PostScrobbleShowsQueryParams:
    imdb_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'imdb_id', 'style': 'form', 'explode': True }})
    thetvdb_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'thetvdb_id', 'style': 'form', 'explode': True }})
    tvmaze_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'tvmaze_id', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class PostScrobbleShowsRequestBody:
    airdate: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('airdate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    episode: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('episode') }})
    marked_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('marked_at') }})
    season: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('season') }})
    type: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass
class PostScrobbleShowsRequest:
    query_params: PostScrobbleShowsQueryParams = field()
    request: Optional[List[PostScrobbleShowsRequestBody]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostScrobbleShowsResponse:
    content_type: str = field()
    status_code: int = field()
    bulk_response: Optional[List[Any]] = field(default=None)
    
