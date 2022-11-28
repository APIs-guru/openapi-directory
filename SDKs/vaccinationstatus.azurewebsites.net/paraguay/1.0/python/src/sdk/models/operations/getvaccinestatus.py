from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetVaccineStatusHeaders:
    accept: str = field(metadata={'header': { 'field_name': 'Accept', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    content_type: str = field(metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVaccineStatusRequest:
    headers: GetVaccineStatusHeaders = field()
    request: shared.VaccineStatusRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetVaccineStatusResponse:
    content_type: str = field()
    status_code: int = field()
    problem: Optional[shared.Problem] = field(default=None)
    vaccine_response: Optional[shared.VaccineResponse] = field(default=None)
    
