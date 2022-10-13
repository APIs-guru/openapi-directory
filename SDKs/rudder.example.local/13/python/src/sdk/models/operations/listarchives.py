from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ListArchivesPathParams:
    archive_kind: shared.ArchiveKindEnum = field(default=None, metadata={'path_param': { 'field_name': 'archiveKind', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListArchivesRequest:
    path_params: ListArchivesPathParams = field(default=None)
    
class ListArchives200ApplicationJSONActionEnum(str, Enum):
    ARCHIVE_FULL = "archiveFull"
    ARCHIVE_GROUPS = "archiveGroups"
    ARCHIVE_RULES = "archiveRules"
    ARCHIVE_DIRECTIVES = "archiveDirectives"
    ARCHIVE_PARAMETERS = "archiveParameters"


@dataclass_json
@dataclass
class ListArchives200ApplicationJSONDataFull:
    commiter: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commiter' }})
    git_commit: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gitCommit' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass_json
@dataclass
class ListArchives200ApplicationJSONData:
    full: List[ListArchives200ApplicationJSONDataFull] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'full' }})
    
class ListArchives200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class ListArchives200ApplicationJSON:
    action: ListArchives200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: ListArchives200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: ListArchives200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class ListArchivesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    list_archives_200_application_json_object: Optional[ListArchives200ApplicationJSON] = field(default=None)
    
