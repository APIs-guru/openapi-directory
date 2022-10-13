from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DisruptionsGetDisruptionByIDPathParams:
    disruption_id: int = field(default=None, metadata={'path_param': { 'field_name': 'disruption_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DisruptionsGetDisruptionByIDQueryParams:
    devid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'devid', 'style': 'form', 'explode': True }})
    signature: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'signature', 'style': 'form', 'explode': True }})
    token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclass
class DisruptionsGetDisruptionByIDRequest:
    path_params: DisruptionsGetDisruptionByIDPathParams = field(default=None)
    query_params: DisruptionsGetDisruptionByIDQueryParams = field(default=None)
    

@dataclass
class DisruptionsGetDisruptionByIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    v3_disruption_response: Optional[shared.V3DisruptionResponse] = field(default=None)
    v3_error_response: Optional[shared.V3ErrorResponse] = field(default=None)
    
