from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import ordermoneyamounts
from . import orderreturndiscount
from . import orderreturnlineitem
from . import orderreturnservicecharge
from . import orderreturntax
from . import orderroundingadjustment


@dataclass_json
@dataclass
class OrderReturn:
    return_amounts: Optional[ordermoneyamounts.OrderMoneyAmounts] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'return_amounts' }})
    return_discounts: Optional[List[orderreturndiscount.OrderReturnDiscount]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'return_discounts' }})
    return_line_items: Optional[List[orderreturnlineitem.OrderReturnLineItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'return_line_items' }})
    return_service_charges: Optional[List[orderreturnservicecharge.OrderReturnServiceCharge]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'return_service_charges' }})
    return_taxes: Optional[List[orderreturntax.OrderReturnTax]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'return_taxes' }})
    rounding_adjustment: Optional[orderroundingadjustment.OrderRoundingAdjustment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rounding_adjustment' }})
    source_order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_order_id' }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uid' }})
    
