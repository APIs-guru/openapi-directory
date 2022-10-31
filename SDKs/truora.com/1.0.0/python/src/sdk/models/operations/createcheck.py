from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class CreateCheckTruoraPriorityEnum(str, Enum):
    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"


@dataclass
class CreateCheckHeaders:
    truora_priority: Optional[CreateCheckTruoraPriorityEnum] = field(default=None, metadata={'header': { 'field_name': 'Truora-Priority', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateCheckSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CreateCheckRequest:
    headers: CreateCheckHeaders = field(default=None)
    request: shared.CreateCheckInput = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateCheckSecurity = field(default=None)
    

@dataclass
class CreateCheckResponse:
    check_output: Optional[shared.CheckOutput] = field(default=None)
    content_type: str = field(default=None)
    error: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
