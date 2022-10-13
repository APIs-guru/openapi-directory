from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteVideoFromPortfolioAlt1PathParams:
    portfolio_id: float = field(default=None, metadata={'path_param': { 'field_name': 'portfolio_id', 'style': 'simple', 'explode': False }})
    video_id: float = field(default=None, metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteVideoFromPortfolioAlt1Security:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteVideoFromPortfolioAlt1Request:
    path_params: DeleteVideoFromPortfolioAlt1PathParams = field(default=None)
    security: DeleteVideoFromPortfolioAlt1Security = field(default=None)
    

@dataclass
class DeleteVideoFromPortfolioAlt1Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
