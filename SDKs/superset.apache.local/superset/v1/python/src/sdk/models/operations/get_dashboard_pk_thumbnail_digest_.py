from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetDashboardPkThumbnailDigestPathParams:
    digest: str = field(metadata={'path_param': { 'field_name': 'digest', 'style': 'simple', 'explode': False }})
    pk: int = field(metadata={'path_param': { 'field_name': 'pk', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDashboardPkThumbnailDigestQueryParams:
    q: Optional[shared.ThumbnailQuerySchema] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'serialization': 'json' }})
    

@dataclass
class GetDashboardPkThumbnailDigestSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetDashboardPkThumbnailDigest202ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetDashboardPkThumbnailDigest401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetDashboardPkThumbnailDigest404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetDashboardPkThumbnailDigest422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetDashboardPkThumbnailDigest500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class GetDashboardPkThumbnailDigestRequest:
    path_params: GetDashboardPkThumbnailDigestPathParams = field()
    query_params: GetDashboardPkThumbnailDigestQueryParams = field()
    security: GetDashboardPkThumbnailDigestSecurity = field()
    

@dataclass
class GetDashboardPkThumbnailDigestResponse:
    content_type: str = field()
    status_code: int = field()
    get_dashboard_pk_thumbnail_digest_200_image_wildcard_binary_string: Optional[bytes] = field(default=None)
    get_dashboard_pk_thumbnail_digest_202_application_json_object: Optional[GetDashboardPkThumbnailDigest202ApplicationJSON] = field(default=None)
    get_dashboard_pk_thumbnail_digest_401_application_json_object: Optional[GetDashboardPkThumbnailDigest401ApplicationJSON] = field(default=None)
    get_dashboard_pk_thumbnail_digest_404_application_json_object: Optional[GetDashboardPkThumbnailDigest404ApplicationJSON] = field(default=None)
    get_dashboard_pk_thumbnail_digest_422_application_json_object: Optional[GetDashboardPkThumbnailDigest422ApplicationJSON] = field(default=None)
    get_dashboard_pk_thumbnail_digest_500_application_json_object: Optional[GetDashboardPkThumbnailDigest500ApplicationJSON] = field(default=None)
    
