from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class FileWatcherRestart200ApplicationJSONActionEnum(str, Enum):
    FILE_WATCHER_RESTART = "fileWatcherRestart"

class FileWatcherRestart200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class FileWatcherRestart200ApplicationJSON:
    action: FileWatcherRestart200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: FileWatcherRestart200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class FileWatcherRestartResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    file_watcher_restart_200_application_json_object: Optional[FileWatcherRestart200ApplicationJSON] = field(default=None)
    
