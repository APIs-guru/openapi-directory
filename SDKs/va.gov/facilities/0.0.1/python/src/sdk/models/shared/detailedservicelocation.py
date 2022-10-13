from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import appointmentphonenumber
from . import detailedserviceemailcontact
from . import detailedservicehours
from . import detailedserviceaddress


@dataclass_json
@dataclass
class DetailedServiceLocation:
    additional_hours_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additional_hours_info' }})
    appointment_phones: Optional[List[appointmentphonenumber.AppointmentPhoneNumber]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appointment_phones' }})
    email_contacts: Optional[List[detailedserviceemailcontact.DetailedServiceEmailContact]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email_contacts' }})
    facility_service_hours: Optional[detailedservicehours.DetailedServiceHours] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'facility_service_hours' }})
    service_location_address: Optional[detailedserviceaddress.DetailedServiceAddress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service_location_address' }})
    
