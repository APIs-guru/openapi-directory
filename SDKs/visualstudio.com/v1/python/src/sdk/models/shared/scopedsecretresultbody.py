from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ScopedSecretResultBody:
    filters: Optional[List[SecretFilterBody]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filters') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    last_modified: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModified'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    scope: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    secret_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secretName') }})
    type: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
