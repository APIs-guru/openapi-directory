from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import albumcontract
from . import artistforsongcontract
from . import lyricsforsongcontract
from . import entrythumbforapicontract
from . import localizedstringcontract
from . import pvcontract
from . import releaseeventforapicontract
from . import tagusageforapicontract
from . import weblinkforapicontract

class SongForAPIContractDefaultNameLanguageEnum(str, Enum):
    UNSPECIFIED = "Unspecified"
    JAPANESE = "Japanese"
    ROMAJI = "Romaji"
    ENGLISH = "English"

class SongForAPIContractPvServicesEnum(str, Enum):
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

class SongForAPIContractSongTypeEnum(str, Enum):
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

class SongForAPIContractStatusEnum(str, Enum):
    DRAFT = "Draft"
    FINISHED = "Finished"
    APPROVED = "Approved"
    LOCKED = "Locked"


@dataclass_json
@dataclass
class SongForAPIContract:
    additional_names: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalNames' }})
    albums: Optional[List[albumcontract.AlbumContract]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'albums' }})
    artist_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'artistString' }})
    artists: Optional[List[artistforsongcontract.ArtistForSongContract]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'artists' }})
    create_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    default_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultName' }})
    default_name_language: Optional[SongForAPIContractDefaultNameLanguageEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultNameLanguage' }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleted' }})
    favorited_times: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'favoritedTimes' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    length_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lengthSeconds' }})
    lyrics: Optional[List[lyricsforsongcontract.LyricsForSongContract]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lyrics' }})
    main_picture: Optional[entrythumbforapicontract.EntryThumbForAPIContract] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mainPicture' }})
    merged_to: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mergedTo' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    names: Optional[List[localizedstringcontract.LocalizedStringContract]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'names' }})
    original_version_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'originalVersionId' }})
    publish_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publishDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    pv_services: Optional[SongForAPIContractPvServicesEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pvServices' }})
    pvs: Optional[List[pvcontract.PvContract]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pvs' }})
    rating_score: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ratingScore' }})
    release_event: Optional[releaseeventforapicontract.ReleaseEventForAPIContract] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'releaseEvent' }})
    song_type: Optional[SongForAPIContractSongTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'songType' }})
    status: Optional[SongForAPIContractStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tags: Optional[List[tagusageforapicontract.TagUsageForAPIContract]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    thumb_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thumbUrl' }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    web_links: Optional[List[weblinkforapicontract.WebLinkForAPIContract]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webLinks' }})
    
