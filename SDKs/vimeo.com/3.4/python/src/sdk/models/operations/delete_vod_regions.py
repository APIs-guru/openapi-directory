from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class DeleteVodRegionsPathParams:
    ondemand_id: float = field(metadata={'path_param': { 'field_name': 'ondemand_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class DeleteVodRegionsRequestBody:
    countries: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('countries') }})
    

@dataclass
class DeleteVodRegionsSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteVodRegionsRequest:
    path_params: DeleteVodRegionsPathParams = field()
    security: DeleteVodRegionsSecurity = field()
    request: Optional[DeleteVodRegionsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/vnd.vimeo.ondemand.region+json' }})
    

@dataclass
class DeleteVodRegionsResponse:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    on_demand_regions: Optional[List[shared.OnDemandRegion]] = field(default=None)
    
