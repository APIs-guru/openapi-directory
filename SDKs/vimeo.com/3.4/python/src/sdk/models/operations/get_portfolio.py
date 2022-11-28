from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPortfolioPathParams:
    portfolio_id: float = field(metadata={'path_param': { 'field_name': 'portfolio_id', 'style': 'simple', 'explode': False }})
    user_id: float = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPortfolioRequest:
    path_params: GetPortfolioPathParams = field()
    

@dataclass
class GetPortfolioResponse:
    content_type: str = field()
    status_code: int = field()
    portfolio: Optional[shared.Portfolio] = field(default=None)
    
