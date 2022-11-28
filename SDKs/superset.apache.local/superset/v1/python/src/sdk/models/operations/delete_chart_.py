from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class DeleteChartQueryParams:
    q: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'serialization': 'json' }})
    

@dataclass
class DeleteChartSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class DeleteChart200ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class DeleteChart401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class DeleteChart403ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class DeleteChart404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class DeleteChart422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class DeleteChart500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class DeleteChartRequest:
    query_params: DeleteChartQueryParams = field()
    security: DeleteChartSecurity = field()
    

@dataclass
class DeleteChartResponse:
    content_type: str = field()
    status_code: int = field()
    delete_chart_200_application_json_object: Optional[DeleteChart200ApplicationJSON] = field(default=None)
    delete_chart_401_application_json_object: Optional[DeleteChart401ApplicationJSON] = field(default=None)
    delete_chart_403_application_json_object: Optional[DeleteChart403ApplicationJSON] = field(default=None)
    delete_chart_404_application_json_object: Optional[DeleteChart404ApplicationJSON] = field(default=None)
    delete_chart_422_application_json_object: Optional[DeleteChart422ApplicationJSON] = field(default=None)
    delete_chart_500_application_json_object: Optional[DeleteChart500ApplicationJSON] = field(default=None)
    
