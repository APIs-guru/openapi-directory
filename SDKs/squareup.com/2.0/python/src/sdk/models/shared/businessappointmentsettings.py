from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import money


@dataclass_json
@dataclass
class BusinessAppointmentSettings:
    alignment_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alignment_time' }})
    any_team_member_booking_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'any_team_member_booking_enabled' }})
    cancellation_fee_money: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cancellation_fee_money' }})
    cancellation_policy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cancellation_policy' }})
    cancellation_policy_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cancellation_policy_text' }})
    cancellation_window_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cancellation_window_seconds' }})
    location_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location_types' }})
    max_appointments_per_day_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max_appointments_per_day_limit' }})
    max_appointments_per_day_limit_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max_appointments_per_day_limit_type' }})
    max_booking_lead_time_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max_booking_lead_time_seconds' }})
    min_booking_lead_time_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'min_booking_lead_time_seconds' }})
    multiple_service_booking_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'multiple_service_booking_enabled' }})
    skip_booking_flow_staff_selection: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skip_booking_flow_staff_selection' }})
    
