from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class FileWatcherRestart200ApplicationJSONActionEnum(str, Enum):
    FILE_WATCHER_RESTART = "fileWatcherRestart"

class FileWatcherRestart200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class FileWatcherRestart200ApplicationJSON:
    action: FileWatcherRestart200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: FileWatcherRestart200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class FileWatcherRestartResponse:
    content_type: str = field()
    status_code: int = field()
    file_watcher_restart_200_application_json_object: Optional[FileWatcherRestart200ApplicationJSON] = field(default=None)
    
