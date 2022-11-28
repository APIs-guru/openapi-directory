from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PostPortfolioAnalysisFactorExposuresRequestBodyFactors:
    factor_returns: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('factorReturns') }})
    

@dataclass_json
@dataclass
class PostPortfolioAnalysisFactorExposuresRequestBodyPortfolios:
    portfolio_returns: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolioReturns') }})
    

@dataclass_json
@dataclass
class PostPortfolioAnalysisFactorExposuresRequestBody:
    portfolios: List[PostPortfolioAnalysisFactorExposuresRequestBodyPortfolios] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolios') }})
    factors: Optional[List[PostPortfolioAnalysisFactorExposuresRequestBodyFactors]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('factors') }})
    

@dataclass_json
@dataclass
class PostPortfolioAnalysisFactorExposures200ApplicationJSONPortfolios:
    portfolio_alpha: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolioAlpha') }})
    portfolio_betas: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolioBetas') }})
    portfolio_r_squared: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolioRSquared') }})
    

@dataclass_json
@dataclass
class PostPortfolioAnalysisFactorExposures200ApplicationJSON:
    portfolios: List[PostPortfolioAnalysisFactorExposures200ApplicationJSONPortfolios] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolios') }})
    

@dataclass
class PostPortfolioAnalysisFactorExposuresRequest:
    request: PostPortfolioAnalysisFactorExposuresRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostPortfolioAnalysisFactorExposuresResponse:
    content_type: str = field()
    status_code: int = field()
    post_portfolio_analysis_factor_exposures_200_application_json_object: Optional[PostPortfolioAnalysisFactorExposures200ApplicationJSON] = field(default=None)
    
