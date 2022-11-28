from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InstitutionsGetRequest:
    r"""InstitutionsGetRequest
    InstitutionsGetRequest defines the request schema for `/institutions/get`
    """
    
    count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    country_codes: List[CountryCodeEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('country_codes') }})
    offset: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('offset') }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    options: Optional[InstitutionsGetRequestOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    
