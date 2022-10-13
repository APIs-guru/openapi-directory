from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared

class ExportPackagesSortEnum(str, Enum):
    ID = "id"
    NAME = "name"
    SYSTEMS_INSTALLED = "systems_installed"
    SYSTEMS_UPDATABLE = "systems_updatable"


@dataclass
class ExportPackagesQueryParams:
    filter_name_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter[name]', 'style': 'form', 'explode': True }})
    filter_summary_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter[summary]', 'style': 'form', 'explode': True }})
    filter_systems_installed_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter[systems_installed]', 'style': 'form', 'explode': True }})
    filter_systems_updatable_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter[systems_updatable]', 'style': 'form', 'explode': True }})
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    sort: Optional[ExportPackagesSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class ExportPackagesSecurity:
    rh_identity: shared.SchemeRhIdentity = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ExportPackagesRequest:
    query_params: ExportPackagesQueryParams = field(default=None)
    security: ExportPackagesSecurity = field(default=None)
    

@dataclass
class ExportPackagesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    controllers_package_items: Optional[List[shared.ControllersPackageItem]] = field(default=None)
    
