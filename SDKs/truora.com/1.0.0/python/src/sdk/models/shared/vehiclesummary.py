from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class VehicleSummary:
    capacity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'capacity' }})
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    license_plate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'license_plate' }})
    manufacturer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'manufacturer' }})
    model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'model' }})
    number_of_doors: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'number_of_doors' }})
    obligatory_insurance_expiration_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'obligatory_insurance_expiration_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    obligatory_insurance_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'obligatory_insurance_status' }})
    service_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service_type' }})
    vehicle_category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vehicle_category' }})
    vehicle_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vehicle_id' }})
    vehicle_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vehicle_type' }})
    year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'year' }})
    
