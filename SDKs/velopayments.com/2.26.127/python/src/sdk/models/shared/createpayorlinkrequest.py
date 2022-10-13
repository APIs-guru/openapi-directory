from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json

class CreatePayorLinkRequestLinkTypeEnum(str, Enum):
    PARENT_OF = "PARENT_OF"


@dataclass_json
@dataclass
class CreatePayorLinkRequest:
    from_payor_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fromPayorId' }})
    link_type: CreatePayorLinkRequestLinkTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linkType' }})
    to_payor_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'toPayorId' }})
    
