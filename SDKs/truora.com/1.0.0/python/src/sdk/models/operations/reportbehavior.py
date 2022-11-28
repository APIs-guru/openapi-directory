from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class ReportBehaviorSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ReportBehaviorRequest:
    request: shared.CreateBehaviorInput = field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: ReportBehaviorSecurity = field()
    

@dataclass
class ReportBehaviorResponse:
    content_type: str = field()
    status_code: int = field()
    behaviour_output: Optional[shared.BehaviourOutput] = field(default=None)
    errors: Optional[List[Any]] = field(default=None)
    
