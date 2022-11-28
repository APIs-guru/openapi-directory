from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PlaylistTrackObject:
    r"""PlaylistTrackObject

    https://developer.spotify.com/documentation/web-api/reference/#object-playlisttrackobject - Find more info on the official Spotify Web API Reference
    """
    
    added_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('added_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    added_by: Optional[PublicUserObject] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('added_by') }})
    is_local: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_local') }})
    track: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('track') }})
    
