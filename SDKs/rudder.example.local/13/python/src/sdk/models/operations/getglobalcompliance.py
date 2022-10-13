from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GetGlobalCompliance200ApplicationJSONActionEnum(str, Enum):
    GET_GLOBAL_COMPLIANCE = "getGlobalCompliance"


@dataclass_json
@dataclass
class GetGlobalCompliance200ApplicationJSONDataGlobalComplianceComplianceDetails:
    error: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    no_report: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'noReport' }})
    success_already_ok: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'successAlreadyOK' }})
    success_not_applicable: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'successNotApplicable' }})
    success_repaired: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'successRepaired' }})
    unexpected_missing_component: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unexpectedMissingComponent' }})
    unexpected_unknown_component: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unexpectedUnknownComponent' }})
    

@dataclass_json
@dataclass
class GetGlobalCompliance200ApplicationJSONDataGlobalCompliance:
    compliance: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'compliance' }})
    compliance_details: Optional[GetGlobalCompliance200ApplicationJSONDataGlobalComplianceComplianceDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'complianceDetails' }})
    

@dataclass_json
@dataclass
class GetGlobalCompliance200ApplicationJSONData:
    global_compliance: GetGlobalCompliance200ApplicationJSONDataGlobalCompliance = field(default=None, metadata={'dataclasses_json': { 'field_name': 'globalCompliance' }})
    
class GetGlobalCompliance200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class GetGlobalCompliance200ApplicationJSON:
    action: GetGlobalCompliance200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: GetGlobalCompliance200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: GetGlobalCompliance200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class GetGlobalComplianceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_global_compliance_200_application_json_object: Optional[GetGlobalCompliance200ApplicationJSON] = field(default=None)
    
