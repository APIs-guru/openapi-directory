from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import terminalcheckoutquery


@dataclass_json
@dataclass
class SearchTerminalCheckoutsRequest:
    cursor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cursor' }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limit' }})
    query: Optional[terminalcheckoutquery.TerminalCheckoutQuery] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'query' }})
    
