from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class AlbumContractDiscTypeEnum(str, Enum):
    UNKNOWN = "Unknown"
    ALBUM = "Album"
    SINGLE = "Single"
    EP = "EP"
    SPLIT_ALBUM = "SplitAlbum"
    COMPILATION = "Compilation"
    VIDEO = "Video"
    ARTBOOK = "Artbook"
    GAME = "Game"
    FANMADE = "Fanmade"
    INSTRUMENTAL = "Instrumental"
    OTHER = "Other"

class AlbumContractStatusEnum(str, Enum):
    DRAFT = "Draft"
    FINISHED = "Finished"
    APPROVED = "Approved"
    LOCKED = "Locked"


@dataclass_json
@dataclass
class AlbumContractInput:
    additional_names: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalNames') }})
    artist_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artistString') }})
    cover_picture_mime: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('coverPictureMime') }})
    create_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    disc_type: Optional[AlbumContractDiscTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discType') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    rating_average: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ratingAverage') }})
    rating_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ratingCount') }})
    release_date: Optional[OptionalDateTimeContract] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('releaseDate') }})
    release_event: Optional[ReleaseEventForAPIContractInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('releaseEvent') }})
    status: Optional[AlbumContractStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    

@dataclass_json
@dataclass
class AlbumContract:
    additional_names: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalNames') }})
    artist_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artistString') }})
    cover_picture_mime: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('coverPictureMime') }})
    create_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    disc_type: Optional[AlbumContractDiscTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discType') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    rating_average: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ratingAverage') }})
    rating_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ratingCount') }})
    release_date: Optional[OptionalDateTimeContract] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('releaseDate') }})
    release_event: Optional[ReleaseEventForAPIContract] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('releaseEvent') }})
    status: Optional[AlbumContractStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
