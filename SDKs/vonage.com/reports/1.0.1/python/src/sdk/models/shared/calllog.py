from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CallLog:
    charge: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'charge' }})
    destination_device_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination_device_name' }})
    destination_extension: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination_extension' }})
    destination_sip_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination_sip_id' }})
    destination_user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination_user' }})
    destination_user_full_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination_user_full_name' }})
    direction: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'direction' }})
    end: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end' }})
    from_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    in_network: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'in_network' }})
    international: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'international' }})
    length: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'length' }})
    rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rate' }})
    recorded: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recorded' }})
    result: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    source_device_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_device_name' }})
    source_extension: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_extension' }})
    source_sip_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_sip_id' }})
    source_user: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_user' }})
    source_user_full_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_user_full_name' }})
    start: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start' }})
    to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to' }})
    
