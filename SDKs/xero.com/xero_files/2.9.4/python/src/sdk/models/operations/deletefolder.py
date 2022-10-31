from dataclasses import dataclass, field



@dataclass
class DeleteFolderPathParams:
    folder_id: str = field(default=None, metadata={'path_param': { 'field_name': 'FolderId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteFolderHeaders:
    xero_tenant_id: str = field(default=None, metadata={'header': { 'field_name': 'xero-tenant-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteFolderSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteFolderRequest:
    path_params: DeleteFolderPathParams = field(default=None)
    headers: DeleteFolderHeaders = field(default=None)
    security: DeleteFolderSecurity = field(default=None)
    

@dataclass
class DeleteFolderResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
