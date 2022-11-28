from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ListArchivesPathParams:
    archive_kind: shared.ArchiveKindEnum = field(metadata={'path_param': { 'field_name': 'archiveKind', 'style': 'simple', 'explode': False }})
    
class ListArchives200ApplicationJSONActionEnum(str, Enum):
    ARCHIVE_FULL = "archiveFull"
    ARCHIVE_GROUPS = "archiveGroups"
    ARCHIVE_RULES = "archiveRules"
    ARCHIVE_DIRECTIVES = "archiveDirectives"
    ARCHIVE_PARAMETERS = "archiveParameters"


@dataclass_json
@dataclass
class ListArchives200ApplicationJSONDataFull:
    commiter: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('commiter') }})
    git_commit: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gitCommit') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclass
class ListArchives200ApplicationJSONData:
    full: List[ListArchives200ApplicationJSONDataFull] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('full') }})
    
class ListArchives200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class ListArchives200ApplicationJSON:
    action: ListArchives200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: ListArchives200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: ListArchives200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class ListArchivesRequest:
    path_params: ListArchivesPathParams = field()
    

@dataclass
class ListArchivesResponse:
    content_type: str = field()
    status_code: int = field()
    list_archives_200_application_json_object: Optional[ListArchives200ApplicationJSON] = field(default=None)
    
