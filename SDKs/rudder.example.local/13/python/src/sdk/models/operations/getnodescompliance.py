from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetNodesComplianceQueryParams:
    level: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'level', 'style': 'form', 'explode': True }})
    
class GetNodesCompliance200ApplicationJSONActionEnum(str, Enum):
    GET_NODES_COMPLIANCE = "getNodesCompliance"


@dataclass_json
@dataclass
class GetNodesCompliance200ApplicationJSONDataNodesComplianceDetails:
    error: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    no_report: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('noReport') }})
    success_already_ok: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successAlreadyOK') }})
    success_not_applicable: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successNotApplicable') }})
    success_repaired: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successRepaired') }})
    unexpected_missing_component: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unexpectedMissingComponent') }})
    unexpected_unknown_component: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unexpectedUnknownComponent') }})
    
class GetNodesCompliance200ApplicationJSONDataNodesModeEnum(str, Enum):
    FULL_COMPLIANCE = "full-compliance"
    CHANGES_ONLY = "changes-only"
    REPORTS_DISABLED = "reports-disabled"


@dataclass_json
@dataclass
class GetNodesCompliance200ApplicationJSONDataNodes:
    compliance: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('compliance') }})
    compliance_details: GetNodesCompliance200ApplicationJSONDataNodesComplianceDetails = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('complianceDetails') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    mode: GetNodesCompliance200ApplicationJSONDataNodesModeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    

@dataclass_json
@dataclass
class GetNodesCompliance200ApplicationJSONData:
    nodes: List[GetNodesCompliance200ApplicationJSONDataNodes] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodes') }})
    
class GetNodesCompliance200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class GetNodesCompliance200ApplicationJSON:
    action: GetNodesCompliance200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: GetNodesCompliance200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: GetNodesCompliance200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class GetNodesComplianceRequest:
    query_params: GetNodesComplianceQueryParams = field()
    

@dataclass
class GetNodesComplianceResponse:
    content_type: str = field()
    status_code: int = field()
    get_nodes_compliance_200_application_json_object: Optional[GetNodesCompliance200ApplicationJSON] = field(default=None)
    
