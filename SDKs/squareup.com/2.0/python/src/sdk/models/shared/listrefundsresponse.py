from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import error
from . import refund


@dataclass_json
@dataclass
class ListRefundsResponse:
    cursor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cursor' }})
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    refunds: Optional[List[refund.Refund]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refunds' }})
    
