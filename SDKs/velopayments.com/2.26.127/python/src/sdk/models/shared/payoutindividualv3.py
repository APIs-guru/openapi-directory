from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import payoutnamev3


@dataclass_json
@dataclass
class PayoutIndividualV3:
    name: payoutnamev3.PayoutNameV3 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
