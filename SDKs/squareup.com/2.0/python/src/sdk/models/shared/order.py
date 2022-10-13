from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import orderlineitemdiscount
from . import orderfulfillment
from . import orderlineitem
from . import ordermoneyamounts
from . import orderpricingoptions
from . import refund
from . import ordermoneyamounts
from . import orderreturn
from . import orderreward
from . import orderroundingadjustment
from . import orderservicecharge
from . import ordersource
from . import orderlineitemtax
from . import tender
from . import money
from . import money
from . import money
from . import money
from . import money


@dataclass_json
@dataclass
class Order:
    closed_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'closed_at' }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    customer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customer_id' }})
    discounts: Optional[List[orderlineitemdiscount.OrderLineItemDiscount]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'discounts' }})
    fulfillments: Optional[List[orderfulfillment.OrderFulfillment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fulfillments' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    line_items: Optional[List[orderlineitem.OrderLineItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'line_items' }})
    location_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location_id' }})
    metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    net_amounts: Optional[ordermoneyamounts.OrderMoneyAmounts] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'net_amounts' }})
    pricing_options: Optional[orderpricingoptions.OrderPricingOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pricing_options' }})
    reference_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reference_id' }})
    refunds: Optional[List[refund.Refund]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refunds' }})
    return_amounts: Optional[ordermoneyamounts.OrderMoneyAmounts] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'return_amounts' }})
    returns: Optional[List[orderreturn.OrderReturn]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returns' }})
    rewards: Optional[List[orderreward.OrderReward]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rewards' }})
    rounding_adjustment: Optional[orderroundingadjustment.OrderRoundingAdjustment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rounding_adjustment' }})
    service_charges: Optional[List[orderservicecharge.OrderServiceCharge]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service_charges' }})
    source: Optional[ordersource.OrderSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    taxes: Optional[List[orderlineitemtax.OrderLineItemTax]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxes' }})
    tenders: Optional[List[tender.Tender]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tenders' }})
    total_discount_money: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_discount_money' }})
    total_money: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_money' }})
    total_service_charge_money: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_service_charge_money' }})
    total_tax_money: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_tax_money' }})
    total_tip_money: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_tip_money' }})
    updated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at' }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
