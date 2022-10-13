from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ShowServicePlanPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ShowServicePlanRequest:
    path_params: ShowServicePlanPathParams = field(default=None)
    

@dataclass
class ShowServicePlanResponse:
    content_type: str = field(default=None)
    error_not_found: Optional[shared.ErrorNotFound] = field(default=None)
    service_plan: Optional[shared.ServicePlan] = field(default=None)
    status_code: int = field(default=None)
    
