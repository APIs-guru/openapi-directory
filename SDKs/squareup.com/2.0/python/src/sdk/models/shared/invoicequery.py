from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import invoicefilter
from . import invoicesort


@dataclass_json
@dataclass
class InvoiceQuery:
    filter: invoicefilter.InvoiceFilter = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filter' }})
    sort: Optional[invoicesort.InvoiceSort] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sort' }})
    
