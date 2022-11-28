import requests
from typing import Any,List,Optional
from sdk.models import shared, operations
from . import utils

class Files:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def create_file_association(self, request: operations.CreateFileAssociationRequest) -> operations.CreateFileAssociationResponse:
        r"""Creates a new file association
        By passing in the appropriate options, you can create a new folder
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Files/{FileId}/Associations", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateFileAssociationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Association])
                res.association = out
        elif r.status_code == 400:
            pass

        return res

    
    def create_folder(self, request: operations.CreateFolderRequest) -> operations.CreateFolderResponse:
        r"""Creates a new folder
        By passing in the appropriate properties, you can create a new folder
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Folders"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateFolderResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.folder = out
        elif r.status_code == 400:
            pass

        return res

    
    def delete_file(self, request: operations.DeleteFileRequest) -> operations.DeleteFileResponse:
        r"""Deletes a specific file
        Delete a specific file
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Files/{FileId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteFileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_file_association(self, request: operations.DeleteFileAssociationRequest) -> operations.DeleteFileAssociationResponse:
        r"""Deletes an existing file association
        By passing in the appropriate options, you can create a new folder
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Files/{FileId}/Associations/{ObjectId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteFileAssociationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_folder(self, request: operations.DeleteFolderRequest) -> operations.DeleteFolderResponse:
        r"""Deletes a folder
        By passing in the appropriate ID, you can delete a folder
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Folders/{FolderId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteFolderResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def get_associations_by_object(self, request: operations.GetAssociationsByObjectRequest) -> operations.GetAssociationsByObjectResponse:
        r"""Retrieves an association object using a unique object ID
        By passing in the appropriate options,
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Associations/{ObjectId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAssociationsByObjectResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Association]])
                res.associations = out

        return res

    
    def get_file(self, request: operations.GetFileRequest) -> operations.GetFileResponse:
        r"""Retrieves a file by a unique file ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Files/{FileId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FileObject])
                res.file_object = out

        return res

    
    def get_file_associations(self, request: operations.GetFileAssociationsRequest) -> operations.GetFileAssociationsResponse:
        r"""Retrieves a specific file associations
        By passing in the appropriate options, 
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Files/{FileId}/Associations", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFileAssociationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Association]])
                res.associations = out

        return res

    
    def get_file_content(self, request: operations.GetFileContentRequest) -> operations.GetFileContentResponse:
        r"""Retrieves the content of a specific file
        By passing in the appropriate options, retrieve data for specific file
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Files/{FileId}/Content", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFileContentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.get_file_content_200_application_octet_stream_binary_string = r.content

        return res

    
    def get_files(self, request: operations.GetFilesRequest) -> operations.GetFilesResponse:
        r"""Retrieves files
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Files"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFilesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Files])
                res.files = out

        return res

    
    def get_folder(self, request: operations.GetFolderRequest) -> operations.GetFolderResponse:
        r"""Retrieves specific folder by using a unique folder ID
        By passing in the appropriate ID, you can search for specific folder
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Folders/{FolderId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFolderResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.folder = out

        return res

    
    def get_folders(self, request: operations.GetFoldersRequest) -> operations.GetFoldersResponse:
        r"""Retrieves folders
        By passing in the appropriate options, you can search for available folders
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Folders"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFoldersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[Any]])
                res.folders = out

        return res

    
    def get_inbox(self, request: operations.GetInboxRequest) -> operations.GetInboxResponse:
        r"""Retrieves inbox folder
        Search for the user inbox
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Inbox"
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInboxResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.folder = out

        return res

    
    def update_file(self, request: operations.UpdateFileRequest) -> operations.UpdateFileResponse:
        r"""Update a file
        Updates file properties of a single file
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Files/{FileId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateFileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FileObject])
                res.file_object = out
        elif r.status_code == 400:
            pass

        return res

    
    def update_folder(self, request: operations.UpdateFolderRequest) -> operations.UpdateFolderResponse:
        r"""Updates an existing folder
        By passing in the appropriate ID and properties, you can update a folder
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Folders/{FolderId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateFolderResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.folder = out
        elif r.status_code == 400:
            pass

        return res

    
    def upload_file(self, request: operations.UploadFileRequest) -> operations.UploadFileResponse:
        r"""Uploads a File
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Files"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UploadFileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FileObject])
                res.file_object = out
        elif r.status_code == 400:
            pass

        return res

    