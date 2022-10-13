from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class InstitutionsGetByIDRequestOptions:
    include_optional_metadata: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'include_optional_metadata' }})
    include_payment_initiation_metadata: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'include_payment_initiation_metadata' }})
    include_status: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'include_status' }})
    
