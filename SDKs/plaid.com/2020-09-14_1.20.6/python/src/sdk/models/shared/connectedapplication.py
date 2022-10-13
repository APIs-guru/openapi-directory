from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import requestedscopes

class ConnectedApplicationProductDataTypesEnum(str, Enum):
    ACCOUNT_BALANCE = "ACCOUNT_BALANCE"
    ACCOUNT_USER_INFO = "ACCOUNT_USER_INFO"
    ACCOUNT_TRANSACTIONS = "ACCOUNT_TRANSACTIONS"


@dataclass_json
@dataclass
class ConnectedApplication:
    application_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'application_id' }})
    application_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'application_url' }})
    created_at: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at' }})
    logo: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logo' }})
    logo_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logo_url' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    product_data_types: List[ConnectedApplicationProductDataTypesEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product_data_types' }})
    reason_for_access: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason_for_access' }})
    requested_scopes: Optional[requestedscopes.RequestedScopes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requested_scopes' }})
    scopes: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scopes' }})
    
