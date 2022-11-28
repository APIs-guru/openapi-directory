from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ShowServiceOfferingPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ShowServiceOfferingRequest:
    path_params: ShowServiceOfferingPathParams = field()
    

@dataclass
class ShowServiceOfferingResponse:
    content_type: str = field()
    status_code: int = field()
    error_not_found: Optional[shared.ErrorNotFound] = field(default=None)
    service_offering: Optional[shared.ServiceOffering] = field(default=None)
    
