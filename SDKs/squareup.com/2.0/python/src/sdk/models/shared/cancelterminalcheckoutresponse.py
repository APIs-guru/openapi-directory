from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import terminalcheckout
from . import error


@dataclass_json
@dataclass
class CancelTerminalCheckoutResponse:
    checkout: Optional[terminalcheckout.TerminalCheckout] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'checkout' }})
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    
