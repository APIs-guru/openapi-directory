from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass
class DeleteChartQueryParams:
    q: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'serialization': 'json' }})
    

@dataclass
class DeleteChartSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DeleteChartRequest:
    query_params: DeleteChartQueryParams = field(default=None)
    security: DeleteChartSecurity = field(default=None)
    

@dataclass_json
@dataclass
class DeleteChart200ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class DeleteChart401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class DeleteChart403ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class DeleteChart404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class DeleteChart422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class DeleteChart500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class DeleteChartResponse:
    content_type: str = field(default=None)
    delete_chart_200_application_json_object: Optional[DeleteChart200ApplicationJSON] = field(default=None)
    delete_chart_401_application_json_object: Optional[DeleteChart401ApplicationJSON] = field(default=None)
    delete_chart_403_application_json_object: Optional[DeleteChart403ApplicationJSON] = field(default=None)
    delete_chart_404_application_json_object: Optional[DeleteChart404ApplicationJSON] = field(default=None)
    delete_chart_422_application_json_object: Optional[DeleteChart422ApplicationJSON] = field(default=None)
    delete_chart_500_application_json_object: Optional[DeleteChart500ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
