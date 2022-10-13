from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PostPortfolioAnalysisDiversificationRatioRequestBodyPortfolios:
    assets_weights: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetsWeights' }})
    

@dataclass_json
@dataclass
class PostPortfolioAnalysisDiversificationRatioRequestBody:
    assets: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assets' }})
    assets_covariance_matrix: List[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetsCovarianceMatrix' }})
    portfolios: List[PostPortfolioAnalysisDiversificationRatioRequestBodyPortfolios] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portfolios' }})
    

@dataclass
class PostPortfolioAnalysisDiversificationRatioRequest:
    request: PostPortfolioAnalysisDiversificationRatioRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostPortfolioAnalysisDiversificationRatio200ApplicationJSONPortfolios:
    portfolio_diversification_ratio: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portfolioDiversificationRatio' }})
    

@dataclass_json
@dataclass
class PostPortfolioAnalysisDiversificationRatio200ApplicationJSON:
    portfolios: List[PostPortfolioAnalysisDiversificationRatio200ApplicationJSONPortfolios] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portfolios' }})
    

@dataclass
class PostPortfolioAnalysisDiversificationRatioResponse:
    content_type: str = field(default=None)
    post_portfolio_analysis_diversification_ratio_200_application_json_object: Optional[PostPortfolioAnalysisDiversificationRatio200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
