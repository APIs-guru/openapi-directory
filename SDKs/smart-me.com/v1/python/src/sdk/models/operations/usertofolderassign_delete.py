from dataclasses import dataclass, field



@dataclass
class UserToFolderAssignDeleteQueryParams:
    source: str = field(metadata={'query_param': { 'field_name': 'source', 'style': 'form', 'explode': True }})
    target: str = field(metadata={'query_param': { 'field_name': 'target', 'style': 'form', 'explode': True }})
    

@dataclass
class UserToFolderAssignDeleteRequest:
    query_params: UserToFolderAssignDeleteQueryParams = field()
    

@dataclass
class UserToFolderAssignDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
