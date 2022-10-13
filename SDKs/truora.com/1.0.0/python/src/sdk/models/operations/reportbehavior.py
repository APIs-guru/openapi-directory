from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class ReportBehaviorSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ReportBehaviorRequest:
    request: shared.CreateBehaviorInput = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: ReportBehaviorSecurity = field(default=None)
    

@dataclass
class ReportBehaviorResponse:
    behaviour_output: Optional[shared.BehaviourOutput] = field(default=None)
    content_type: str = field(default=None)
    errors: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
