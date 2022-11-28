from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    additional_names: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalNames') }})
    artists: Optional[List[ArtistForEventContract]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artists') }})
    category: Optional[ReleaseEventForAPIContractCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    date_: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    end_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    main_picture: Optional[EntryThumbForAPIContract] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mainPicture') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    names: Optional[List[LocalizedStringContract]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('names') }})
    series: Optional[ReleaseEventSeriesContract] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('series') }})
    series_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seriesId') }})
    series_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seriesNumber') }})
    series_suffix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seriesSuffix') }})
    song_list: Optional[SongListBaseContract] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('songList') }})
    status: Optional[ReleaseEventForAPIContractStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tags: Optional[List[TagUsageForAPIContract]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    url_slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urlSlug') }})
    venue: Optional[VenueForAPIContract] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('venue') }})
    venue_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('venueName') }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    web_links: Optional[List[WebLinkForAPIContract]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webLinks') }})
    

@dataclass_json
@dataclass
class ReleaseEventForAPIContractInput:
    additional_names: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalNames') }})
    artists: Optional[List[ArtistForEventContract]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artists') }})
    category: Optional[ReleaseEventForAPIContractCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    date_: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    end_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    main_picture: Optional[EntryThumbForAPIContract] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mainPicture') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    names: Optional[List[LocalizedStringContract]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('names') }})
    series: Optional[ReleaseEventSeriesContract] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('series') }})
    series_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seriesId') }})
    series_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seriesNumber') }})
    series_suffix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seriesSuffix') }})
    song_list: Optional[SongListBaseContract] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('songList') }})
    status: Optional[ReleaseEventForAPIContractStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tags: Optional[List[TagUsageForAPIContract]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    url_slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urlSlug') }})
    venue: Optional[VenueForAPIContractInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('venue') }})
    venue_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('venueName') }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    web_links: Optional[List[WebLinkForAPIContract]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webLinks') }})
    
