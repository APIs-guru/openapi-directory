from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetUsersIDBudgetPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUsersIDBudgetQueryParams:
    roll_up: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'roll_up', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUsersIDBudgetRequest:
    path_params: GetUsersIDBudgetPathParams = field()
    query_params: GetUsersIDBudgetQueryParams = field()
    

@dataclass
class GetUsersIDBudgetResponse:
    content_type: str = field()
    status_code: int = field()
    budget_analysis_packages: Optional[List[shared.BudgetAnalysisPackage]] = field(default=None)
    
