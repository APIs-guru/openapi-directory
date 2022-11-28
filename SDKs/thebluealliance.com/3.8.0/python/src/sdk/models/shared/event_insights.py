from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EventInsights:
    r"""EventInsights
    A year-specific event insight object expressed as a JSON string, separated in to `qual` and `playoff` fields. See also Event_Insights_2016, Event_Insights_2017, etc.
    """
    
    playoff: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playoff') }})
    qual: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('qual') }})
    
