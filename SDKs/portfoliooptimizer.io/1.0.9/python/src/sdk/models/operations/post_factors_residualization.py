from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PostFactorsResidualizationRequestBodyFactors:
    factor_returns: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'factorReturns' }})
    

@dataclass_json
@dataclass
class PostFactorsResidualizationRequestBody:
    factors: List[PostFactorsResidualizationRequestBodyFactors] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'factors' }})
    residualized_factor: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'residualizedFactor' }})
    

@dataclass
class PostFactorsResidualizationRequest:
    request: PostFactorsResidualizationRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostFactorsResidualization200ApplicationJSON:
    residualized_factor_returns: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'residualizedFactorReturns' }})
    

@dataclass
class PostFactorsResidualizationResponse:
    content_type: str = field(default=None)
    post_factors_residualization_200_application_json_object: Optional[PostFactorsResidualization200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
