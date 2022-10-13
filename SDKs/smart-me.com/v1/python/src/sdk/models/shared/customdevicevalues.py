from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CustomDeviceValues:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    
