from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MemberName:
    end_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name_address_as: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nameAddressAs') }})
    name_display_as: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nameDisplayAs') }})
    name_full_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nameFullTitle') }})
    name_list_as: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nameListAs') }})
    start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
