from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import reference
from . import reference

class RuleSetRuleSetTypeEnum(str, Enum):
    NSX_STANDARD = "NSX_STANDARD"
    NSX_REDIRECT = "NSX_REDIRECT"
    AWS_STANDARD = "AWS_STANDARD"


@dataclass_json
@dataclass
class RuleSet:
    firewall: Optional[reference.Reference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firewall' }})
    rule_set_type: Optional[RuleSetRuleSetTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rule_set_type' }})
    rules: Optional[List[reference.Reference]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rules' }})
    
