from dataclasses import dataclass, field



@dataclass
class UserToFolderAssignDeleteQueryParams:
    source: str = field(default=None, metadata={'query_param': { 'field_name': 'source', 'style': 'form', 'explode': True }})
    target: str = field(default=None, metadata={'query_param': { 'field_name': 'target', 'style': 'form', 'explode': True }})
    

@dataclass
class UserToFolderAssignDeleteRequest:
    query_params: UserToFolderAssignDeleteQueryParams = field(default=None)
    

@dataclass
class UserToFolderAssignDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
