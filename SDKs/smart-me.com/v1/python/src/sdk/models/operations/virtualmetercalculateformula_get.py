from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class VirtualMeterCalculateFormulaGetQueryParams:
    formula: str = field(metadata={'query_param': { 'field_name': 'formula', 'style': 'form', 'explode': True }})
    

@dataclass
class VirtualMeterCalculateFormulaGetRequest:
    query_params: VirtualMeterCalculateFormulaGetQueryParams = field()
    

@dataclass
class VirtualMeterCalculateFormulaGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    device: Optional[shared.Device] = field(default=None)
    
