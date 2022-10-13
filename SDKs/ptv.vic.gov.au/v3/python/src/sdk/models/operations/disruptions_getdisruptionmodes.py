from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DisruptionsGetDisruptionModesQueryParams:
    devid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'devid', 'style': 'form', 'explode': True }})
    signature: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'signature', 'style': 'form', 'explode': True }})
    token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclass
class DisruptionsGetDisruptionModesRequest:
    query_params: DisruptionsGetDisruptionModesQueryParams = field(default=None)
    

@dataclass
class DisruptionsGetDisruptionModesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    v3_disruption_modes_response: Optional[shared.V3DisruptionModesResponse] = field(default=None)
    v3_error_response: Optional[shared.V3ErrorResponse] = field(default=None)
    
