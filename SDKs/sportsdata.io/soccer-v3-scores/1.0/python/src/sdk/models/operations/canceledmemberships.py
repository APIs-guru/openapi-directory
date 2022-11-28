from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum

class CanceledMembershipsFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class CanceledMembershipsPathParams:
    format: CanceledMembershipsFormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class CanceledMembershipsRequest:
    path_params: CanceledMembershipsPathParams = field()
    

@dataclass
class CanceledMembershipsResponse:
    content_type: str = field()
    status_code: int = field()
    canceled_membership: Optional[Any] = field(default=None)
    
