from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import statementsviewmodelitem


@dataclass_json
@dataclass
class StatementsViewModelSearchResult:
    results: Optional[List[statementsviewmodelitem.StatementsViewModelItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    total_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalResults' }})
    
