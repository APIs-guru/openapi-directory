from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import entrythumbforapicontract
from . import localizedstringcontract
from . import pvcontract
from . import tagusageforapicontract
from . import archivedweblinkcontract

class EntryForAPIContractArtistTypeEnum(str, Enum):
    UNKNOWN = "Unknown"
    CIRCLE = "Circle"
    LABEL = "Label"
    PRODUCER = "Producer"
    ANIMATOR = "Animator"
    ILLUSTRATOR = "Illustrator"
    LYRICIST = "Lyricist"
    VOCALOID = "Vocaloid"
    UTAU = "UTAU"
    CE_VIO = "CeVIO"
    OTHER_VOICE_SYNTHESIZER = "OtherVoiceSynthesizer"
    OTHER_VOCALIST = "OtherVocalist"
    OTHER_GROUP = "OtherGroup"
    OTHER_INDIVIDUAL = "OtherIndividual"
    UTAITE = "Utaite"
    BAND = "Band"
    VOCALIST = "Vocalist"
    CHARACTER = "Character"
    SYNTHESIZER_V = "SynthesizerV"

class EntryForAPIContractDefaultNameLanguageEnum(str, Enum):
    UNSPECIFIED = "Unspecified"
    JAPANESE = "Japanese"
    ROMAJI = "Romaji"
    ENGLISH = "English"

class EntryForAPIContractDiscTypeEnum(str, Enum):
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

class EntryForAPIContractEntryTypeEnum(str, Enum):
    UNDEFINED = "Undefined"
    ALBUM = "Album"
    ARTIST = "Artist"
    DISCUSSION_TOPIC = "DiscussionTopic"
    PV = "PV"
    RELEASE_EVENT = "ReleaseEvent"
    RELEASE_EVENT_SERIES = "ReleaseEventSeries"
    SONG = "Song"
    SONG_LIST = "SongList"
    TAG = "Tag"
    USER = "User"
    VENUE = "Venue"

class EntryForAPIContractEventCategoryEnum(str, Enum):
    UNSPECIFIED = "Unspecified"
    ALBUM_RELEASE = "AlbumRelease"
    ANNIVERSARY = "Anniversary"
    CLUB = "Club"
    CONCERT = "Concert"
    CONTEST = "Contest"
    CONVENTION = "Convention"
    OTHER = "Other"

class EntryForAPIContractSongListFeaturedCategoryEnum(str, Enum):
    NOTHING = "Nothing"
    CONCERTS = "Concerts"
    VOCALOID_RANKING = "VocaloidRanking"
    POOLS = "Pools"
    OTHER = "Other"

class EntryForAPIContractSongTypeEnum(str, Enum):
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

class EntryForAPIContractStatusEnum(str, Enum):
    DRAFT = "Draft"
    FINISHED = "Finished"
    APPROVED = "Approved"
    LOCKED = "Locked"


@dataclass_json
@dataclass
class EntryForAPIContract:
    activity_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activityDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    additional_names: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalNames' }})
    artist_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'artistString' }})
    artist_type: Optional[EntryForAPIContractArtistTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'artistType' }})
    create_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    default_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultName' }})
    default_name_language: Optional[EntryForAPIContractDefaultNameLanguageEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultNameLanguage' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    disc_type: Optional[EntryForAPIContractDiscTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'discType' }})
    entry_type: Optional[EntryForAPIContractEntryTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entryType' }})
    event_category: Optional[EntryForAPIContractEventCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventCategory' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    main_picture: Optional[entrythumbforapicontract.EntryThumbForAPIContract] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mainPicture' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    names: Optional[List[localizedstringcontract.LocalizedStringContract]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'names' }})
    p_vs: Optional[List[pvcontract.PvContract]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pVs' }})
    release_event_series_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'releaseEventSeriesName' }})
    song_list_featured_category: Optional[EntryForAPIContractSongListFeaturedCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'songListFeaturedCategory' }})
    song_type: Optional[EntryForAPIContractSongTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'songType' }})
    status: Optional[EntryForAPIContractStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tag_category_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tagCategoryName' }})
    tags: Optional[List[tagusageforapicontract.TagUsageForAPIContract]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    url_slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'urlSlug' }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    web_links: Optional[List[archivedweblinkcontract.ArchivedWebLinkContract]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webLinks' }})
    
