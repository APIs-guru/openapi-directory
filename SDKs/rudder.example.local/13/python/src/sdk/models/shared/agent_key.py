from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AgentKeyStatusEnum(str, Enum):
    CERTIFIED = "certified"
    UNDEFINED = "undefined"


@dataclass_json
@dataclass
class AgentKey:
    r"""AgentKey
    Information about agent key or certificate
    """
    
    value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    status: Optional[AgentKeyStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
