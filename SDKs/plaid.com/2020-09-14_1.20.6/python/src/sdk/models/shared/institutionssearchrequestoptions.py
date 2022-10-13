from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class InstitutionsSearchRequestOptions:
    include_optional_metadata: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'include_optional_metadata' }})
    include_payment_initiation_metadata: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'include_payment_initiation_metadata' }})
    oauth: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oauth' }})
    payment_initiation: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payment_initiation' }})
    
