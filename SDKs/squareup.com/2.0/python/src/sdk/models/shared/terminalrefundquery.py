from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import terminalrefundqueryfilter
from . import terminalrefundquerysort


@dataclass_json
@dataclass
class TerminalRefundQuery:
    filter: Optional[terminalrefundqueryfilter.TerminalRefundQueryFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filter' }})
    sort: Optional[terminalrefundquerysort.TerminalRefundQuerySort] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sort' }})
    
