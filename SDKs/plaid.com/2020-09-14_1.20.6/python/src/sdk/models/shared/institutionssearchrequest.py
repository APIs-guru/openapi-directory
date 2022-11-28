from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InstitutionsSearchRequest:
    r"""InstitutionsSearchRequest
    InstitutionsSearchRequest defines the request schema for `/institutions/search`
    """
    
    country_codes: List[CountryCodeEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('country_codes') }})
    products: List[ProductsEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('products') }})
    query: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('query') }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    options: Optional[InstitutionsSearchRequestOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    
