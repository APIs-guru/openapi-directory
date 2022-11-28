from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SavedAlbumObject:
    r"""SavedAlbumObject

    https://developer.spotify.com/documentation/web-api/reference/#object-savedalbumobject - Find more info on the official Spotify Web API Reference
    """
    
    added_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('added_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    album: Optional[AlbumObject] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('album') }})
    
