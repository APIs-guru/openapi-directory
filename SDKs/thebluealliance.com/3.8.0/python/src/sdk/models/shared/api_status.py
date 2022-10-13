from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import api_status_app_version
from . import api_status_app_version


@dataclass_json
@dataclass
class APIStatus:
    android: api_status_app_version.APIStatusAppVersion = field(default=None, metadata={'dataclasses_json': { 'field_name': 'android' }})
    current_season: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'current_season' }})
    down_events: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'down_events' }})
    ios: api_status_app_version.APIStatusAppVersion = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ios' }})
    is_datafeed_down: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_datafeed_down' }})
    max_season: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max_season' }})
    
