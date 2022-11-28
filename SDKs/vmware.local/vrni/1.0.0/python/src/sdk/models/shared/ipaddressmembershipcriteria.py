from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class IPAddressMembershipCriteria:
    r"""IPAddressMembershipCriteria
    Ip Address membership definition
    """
    
    ip_addresses: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip_addresses') }})
    
