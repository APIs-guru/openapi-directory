from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import optionalclaim
from . import optionalclaim
from . import optionalclaim


@dataclass_json
@dataclass
class OptionalClaims:
    access_token: Optional[List[optionalclaim.OptionalClaim]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessToken' }})
    id_token: Optional[List[optionalclaim.OptionalClaim]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idToken' }})
    saml_token: Optional[List[optionalclaim.OptionalClaim]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'samlToken' }})
    
