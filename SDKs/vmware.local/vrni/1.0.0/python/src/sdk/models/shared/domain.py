from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class DomainDomainTypeEnum(str, Enum):
    LDAP = "LDAP"
    LOCAL = "LOCAL"


@dataclass_json
@dataclass
class Domain:
    domain_type: Optional[DomainDomainTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain_type' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
