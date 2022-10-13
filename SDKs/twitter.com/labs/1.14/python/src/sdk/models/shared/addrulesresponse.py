from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import rule
from . import rulesresponsemetadata


@dataclass_json
@dataclass
class AddRulesResponse:
    data: List[rule.Rule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    meta: rulesresponsemetadata.RulesResponseMetadata = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    
