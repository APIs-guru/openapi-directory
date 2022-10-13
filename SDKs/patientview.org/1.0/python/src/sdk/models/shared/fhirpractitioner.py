from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import fhircontact


@dataclass_json
@dataclass
class FhirPractitioner:
    address1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address1' }})
    address2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address2' }})
    address3: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address3' }})
    address4: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address4' }})
    allow_invite_gp: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowInviteGp' }})
    contacts: Optional[List[fhircontact.FhirContact]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contacts' }})
    gender: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gender' }})
    group_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupCode' }})
    identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identifier' }})
    invite_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inviteDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    postcode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postcode' }})
    role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role' }})
    
