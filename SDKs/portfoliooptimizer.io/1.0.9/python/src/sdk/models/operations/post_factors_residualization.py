from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PostFactorsResidualizationRequestBodyFactors:
    factor_returns: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('factorReturns') }})
    

@dataclass_json
@dataclass
class PostFactorsResidualizationRequestBody:
    factors: List[PostFactorsResidualizationRequestBodyFactors] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('factors') }})
    residualized_factor: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('residualizedFactor') }})
    

@dataclass_json
@dataclass
class PostFactorsResidualization200ApplicationJSON:
    residualized_factor_returns: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('residualizedFactorReturns') }})
    

@dataclass
class PostFactorsResidualizationRequest:
    request: PostFactorsResidualizationRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostFactorsResidualizationResponse:
    content_type: str = field()
    status_code: int = field()
    post_factors_residualization_200_application_json_object: Optional[PostFactorsResidualization200ApplicationJSON] = field(default=None)
    
