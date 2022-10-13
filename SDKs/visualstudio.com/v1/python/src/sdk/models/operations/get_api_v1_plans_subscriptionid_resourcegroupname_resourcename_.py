from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetAPIV1PlansSubscriptionIDResourceGroupNameResourceNamePathParams:
    resource_group_name: str = field(default=None, metadata={'path_param': { 'field_name': 'resourceGroupName', 'style': 'simple', 'explode': False }})
    resource_name: str = field(default=None, metadata={'path_param': { 'field_name': 'resourceName', 'style': 'simple', 'explode': False }})
    subscription_id: str = field(default=None, metadata={'path_param': { 'field_name': 'subscriptionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIV1PlansSubscriptionIDResourceGroupNameResourceNameRequest:
    path_params: GetAPIV1PlansSubscriptionIDResourceGroupNameResourceNamePathParams = field(default=None)
    

@dataclass
class GetAPIV1PlansSubscriptionIDResourceGroupNameResourceNameResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    plan_result: Optional[shared.PlanResult] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
