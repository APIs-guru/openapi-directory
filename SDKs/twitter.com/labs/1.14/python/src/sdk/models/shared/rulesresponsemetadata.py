from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RulesResponseMetadata:
    sent: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sent' }})
    summary: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'summary' }})
    
