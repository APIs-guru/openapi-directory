from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class DeleteDatasetPkMetricMetricIDPathParams:
    metric_id: int = field(default=None, metadata={'path_param': { 'field_name': 'metric_id', 'style': 'simple', 'explode': False }})
    pk: int = field(default=None, metadata={'path_param': { 'field_name': 'pk', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteDatasetPkMetricMetricIDSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DeleteDatasetPkMetricMetricIDRequest:
    path_params: DeleteDatasetPkMetricMetricIDPathParams = field(default=None)
    security: DeleteDatasetPkMetricMetricIDSecurity = field(default=None)
    

@dataclass_json
@dataclass
class DeleteDatasetPkMetricMetricID200ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class DeleteDatasetPkMetricMetricID401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class DeleteDatasetPkMetricMetricID403ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class DeleteDatasetPkMetricMetricID404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class DeleteDatasetPkMetricMetricID422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class DeleteDatasetPkMetricMetricID500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class DeleteDatasetPkMetricMetricIDResponse:
    content_type: str = field(default=None)
    delete_dataset_pk_metric_metric_id_200_application_json_object: Optional[DeleteDatasetPkMetricMetricID200ApplicationJSON] = field(default=None)
    delete_dataset_pk_metric_metric_id_401_application_json_object: Optional[DeleteDatasetPkMetricMetricID401ApplicationJSON] = field(default=None)
    delete_dataset_pk_metric_metric_id_403_application_json_object: Optional[DeleteDatasetPkMetricMetricID403ApplicationJSON] = field(default=None)
    delete_dataset_pk_metric_metric_id_404_application_json_object: Optional[DeleteDatasetPkMetricMetricID404ApplicationJSON] = field(default=None)
    delete_dataset_pk_metric_metric_id_422_application_json_object: Optional[DeleteDatasetPkMetricMetricID422ApplicationJSON] = field(default=None)
    delete_dataset_pk_metric_metric_id_500_application_json_object: Optional[DeleteDatasetPkMetricMetricID500ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
