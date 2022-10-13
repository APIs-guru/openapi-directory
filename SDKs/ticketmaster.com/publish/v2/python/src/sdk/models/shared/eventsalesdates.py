from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import presale
from . import publicsaledates


@dataclass_json
@dataclass
class EventSalesDates:
    presales: Optional[List[presale.Presale]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'presales' }})
    public: Optional[publicsaledates.PublicSaleDates] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'public' }})
    
