from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class VehicleSummary:
    r"""VehicleSummary
    Represents the summary of a vehicle background check
    """
    
    capacity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('capacity') }})
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    license_plate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('license_plate') }})
    manufacturer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manufacturer') }})
    model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('model') }})
    number_of_doors: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('number_of_doors') }})
    obligatory_insurance_expiration_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('obligatory_insurance_expiration_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    obligatory_insurance_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('obligatory_insurance_status') }})
    service_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_type') }})
    vehicle_category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vehicle_category') }})
    vehicle_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vehicle_id') }})
    vehicle_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vehicle_type') }})
    year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('year') }})
    
