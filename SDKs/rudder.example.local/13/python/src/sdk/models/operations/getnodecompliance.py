from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetNodeCompliancePathParams:
    node_id: str = field(metadata={'path_param': { 'field_name': 'nodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNodeComplianceQueryParams:
    level: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'level', 'style': 'form', 'explode': True }})
    
class GetNodeCompliance200ApplicationJSONActionEnum(str, Enum):
    GET_NODE_COMPLIANCE = "getNodeCompliance"


@dataclass_json
@dataclass
class GetNodeCompliance200ApplicationJSONDataNodesComplianceDetails:
    error: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    no_report: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('noReport') }})
    success_already_ok: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successAlreadyOK') }})
    success_not_applicable: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successNotApplicable') }})
    success_repaired: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successRepaired') }})
    unexpected_missing_component: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unexpectedMissingComponent') }})
    unexpected_unknown_component: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unexpectedUnknownComponent') }})
    
class GetNodeCompliance200ApplicationJSONDataNodesModeEnum(str, Enum):
    FULL_COMPLIANCE = "full-compliance"
    CHANGES_ONLY = "changes-only"
    REPORTS_DISABLED = "reports-disabled"


@dataclass_json
@dataclass
class GetNodeCompliance200ApplicationJSONDataNodes:
    compliance: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('compliance') }})
    compliance_details: GetNodeCompliance200ApplicationJSONDataNodesComplianceDetails = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('complianceDetails') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    mode: GetNodeCompliance200ApplicationJSONDataNodesModeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    

@dataclass_json
@dataclass
class GetNodeCompliance200ApplicationJSONData:
    nodes: List[GetNodeCompliance200ApplicationJSONDataNodes] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodes') }})
    
class GetNodeCompliance200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class GetNodeCompliance200ApplicationJSON:
    action: GetNodeCompliance200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: GetNodeCompliance200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: GetNodeCompliance200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class GetNodeComplianceRequest:
    path_params: GetNodeCompliancePathParams = field()
    query_params: GetNodeComplianceQueryParams = field()
    

@dataclass
class GetNodeComplianceResponse:
    content_type: str = field()
    status_code: int = field()
    get_node_compliance_200_application_json_object: Optional[GetNodeCompliance200ApplicationJSON] = field(default=None)
    
