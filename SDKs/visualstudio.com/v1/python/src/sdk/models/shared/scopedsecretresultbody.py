from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import secretfilterbody


@dataclass_json
@dataclass
class ScopedSecretResultBody:
    filters: Optional[List[secretfilterbody.SecretFilterBody]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filters' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_modified: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModified', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notes' }})
    scope: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scope' }})
    secret_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secretName' }})
    type: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
