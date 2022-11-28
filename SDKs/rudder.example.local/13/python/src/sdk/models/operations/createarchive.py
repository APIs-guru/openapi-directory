from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateArchivePathParams:
    archive_kind: shared.ArchiveKindEnum = field(metadata={'path_param': { 'field_name': 'archiveKind', 'style': 'simple', 'explode': False }})
    
class CreateArchive200ApplicationJSONActionEnum(str, Enum):
    ARCHIVE_FULL = "archiveFull"
    ARCHIVE_GROUPS = "archiveGroups"
    ARCHIVE_RULES = "archiveRules"
    ARCHIVE_DIRECTIVES = "archiveDirectives"
    ARCHIVE_PARAMETERS = "archiveParameters"


@dataclass_json
@dataclass
class CreateArchive200ApplicationJSONDataFull:
    commiter: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('commiter') }})
    git_commit: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gitCommit') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclass
class CreateArchive200ApplicationJSONData:
    full: CreateArchive200ApplicationJSONDataFull = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('full') }})
    
class CreateArchive200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class CreateArchive200ApplicationJSON:
    action: CreateArchive200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: CreateArchive200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: CreateArchive200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class CreateArchiveRequest:
    path_params: CreateArchivePathParams = field()
    

@dataclass
class CreateArchiveResponse:
    content_type: str = field()
    status_code: int = field()
    create_archive_200_application_json_object: Optional[CreateArchive200ApplicationJSON] = field(default=None)
    
