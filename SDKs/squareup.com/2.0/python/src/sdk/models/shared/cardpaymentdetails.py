from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import card
from . import cardpaymenttimeline
from . import devicedetails
from . import error


@dataclass_json
@dataclass
class CardPaymentDetails:
    application_cryptogram: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'application_cryptogram' }})
    application_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'application_identifier' }})
    application_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'application_name' }})
    auth_result_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auth_result_code' }})
    avs_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'avs_status' }})
    card: Optional[card.Card] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'card' }})
    card_payment_timeline: Optional[cardpaymenttimeline.CardPaymentTimeline] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'card_payment_timeline' }})
    cvv_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cvv_status' }})
    device_details: Optional[devicedetails.DeviceDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'device_details' }})
    entry_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entry_method' }})
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    refund_requires_card_presence: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refund_requires_card_presence' }})
    statement_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statement_description' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    verification_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verification_method' }})
    verification_results: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verification_results' }})
    
