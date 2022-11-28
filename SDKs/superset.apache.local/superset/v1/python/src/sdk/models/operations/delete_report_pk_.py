from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class DeleteReportPkPathParams:
    pk: int = field(metadata={'path_param': { 'field_name': 'pk', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteReportPkSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class DeleteReportPk200ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class DeleteReportPk403ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class DeleteReportPk404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class DeleteReportPk422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class DeleteReportPk500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class DeleteReportPkRequest:
    path_params: DeleteReportPkPathParams = field()
    security: DeleteReportPkSecurity = field()
    

@dataclass
class DeleteReportPkResponse:
    content_type: str = field()
    status_code: int = field()
    delete_report_pk_200_application_json_object: Optional[DeleteReportPk200ApplicationJSON] = field(default=None)
    delete_report_pk_403_application_json_object: Optional[DeleteReportPk403ApplicationJSON] = field(default=None)
    delete_report_pk_404_application_json_object: Optional[DeleteReportPk404ApplicationJSON] = field(default=None)
    delete_report_pk_422_application_json_object: Optional[DeleteReportPk422ApplicationJSON] = field(default=None)
    delete_report_pk_500_application_json_object: Optional[DeleteReportPk500ApplicationJSON] = field(default=None)
    
