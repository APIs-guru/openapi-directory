from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetPriceguideIDTransactionsSummaryPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPriceguideIDTransactionsSummaryQueryParams:
    condition: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'condition', 'style': 'form', 'explode': True }})
    number_of_months: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'number_of_months', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPriceguideIDTransactionsSummaryRequest:
    path_params: GetPriceguideIDTransactionsSummaryPathParams = field(default=None)
    query_params: GetPriceguideIDTransactionsSummaryQueryParams = field(default=None)
    

@dataclass
class GetPriceguideIDTransactionsSummaryResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
