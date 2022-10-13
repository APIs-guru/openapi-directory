from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetNodesComplianceQueryParams:
    level: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'level', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNodesComplianceRequest:
    query_params: GetNodesComplianceQueryParams = field(default=None)
    
class GetNodesCompliance200ApplicationJSONActionEnum(str, Enum):
    GET_NODES_COMPLIANCE = "getNodesCompliance"


@dataclass_json
@dataclass
class GetNodesCompliance200ApplicationJSONDataNodesComplianceDetails:
    error: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    no_report: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'noReport' }})
    success_already_ok: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'successAlreadyOK' }})
    success_not_applicable: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'successNotApplicable' }})
    success_repaired: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'successRepaired' }})
    unexpected_missing_component: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unexpectedMissingComponent' }})
    unexpected_unknown_component: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unexpectedUnknownComponent' }})
    
class GetNodesCompliance200ApplicationJSONDataNodesModeEnum(str, Enum):
    FULL_COMPLIANCE = "full-compliance"
    CHANGES_ONLY = "changes-only"
    REPORTS_DISABLED = "reports-disabled"


@dataclass_json
@dataclass
class GetNodesCompliance200ApplicationJSONDataNodes:
    compliance: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'compliance' }})
    compliance_details: GetNodesCompliance200ApplicationJSONDataNodesComplianceDetails = field(default=None, metadata={'dataclasses_json': { 'field_name': 'complianceDetails' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    mode: GetNodesCompliance200ApplicationJSONDataNodesModeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mode' }})
    

@dataclass_json
@dataclass
class GetNodesCompliance200ApplicationJSONData:
    nodes: List[GetNodesCompliance200ApplicationJSONDataNodes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodes' }})
    
class GetNodesCompliance200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class GetNodesCompliance200ApplicationJSON:
    action: GetNodesCompliance200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: GetNodesCompliance200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: GetNodesCompliance200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class GetNodesComplianceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_nodes_compliance_200_application_json_object: Optional[GetNodesCompliance200ApplicationJSON] = field(default=None)
    
