from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class SessionsIDViewsPostPathParams:
    session_id: str = field(metadata={'path_param': { 'field_name': 'session_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class SessionsIDViewsPostRequiredParametersToCreateAView:
    r"""SessionsIDViewsPostRequiredParametersToCreateAView
    A page view required a page number from the story outline to be created
    """
    
    end_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    page_number: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageNumber') }})
    start_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    active_m_secs: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activeMSecs') }})
    additional: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additional') }})
    

@dataclass
class SessionsIDViewsPostRequest:
    path_params: SessionsIDViewsPostPathParams = field()
    request: SessionsIDViewsPostRequiredParametersToCreateAView = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SessionsIDViewsPostResponse:
    content_type: str = field()
    status_code: int = field()
    problem_detail: Optional[Any] = field(default=None)
    view: Optional[shared.View] = field(default=None)
    
