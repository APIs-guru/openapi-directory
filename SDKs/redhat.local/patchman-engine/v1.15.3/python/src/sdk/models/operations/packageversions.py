from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PackageVersionsPathParams:
    package_name: str = field(default=None, metadata={'path_param': { 'field_name': 'package_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class PackageVersionsQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class PackageVersionsSecurity:
    rh_identity: shared.SchemeRhIdentity = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PackageVersionsRequest:
    path_params: PackageVersionsPathParams = field(default=None)
    query_params: PackageVersionsQueryParams = field(default=None)
    security: PackageVersionsSecurity = field(default=None)
    

@dataclass
class PackageVersionsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    controllers_package_versions_response: Optional[shared.ControllersPackageVersionsResponse] = field(default=None)
    
