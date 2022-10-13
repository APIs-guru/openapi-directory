from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import v1paymenttax
from . import v1money
from . import device
from . import v1money
from . import v1money
from . import v1paymenttax
from . import v1money
from . import v1paymentitemization
from . import v1money
from . import v1money
from . import v1money
from . import v1money
from . import v1refund
from . import v1money
from . import v1paymentsurcharge
from . import v1money
from . import v1money
from . import v1tender
from . import v1money
from . import v1money


@dataclass_json
@dataclass
class V1Payment:
    additive_tax: Optional[List[v1paymenttax.V1PaymentTax]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additive_tax' }})
    additive_tax_money: Optional[v1money.V1Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additive_tax_money' }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    creator_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creator_id' }})
    device: Optional[device.Device] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'device' }})
    discount_money: Optional[v1money.V1Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'discount_money' }})
    gross_sales_money: Optional[v1money.V1Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gross_sales_money' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    inclusive_tax: Optional[List[v1paymenttax.V1PaymentTax]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inclusive_tax' }})
    inclusive_tax_money: Optional[v1money.V1Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inclusive_tax_money' }})
    is_partial: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_partial' }})
    itemizations: Optional[List[v1paymentitemization.V1PaymentItemization]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemizations' }})
    merchant_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchant_id' }})
    net_sales_money: Optional[v1money.V1Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'net_sales_money' }})
    net_total_money: Optional[v1money.V1Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'net_total_money' }})
    payment_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payment_url' }})
    processing_fee_money: Optional[v1money.V1Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'processing_fee_money' }})
    receipt_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'receipt_url' }})
    refunded_money: Optional[v1money.V1Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refunded_money' }})
    refunds: Optional[List[v1refund.V1Refund]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refunds' }})
    surcharge_money: Optional[v1money.V1Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'surcharge_money' }})
    surcharges: Optional[List[v1paymentsurcharge.V1PaymentSurcharge]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'surcharges' }})
    swedish_rounding_money: Optional[v1money.V1Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'swedish_rounding_money' }})
    tax_money: Optional[v1money.V1Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tax_money' }})
    tender: Optional[List[v1tender.V1Tender]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tender' }})
    tip_money: Optional[v1money.V1Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tip_money' }})
    total_collected_money: Optional[v1money.V1Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_collected_money' }})
    
