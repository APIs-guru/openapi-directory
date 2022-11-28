from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared

class DeleteCustomTypeCountryEnum(str, Enum):
    BR = "BR"
    CL = "CL"
    CO = "CO"
    CR = "CR"
    EC = "EC"
    MX = "MX"
    PE = "PE"
    ALL = "ALL"


@dataclass
class DeleteCustomTypeQueryParams:
    type: str = field(metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    country: Optional[DeleteCustomTypeCountryEnum] = field(default=None, metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteCustomTypeSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteCustomTypeRequest:
    query_params: DeleteCustomTypeQueryParams = field()
    security: DeleteCustomTypeSecurity = field()
    

@dataclass
class DeleteCustomTypeResponse:
    content_type: str = field()
    status_code: int = field()
    
