from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SandboxPublicTokenCreateRequest:
    r"""SandboxPublicTokenCreateRequest
    SandboxPublicTokenCreateRequest defines the request schema for `/sandbox/public_token/create`
    """
    
    initial_products: List[ProductsEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('initial_products') }})
    institution_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('institution_id') }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    options: Optional[SandboxPublicTokenCreateRequestOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    
