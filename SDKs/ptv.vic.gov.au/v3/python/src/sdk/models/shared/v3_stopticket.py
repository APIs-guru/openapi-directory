from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class V3StopTicket:
    is_free_fare_zone: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_free_fare_zone' }})
    ticket_checks: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ticket_checks' }})
    ticket_machine: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ticket_machine' }})
    ticket_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ticket_type' }})
    ticket_zones: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ticket_zones' }})
    vline_reservation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vline_reservation' }})
    zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zone' }})
    
