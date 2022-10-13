from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import artistforalbumforapicontract
from . import albumdiscpropertiescontract
from . import albumidentifiercontract
from . import entrythumbforapicontract
from . import localizedstringcontract
from . import pvcontract
from . import optionaldatetimecontract
from . import releaseeventforapicontract
from . import tagusageforapicontract
from . import songinalbumforapicontract
from . import weblinkforapicontract

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
    additional_names: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalNames' }})
    artist_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'artistString' }})
    artists: Optional[List[artistforalbumforapicontract.ArtistForAlbumForAPIContract]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'artists' }})
    barcode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'barcode' }})
    catalog_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'catalogNumber' }})
    create_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    default_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultName' }})
    default_name_language: Optional[AlbumForAPIContractDefaultNameLanguageEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultNameLanguage' }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleted' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    disc_type: Optional[AlbumForAPIContractDiscTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'discType' }})
    discs: Optional[List[albumdiscpropertiescontract.AlbumDiscPropertiesContract]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'discs' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    identifiers: Optional[List[albumidentifiercontract.AlbumIdentifierContract]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identifiers' }})
    main_picture: Optional[entrythumbforapicontract.EntryThumbForAPIContract] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mainPicture' }})
    merged_to: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mergedTo' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    names: Optional[List[localizedstringcontract.LocalizedStringContract]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'names' }})
    pvs: Optional[List[pvcontract.PvContract]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pvs' }})
    rating_average: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ratingAverage' }})
    rating_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ratingCount' }})
    release_date: Optional[optionaldatetimecontract.OptionalDateTimeContract] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'releaseDate' }})
    release_event: Optional[releaseeventforapicontract.ReleaseEventForAPIContract] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'releaseEvent' }})
    status: Optional[AlbumForAPIContractStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tags: Optional[List[tagusageforapicontract.TagUsageForAPIContract]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    tracks: Optional[List[songinalbumforapicontract.SongInAlbumForAPIContract]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tracks' }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    web_links: Optional[List[weblinkforapicontract.WebLinkForAPIContract]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webLinks' }})
    
