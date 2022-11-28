from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InstitutionsGetByIDRequest:
    r"""InstitutionsGetByIDRequest
    InstitutionsGetByIdRequest defines the request schema for `/institutions/get_by_id`
    """
    
    country_codes: List[CountryCodeEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('country_codes') }})
    institution_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('institution_id') }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    options: Optional[InstitutionsGetByIDRequestOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    
