from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json

class LinkTokenCreateRequestAuthFlowTypeEnum(str, Enum):
    FLEXIBLE_AUTH = "FLEXIBLE_AUTH"


@dataclass_json
@dataclass
class LinkTokenCreateRequestAuth:
    flow_type: LinkTokenCreateRequestAuthFlowTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flow_type' }})
    
