from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class OrderServiceOfferingPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class OrderServiceOffering200ApplicationJSON:
    task_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('task_id') }})
    

@dataclass
class OrderServiceOfferingRequest:
    path_params: OrderServiceOfferingPathParams = field()
    request: shared.OrderParametersServiceOfferingInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class OrderServiceOfferingResponse:
    content_type: str = field()
    status_code: int = field()
    order_service_offering_200_application_json_object: Optional[OrderServiceOffering200ApplicationJSON] = field(default=None)
    
