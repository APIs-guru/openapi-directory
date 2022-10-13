from dataclasses import dataclass, field
from typing import Any,Enum,Optional

class CanceledMembershipsFormatEnum(str, Enum):
    XML = "xml"
    JSON = "json"


@dataclass
class CanceledMembershipsPathParams:
    format: CanceledMembershipsFormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class CanceledMembershipsRequest:
    path_params: CanceledMembershipsPathParams = field(default=None)
    

@dataclass
class CanceledMembershipsResponse:
    canceled_membership: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
