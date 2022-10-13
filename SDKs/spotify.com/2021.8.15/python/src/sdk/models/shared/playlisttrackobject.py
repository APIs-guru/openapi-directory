from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import publicuserobject
from . import trackobject
from . import episodeobject


@dataclass_json
@dataclass
class PlaylistTrackObject:
    added_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'added_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    added_by: Optional[publicuserobject.PublicUserObject] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'added_by' }})
    is_local: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_local' }})
    track: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'track' }})
    
