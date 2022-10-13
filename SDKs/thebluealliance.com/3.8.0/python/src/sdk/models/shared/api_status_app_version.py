from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class APIStatusAppVersion:
    latest_app_version: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latest_app_version' }})
    min_app_version: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'min_app_version' }})
    
