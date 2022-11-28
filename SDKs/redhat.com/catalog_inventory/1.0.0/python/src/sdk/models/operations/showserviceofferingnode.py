from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ShowServiceOfferingNodePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ShowServiceOfferingNodeRequest:
    path_params: ShowServiceOfferingNodePathParams = field()
    

@dataclass
class ShowServiceOfferingNodeResponse:
    content_type: str = field()
    status_code: int = field()
    error_not_found: Optional[shared.ErrorNotFound] = field(default=None)
    service_offering_node: Optional[shared.ServiceOfferingNode] = field(default=None)
    
