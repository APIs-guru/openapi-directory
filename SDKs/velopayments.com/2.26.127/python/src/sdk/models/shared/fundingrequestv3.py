from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class FundingRequestV3:
    amount: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    funding_account_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fundingAccountId' }})
    
