from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ReleaseEventSeriesContractCategoryEnum(str, Enum):
    UNSPECIFIED = "Unspecified"
    ALBUM_RELEASE = "AlbumRelease"
    ANNIVERSARY = "Anniversary"
    CLUB = "Club"
    CONCERT = "Concert"
    CONTEST = "Contest"
    CONVENTION = "Convention"
    OTHER = "Other"

class ReleaseEventSeriesContractStatusEnum(str, Enum):
    DRAFT = "Draft"
    FINISHED = "Finished"
    APPROVED = "Approved"
    LOCKED = "Locked"


@dataclass_json
@dataclass
class ReleaseEventSeriesContract:
    additional_names: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalNames') }})
    category: Optional[ReleaseEventSeriesContractCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    picture_mime: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pictureMime') }})
    status: Optional[ReleaseEventSeriesContractStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    url_slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urlSlug') }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    web_links: Optional[List[WebLinkContract]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webLinks') }})
    
