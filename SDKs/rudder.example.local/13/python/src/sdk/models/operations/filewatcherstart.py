from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class FileWatcherStart200ApplicationJSONActionEnum(str, Enum):
    FILE_WATCHER_START = "fileWatcherStart"

class FileWatcherStart200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class FileWatcherStart200ApplicationJSON:
    action: FileWatcherStart200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: FileWatcherStart200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class FileWatcherStartResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    file_watcher_start_200_application_json_object: Optional[FileWatcherStart200ApplicationJSON] = field(default=None)
    
