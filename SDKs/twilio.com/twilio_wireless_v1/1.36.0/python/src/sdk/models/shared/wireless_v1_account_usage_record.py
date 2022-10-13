from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class WirelessV1AccountUsageRecord:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    commands: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commands' }})
    data: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    period: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'period' }})
    
