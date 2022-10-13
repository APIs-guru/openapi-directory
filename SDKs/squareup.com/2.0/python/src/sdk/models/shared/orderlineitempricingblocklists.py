from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import orderlineitempricingblocklistsblockeddiscount
from . import orderlineitempricingblocklistsblockedtax


@dataclass_json
@dataclass
class OrderLineItemPricingBlocklists:
    blocked_discounts: Optional[List[orderlineitempricingblocklistsblockeddiscount.OrderLineItemPricingBlocklistsBlockedDiscount]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blocked_discounts' }})
    blocked_taxes: Optional[List[orderlineitempricingblocklistsblockedtax.OrderLineItemPricingBlocklistsBlockedTax]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blocked_taxes' }})
    
