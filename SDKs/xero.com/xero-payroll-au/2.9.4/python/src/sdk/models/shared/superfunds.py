from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import superfund


@dataclass_json
@dataclass
class SuperFunds:
    super_funds: Optional[List[superfund.SuperFund]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SuperFunds' }})
    
