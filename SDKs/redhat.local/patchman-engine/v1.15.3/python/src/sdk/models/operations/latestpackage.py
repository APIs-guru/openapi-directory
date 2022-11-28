from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class LatestPackagePathParams:
    package_name: str = field(metadata={'path_param': { 'field_name': 'package_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class LatestPackageSecurity:
    rh_identity: shared.SchemeRhIdentity = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class LatestPackageRequest:
    path_params: LatestPackagePathParams = field()
    security: LatestPackageSecurity = field()
    

@dataclass
class LatestPackageResponse:
    content_type: str = field()
    status_code: int = field()
    controllers_package_detail_response: Optional[shared.ControllersPackageDetailResponse] = field(default=None)
    
