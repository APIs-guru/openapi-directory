from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class OrderServiceOfferingPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class OrderServiceOfferingRequest:
    path_params: OrderServiceOfferingPathParams = field(default=None)
    request: shared.OrderParametersServiceOffering = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class OrderServiceOffering200ApplicationJSON:
    task_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'task_id' }})
    

@dataclass
class OrderServiceOfferingResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    order_service_offering_200_application_json_object: Optional[OrderServiceOffering200ApplicationJSON] = field(default=None)
    
