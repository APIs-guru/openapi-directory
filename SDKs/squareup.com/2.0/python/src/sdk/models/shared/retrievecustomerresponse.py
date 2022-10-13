from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import customer
from . import error


@dataclass_json
@dataclass
class RetrieveCustomerResponse:
    customer: Optional[customer.Customer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customer' }})
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    
