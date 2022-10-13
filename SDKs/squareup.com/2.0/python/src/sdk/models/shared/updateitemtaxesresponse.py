from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import error


@dataclass_json
@dataclass
class UpdateItemTaxesResponse:
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    updated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at' }})
    
