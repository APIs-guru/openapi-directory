from dataclasses import dataclass, field



@dataclass
class UserToFolderAssignPostQueryParams:
    old_folder: str = field(default=None, metadata={'query_param': { 'field_name': 'oldFolder', 'style': 'form', 'explode': True }})
    source: str = field(default=None, metadata={'query_param': { 'field_name': 'source', 'style': 'form', 'explode': True }})
    target: str = field(default=None, metadata={'query_param': { 'field_name': 'target', 'style': 'form', 'explode': True }})
    

@dataclass
class UserToFolderAssignPostRequest:
    query_params: UserToFolderAssignPostQueryParams = field(default=None)
    

@dataclass
class UserToFolderAssignPostResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
