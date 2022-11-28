from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PaymentInitiationRecipientGetRequest:
    r"""PaymentInitiationRecipientGetRequest
    PaymentInitiationRecipientGetRequest defines the request schema for `/payment_initiation/recipient/get`
    """
    
    recipient_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('recipient_id') }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    
