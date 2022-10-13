from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class EditVodPathParams:
    ondemand_id: float = field(default=None, metadata={'path_param': { 'field_name': 'ondemand_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class EditVodRequestBodyPreorder:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    publish_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publish_time' }})
    

@dataclass_json
@dataclass
class EditVodRequestBodyPublish:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    

@dataclass_json
@dataclass
class EditVodRequestBody:
    link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    preorder: Optional[EditVodRequestBodyPreorder] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preorder' }})
    publish: Optional[EditVodRequestBodyPublish] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publish' }})
    publish_when_ready: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publish_when_ready' }})
    

@dataclass
class EditVodSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EditVodRequest:
    path_params: EditVodPathParams = field(default=None)
    request: Optional[EditVodRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/vnd.vimeo.ondemand.page+json' }})
    security: EditVodSecurity = field(default=None)
    

@dataclass
class EditVodResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    on_demand_page: Optional[shared.OnDemandPage] = field(default=None)
    
