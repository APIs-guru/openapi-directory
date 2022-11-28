from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class EntryLongMapStringListFhirObservation:
    key: Optional[List[EntryStringListFhirObservation]] = field(default=None)
    
