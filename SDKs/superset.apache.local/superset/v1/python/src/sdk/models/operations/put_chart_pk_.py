from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PutChartPkPathParams:
    pk: int = field(default=None, metadata={'path_param': { 'field_name': 'pk', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutChartPkSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PutChartPkRequest:
    path_params: PutChartPkPathParams = field(default=None)
    request: shared.ChartRestAPIPut = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PutChartPkSecurity = field(default=None)
    

@dataclass_json
@dataclass
class PutChartPk200ApplicationJSON:
    id: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    result: Optional[shared.ChartRestAPIPut] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass_json
@dataclass
class PutChartPk400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PutChartPk401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PutChartPk403ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PutChartPk404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PutChartPk422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PutChartPk500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class PutChartPkResponse:
    content_type: str = field(default=None)
    put_chart_pk_200_application_json_object: Optional[PutChartPk200ApplicationJSON] = field(default=None)
    put_chart_pk_400_application_json_object: Optional[PutChartPk400ApplicationJSON] = field(default=None)
    put_chart_pk_401_application_json_object: Optional[PutChartPk401ApplicationJSON] = field(default=None)
    put_chart_pk_403_application_json_object: Optional[PutChartPk403ApplicationJSON] = field(default=None)
    put_chart_pk_404_application_json_object: Optional[PutChartPk404ApplicationJSON] = field(default=None)
    put_chart_pk_422_application_json_object: Optional[PutChartPk422ApplicationJSON] = field(default=None)
    put_chart_pk_500_application_json_object: Optional[PutChartPk500ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
