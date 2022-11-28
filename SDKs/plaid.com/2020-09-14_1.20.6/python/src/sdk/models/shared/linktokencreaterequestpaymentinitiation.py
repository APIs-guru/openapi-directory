from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LinkTokenCreateRequestPaymentInitiation:
    r"""LinkTokenCreateRequestPaymentInitiation
    Specifies options for initializing Link for use with the Payment Initiation (Europe) product. This field is required if `payment_initiation` is included in the `products` array.
    """
    
    payment_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('payment_id') }})
    
