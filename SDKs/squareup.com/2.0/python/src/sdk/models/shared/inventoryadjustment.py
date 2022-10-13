from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import inventoryadjustmentgroup
from . import sourceapplication
from . import money


@dataclass_json
@dataclass
class InventoryAdjustment:
    adjustment_group: Optional[inventoryadjustmentgroup.InventoryAdjustmentGroup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adjustment_group' }})
    catalog_object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'catalog_object_id' }})
    catalog_object_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'catalog_object_type' }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    employee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'employee_id' }})
    from_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from_state' }})
    goods_receipt_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'goods_receipt_id' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location_id' }})
    occurred_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'occurred_at' }})
    purchase_order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purchase_order_id' }})
    quantity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quantity' }})
    reference_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reference_id' }})
    refund_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refund_id' }})
    source: Optional[sourceapplication.SourceApplication] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    to_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to_state' }})
    total_price_money: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_price_money' }})
    transaction_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transaction_id' }})
    
