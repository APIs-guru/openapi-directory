from dataclasses import dataclass, field



@dataclass
class DeleteAssetPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAssetSecurity:
    developer_key: shared.SchemeDeveloperKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteAssetRequest:
    path_params: DeleteAssetPathParams = field(default=None)
    security: DeleteAssetSecurity = field(default=None)
    

@dataclass
class DeleteAssetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
