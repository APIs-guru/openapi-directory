from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OptionalClaims:
    r"""OptionalClaims
    Specifying the claims to be included in the token.
    """
    
    access_token: Optional[List[OptionalClaim]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessToken') }})
    id_token: Optional[List[OptionalClaim]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idToken') }})
    saml_token: Optional[List[OptionalClaim]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('samlToken') }})
    
