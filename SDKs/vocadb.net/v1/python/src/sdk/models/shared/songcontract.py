from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class SongContractPvServicesEnum(str, Enum):
    NOTHING = "Nothing"
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

class SongContractSongTypeEnum(str, Enum):
    UNSPECIFIED = "Unspecified"
    ORIGINAL = "Original"
    REMASTER = "Remaster"
    REMIX = "Remix"
    COVER = "Cover"
    ARRANGEMENT = "Arrangement"
    INSTRUMENTAL = "Instrumental"
    MASHUP = "Mashup"
    MUSIC_PV = "MusicPV"
    DRAMA_PV = "DramaPV"
    LIVE = "Live"
    ILLUSTRATION = "Illustration"
    OTHER = "Other"

class SongContractStatusEnum(str, Enum):
    DRAFT = "Draft"
    FINISHED = "Finished"
    APPROVED = "Approved"
    LOCKED = "Locked"


@dataclass_json
@dataclass
class SongContract:
    additional_names: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalNames') }})
    artist_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artistString') }})
    create_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    favorited_times: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('favoritedTimes') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    length_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lengthSeconds') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    nico_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nicoId') }})
    publish_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publishDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    pv_services: Optional[SongContractPvServicesEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pvServices') }})
    rating_score: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ratingScore') }})
    song_type: Optional[SongContractSongTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('songType') }})
    status: Optional[SongContractStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    thumb_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbUrl') }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
