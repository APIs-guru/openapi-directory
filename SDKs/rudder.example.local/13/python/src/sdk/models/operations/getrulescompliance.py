from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetRulesComplianceQueryParams:
    level: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'level', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRulesComplianceRequest:
    query_params: GetRulesComplianceQueryParams = field(default=None)
    
class GetRulesCompliance200ApplicationJSONActionEnum(str, Enum):
    GET_RULES_COMPLIANCE = "getRulesCompliance"


@dataclass_json
@dataclass
class GetRulesCompliance200ApplicationJSONDataRulesComplianceDetails:
    error: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    no_report: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'noReport' }})
    success_already_ok: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'successAlreadyOK' }})
    success_not_applicable: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'successNotApplicable' }})
    success_repaired: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'successRepaired' }})
    unexpected_missing_component: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unexpectedMissingComponent' }})
    unexpected_unknown_component: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unexpectedUnknownComponent' }})
    
class GetRulesCompliance200ApplicationJSONDataRulesModeEnum(str, Enum):
    FULL_COMPLIANCE = "full-compliance"
    CHANGES_ONLY = "changes-only"
    REPORTS_DISABLED = "reports-disabled"


@dataclass_json
@dataclass
class GetRulesCompliance200ApplicationJSONDataRules:
    compliance: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'compliance' }})
    compliance_details: GetRulesCompliance200ApplicationJSONDataRulesComplianceDetails = field(default=None, metadata={'dataclasses_json': { 'field_name': 'complianceDetails' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    mode: GetRulesCompliance200ApplicationJSONDataRulesModeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mode' }})
    

@dataclass_json
@dataclass
class GetRulesCompliance200ApplicationJSONData:
    rules: List[GetRulesCompliance200ApplicationJSONDataRules] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rules' }})
    
class GetRulesCompliance200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class GetRulesCompliance200ApplicationJSON:
    action: GetRulesCompliance200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: GetRulesCompliance200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: GetRulesCompliance200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class GetRulesComplianceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_rules_compliance_200_application_json_object: Optional[GetRulesCompliance200ApplicationJSON] = field(default=None)
    
