from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import v1paymenttax
from . import v1money
from . import v1money
from . import v1paymenttax
from . import v1money
from . import v1money
from . import v1money
from . import v1money
from . import v1paymentsurcharge
from . import v1money
from . import v1money


@dataclass_json
@dataclass
class V1Refund:
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    is_exchange: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_exchange' }})
    merchant_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchant_id' }})
    payment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payment_id' }})
    processed_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'processed_at' }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    refunded_additive_tax: Optional[List[v1paymenttax.V1PaymentTax]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refunded_additive_tax' }})
    refunded_additive_tax_money: Optional[v1money.V1Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refunded_additive_tax_money' }})
    refunded_discount_money: Optional[v1money.V1Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refunded_discount_money' }})
    refunded_inclusive_tax: Optional[List[v1paymenttax.V1PaymentTax]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refunded_inclusive_tax' }})
    refunded_inclusive_tax_money: Optional[v1money.V1Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refunded_inclusive_tax_money' }})
    refunded_money: Optional[v1money.V1Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refunded_money' }})
    refunded_processing_fee_money: Optional[v1money.V1Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refunded_processing_fee_money' }})
    refunded_surcharge_money: Optional[v1money.V1Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refunded_surcharge_money' }})
    refunded_surcharges: Optional[List[v1paymentsurcharge.V1PaymentSurcharge]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refunded_surcharges' }})
    refunded_tax_money: Optional[v1money.V1Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refunded_tax_money' }})
    refunded_tip_money: Optional[v1money.V1Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refunded_tip_money' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
