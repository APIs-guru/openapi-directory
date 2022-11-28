

import requests
from sdk.models import operations
from . import utils




SERVERS = [
	"https://webservice.wikipathways.org",
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
        
    
    
    
    def get_find_interactions(self, request: operations.GetFindInteractionsRequest) -> operations.GetFindInteractionsResponse:
        r"""findInteractionsFind interactions defined in WikiPathways pathways.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/findInteractions"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFindInteractionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_find_pathways_by_literature(self, request: operations.GetFindPathwaysByLiteratureRequest) -> operations.GetFindPathwaysByLiteratureResponse:
        r"""findPathwaysByLiterature
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/findPathwaysByLiterature"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFindPathwaysByLiteratureResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_find_pathways_by_text(self, request: operations.GetFindPathwaysByTextRequest) -> operations.GetFindPathwaysByTextResponse:
        r"""findPathwaysByText
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/findPathwaysByText"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFindPathwaysByTextResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_find_pathways_by_xref(self, request: operations.GetFindPathwaysByXrefRequest) -> operations.GetFindPathwaysByXrefResponse:
        r"""findPathwaysByXref
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/findPathwaysByXref"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFindPathwaysByXrefResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_get_colored_pathway(self, request: operations.GetGetColoredPathwayRequest) -> operations.GetGetColoredPathwayResponse:
        r"""getColoredPathwayGet a colored image version of the pathway.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getColoredPathway"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGetColoredPathwayResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_get_curation_tag_history(self, request: operations.GetGetCurationTagHistoryRequest) -> operations.GetGetCurationTagHistoryResponse:
        r"""getCurationTagHistory
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getCurationTagHistory"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGetCurationTagHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_get_curation_tags(self, request: operations.GetGetCurationTagsRequest) -> operations.GetGetCurationTagsResponse:
        r"""getCurationTagsGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getCurationTags"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGetCurationTagsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_get_curation_tags_by_name(self, request: operations.GetGetCurationTagsByNameRequest) -> operations.GetGetCurationTagsByNameResponse:
        r"""getCurationTagsByNameGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getCurationTagsByName"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGetCurationTagsByNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_get_ontology_terms_by_pathway(self, request: operations.GetGetOntologyTermsByPathwayRequest) -> operations.GetGetOntologyTermsByPathwayResponse:
        r"""getOntologyTermsByPathway
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getOntologyTermsByPathway"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGetOntologyTermsByPathwayResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_get_pathway(self, request: operations.GetGetPathwayRequest) -> operations.GetGetPathwayResponse:
        r"""getPathway
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getPathway"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGetPathwayResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_get_pathway_as(self, request: operations.GetGetPathwayAsRequest) -> operations.GetGetPathwayAsResponse:
        r"""getPathwayAsDownload a pathway in the specified file format.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getPathwayAs"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGetPathwayAsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_get_pathway_history(self, request: operations.GetGetPathwayHistoryRequest) -> operations.GetGetPathwayHistoryResponse:
        r"""getPathwayHistoryGet the revision history of a pathway.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getPathwayHistory"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGetPathwayHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_get_pathway_info(self, request: operations.GetGetPathwayInfoRequest) -> operations.GetGetPathwayInfoResponse:
        r"""getPathwayInfoGet some general info about the pathway, such as the name, species, without downloading the GPML.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getPathwayInfo"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGetPathwayInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_get_pathways_by_ontology_term(self, request: operations.GetGetPathwaysByOntologyTermRequest) -> operations.GetGetPathwaysByOntologyTermResponse:
        r"""getPathwaysByOntologyTerm
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getPathwaysByOntologyTerm"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGetPathwaysByOntologyTermResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_get_pathways_by_parent_ontology_term(self, request: operations.GetGetPathwaysByParentOntologyTermRequest) -> operations.GetGetPathwaysByParentOntologyTermResponse:
        r"""getPathwaysByParentOntologyTerm
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getPathwaysByParentOntologyTerm"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGetPathwaysByParentOntologyTermResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_get_recent_changes(self, request: operations.GetGetRecentChangesRequest) -> operations.GetGetRecentChangesResponse:
        r"""getRecentChangesGet the recently changed pathways.<br>Note: the recent changes table only retains items for a limited time (2 months), so there is no guarantee that you will get all changes when the timestamp points to a date that is more than 2 months in the past.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getRecentChanges"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGetRecentChangesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_get_user_by_orcid(self, request: operations.GetGetUserByOrcidRequest) -> operations.GetGetUserByOrcidResponse:
        r"""getUserByOrcid
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getUserByOrcid"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGetUserByOrcidResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_get_xref_list(self, request: operations.GetGetXrefListRequest) -> operations.GetGetXrefListResponse:
        r"""getXrefList
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getXrefList"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGetXrefListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_list_organisms(self, request: operations.GetListOrganismsRequest) -> operations.GetListOrganismsResponse:
        r"""listOrganisms
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/listOrganisms"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListOrganismsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_list_pathways(self, request: operations.GetListPathwaysRequest) -> operations.GetListPathwaysResponse:
        r"""listPathways
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/listPathways"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetListPathwaysResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_login(self, request: operations.GetLoginRequest) -> operations.GetLoginResponse:
        r"""loginStart a logged in session, using an existing WikiPathways account. This function will return an authentication code that can be used to excecute methods that need authentication (e.g. updatePathway).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/login"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLoginResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_remove_curation_tag(self, request: operations.GetRemoveCurationTagRequest) -> operations.GetRemoveCurationTagResponse:
        r"""removeCurationTagRemove a curation tag from a pathway.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/removeCurationTag"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRemoveCurationTagResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_remove_ontology_tag(self, request: operations.GetRemoveOntologyTagRequest) -> operations.GetRemoveOntologyTagResponse:
        r"""removeOntologyTag
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/removeOntologyTag"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRemoveOntologyTagResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_save_curation_tag(self, request: operations.GetSaveCurationTagRequest) -> operations.GetSaveCurationTagResponse:
        r"""saveCurationTag
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/saveCurationTag"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSaveCurationTagResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_save_ontology_tag(self, request: operations.GetSaveOntologyTagRequest) -> operations.GetSaveOntologyTagResponse:
        r"""saveOntologyTag
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/saveOntologyTag"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSaveOntologyTagResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_update_pathway(self, request: operations.GetUpdatePathwayRequest) -> operations.GetUpdatePathwayResponse:
        r"""updatePathwayUpdate a pathway on the wiki with the given GPML code.<br>Note: To create/modify pathways via the web service, you need to have an account with web service write permissions. Please contact us to request write access for the web service.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/updatePathway"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUpdatePathwayResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_create_pathway(self, request: operations.PostCreatePathwayRequest) -> operations.PostCreatePathwayResponse:
        r"""createPathwayCreate a new pathway on the wiki with the given GPML code.<br>Note: To create/modify pathways via the web service, you need to have an account with web service write permissions. Please contact us to request write access for the web service.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/createPathway"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCreatePathwayResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    