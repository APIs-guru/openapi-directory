from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import checkout
from . import error


@dataclass_json
@dataclass
class CreateCheckoutResponse:
    checkout: Optional[checkout.Checkout] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'checkout' }})
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    
