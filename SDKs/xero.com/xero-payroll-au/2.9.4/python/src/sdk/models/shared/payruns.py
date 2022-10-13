from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import payrun


@dataclass_json
@dataclass
class PayRuns:
    pay_runs: Optional[List[payrun.PayRun]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PayRuns' }})
    
