from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class GetChartPkThumbnailDigestPathParams:
    digest: str = field(default=None, metadata={'path_param': { 'field_name': 'digest', 'style': 'simple', 'explode': False }})
    pk: int = field(default=None, metadata={'path_param': { 'field_name': 'pk', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetChartPkThumbnailDigestSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetChartPkThumbnailDigestRequest:
    path_params: GetChartPkThumbnailDigestPathParams = field(default=None)
    security: GetChartPkThumbnailDigestSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetChartPkThumbnailDigest400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetChartPkThumbnailDigest401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetChartPkThumbnailDigest404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetChartPkThumbnailDigest500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class GetChartPkThumbnailDigestResponse:
    content_type: str = field(default=None)
    get_chart_pk_thumbnail_digest_200_image_wildcard_binary_string: Optional[bytes] = field(default=None)
    get_chart_pk_thumbnail_digest_400_application_json_object: Optional[GetChartPkThumbnailDigest400ApplicationJSON] = field(default=None)
    get_chart_pk_thumbnail_digest_401_application_json_object: Optional[GetChartPkThumbnailDigest401ApplicationJSON] = field(default=None)
    get_chart_pk_thumbnail_digest_404_application_json_object: Optional[GetChartPkThumbnailDigest404ApplicationJSON] = field(default=None)
    get_chart_pk_thumbnail_digest_500_application_json_object: Optional[GetChartPkThumbnailDigest500ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
