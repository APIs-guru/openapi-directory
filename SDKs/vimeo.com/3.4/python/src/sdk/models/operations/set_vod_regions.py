from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class SetVodRegionsPathParams:
    ondemand_id: float = field(metadata={'path_param': { 'field_name': 'ondemand_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class SetVodRegionsRequestBody:
    countries: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('countries') }})
    

@dataclass
class SetVodRegionsSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SetVodRegionsRequest:
    path_params: SetVodRegionsPathParams = field()
    request: SetVodRegionsRequestBody = field(metadata={'request': { 'media_type': 'application/vnd.vimeo.ondemand.region+json' }})
    security: SetVodRegionsSecurity = field()
    

@dataclass
class SetVodRegionsResponse:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    on_demand_region: Optional[shared.OnDemandRegion] = field(default=None)
    
