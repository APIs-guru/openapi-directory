from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import error
from . import refund


@dataclass_json
@dataclass
class CreateRefundResponse:
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    refund: Optional[refund.Refund] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refund' }})
    
