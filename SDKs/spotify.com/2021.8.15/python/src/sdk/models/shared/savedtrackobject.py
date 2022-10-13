from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import trackobject


@dataclass_json
@dataclass
class SavedTrackObject:
    added_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'added_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    track: Optional[trackobject.TrackObject] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'track' }})
    
