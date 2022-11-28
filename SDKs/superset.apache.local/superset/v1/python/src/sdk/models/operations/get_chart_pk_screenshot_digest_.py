from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetChartPkScreenshotDigestPathParams:
    digest: str = field(metadata={'path_param': { 'field_name': 'digest', 'style': 'simple', 'explode': False }})
    pk: int = field(metadata={'path_param': { 'field_name': 'pk', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetChartPkScreenshotDigestSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetChartPkScreenshotDigest400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetChartPkScreenshotDigest401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetChartPkScreenshotDigest404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetChartPkScreenshotDigest500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class GetChartPkScreenshotDigestRequest:
    path_params: GetChartPkScreenshotDigestPathParams = field()
    security: GetChartPkScreenshotDigestSecurity = field()
    

@dataclass
class GetChartPkScreenshotDigestResponse:
    content_type: str = field()
    status_code: int = field()
    get_chart_pk_screenshot_digest_200_image_wildcard_binary_string: Optional[bytes] = field(default=None)
    get_chart_pk_screenshot_digest_400_application_json_object: Optional[GetChartPkScreenshotDigest400ApplicationJSON] = field(default=None)
    get_chart_pk_screenshot_digest_401_application_json_object: Optional[GetChartPkScreenshotDigest401ApplicationJSON] = field(default=None)
    get_chart_pk_screenshot_digest_404_application_json_object: Optional[GetChartPkScreenshotDigest404ApplicationJSON] = field(default=None)
    get_chart_pk_screenshot_digest_500_application_json_object: Optional[GetChartPkScreenshotDigest500ApplicationJSON] = field(default=None)
    
