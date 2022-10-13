from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class V3ResultOutlet:
    outlet_business: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outlet_business' }})
    outlet_business_hour_fri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outlet_business_hour_fri' }})
    outlet_business_hour_mon: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outlet_business_hour_mon' }})
    outlet_business_hour_sat: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outlet_business_hour_sat' }})
    outlet_business_hour_sun: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outlet_business_hour_sun' }})
    outlet_business_hour_thur: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outlet_business_hour_thur' }})
    outlet_business_hour_tue: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outlet_business_hour_tue' }})
    outlet_business_hour_wed: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outlet_business_hour_wed' }})
    outlet_distance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outlet_distance' }})
    outlet_latitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outlet_latitude' }})
    outlet_longitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outlet_longitude' }})
    outlet_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outlet_name' }})
    outlet_notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outlet_notes' }})
    outlet_postcode: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outlet_postcode' }})
    outlet_slid_spid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outlet_slid_spid' }})
    outlet_suburb: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outlet_suburb' }})
    
