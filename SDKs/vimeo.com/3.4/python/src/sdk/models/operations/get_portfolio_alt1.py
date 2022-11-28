from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPortfolioAlt1PathParams:
    portfolio_id: float = field(metadata={'path_param': { 'field_name': 'portfolio_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPortfolioAlt1Request:
    path_params: GetPortfolioAlt1PathParams = field()
    

@dataclass
class GetPortfolioAlt1Response:
    content_type: str = field()
    status_code: int = field()
    portfolio: Optional[shared.Portfolio] = field(default=None)
    
