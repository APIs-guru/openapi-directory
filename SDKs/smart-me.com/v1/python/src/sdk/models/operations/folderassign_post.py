from dataclasses import dataclass, field



@dataclass
class FolderAssignPostQueryParams:
    source: str = field(default=None, metadata={'query_param': { 'field_name': 'source', 'style': 'form', 'explode': True }})
    target: str = field(default=None, metadata={'query_param': { 'field_name': 'target', 'style': 'form', 'explode': True }})
    

@dataclass
class FolderAssignPostRequest:
    query_params: FolderAssignPostQueryParams = field(default=None)
    

@dataclass
class FolderAssignPostResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
