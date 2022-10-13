from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import dutysummaryinfo


@dataclass_json
@dataclass
class TeamDutySummaryInfo:
    duty_assist_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dutyAssistEnabled' }})
    duty_summaries: Optional[List[dutysummaryinfo.DutySummaryInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dutySummaries' }})
    
