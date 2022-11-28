from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ReleaseEventContractCategoryEnum(str, Enum):
    UNSPECIFIED = "Unspecified"
    ALBUM_RELEASE = "AlbumRelease"
    ANNIVERSARY = "Anniversary"
    CLUB = "Club"
    CONCERT = "Concert"
    CONTEST = "Contest"
    CONVENTION = "Convention"
    OTHER = "Other"

class ReleaseEventContractInheritedCategoryEnum(str, Enum):
    UNSPECIFIED = "Unspecified"
    ALBUM_RELEASE = "AlbumRelease"
    ANNIVERSARY = "Anniversary"
    CLUB = "Club"
    CONCERT = "Concert"
    CONTEST = "Contest"
    CONVENTION = "Convention"
    OTHER = "Other"

class ReleaseEventContractStatusEnum(str, Enum):
    DRAFT = "Draft"
    FINISHED = "Finished"
    APPROVED = "Approved"
    LOCKED = "Locked"


@dataclass_json
@dataclass
class ReleaseEventContract:
    additional_names: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalNames') }})
    category: Optional[ReleaseEventContractCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    custom_name: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customName') }})
    date_: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    end_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    has_venue_or_venue_name: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasVenueOrVenueName') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    inherited_category: Optional[ReleaseEventContractInheritedCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inheritedCategory') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    picture_mime: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pictureMime') }})
    series: Optional[ReleaseEventSeriesContract] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('series') }})
    song_list: Optional[SongListBaseContract] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('songList') }})
    status: Optional[ReleaseEventContractStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    url_slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urlSlug') }})
    venue: Optional[VenueContract] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('venue') }})
    venue_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('venueName') }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    

@dataclass_json
@dataclass
class ReleaseEventContractInput:
    additional_names: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalNames') }})
    category: Optional[ReleaseEventContractCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    custom_name: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customName') }})
    date_: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    end_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    picture_mime: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pictureMime') }})
    series: Optional[ReleaseEventSeriesContract] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('series') }})
    song_list: Optional[SongListBaseContract] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('songList') }})
    status: Optional[ReleaseEventContractStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    url_slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urlSlug') }})
    venue: Optional[VenueContract] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('venue') }})
    venue_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('venueName') }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
