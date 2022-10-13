from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MemberName:
    end_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name_address_as: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nameAddressAs' }})
    name_display_as: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nameDisplayAs' }})
    name_full_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nameFullTitle' }})
    name_list_as: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nameListAs' }})
    start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
