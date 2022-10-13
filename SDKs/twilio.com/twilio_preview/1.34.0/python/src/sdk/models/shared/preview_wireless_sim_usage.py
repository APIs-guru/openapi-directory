from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PreviewWirelessSimUsage:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    commands_costs: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commands_costs' }})
    commands_usage: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commands_usage' }})
    data_costs: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data_costs' }})
    data_usage: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data_usage' }})
    period: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'period' }})
    sim_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sim_sid' }})
    sim_unique_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sim_unique_name' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
