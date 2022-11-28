from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class FhirObservationPage:
    data: Optional[List[EntryLongMapStringListFhirObservation]] = field(default=None)
    total_elements: Optional[int] = field(default=None)
    total_pages: Optional[int] = field(default=None)
    
