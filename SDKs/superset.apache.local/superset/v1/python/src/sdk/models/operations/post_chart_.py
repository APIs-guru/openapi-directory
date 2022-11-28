from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PostChartSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class PostChart201ApplicationJSON:
    id: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    result: Optional[shared.ChartRestAPIPost] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass_json
@dataclass
class PostChart400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PostChart401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PostChart422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class PostChart500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class PostChartRequest:
    request: shared.ChartRestAPIPost = field(metadata={'request': { 'media_type': 'application/json' }})
    security: PostChartSecurity = field()
    

@dataclass
class PostChartResponse:
    content_type: str = field()
    status_code: int = field()
    post_chart_201_application_json_object: Optional[PostChart201ApplicationJSON] = field(default=None)
    post_chart_400_application_json_object: Optional[PostChart400ApplicationJSON] = field(default=None)
    post_chart_401_application_json_object: Optional[PostChart401ApplicationJSON] = field(default=None)
    post_chart_422_application_json_object: Optional[PostChart422ApplicationJSON] = field(default=None)
    post_chart_500_application_json_object: Optional[PostChart500ApplicationJSON] = field(default=None)
    
