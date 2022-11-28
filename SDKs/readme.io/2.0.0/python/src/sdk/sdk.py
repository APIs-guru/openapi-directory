

import requests
from sdk.models import operations
from . import utils




SERVERS = [
	"https://dash.readme.io/api/v1",
]


class SDK:
    

    _client: requests.Session
    _security_client: requests.Session
    
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
    
    
    
    def create_changelog(self, request: operations.CreateChangelogRequest) -> operations.CreateChangelogResponse:
        r"""Create changelog
        Create a new changelog inside of this project
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/changelogs"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateChangelogResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            pass
        elif r.status_code == 400:
            pass

        return res

    
    def create_custom_page(self, request: operations.CreateCustomPageRequest) -> operations.CreateCustomPageResponse:
        r"""Create custom page
        Create a new custom page inside of this project
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/custompages"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateCustomPageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            pass
        elif r.status_code == 400:
            pass

        return res

    
    def create_doc(self, request: operations.CreateDocRequest) -> operations.CreateDocResponse:
        r"""Create doc
        Create a new doc inside of this project
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/docs"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateDocResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            pass
        elif r.status_code == 400:
            pass

        return res

    
    def create_version(self, request: operations.CreateVersionRequest) -> operations.CreateVersionResponse:
        r"""Create version
        Create a new version
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/version"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateVersionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def delete_api_specification(self, request: operations.DeleteAPISpecificationRequest) -> operations.DeleteAPISpecificationResponse:
        r"""Delete an API specification in ReadMe
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api-specification/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAPISpecificationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def delete_changelog(self, request: operations.DeleteChangelogRequest) -> operations.DeleteChangelogResponse:
        r"""Delete changelog
        Delete the changelog with this slug
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/changelogs/{slug}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteChangelogResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def delete_custom_page(self, request: operations.DeleteCustomPageRequest) -> operations.DeleteCustomPageResponse:
        r"""Delete custom page
        Delete the custom page with this slug
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/custompages/{slug}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteCustomPageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def delete_doc(self, request: operations.DeleteDocRequest) -> operations.DeleteDocResponse:
        r"""Delete doc
        Delete the doc with this slug
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/docs/{slug}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteDocResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def delete_swagger(self, request: operations.DeleteSwaggerRequest) -> operations.DeleteSwaggerResponse:
        r"""DEPRECATED. Instead, use https://docs.readme.com/developers/reference/api-specification#deleteapispecification to delete a Swagger file in ReadMe
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/swagger/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSwaggerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def delete_version(self, request: operations.DeleteVersionRequest) -> operations.DeleteVersionResponse:
        r"""Delete version
        Delete a version
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/version/{versionId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteVersionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_api_specification(self, request: operations.GetAPISpecificationRequest) -> operations.GetAPISpecificationResponse:
        r"""Get API specification metadata
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api-specification"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPISpecificationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            

        return res

    
    def get_category(self, request: operations.GetCategoryRequest) -> operations.GetCategoryResponse:
        r"""Get category
        Returns the category with this slug
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/categories/{slug}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCategoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_category_docs(self, request: operations.GetCategoryDocsRequest) -> operations.GetCategoryDocsResponse:
        r"""Get docs for category
        Returns the docs and children docs within this category
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/categories/{slug}/docs", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCategoryDocsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_changelog(self, request: operations.GetChangelogRequest) -> operations.GetChangelogResponse:
        r"""Get changelog
        Returns the changelog with this slug
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/changelogs/{slug}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetChangelogResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_changelogs(self, request: operations.GetChangelogsRequest) -> operations.GetChangelogsResponse:
        r"""Get changelogs
        Returns a list of changelogs associated with the project API key
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/changelogs"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetChangelogsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            

        return res

    
    def get_custom_page(self, request: operations.GetCustomPageRequest) -> operations.GetCustomPageResponse:
        r"""Get custom page
        Returns the custom page with this slug
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/custompages/{slug}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCustomPageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_custom_pages(self, request: operations.GetCustomPagesRequest) -> operations.GetCustomPagesResponse:
        r"""Get custom pages
        Returns a list of custom pages associated with the project API key
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/custompages"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCustomPagesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            

        return res

    
    def get_doc(self, request: operations.GetDocRequest) -> operations.GetDocResponse:
        r"""Get doc
        Returns the doc with this slug
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/docs/{slug}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDocResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_errors(self, request: operations.GetErrorsRequest) -> operations.GetErrorsResponse:
        r"""Get errors
        Returns with all of the error page types for this project
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/errors"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetErrorsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_project(self, request: operations.GetProjectRequest) -> operations.GetProjectResponse:
        r"""Get metadata about the current project
        Returns project data for API key
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProjectResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_version(self, request: operations.GetVersionRequest) -> operations.GetVersionResponse:
        r"""Get version
        Returns the version with this version ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/version/{versionId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVersionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_versions(self, request: operations.GetVersionsRequest) -> operations.GetVersionsResponse:
        r"""Get versions
        Retrieve a list of versions associated with a project API key
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/version"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetVersionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def search_docs(self, request: operations.SearchDocsRequest) -> operations.SearchDocsResponse:
        r"""Search docs
        Returns all docs that match the search
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/docs/search"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SearchDocsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def update_api_specification(self, request: operations.UpdateAPISpecificationRequest) -> operations.UpdateAPISpecificationResponse:
        r"""Update an API specification in ReadMe
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api-specification/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateAPISpecificationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def update_changelog(self, request: operations.UpdateChangelogRequest) -> operations.UpdateChangelogResponse:
        r"""Update changelog
        Update a changelog with this slug
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/changelogs/{slug}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateChangelogResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def update_custom_page(self, request: operations.UpdateCustomPageRequest) -> operations.UpdateCustomPageResponse:
        r"""Update custom page
        Update a custom page with this slug
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/custompages/{slug}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateCustomPageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def update_doc(self, request: operations.UpdateDocRequest) -> operations.UpdateDocResponse:
        r"""Update doc
        Update a doc with this slug
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/docs/{slug}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateDocResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def update_swagger(self, request: operations.UpdateSwaggerRequest) -> operations.UpdateSwaggerResponse:
        r"""DEPRECATED. Instead, use https://docs.readme.com/developers/reference/api-specification#updateapispecification to update a Swagger file.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/swagger/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateSwaggerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def update_version(self, request: operations.UpdateVersionRequest) -> operations.UpdateVersionResponse:
        r"""Update version
        Update an existing version
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/version/{versionId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateVersionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def upload_api_specification(self, request: operations.UploadAPISpecificationRequest) -> operations.UploadAPISpecificationResponse:
        r"""Upload an API specification to ReadMe. Or, to use a newer solution see https://docs.readme.com/guides/docs/automatically-sync-api-specification-with-github
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api-specification"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UploadAPISpecificationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            pass
        elif r.status_code == 400:
            pass

        return res

    
    def upload_swagger(self, request: operations.UploadSwaggerRequest) -> operations.UploadSwaggerResponse:
        r"""DEPRECATED. Instead use https://docs.readme.com/developers/reference/api-specification#uploadapispecification to upload a Swagger file to ReadMe
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/swagger"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UploadSwaggerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            pass
        elif r.status_code == 400:
            pass

        return res

    