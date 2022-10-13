from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ShowServiceOfferingPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ShowServiceOfferingRequest:
    path_params: ShowServiceOfferingPathParams = field(default=None)
    

@dataclass
class ShowServiceOfferingResponse:
    content_type: str = field(default=None)
    error_not_found: Optional[shared.ErrorNotFound] = field(default=None)
    service_offering: Optional[shared.ServiceOffering] = field(default=None)
    status_code: int = field(default=None)
    
