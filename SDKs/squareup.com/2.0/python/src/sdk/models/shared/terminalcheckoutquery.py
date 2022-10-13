from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import terminalcheckoutqueryfilter
from . import terminalcheckoutquerysort


@dataclass_json
@dataclass
class TerminalCheckoutQuery:
    filter: Optional[terminalcheckoutqueryfilter.TerminalCheckoutQueryFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filter' }})
    sort: Optional[terminalcheckoutquerysort.TerminalCheckoutQuerySort] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sort' }})
    
