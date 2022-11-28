from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DomainDomainTypeEnum(str, Enum):
    LDAP = "LDAP"
    LOCAL = "LOCAL"


@dataclass_json
@dataclass
class Domain:
    domain_type: Optional[DomainDomainTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain_type') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
