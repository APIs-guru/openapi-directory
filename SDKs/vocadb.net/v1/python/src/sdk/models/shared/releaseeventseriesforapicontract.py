from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ReleaseEventSeriesForAPIContractCategoryEnum(str, Enum):
    UNSPECIFIED = "Unspecified"
    ALBUM_RELEASE = "AlbumRelease"
    ANNIVERSARY = "Anniversary"
    CLUB = "Club"
    CONCERT = "Concert"
    CONTEST = "Contest"
    CONVENTION = "Convention"
    OTHER = "Other"

class ReleaseEventSeriesForAPIContractStatusEnum(str, Enum):
    DRAFT = "Draft"
    FINISHED = "Finished"
    APPROVED = "Approved"
    LOCKED = "Locked"


@dataclass_json
@dataclass
class ReleaseEventSeriesForAPIContract:
    additional_names: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalNames') }})
    category: Optional[ReleaseEventSeriesForAPIContractCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    events: Optional[List[ReleaseEventForAPIContract]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    main_picture: Optional[EntryThumbForAPIContract] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mainPicture') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    names: Optional[List[LocalizedStringContract]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('names') }})
    status: Optional[ReleaseEventSeriesForAPIContractStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    url_slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urlSlug') }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    web_links: Optional[List[WebLinkForAPIContract]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webLinks') }})
    
