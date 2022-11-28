from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared

class DisruptionsGetAllDisruptionsDisruptionStatusEnum(str, Enum):
    CURRENT = "current"
    PLANNED = "planned"


@dataclass
class DisruptionsGetAllDisruptionsQueryParams:
    devid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'devid', 'style': 'form', 'explode': True }})
    disruption_modes: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'disruption_modes', 'style': 'form', 'explode': True }})
    disruption_status: Optional[DisruptionsGetAllDisruptionsDisruptionStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'disruption_status', 'style': 'form', 'explode': True }})
    route_types: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'route_types', 'style': 'form', 'explode': True }})
    signature: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'signature', 'style': 'form', 'explode': True }})
    token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclass
class DisruptionsGetAllDisruptionsRequest:
    query_params: DisruptionsGetAllDisruptionsQueryParams = field()
    

@dataclass
class DisruptionsGetAllDisruptionsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    v3_disruptions_response: Optional[shared.V3DisruptionsResponse] = field(default=None)
    v3_error_response: Optional[shared.V3ErrorResponse] = field(default=None)
    
