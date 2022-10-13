from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import governmentdepartment
from . import governmentoppositionpostholder


@dataclass_json
@dataclass
class GovernmentOppositionPost:
    created_when: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdWhen', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    government_departments: Optional[List[governmentdepartment.GovernmentDepartment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'governmentDepartments' }})
    hansard_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hansardName' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'order' }})
    post_holders: Optional[List[governmentoppositionpostholder.GovernmentOppositionPostHolder]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postHolders' }})
    type: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
