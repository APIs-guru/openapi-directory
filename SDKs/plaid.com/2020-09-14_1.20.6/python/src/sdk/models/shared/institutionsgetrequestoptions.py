from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InstitutionsGetRequestOptions:
    r"""InstitutionsGetRequestOptions
    An optional object to filter `/institutions/get` results.
    """
    
    include_optional_metadata: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('include_optional_metadata') }})
    include_payment_initiation_metadata: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('include_payment_initiation_metadata') }})
    oauth: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oauth') }})
    products: Optional[List[ProductsEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('products') }})
    routing_numbers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routing_numbers') }})
    
