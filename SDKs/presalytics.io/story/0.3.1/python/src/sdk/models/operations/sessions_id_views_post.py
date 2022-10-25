from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class SessionsIDViewsPostPathParams:
    session_id: str = field(default=None, metadata={'path_param': { 'field_name': 'session_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class SessionsIDViewsPostRequiredParametersToCreateAView:
    active_m_secs: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activeMSecs' }})
    additional: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additional' }})
    end_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    page_number: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageNumber' }})
    start_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass
class SessionsIDViewsPostRequest:
    path_params: SessionsIDViewsPostPathParams = field(default=None)
    request: SessionsIDViewsPostRequiredParametersToCreateAView = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SessionsIDViewsPostResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    problem_detail: Optional[Any] = field(default=None)
    view: Optional[shared.View] = field(default=None)
    
