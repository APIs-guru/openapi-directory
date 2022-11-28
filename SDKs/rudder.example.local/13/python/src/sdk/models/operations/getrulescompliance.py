from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetRulesComplianceQueryParams:
    level: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'level', 'style': 'form', 'explode': True }})
    
class GetRulesCompliance200ApplicationJSONActionEnum(str, Enum):
    GET_RULES_COMPLIANCE = "getRulesCompliance"


@dataclass_json
@dataclass
class GetRulesCompliance200ApplicationJSONDataRulesComplianceDetails:
    error: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    no_report: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('noReport') }})
    success_already_ok: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successAlreadyOK') }})
    success_not_applicable: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successNotApplicable') }})
    success_repaired: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successRepaired') }})
    unexpected_missing_component: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unexpectedMissingComponent') }})
    unexpected_unknown_component: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unexpectedUnknownComponent') }})
    
class GetRulesCompliance200ApplicationJSONDataRulesModeEnum(str, Enum):
    FULL_COMPLIANCE = "full-compliance"
    CHANGES_ONLY = "changes-only"
    REPORTS_DISABLED = "reports-disabled"


@dataclass_json
@dataclass
class GetRulesCompliance200ApplicationJSONDataRules:
    compliance: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('compliance') }})
    compliance_details: GetRulesCompliance200ApplicationJSONDataRulesComplianceDetails = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('complianceDetails') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    mode: GetRulesCompliance200ApplicationJSONDataRulesModeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    

@dataclass_json
@dataclass
class GetRulesCompliance200ApplicationJSONData:
    rules: List[GetRulesCompliance200ApplicationJSONDataRules] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    
class GetRulesCompliance200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class GetRulesCompliance200ApplicationJSON:
    action: GetRulesCompliance200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: GetRulesCompliance200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: GetRulesCompliance200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class GetRulesComplianceRequest:
    query_params: GetRulesComplianceQueryParams = field()
    

@dataclass
class GetRulesComplianceResponse:
    content_type: str = field()
    status_code: int = field()
    get_rules_compliance_200_application_json_object: Optional[GetRulesCompliance200ApplicationJSON] = field(default=None)
    
