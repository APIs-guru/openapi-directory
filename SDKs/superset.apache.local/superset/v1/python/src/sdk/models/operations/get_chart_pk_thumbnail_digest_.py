from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetChartPkThumbnailDigestPathParams:
    digest: str = field(metadata={'path_param': { 'field_name': 'digest', 'style': 'simple', 'explode': False }})
    pk: int = field(metadata={'path_param': { 'field_name': 'pk', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetChartPkThumbnailDigestSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetChartPkThumbnailDigest400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetChartPkThumbnailDigest401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetChartPkThumbnailDigest404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetChartPkThumbnailDigest500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class GetChartPkThumbnailDigestRequest:
    path_params: GetChartPkThumbnailDigestPathParams = field()
    security: GetChartPkThumbnailDigestSecurity = field()
    

@dataclass
class GetChartPkThumbnailDigestResponse:
    content_type: str = field()
    status_code: int = field()
    get_chart_pk_thumbnail_digest_200_image_wildcard_binary_string: Optional[bytes] = field(default=None)
    get_chart_pk_thumbnail_digest_400_application_json_object: Optional[GetChartPkThumbnailDigest400ApplicationJSON] = field(default=None)
    get_chart_pk_thumbnail_digest_401_application_json_object: Optional[GetChartPkThumbnailDigest401ApplicationJSON] = field(default=None)
    get_chart_pk_thumbnail_digest_404_application_json_object: Optional[GetChartPkThumbnailDigest404ApplicationJSON] = field(default=None)
    get_chart_pk_thumbnail_digest_500_application_json_object: Optional[GetChartPkThumbnailDigest500ApplicationJSON] = field(default=None)
    
