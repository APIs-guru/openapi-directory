from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import orderlineitemapplieddiscount
from . import orderlineitemappliedtax
from . import money
from . import money
from . import orderlineitemmodifier
from . import orderlineitempricingblocklists
from . import orderquantityunit
from . import money
from . import money
from . import money
from . import money


@dataclass_json
@dataclass
class OrderLineItem:
    applied_discounts: Optional[List[orderlineitemapplieddiscount.OrderLineItemAppliedDiscount]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applied_discounts' }})
    applied_taxes: Optional[List[orderlineitemappliedtax.OrderLineItemAppliedTax]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applied_taxes' }})
    base_price_money: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'base_price_money' }})
    catalog_object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'catalog_object_id' }})
    catalog_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'catalog_version' }})
    gross_sales_money: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gross_sales_money' }})
    item_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'item_type' }})
    metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    modifiers: Optional[List[orderlineitemmodifier.OrderLineItemModifier]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modifiers' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'note' }})
    pricing_blocklists: Optional[orderlineitempricingblocklists.OrderLineItemPricingBlocklists] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pricing_blocklists' }})
    quantity: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quantity' }})
    quantity_unit: Optional[orderquantityunit.OrderQuantityUnit] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quantity_unit' }})
    total_discount_money: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_discount_money' }})
    total_money: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_money' }})
    total_tax_money: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_tax_money' }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uid' }})
    variation_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'variation_name' }})
    variation_total_price_money: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'variation_total_price_money' }})
    
