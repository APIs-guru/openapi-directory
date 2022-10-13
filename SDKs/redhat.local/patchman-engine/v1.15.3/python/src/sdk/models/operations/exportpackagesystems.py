from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ExportPackageSystemsPathParams:
    package_name: str = field(default=None, metadata={'path_param': { 'field_name': 'package_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExportPackageSystemsQueryParams:
    filter_system_profile_sap_sids_in_: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'filter[system_profile][sap_sids][in]', 'style': 'form', 'explode': True }})
    filter_system_profile_sap_system_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter[system_profile][sap_system]', 'style': 'form', 'explode': True }})
    tags: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'tags', 'style': 'form', 'explode': True }})
    

@dataclass
class ExportPackageSystemsSecurity:
    rh_identity: shared.SchemeRhIdentity = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ExportPackageSystemsRequest:
    path_params: ExportPackageSystemsPathParams = field(default=None)
    query_params: ExportPackageSystemsQueryParams = field(default=None)
    security: ExportPackageSystemsSecurity = field(default=None)
    

@dataclass
class ExportPackageSystemsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    controllers_package_system_items: Optional[List[shared.ControllersPackageSystemItem]] = field(default=None)
    
