from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
class SongForAPIContractInput:
    additional_names: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalNames') }})
    albums: Optional[List[AlbumContractInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('albums') }})
    artist_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artistString') }})
    artists: Optional[List[ArtistForSongContract]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artists') }})
    create_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    default_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultName') }})
    default_name_language: Optional[SongForAPIContractDefaultNameLanguageEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultNameLanguage') }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    favorited_times: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('favoritedTimes') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    length_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lengthSeconds') }})
    lyrics: Optional[List[LyricsForSongContract]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lyrics') }})
    main_picture: Optional[EntryThumbForAPIContract] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mainPicture') }})
    merged_to: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mergedTo') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    names: Optional[List[LocalizedStringContract]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('names') }})
    original_version_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originalVersionId') }})
    publish_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publishDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    pv_services: Optional[SongForAPIContractPvServicesEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pvServices') }})
    pvs: Optional[List[PvContract]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pvs') }})
    rating_score: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ratingScore') }})
    release_event: Optional[ReleaseEventForAPIContractInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('releaseEvent') }})
    song_type: Optional[SongForAPIContractSongTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('songType') }})
    status: Optional[SongForAPIContractStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tags: Optional[List[TagUsageForAPIContract]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    thumb_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbUrl') }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    web_links: Optional[List[WebLinkForAPIContract]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webLinks') }})
    

@dataclass_json
@dataclass
class SongForAPIContract:
    additional_names: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalNames') }})
    albums: Optional[List[AlbumContract]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('albums') }})
    artist_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artistString') }})
    artists: Optional[List[ArtistForSongContract]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artists') }})
    create_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    default_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultName') }})
    default_name_language: Optional[SongForAPIContractDefaultNameLanguageEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultNameLanguage') }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    favorited_times: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('favoritedTimes') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    length_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lengthSeconds') }})
    lyrics: Optional[List[LyricsForSongContract]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lyrics') }})
    main_picture: Optional[EntryThumbForAPIContract] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mainPicture') }})
    merged_to: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mergedTo') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    names: Optional[List[LocalizedStringContract]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('names') }})
    original_version_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originalVersionId') }})
    publish_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publishDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    pv_services: Optional[SongForAPIContractPvServicesEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pvServices') }})
    pvs: Optional[List[PvContract]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pvs') }})
    rating_score: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ratingScore') }})
    release_event: Optional[ReleaseEventForAPIContract] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('releaseEvent') }})
    song_type: Optional[SongForAPIContractSongTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('songType') }})
    status: Optional[SongForAPIContractStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tags: Optional[List[TagUsageForAPIContract]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    thumb_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbUrl') }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    web_links: Optional[List[WebLinkForAPIContract]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webLinks') }})
    
