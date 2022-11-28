from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RefundDetails:
    r"""RefundDetails
    Details of the refund
    
    **Note**: Bookings that have not been confirmed by the supplier and have a status of `\"PENDING\"` will report an `itemPrice`, `refundAmount` and `refundPercentage` of `0`, as no fees are charged until the booking has been accepted by the supplier and its status is `\"CONFIRMED\"`.
    
    """
    
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyCode') }})
    item_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemPrice') }})
    refund_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refundAmount') }})
    refund_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refundPercentage') }})
    
