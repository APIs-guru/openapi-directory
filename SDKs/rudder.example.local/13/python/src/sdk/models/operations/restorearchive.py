from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared

class RestoreArchiveArchiveRestoreKindEnum(str, Enum):
    LATEST_ARCHIVE = "latestArchive"
    LATEST_COMMIT = "latestCommit"
    ARCHIVE_ID = "archive ID"


@dataclass
class RestoreArchivePathParams:
    archive_kind: shared.ArchiveKindEnum = field(metadata={'path_param': { 'field_name': 'archiveKind', 'style': 'simple', 'explode': False }})
    archive_restore_kind: RestoreArchiveArchiveRestoreKindEnum = field(metadata={'path_param': { 'field_name': 'archiveRestoreKind', 'style': 'simple', 'explode': False }})
    
class RestoreArchive200ApplicationJSONActionEnum(str, Enum):
    RESTORE_FULL_LATEST_ARCHIVE = "restoreFullLatestArchive"
    RESTORE_GROUP_LATEST_ARCHIVE = "restoreGroupLatestArchive"
    RESTORE_RULES_LATEST_ARCHIVE = "restoreRulesLatestArchive"
    RESTORE_DIRECTIVES_LATEST_ARCHIVE = "restoreDirectivesLatestArchive"
    RESTORE_PARAMETERS_LATEST_ARCHIVE = "restoreParametersLatestArchive"
    RESTORE_FULL_LATEST_COMMIT = "restoreFullLatestCommit"
    RESTORE_GROUP_LATEST_COMMIT = "restoreGroupLatestCommit"
    RESTORE_RULES_LATEST_COMMIT = "restoreRulesLatestCommit"
    RESTORE_DIRECTIVES_LATEST_COMMIT = "restoreDirectivesLatestCommit"
    RESTORE_PARAMETERS_LATEST_COMMIT = "restoreParametersLatestCommit"
    ARCHIVE_FULL_DATE_RESTORE = "archiveFullDateRestore"
    ARCHIVE_GROUP_DATE_RESTORE = "archiveGroupDateRestore"
    ARCHIVE_RULES_DATE_RESTORE = "archiveRulesDateRestore"
    ARCHIVE_DIRECTIVES_DATE_RESTORE = "archiveDirectivesDateRestore"
    ARCHIVE_PARAMETERS_DATE_RESTORE = "archiveParametersDateRestore"


@dataclass_json
@dataclass
class RestoreArchive200ApplicationJSONData:
    directive: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directive') }})
    full: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('full') }})
    groups: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groups') }})
    parameters: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    rules: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    
class RestoreArchive200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class RestoreArchive200ApplicationJSON:
    action: RestoreArchive200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: RestoreArchive200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: RestoreArchive200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class RestoreArchiveRequest:
    path_params: RestoreArchivePathParams = field()
    

@dataclass
class RestoreArchiveResponse:
    content_type: str = field()
    status_code: int = field()
    restore_archive_200_application_json_object: Optional[RestoreArchive200ApplicationJSON] = field(default=None)
    
