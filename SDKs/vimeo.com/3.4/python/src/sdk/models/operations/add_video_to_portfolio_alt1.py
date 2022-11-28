from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AddVideoToPortfolioAlt1PathParams:
    portfolio_id: float = field(metadata={'path_param': { 'field_name': 'portfolio_id', 'style': 'simple', 'explode': False }})
    video_id: float = field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddVideoToPortfolioAlt1Security:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddVideoToPortfolioAlt1Request:
    path_params: AddVideoToPortfolioAlt1PathParams = field()
    security: AddVideoToPortfolioAlt1Security = field()
    

@dataclass
class AddVideoToPortfolioAlt1Response:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
