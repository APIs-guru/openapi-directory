from dataclasses import dataclass, field



@dataclass
class UserToFolderAssignPostQueryParams:
    old_folder: str = field(metadata={'query_param': { 'field_name': 'oldFolder', 'style': 'form', 'explode': True }})
    source: str = field(metadata={'query_param': { 'field_name': 'source', 'style': 'form', 'explode': True }})
    target: str = field(metadata={'query_param': { 'field_name': 'target', 'style': 'form', 'explode': True }})
    

@dataclass
class UserToFolderAssignPostRequest:
    query_params: UserToFolderAssignPostQueryParams = field()
    

@dataclass
class UserToFolderAssignPostResponse:
    content_type: str = field()
    status_code: int = field()
    
