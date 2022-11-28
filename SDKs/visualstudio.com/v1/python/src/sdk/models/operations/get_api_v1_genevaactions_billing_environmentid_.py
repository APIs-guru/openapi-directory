from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetAPIV1GenevaActionsBillingEnvironmentIDPathParams:
    environment_id: str = field(metadata={'path_param': { 'field_name': 'environmentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIV1GenevaActionsBillingEnvironmentIDQueryParams:
    end_time: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'endTime', 'style': 'form', 'explode': True }})
    start_time: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'startTime', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIV1GenevaActionsBillingEnvironmentIDRequest:
    path_params: GetAPIV1GenevaActionsBillingEnvironmentIDPathParams = field()
    query_params: GetAPIV1GenevaActionsBillingEnvironmentIDQueryParams = field()
    

@dataclass
class GetAPIV1GenevaActionsBillingEnvironmentIDResponse:
    content_type: str = field()
    status_code: int = field()
    bill_summary: Optional[shared.BillSummary] = field(default=None)
    body: Optional[bytes] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
