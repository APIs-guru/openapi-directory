from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared
from sdk.models import shared


@dataclass
class EvaluateRebalanceHeaders:
    x_api_key: str = field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    
class EvaluateRebalanceSwitchInstructionRequestTypeEnum(str, Enum):
    POT = "pot"
    INVESTOR = "investor"
    PORTFOLIO = "portfolio"


@dataclass_json
@dataclass
class EvaluateRebalanceSwitchInstructionRequest:
    r"""EvaluateRebalanceSwitchInstructionRequest
    Definition of Switch instruction
    """
    
    request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    type: EvaluateRebalanceSwitchInstructionRequestTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    values: list[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    

@dataclass
class EvaluateRebalanceSecurity:
    api_secret_key: shared.SchemeAPISecretKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    
class EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequestRebalanceEligibilityStatusEnum(str, Enum):
    ELIGIBLE = "eligible"
    INELIGIBLE = "ineligible"
    NO_PORTFOLIO_ATTACHED = "no_portfolio_attached"
    NEGATIVE_HOLDINGS = "negative_holdings"
    NO_HOLDINGS = "no_holdings"


@dataclass_json
@dataclass
class EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequest:
    r"""EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequest
    Each individual pot details on the rebalance request
    """
    
    investor_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('investor_id') }})
    pot_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pot_id') }})
    rebalance_eligibility_status: EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequestRebalanceEligibilityStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rebalance_eligibility_status') }})
    portfolio_deviation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolio_deviation') }})
    portfolio_template_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('portfolio_template_id') }})
    

@dataclass_json
@dataclass
class EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPot:
    r"""EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPot
    contains array for pot details
    """
    
    evaluation_response: list[EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPotEachIndividualPotDetailsOnTheRebalanceRequest] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('evaluation_response') }})
    

@dataclass
class EvaluateRebalanceRequest:
    headers: EvaluateRebalanceHeaders = field()
    security: EvaluateRebalanceSecurity = field()
    request: Optional[EvaluateRebalanceSwitchInstructionRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class EvaluateRebalanceResponse:
    content_type: str = field()
    status_code: int = field()
    evaluate_rebalance_400_application_json_any: Optional[Any] = field(default=None)
    evaluate_rebalance_401_application_json_any: Optional[Any] = field(default=None)
    evaluate_rebalance_403_application_json_any: Optional[Any] = field(default=None)
    evaluate_rebalance_404_application_json_any: Optional[Any] = field(default=None)
    evaluate_rebalance_409_application_json_any: Optional[Any] = field(default=None)
    evaluate_rebalance_429_application_json_any: Optional[Any] = field(default=None)
    evaluate_rebalance_500_application_json_any: Optional[Any] = field(default=None)
    this_is_the_return_object_with_evaluation_per_pot: Optional[EvaluateRebalanceThisIsTheReturnObjectWithEvaluationPerPot] = field(default=None)
    
