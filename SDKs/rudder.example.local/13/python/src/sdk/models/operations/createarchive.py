from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateArchivePathParams:
    archive_kind: shared.ArchiveKindEnum = field(default=None, metadata={'path_param': { 'field_name': 'archiveKind', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateArchiveRequest:
    path_params: CreateArchivePathParams = field(default=None)
    
class CreateArchive200ApplicationJSONActionEnum(str, Enum):
    ARCHIVE_FULL = "archiveFull"
    ARCHIVE_GROUPS = "archiveGroups"
    ARCHIVE_RULES = "archiveRules"
    ARCHIVE_DIRECTIVES = "archiveDirectives"
    ARCHIVE_PARAMETERS = "archiveParameters"


@dataclass_json
@dataclass
class CreateArchive200ApplicationJSONDataFull:
    commiter: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commiter' }})
    git_commit: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gitCommit' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass_json
@dataclass
class CreateArchive200ApplicationJSONData:
    full: CreateArchive200ApplicationJSONDataFull = field(default=None, metadata={'dataclasses_json': { 'field_name': 'full' }})
    
class CreateArchive200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class CreateArchive200ApplicationJSON:
    action: CreateArchive200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: CreateArchive200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: CreateArchive200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class CreateArchiveResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    create_archive_200_application_json_object: Optional[CreateArchive200ApplicationJSON] = field(default=None)
    
