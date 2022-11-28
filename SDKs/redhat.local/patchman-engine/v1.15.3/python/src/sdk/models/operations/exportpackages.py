from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
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
    rh_identity: shared.SchemeRhIdentity = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ExportPackagesRequest:
    query_params: ExportPackagesQueryParams = field()
    security: ExportPackagesSecurity = field()
    

@dataclass
class ExportPackagesResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    controllers_package_items: Optional[List[shared.ControllersPackageItem]] = field(default=None)
    
