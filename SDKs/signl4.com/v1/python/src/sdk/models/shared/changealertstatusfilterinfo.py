from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ChangeAlertStatusFilterInfo:
    category_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categoryIds' }})
    max_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    min_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    scope: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scope' }})
    team_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'teamIds' }})
    
