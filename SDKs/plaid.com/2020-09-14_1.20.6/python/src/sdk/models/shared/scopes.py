from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Scopes:
    r"""Scopes
    The scopes object
    """
    
    accounts: Optional[List[AccountAccess]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accounts') }})
    new_accounts: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('new_accounts') }})
    product_access: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('product_access') }})
    
