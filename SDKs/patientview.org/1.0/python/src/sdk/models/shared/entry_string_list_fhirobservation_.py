from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class EntryStringListFhirObservation:
    key: Optional[List[FhirObservation]] = field(default=None)
    
