from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class AgentKeyStatusEnum(str, Enum):
    CERTIFIED = "certified"
    UNDEFINED = "undefined"


@dataclass_json
@dataclass
class AgentKey:
    status: Optional[AgentKeyStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
