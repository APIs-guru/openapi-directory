from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import error
from . import invoice


@dataclass_json
@dataclass
class CreateInvoiceResponse:
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    invoice: Optional[invoice.Invoice] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invoice' }})
    
