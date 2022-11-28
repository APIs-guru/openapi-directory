from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PostPortfolioAnalysisDiversificationRatioRequestBodyPortfolios:
    assets_weights: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsWeights') }})
    

@dataclass_json
@dataclass
class PostPortfolioAnalysisDiversificationRatioRequestBody:
    assets: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    assets_covariance_matrix: List[List[float]] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assetsCovarianceMatrix') }})
    portfolios: List[PostPortfolioAnalysisDiversificationRatioRequestBodyPortfolios] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolios') }})
    

@dataclass_json
@dataclass
class PostPortfolioAnalysisDiversificationRatio200ApplicationJSONPortfolios:
    portfolio_diversification_ratio: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolioDiversificationRatio') }})
    

@dataclass_json
@dataclass
class PostPortfolioAnalysisDiversificationRatio200ApplicationJSON:
    portfolios: List[PostPortfolioAnalysisDiversificationRatio200ApplicationJSONPortfolios] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolios') }})
    

@dataclass
class PostPortfolioAnalysisDiversificationRatioRequest:
    request: PostPortfolioAnalysisDiversificationRatioRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostPortfolioAnalysisDiversificationRatioResponse:
    content_type: str = field()
    status_code: int = field()
    post_portfolio_analysis_diversification_ratio_200_application_json_object: Optional[PostPortfolioAnalysisDiversificationRatio200ApplicationJSON] = field(default=None)
    
