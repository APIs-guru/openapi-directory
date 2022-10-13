from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PostPortfolioAnalysisFactorExposuresRequestBodyFactors:
    factor_returns: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'factorReturns' }})
    

@dataclass_json
@dataclass
class PostPortfolioAnalysisFactorExposuresRequestBodyPortfolios:
    portfolio_returns: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portfolioReturns' }})
    

@dataclass_json
@dataclass
class PostPortfolioAnalysisFactorExposuresRequestBody:
    factors: Optional[List[PostPortfolioAnalysisFactorExposuresRequestBodyFactors]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'factors' }})
    portfolios: List[PostPortfolioAnalysisFactorExposuresRequestBodyPortfolios] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portfolios' }})
    

@dataclass
class PostPortfolioAnalysisFactorExposuresRequest:
    request: PostPortfolioAnalysisFactorExposuresRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostPortfolioAnalysisFactorExposures200ApplicationJSONPortfolios:
    portfolio_alpha: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portfolioAlpha' }})
    portfolio_betas: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portfolioBetas' }})
    portfolio_r_squared: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portfolioRSquared' }})
    

@dataclass_json
@dataclass
class PostPortfolioAnalysisFactorExposures200ApplicationJSON:
    portfolios: List[PostPortfolioAnalysisFactorExposures200ApplicationJSONPortfolios] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portfolios' }})
    

@dataclass
class PostPortfolioAnalysisFactorExposuresResponse:
    content_type: str = field(default=None)
    post_portfolio_analysis_factor_exposures_200_application_json_object: Optional[PostPortfolioAnalysisFactorExposures200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
