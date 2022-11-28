from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeliveryLocation:
    address: Optional[Address] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    scheme_agency_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemeAgencyId') }})
    scheme_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemeId') }})
    

@dataclass_json
@dataclass
class Delivery:
    actual_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actualDate') }})
    location: Optional[DeliveryLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    quantity: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    
