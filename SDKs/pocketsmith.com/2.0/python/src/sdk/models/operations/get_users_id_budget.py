from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetUsersIDBudgetPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUsersIDBudgetQueryParams:
    roll_up: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'roll_up', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUsersIDBudgetRequest:
    path_params: GetUsersIDBudgetPathParams = field(default=None)
    query_params: GetUsersIDBudgetQueryParams = field(default=None)
    

@dataclass
class GetUsersIDBudgetResponse:
    budget_analysis_packages: Optional[List[shared.BudgetAnalysisPackage]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
