from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class LinkTokenCreateRequestAuthFlowTypeEnum(str, Enum):
    FLEXIBLE_AUTH = "FLEXIBLE_AUTH"


@dataclass_json
@dataclass
class LinkTokenCreateRequestAuth:
    r"""LinkTokenCreateRequestAuth
    Specifies options for initializing Link for use with the Auth product. This field is currently only required if using the Flexible Auth product (currently in closed beta).
    """
    
    flow_type: LinkTokenCreateRequestAuthFlowTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('flow_type') }})
    
