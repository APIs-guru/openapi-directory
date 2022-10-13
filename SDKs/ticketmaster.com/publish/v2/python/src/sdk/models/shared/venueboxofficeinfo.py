from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class VenueBoxOfficeInfo:
    accepted_payment_details: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acceptedPaymentDetails' }})
    open_hours_details: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'openHoursDetails' }})
    phone_number_details: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phoneNumberDetails' }})
    will_call_details: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'willCallDetails' }})
    
