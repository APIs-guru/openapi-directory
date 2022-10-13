from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RefundDetails:
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currencyCode' }})
    item_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemPrice' }})
    refund_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refundAmount' }})
    refund_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refundPercentage' }})
    
