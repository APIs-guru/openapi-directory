from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import releaseeventforapicontract
from . import entrythumbforapicontract
from . import localizedstringcontract
from . import weblinkforapicontract

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
    additional_names: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalNames' }})
    category: Optional[ReleaseEventSeriesForAPIContractCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    events: Optional[List[releaseeventforapicontract.ReleaseEventForAPIContract]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'events' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    main_picture: Optional[entrythumbforapicontract.EntryThumbForAPIContract] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mainPicture' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    names: Optional[List[localizedstringcontract.LocalizedStringContract]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'names' }})
    status: Optional[ReleaseEventSeriesForAPIContractStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    url_slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'urlSlug' }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    web_links: Optional[List[weblinkforapicontract.WebLinkForAPIContract]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webLinks' }})
    
