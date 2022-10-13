from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import accountaccess


@dataclass_json
@dataclass
class Scopes:
    accounts: Optional[List[accountaccess.AccountAccess]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accounts' }})
    new_accounts: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'new_accounts' }})
    product_access: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product_access' }})
    
