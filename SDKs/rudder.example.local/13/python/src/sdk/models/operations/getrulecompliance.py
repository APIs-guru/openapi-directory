from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetRuleCompliancePathParams:
    rule_id: str = field(default=None, metadata={'path_param': { 'field_name': 'ruleId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRuleComplianceQueryParams:
    level: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'level', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRuleComplianceRequest:
    path_params: GetRuleCompliancePathParams = field(default=None)
    query_params: GetRuleComplianceQueryParams = field(default=None)
    
class GetRuleCompliance200ApplicationJSONActionEnum(str, Enum):
    GET_RULE_COMPLIANCE = "getRuleCompliance"


@dataclass_json
@dataclass
class GetRuleCompliance200ApplicationJSONDataRulesComplianceDetails:
    error: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    no_report: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'noReport' }})
    success_already_ok: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'successAlreadyOK' }})
    success_not_applicable: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'successNotApplicable' }})
    success_repaired: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'successRepaired' }})
    unexpected_missing_component: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unexpectedMissingComponent' }})
    unexpected_unknown_component: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unexpectedUnknownComponent' }})
    
class GetRuleCompliance200ApplicationJSONDataRulesModeEnum(str, Enum):
    FULL_COMPLIANCE = "full-compliance"
    CHANGES_ONLY = "changes-only"
    REPORTS_DISABLED = "reports-disabled"


@dataclass_json
@dataclass
class GetRuleCompliance200ApplicationJSONDataRules:
    compliance: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'compliance' }})
    compliance_details: GetRuleCompliance200ApplicationJSONDataRulesComplianceDetails = field(default=None, metadata={'dataclasses_json': { 'field_name': 'complianceDetails' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    mode: GetRuleCompliance200ApplicationJSONDataRulesModeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mode' }})
    

@dataclass_json
@dataclass
class GetRuleCompliance200ApplicationJSONData:
    rules: List[GetRuleCompliance200ApplicationJSONDataRules] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rules' }})
    
class GetRuleCompliance200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class GetRuleCompliance200ApplicationJSON:
    action: GetRuleCompliance200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: GetRuleCompliance200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: GetRuleCompliance200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class GetRuleComplianceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_rule_compliance_200_application_json_object: Optional[GetRuleCompliance200ApplicationJSON] = field(default=None)
    
