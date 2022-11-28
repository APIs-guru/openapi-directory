from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPortfolioVideoAlt1PathParams:
    portfolio_id: float = field(metadata={'path_param': { 'field_name': 'portfolio_id', 'style': 'simple', 'explode': False }})
    video_id: float = field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPortfolioVideoAlt1Request:
    path_params: GetPortfolioVideoAlt1PathParams = field()
    

@dataclass
class GetPortfolioVideoAlt1Response:
    content_type: str = field()
    status_code: int = field()
    video: Optional[shared.Video] = field(default=None)
    
