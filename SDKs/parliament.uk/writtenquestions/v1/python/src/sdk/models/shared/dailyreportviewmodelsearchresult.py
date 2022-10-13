from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import dailyreportviewmodelitem


@dataclass_json
@dataclass
class DailyReportViewModelSearchResult:
    results: Optional[List[dailyreportviewmodelitem.DailyReportViewModelItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    total_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalResults' }})
    
