from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetPriceguideIDTransactionsSummaryPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPriceguideIDTransactionsSummaryQueryParams:
    condition: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'condition', 'style': 'form', 'explode': True }})
    number_of_months: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'number_of_months', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPriceguideIDTransactionsSummaryRequest:
    path_params: GetPriceguideIDTransactionsSummaryPathParams = field()
    query_params: GetPriceguideIDTransactionsSummaryQueryParams = field()
    

@dataclass
class GetPriceguideIDTransactionsSummaryResponse:
    content_type: str = field()
    status_code: int = field()
    
