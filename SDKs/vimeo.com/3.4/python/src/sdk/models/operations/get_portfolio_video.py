from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPortfolioVideoPathParams:
    portfolio_id: float = field(default=None, metadata={'path_param': { 'field_name': 'portfolio_id', 'style': 'simple', 'explode': False }})
    user_id: float = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    video_id: float = field(default=None, metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPortfolioVideoRequest:
    path_params: GetPortfolioVideoPathParams = field(default=None)
    

@dataclass
class GetPortfolioVideoResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    video: Optional[shared.Video] = field(default=None)
    
