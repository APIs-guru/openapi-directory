from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import terminalrefund


@dataclass_json
@dataclass
class CreateTerminalRefundRequest:
    idempotency_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idempotency_key' }})
    refund: Optional[terminalrefund.TerminalRefund] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refund' }})
    
