from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetVaccineStatusHeaders:
    accept: str = field(default=None, metadata={'header': { 'field_name': 'Accept' }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    content_type: str = field(default=None, metadata={'header': { 'field_name': 'Content-Type' }})
    

@dataclass
class GetVaccineStatusRequest:
    headers: GetVaccineStatusHeaders = field(default=None)
    request: shared.VaccineStatusRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetVaccineStatusResponse:
    content_type: str = field(default=None)
    problem: Optional[shared.Problem] = field(default=None)
    status_code: int = field(default=None)
    vaccine_response: Optional[shared.VaccineResponse] = field(default=None)
    
