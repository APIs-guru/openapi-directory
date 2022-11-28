

import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://tl-api.azurewebsites.net",
	"https://triviallife.azure-api.net/v1",
]


class SDK:
    

    _client: requests.Session
    _security_client: requests.Session
    _security: shared.Security
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
        
        if self._security is not None:
            self._security_client = utils.configure_security_client(self._client, self._security)
        
    

    def config_security(self, security: shared.Security):
        self._security = security
        self._security_client = utils.configure_security_client(self._client, security)
        
    
    
    
    def article_add_measure_unit(self, request: operations.ArticleAddMeasureUnitRequest) -> operations.ArticleAddMeasureUnitResponse:
        r"""Add measure unit
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/Article/MeasureUnit"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ArticleAddMeasureUnitResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DefaultResponseDtoOfStatusDto])
                res.default_response_dto_of_status_dto = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIResponse])
                res.api_response = out

        return res

    
    def article_delete(self, request: operations.ArticleDeleteRequest) -> operations.ArticleDeleteResponse:
        r"""Delete article from the system
                    
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/Article"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ArticleDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DefaultResponseDtoOfInteger])
                res.default_response_dto_of_integer = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DefaultResponseDtoOfInteger])
                res.default_response_dto_of_integer = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIException])
                res.api_exception = out

        return res

    
    def article_get_addons(self, request: operations.ArticleGetAddonsRequest) -> operations.ArticleGetAddonsResponse:
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/Article/GetAddons"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ArticleGetAddonsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DefaultResponseDtoOfListOfArticleSearchDto])
                res.default_response_dto_of_list_of_article_search_dto = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DefaultResponseDtoOfListOfArticleSearchDto])
                res.default_response_dto_of_list_of_article_search_dto = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIResponse])
                res.api_response = out

        return res

    
    def article_get_measure_units(self, request: operations.ArticleGetMeasureUnitsRequest) -> operations.ArticleGetMeasureUnitsResponse:
        r"""Get mesure units
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/Article/MeasureUnits"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ArticleGetMeasureUnitsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DefaultResponseDtoOfStatusDto])
                res.default_response_dto_of_status_dto = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIResponse])
                res.api_response = out

        return res

    
    def article_get_revenue_accounts(self) -> operations.ArticleGetRevenueAccountsResponse:
        r"""Get Revenue Accounts 
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/Article/RevenueAccounts"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ArticleGetRevenueAccountsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DefaultResponseDtoOfStatusDto])
                res.default_response_dto_of_status_dto = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIResponse])
                res.api_response = out

        return res

    
    def article_gym_article_details(self, request: operations.ArticleGymArticleDetailsRequest) -> operations.ArticleGymArticleDetailsResponse:
        r"""Get Gym specific properties for article
                    
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/Article/GymArticle/{articleId}/{gymId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ArticleGymArticleDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GymArticleDetailsDto])
                res.gym_article_details_dto = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DefaultResponseDtoOfListOfArticleSearchDto])
                res.default_response_dto_of_list_of_article_search_dto = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIResponse])
                res.api_response = out

        return res

    
    def article_post(self, request: operations.ArticlePostRequest) -> operations.ArticlePostResponse:
        r"""Add new article
                    
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/Article"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ArticlePostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DefaultResponseDtoOfStatusDto])
                res.default_response_dto_of_status_dto = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIResponse])
                res.api_response = out

        return res

    
    def article_put(self, request: operations.ArticlePutRequest) -> operations.ArticlePutResponse:
        r"""update existing article
                    
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/Article"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ArticlePutResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DefaultResponseDtoOfStatusDto])
                res.default_response_dto_of_status_dto = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIException])
                res.api_exception = out

        return res

    
    def article_search(self, request: operations.ArticleSearchRequest) -> operations.ArticleSearchResponse:
        r"""Search articles
        It will only return basic information of article
                    
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/Article/Search"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ArticleSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DefaultResponseDtoOfListOfArticleSearchDto])
                res.default_response_dto_of_list_of_article_search_dto = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DefaultResponseDtoOfListOfArticleSearchDto])
                res.default_response_dto_of_list_of_article_search_dto = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIResponse])
                res.api_response = out

        return res

    
    def article_update_article_gym_details(self, request: operations.ArticleUpdateArticleGymDetailsRequest) -> operations.ArticleUpdateArticleGymDetailsResponse:
        r"""Add article details that associate with a Gym
                    
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/Article/ArticleGymDetails"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ArticleUpdateArticleGymDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DefaultResponseDtoOfStatusDto])
                res.default_response_dto_of_status_dto = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIResponse])
                res.api_response = out

        return res

    
    def article_update_status(self, request: operations.ArticleUpdateStatusRequest) -> operations.ArticleUpdateStatusResponse:
        r"""Deactivate existing article 
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/Article/UpdateStatus"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("PUT", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ArticleUpdateStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DefaultResponseDtoOfInteger])
                res.default_response_dto_of_integer = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DefaultResponseDtoOfInteger])
                res.default_response_dto_of_integer = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIException])
                res.api_exception = out

        return res

    
    def article_get(self, request: operations.ArticleGetRequest) -> operations.ArticleGetResponse:
        r"""Get article details
        This will return all properties related to article entity
                    
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/Article/{articleID}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ArticleGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DefaultResponseDtoOfArticleDto])
                res.default_response_dto_of_article_dto = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIResponse])
                res.api_response = out

        return res

    
    def auth_login(self, request: operations.AuthLoginRequest) -> operations.AuthLoginResponse:
        r"""Authenticate and provide token for autherizations.
                    
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/Auth/login"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AuthLoginResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/octet-stream"):
                res.auth_login_200_application_octet_stream_binary_string = r.content

        return res

    
    def gym_get(self, request: operations.GymGetRequest) -> operations.GymGetResponse:
        r"""Get gym details
        This will return all properties related to gym entity
                    
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/Gym/{gymID}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GymGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DefaultResponseDtoOfGymDto])
                res.default_response_dto_of_gym_dto = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIResponse])
                res.api_response = out

        return res

    
    def membership_get(self, request: operations.MembershipGetRequest) -> operations.MembershipGetResponse:
        r"""Get all of the members details
        This will return all properties related to member entity
                    
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/Membership"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.MembershipGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.MemberDto]])
                res.member_dtos = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out

        return res

    
    def membership_post(self, request: operations.MembershipPostRequest) -> operations.MembershipPostResponse:
        r"""Add new Member
                    
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/Membership"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MembershipPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[bool])
                res.membership_post_200_application_json_boolean = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out

        return res

    
    def package_delete(self, request: operations.PackageDeleteRequest) -> operations.PackageDeleteResponse:
        r"""Delete existing package
                    
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/Package"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PackageDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DefaultResponseDtoOfBoolean])
                res.default_response_dto_of_boolean = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DefaultResponseDtoOfString])
                res.default_response_dto_of_string = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DefaultResponseDtoOfString])
                res.default_response_dto_of_string = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIException])
                res.api_exception = out

        return res

    
    def package_get(self, request: operations.PackageGetRequest) -> operations.PackageGetResponse:
        r"""Get package details by packageId
                    
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/Package"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PackageGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DefaultResponseDtoOfPackageDto])
                res.default_response_dto_of_package_dto = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DefaultResponseDtoOfPackageDto])
                res.default_response_dto_of_package_dto = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIException])
                res.api_exception = out

        return res

    
    def package_post(self, request: operations.PackagePostRequest) -> operations.PackagePostResponse:
        r"""Insert new package into the system
                    
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/Package"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PackagePostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DefaultResponseDtoOfStatusDto])
                res.default_response_dto_of_status_dto = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIException])
                res.api_exception = out

        return res

    
    def package_put(self, request: operations.PackagePutRequest) -> operations.PackagePutResponse:
        r"""Update existing package by its ID
                    
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/Package"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PackagePutResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DefaultResponseDtoOfStatusDto])
                res.default_response_dto_of_status_dto = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIException])
                res.api_exception = out

        return res

    
    def package_search(self, request: operations.PackageSearchRequest) -> operations.PackageSearchResponse:
        r"""Search packages
                    
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/Package/Search"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PackageSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.DefaultResponseDtoOfPackageSearchDto]])
                res.default_response_dto_of_package_search_dtos = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DefaultResponseDtoOfListOfPackageSearchDto])
                res.default_response_dto_of_list_of_package_search_dto = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIException])
                res.api_exception = out

        return res

    
    def package_update_status(self, request: operations.PackageUpdateStatusRequest) -> operations.PackageUpdateStatusResponse:
        r"""Status update of existing package 
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/Package/UpdateStatus"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("PUT", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PackageUpdateStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DefaultResponseDtoOfBoolean])
                res.default_response_dto_of_boolean = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DefaultResponseDtoOfString])
                res.default_response_dto_of_string = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DefaultResponseDtoOfString])
                res.default_response_dto_of_string = out
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIException])
                res.api_exception = out

        return res

    
    def status_get(self, request: operations.StatusGetRequest) -> operations.StatusGetResponse:
        r"""Get the current status of message
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/Status"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.StatusGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MessageStatus])
                res.message_status = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProblemDetails])
                res.problem_details = out

        return res

    
    def test_get(self) -> operations.TestGetResponse:
        r"""Get the all Test objects.
                    
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/Test"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TestGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TestDto])
                res.test_dto = out

        return res

    
    def user_get(self) -> operations.UserGetResponse:
        r"""Get all Users detail
        This will return all properties related to User entity
                    
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/User"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UserGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserDto])
                res.user_dto = out

        return res

    
    def user_register_user(self, request: operations.UserRegisterUserRequest) -> operations.UserRegisterUserResponse:
        r"""Register a new User
                    
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/User/registerUser"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UserRegisterUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def user_update_user(self, request: operations.UserUpdateUserRequest) -> operations.UserUpdateUserResponse:
        r"""Update an exsisting User
                    
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/User/updateuser"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("PUT", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UserUpdateUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 404:
            pass

        return res

    