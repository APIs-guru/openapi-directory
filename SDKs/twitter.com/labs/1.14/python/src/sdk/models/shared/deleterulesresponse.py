from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import rulesresponsemetadata


@dataclass_json
@dataclass
class DeleteRulesResponse:
    meta: rulesresponsemetadata.RulesResponseMetadata = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    
