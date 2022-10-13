from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import episodeobject


@dataclass_json
@dataclass
class SavedEpisodeObject:
    added_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'added_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    episode: Optional[episodeobject.EpisodeObject] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'episode' }})
    
