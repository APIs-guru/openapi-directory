from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class VirtualMeterCalculateFormulaGetQueryParams:
    formula: str = field(default=None, metadata={'query_param': { 'field_name': 'formula', 'style': 'form', 'explode': True }})
    

@dataclass
class VirtualMeterCalculateFormulaGetRequest:
    query_params: VirtualMeterCalculateFormulaGetQueryParams = field(default=None)
    

@dataclass
class VirtualMeterCalculateFormulaGetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    device: Optional[shared.Device] = field(default=None)
    status_code: int = field(default=None)
    
