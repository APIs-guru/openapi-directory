from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from . import accountfilter
from . import accountselectioncardinality_enum


@dataclass_json
@dataclass
class RequestedScopes:
    account_filters: Optional[accountfilter.AccountFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_filters' }})
    account_selection_cardinality: accountselectioncardinality_enum.AccountSelectionCardinalityEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_selection_cardinality' }})
    optional_product_access: dict[str, Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'optional_product_access' }})
    required_product_access: dict[str, Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'required_product_access' }})
    
