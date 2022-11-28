from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ItemImportRequest:
    r"""ItemImportRequest
    ItemImportRequest defines the request schema for `/item/import`
    """
    
    products: List[ProductsEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('products') }})
    user_auth: ItemImportRequestUserAuth = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_auth') }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    options: Optional[ItemImportRequestOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    
