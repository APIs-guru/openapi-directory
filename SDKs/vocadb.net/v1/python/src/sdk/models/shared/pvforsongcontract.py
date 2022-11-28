from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class PvForSongContractPvTypeEnum(str, Enum):
    ORIGINAL = "Original"
    REPRINT = "Reprint"
    OTHER = "Other"

class PvForSongContractServiceEnum(str, Enum):
    NICO_NICO_DOUGA = "NicoNicoDouga"
    YOUTUBE = "Youtube"
    SOUND_CLOUD = "SoundCloud"
    VIMEO = "Vimeo"
    PIAPRO = "Piapro"
    BILIBILI = "Bilibili"
    FILE = "File"
    LOCAL_FILE = "LocalFile"
    CREOFUGA = "Creofuga"
    BANDCAMP = "Bandcamp"


@dataclass_json
@dataclass
class PvForSongContract:
    author: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('author') }})
    created_by: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdBy') }})
    disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabled') }})
    extended_metadata: Optional[PvExtendedMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extendedMetadata') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('length') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    publish_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publishDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    pv_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pvId') }})
    pv_type: Optional[PvForSongContractPvTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pvType') }})
    service: Optional[PvForSongContractServiceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service') }})
    song: Optional[SongContract] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('song') }})
    thumb_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbUrl') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
