from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import albumobject


@dataclass_json
@dataclass
class SavedAlbumObject:
    added_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'added_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    album: Optional[albumobject.AlbumObject] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'album' }})
    
