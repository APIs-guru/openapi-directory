from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import error
from . import terminalrefund


@dataclass_json
@dataclass
class CancelTerminalRefundResponse:
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    refund: Optional[terminalrefund.TerminalRefund] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refund' }})
    
