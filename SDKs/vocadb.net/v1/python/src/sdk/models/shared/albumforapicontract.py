from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class AlbumForAPIContractDefaultNameLanguageEnum(str, Enum):
    UNSPECIFIED = "Unspecified"
    JAPANESE = "Japanese"
    ROMAJI = "Romaji"
    ENGLISH = "English"

class AlbumForAPIContractDiscTypeEnum(str, Enum):
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

class AlbumForAPIContractStatusEnum(str, Enum):
    DRAFT = "Draft"
    FINISHED = "Finished"
    APPROVED = "Approved"
    LOCKED = "Locked"


@dataclass_json
@dataclass
class AlbumForAPIContract:
    additional_names: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalNames') }})
    artist_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artistString') }})
    artists: Optional[List[ArtistForAlbumForAPIContract]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artists') }})
    barcode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('barcode') }})
    catalog_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('catalogNumber') }})
    create_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    default_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultName') }})
    default_name_language: Optional[AlbumForAPIContractDefaultNameLanguageEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultNameLanguage') }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    disc_type: Optional[AlbumForAPIContractDiscTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discType') }})
    discs: Optional[List[AlbumDiscPropertiesContract]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discs') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    identifiers: Optional[List[AlbumIdentifierContract]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identifiers') }})
    main_picture: Optional[EntryThumbForAPIContract] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mainPicture') }})
    merged_to: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mergedTo') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    names: Optional[List[LocalizedStringContract]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('names') }})
    pvs: Optional[List[PvContract]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pvs') }})
    rating_average: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ratingAverage') }})
    rating_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ratingCount') }})
    release_date: Optional[OptionalDateTimeContract] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('releaseDate') }})
    release_event: Optional[ReleaseEventForAPIContract] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('releaseEvent') }})
    status: Optional[AlbumForAPIContractStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tags: Optional[List[TagUsageForAPIContract]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    tracks: Optional[List[SongInAlbumForAPIContract]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tracks') }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    web_links: Optional[List[WebLinkForAPIContract]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webLinks') }})
    
