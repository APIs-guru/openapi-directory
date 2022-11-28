from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ShowServicePlanPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ShowServicePlanRequest:
    path_params: ShowServicePlanPathParams = field()
    

@dataclass
class ShowServicePlanResponse:
    content_type: str = field()
    status_code: int = field()
    error_not_found: Optional[shared.ErrorNotFound] = field(default=None)
    service_plan: Optional[shared.ServicePlan] = field(default=None)
    
