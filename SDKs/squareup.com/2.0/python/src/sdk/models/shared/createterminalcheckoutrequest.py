from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import terminalcheckout


@dataclass_json
@dataclass
class CreateTerminalCheckoutRequest:
    checkout: terminalcheckout.TerminalCheckout = field(default=None, metadata={'dataclasses_json': { 'field_name': 'checkout' }})
    idempotency_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idempotency_key' }})
    
