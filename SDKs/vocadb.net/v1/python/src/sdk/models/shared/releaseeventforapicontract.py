from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import artistforeventcontract
from . import entrythumbforapicontract
from . import localizedstringcontract
from . import releaseeventseriescontract
from . import songlistbasecontract
from . import tagusageforapicontract
from . import venueforapicontract
from . import weblinkforapicontract

class ReleaseEventForAPIContractCategoryEnum(str, Enum):
    UNSPECIFIED = "Unspecified"
    ALBUM_RELEASE = "AlbumRelease"
    ANNIVERSARY = "Anniversary"
    CLUB = "Club"
    CONCERT = "Concert"
    CONTEST = "Contest"
    CONVENTION = "Convention"
    OTHER = "Other"

class ReleaseEventForAPIContractStatusEnum(str, Enum):
    DRAFT = "Draft"
    FINISHED = "Finished"
    APPROVED = "Approved"
    LOCKED = "Locked"


@dataclass_json
@dataclass
class ReleaseEventForAPIContract:
    additional_names: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalNames' }})
    artists: Optional[List[artistforeventcontract.ArtistForEventContract]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'artists' }})
    category: Optional[ReleaseEventForAPIContractCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    end_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    main_picture: Optional[entrythumbforapicontract.EntryThumbForAPIContract] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mainPicture' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    names: Optional[List[localizedstringcontract.LocalizedStringContract]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'names' }})
    series: Optional[releaseeventseriescontract.ReleaseEventSeriesContract] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'series' }})
    series_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'seriesId' }})
    series_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'seriesNumber' }})
    series_suffix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'seriesSuffix' }})
    song_list: Optional[songlistbasecontract.SongListBaseContract] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'songList' }})
    status: Optional[ReleaseEventForAPIContractStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tags: Optional[List[tagusageforapicontract.TagUsageForAPIContract]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    url_slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'urlSlug' }})
    venue: Optional[venueforapicontract.VenueForAPIContract] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'venue' }})
    venue_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'venueName' }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    web_links: Optional[List[weblinkforapicontract.WebLinkForAPIContract]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webLinks' }})
    
