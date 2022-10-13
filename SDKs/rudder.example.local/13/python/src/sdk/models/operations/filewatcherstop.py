from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class FileWatcherStop200ApplicationJSONActionEnum(str, Enum):
    FILE_WATCHER_STOP = "fileWatcherStop"

class FileWatcherStop200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class FileWatcherStop200ApplicationJSON:
    action: FileWatcherStop200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: FileWatcherStop200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class FileWatcherStopResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    file_watcher_stop_200_application_json_object: Optional[FileWatcherStop200ApplicationJSON] = field(default=None)
    
