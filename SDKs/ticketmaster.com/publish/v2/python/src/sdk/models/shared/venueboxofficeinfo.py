from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class VenueBoxOfficeInfo:
    r"""VenueBoxOfficeInfo
    Venue box office information
    """
    
    accepted_payment_details: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acceptedPaymentDetails') }})
    open_hours_details: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('openHoursDetails') }})
    phone_number_details: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneNumberDetails') }})
    will_call_details: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('willCallDetails') }})
    
