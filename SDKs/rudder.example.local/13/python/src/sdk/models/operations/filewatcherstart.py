from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class FileWatcherStart200ApplicationJSONActionEnum(str, Enum):
    FILE_WATCHER_START = "fileWatcherStart"

class FileWatcherStart200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class FileWatcherStart200ApplicationJSON:
    action: FileWatcherStart200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: FileWatcherStart200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class FileWatcherStartResponse:
    content_type: str = field()
    status_code: int = field()
    file_watcher_start_200_application_json_object: Optional[FileWatcherStart200ApplicationJSON] = field(default=None)
    
