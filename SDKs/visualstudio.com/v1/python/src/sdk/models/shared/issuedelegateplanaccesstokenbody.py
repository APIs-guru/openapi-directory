from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import delegateidentity


@dataclass_json
@dataclass
class IssueDelegatePlanAccessTokenBody:
    environment_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environmentIds' }})
    expiration: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiration', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    identity: Optional[delegateidentity.DelegateIdentity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identity' }})
    scope: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scope' }})
    
