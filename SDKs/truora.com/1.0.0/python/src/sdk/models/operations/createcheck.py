from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
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
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CreateCheckRequest:
    headers: CreateCheckHeaders = field()
    request: shared.CreateCheckInput = field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateCheckSecurity = field()
    

@dataclass
class CreateCheckResponse:
    content_type: str = field()
    status_code: int = field()
    check_output: Optional[shared.CheckOutput] = field(default=None)
    error: Optional[Any] = field(default=None)
    
