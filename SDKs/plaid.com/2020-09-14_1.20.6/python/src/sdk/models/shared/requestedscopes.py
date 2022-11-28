from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RequestedScopes:
    r"""RequestedScopes
    Scope of required and optional account features or content from a ConnectedApplication.
    """
    
    account_selection_cardinality: AccountSelectionCardinalityEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_selection_cardinality') }})
    optional_product_access: dict[str, Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('optional_product_access') }})
    required_product_access: dict[str, Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('required_product_access') }})
    account_filters: Optional[AccountFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_filters') }})
    
