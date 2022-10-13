from dataclasses import dataclass, field
from typing import Enum,Optional

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
    country: Optional[DeleteCustomTypeCountryEnum] = field(default=None, metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    type: str = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteCustomTypeSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteCustomTypeRequest:
    query_params: DeleteCustomTypeQueryParams = field(default=None)
    security: DeleteCustomTypeSecurity = field(default=None)
    

@dataclass
class DeleteCustomTypeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
