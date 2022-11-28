from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class APIV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberVoipCapabilities:
    r"""APIV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberVoipCapabilities
    Whether a phone number can receive calls or messages
    """
    
    fax: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fax') }})
    mms: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mms') }})
    sms: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sms') }})
    voice: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voice') }})
    

@dataclass_json
@dataclass
class APIV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberVoip:
    address_requirements: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address_requirements') }})
    beta: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('beta') }})
    capabilities: Optional[APIV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberVoipCapabilities] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('capabilities') }})
    friendly_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('friendly_name') }})
    iso_country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iso_country') }})
    lata: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lata') }})
    latitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latitude') }})
    locality: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locality') }})
    longitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longitude') }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone_number') }})
    postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postal_code') }})
    rate_center: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rate_center') }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    
