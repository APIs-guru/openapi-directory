from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import loyaltyaccountmapping


@dataclass_json
@dataclass
class SearchLoyaltyAccountsRequestLoyaltyAccountQuery:
    customer_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customer_ids' }})
    mappings: Optional[List[loyaltyaccountmapping.LoyaltyAccountMapping]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mappings' }})
    
