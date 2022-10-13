from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import terminalrefundquery


@dataclass_json
@dataclass
class SearchTerminalRefundsRequest:
    cursor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cursor' }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limit' }})
    query: Optional[terminalrefundquery.TerminalRefundQuery] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'query' }})
    
