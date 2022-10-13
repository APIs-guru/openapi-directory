from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import availablesettingsresult


@dataclass_json
@dataclass
class SkuInfoResult:
    available_settings: Optional[availablesettingsresult.AvailableSettingsResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availableSettings' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    os: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'os' }})
    
