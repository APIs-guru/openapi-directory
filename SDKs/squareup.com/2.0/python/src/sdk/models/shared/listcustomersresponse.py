from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import customer
from . import error


@dataclass_json
@dataclass
class ListCustomersResponse:
    cursor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cursor' }})
    customers: Optional[List[customer.Customer]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customers' }})
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    
