from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import error
from . import invoice


@dataclass_json
@dataclass
class SearchInvoicesResponse:
    cursor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cursor' }})
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    invoices: Optional[List[invoice.Invoice]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invoices' }})
    
