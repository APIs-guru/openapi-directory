from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PortRange:
    display: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display' }})
    end: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end' }})
    iana_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iana_name' }})
    iana_port_display: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iana_port_display' }})
    start: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start' }})
    
