from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class APIV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberMobileCapabilities:
    fax: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fax' }})
    mms: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mms' }})
    sms: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sms' }})
    voice: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voice' }})
    

@dataclass_json
@dataclass
class APIV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberMobile:
    address_requirements: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address_requirements' }})
    beta: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'beta' }})
    capabilities: Optional[APIV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberMobileCapabilities] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'capabilities' }})
    friendly_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'friendly_name' }})
    iso_country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iso_country' }})
    lata: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lata' }})
    latitude: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latitude' }})
    locality: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locality' }})
    longitude: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longitude' }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phone_number' }})
    postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postal_code' }})
    rate_center: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rate_center' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    
