from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import businessappointmentsettings


@dataclass_json
@dataclass
class BusinessBookingProfile:
    allow_user_cancel: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allow_user_cancel' }})
    booking_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'booking_enabled' }})
    booking_policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'booking_policy' }})
    business_appointment_settings: Optional[businessappointmentsettings.BusinessAppointmentSettings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'business_appointment_settings' }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    customer_timezone_choice: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customer_timezone_choice' }})
    seller_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'seller_id' }})
    
