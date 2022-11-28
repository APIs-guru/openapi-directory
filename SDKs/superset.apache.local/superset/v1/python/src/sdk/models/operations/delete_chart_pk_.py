from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class DeleteChartPkPathParams:
    pk: int = field(metadata={'path_param': { 'field_name': 'pk', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteChartPkSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class DeleteChartPk200ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class DeleteChartPk401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class DeleteChartPk403ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class DeleteChartPk404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class DeleteChartPk422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class DeleteChartPk500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class DeleteChartPkRequest:
    path_params: DeleteChartPkPathParams = field()
    security: DeleteChartPkSecurity = field()
    

@dataclass
class DeleteChartPkResponse:
    content_type: str = field()
    status_code: int = field()
    delete_chart_pk_200_application_json_object: Optional[DeleteChartPk200ApplicationJSON] = field(default=None)
    delete_chart_pk_401_application_json_object: Optional[DeleteChartPk401ApplicationJSON] = field(default=None)
    delete_chart_pk_403_application_json_object: Optional[DeleteChartPk403ApplicationJSON] = field(default=None)
    delete_chart_pk_404_application_json_object: Optional[DeleteChartPk404ApplicationJSON] = field(default=None)
    delete_chart_pk_422_application_json_object: Optional[DeleteChartPk422ApplicationJSON] = field(default=None)
    delete_chart_pk_500_application_json_object: Optional[DeleteChartPk500ApplicationJSON] = field(default=None)
    
