from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ConnectedApplicationProductDataTypesEnum(str, Enum):
    ACCOUNT_BALANCE = "ACCOUNT_BALANCE"
    ACCOUNT_USER_INFO = "ACCOUNT_USER_INFO"
    ACCOUNT_TRANSACTIONS = "ACCOUNT_TRANSACTIONS"


@dataclass_json
@dataclass
class ConnectedApplication:
    r"""ConnectedApplication
    Describes the connected application for a particular end user.
    """
    
    application_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('application_id') }})
    application_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('application_url') }})
    created_at: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at') }})
    logo: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('logo') }})
    logo_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('logo_url') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    product_data_types: List[ConnectedApplicationProductDataTypesEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('product_data_types') }})
    reason_for_access: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason_for_access') }})
    requested_scopes: Optional[RequestedScopes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requested_scopes') }})
    scopes: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scopes') }})
    
