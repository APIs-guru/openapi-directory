from dataclasses import dataclass, field



@dataclass
class RemoveAssetPathParams:
    asset_id: str = field(default=None, metadata={'path_param': { 'field_name': 'asset_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveAssetSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class RemoveAssetRequest:
    path_params: RemoveAssetPathParams = field(default=None)
    security: RemoveAssetSecurity = field(default=None)
    

@dataclass
class RemoveAssetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
