from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ExplicitContentSettingsObject:
    filter_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filter_enabled' }})
    filter_locked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filter_locked' }})
    
