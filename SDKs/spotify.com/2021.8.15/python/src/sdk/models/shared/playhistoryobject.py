from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import contextobject
from . import simplifiedtrackobject


@dataclass_json
@dataclass
class PlayHistoryObject:
    context: Optional[contextobject.ContextObject] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'context' }})
    played_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'played_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    track: Optional[simplifiedtrackobject.SimplifiedTrackObject] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'track' }})
    
