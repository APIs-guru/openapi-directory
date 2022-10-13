from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import v1money
from . import v1paymentdiscount
from . import v1money
from . import v1paymentitemdetail
from . import v1paymentmodifier
from . import v1money
from . import v1money
from . import v1paymenttax
from . import v1money


@dataclass_json
@dataclass
class V1PaymentItemization:
    discount_money: Optional[v1money.V1Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'discount_money' }})
    discounts: Optional[List[v1paymentdiscount.V1PaymentDiscount]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'discounts' }})
    gross_sales_money: Optional[v1money.V1Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gross_sales_money' }})
    item_detail: Optional[v1paymentitemdetail.V1PaymentItemDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'item_detail' }})
    item_variation_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'item_variation_name' }})
    itemization_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemization_type' }})
    modifiers: Optional[List[v1paymentmodifier.V1PaymentModifier]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modifiers' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    net_sales_money: Optional[v1money.V1Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'net_sales_money' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notes' }})
    quantity: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quantity' }})
    single_quantity_money: Optional[v1money.V1Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'single_quantity_money' }})
    taxes: Optional[List[v1paymenttax.V1PaymentTax]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxes' }})
    total_money: Optional[v1money.V1Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_money' }})
    
