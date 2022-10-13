from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import payoutcompanyv3
from . import payoutindividualv3


@dataclass_json
@dataclass
class PayoutPayeeV3:
    company: Optional[payoutcompanyv3.PayoutCompanyV3] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'company' }})
    individual: Optional[payoutindividualv3.PayoutIndividualV3] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'individual' }})
    payee_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payeeId' }})
    
