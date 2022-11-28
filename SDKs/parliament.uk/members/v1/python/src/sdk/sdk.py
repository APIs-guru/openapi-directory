

import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://parliament.uk",
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
        
    
    
    
    def get_api_location_browse_location_type_location_name_(self, request: operations.GetAPILocationBrowseLocationTypeLocationNameRequest) -> operations.GetAPILocationBrowseLocationTypeLocationNameResponse:
        r"""Returns a list of locations, both parent and child
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/Location/Browse/{locationType}/{locationName}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPILocationBrowseLocationTypeLocationNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LocationItem])
                res.location_item = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LocationItem])
                res.location_item = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_api_location_constituency_search(self, request: operations.GetAPILocationConstituencySearchRequest) -> operations.GetAPILocationConstituencySearchResponse:
        r"""Returns a list of constituencies
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/Location/Constituency/Search"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPILocationConstituencySearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConstituencyMembersServiceSearchResult])
                res.constituency_members_service_search_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConstituencyMembersServiceSearchResult])
                res.constituency_members_service_search_result = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def get_api_location_constituency_id_(self, request: operations.GetAPILocationConstituencyIDRequest) -> operations.GetAPILocationConstituencyIDResponse:
        r"""Returns a constituency by ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/Location/Constituency/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPILocationConstituencyIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConstituencyItem])
                res.constituency_item = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConstituencyItem])
                res.constituency_item = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_api_location_constituency_id_election_result_latest(self, request: operations.GetAPILocationConstituencyIDElectionResultLatestRequest) -> operations.GetAPILocationConstituencyIDElectionResultLatestResponse:
        r"""Returns latest election result by constituency id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/Location/Constituency/{id}/ElectionResult/Latest", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPILocationConstituencyIDElectionResultLatestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ElectionResultItem])
                res.election_result_item = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ElectionResultItem])
                res.election_result_item = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_api_location_constituency_id_election_result_election_id_(self, request: operations.GetAPILocationConstituencyIDElectionResultElectionIDRequest) -> operations.GetAPILocationConstituencyIDElectionResultElectionIDResponse:
        r"""Returns an election result by constituency and election id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/Location/Constituency/{id}/ElectionResult/{electionId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPILocationConstituencyIDElectionResultElectionIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ElectionResultItem])
                res.election_result_item = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ElectionResultItem])
                res.election_result_item = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_api_location_constituency_id_election_results(self, request: operations.GetAPILocationConstituencyIDElectionResultsRequest) -> operations.GetAPILocationConstituencyIDElectionResultsResponse:
        r"""Returns a list of election results by constituency ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/Location/Constituency/{id}/ElectionResults", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPILocationConstituencyIDElectionResultsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ElectionResultListItem])
                res.election_result_list_item = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ElectionResultListItem])
                res.election_result_list_item = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_api_location_constituency_id_geometry(self, request: operations.GetAPILocationConstituencyIDGeometryRequest) -> operations.GetAPILocationConstituencyIDGeometryResponse:
        r"""Returns geometry by constituency ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/Location/Constituency/{id}/Geometry", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPILocationConstituencyIDGeometryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StringItem])
                res.string_item = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StringItem])
                res.string_item = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_api_location_constituency_id_representations(self, request: operations.GetAPILocationConstituencyIDRepresentationsRequest) -> operations.GetAPILocationConstituencyIDRepresentationsResponse:
        r"""Returns a list of representations by constituency ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/Location/Constituency/{id}/Representations", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPILocationConstituencyIDRepresentationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConstituencyRepresentationListItem])
                res.constituency_representation_list_item = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ConstituencyRepresentationListItem])
                res.constituency_representation_list_item = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_api_location_constituency_id_synopsis(self, request: operations.GetAPILocationConstituencyIDSynopsisRequest) -> operations.GetAPILocationConstituencyIDSynopsisResponse:
        r"""Returns a synopsis by constituency ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/Location/Constituency/{id}/Synopsis", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPILocationConstituencyIDSynopsisResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StringItem])
                res.string_item = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StringItem])
                res.string_item = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_api_lords_interests_register(self, request: operations.GetAPILordsInterestsRegisterRequest) -> operations.GetAPILordsInterestsRegisterResponse:
        r"""Returns a list of registered interests
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/LordsInterests/Register"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPILordsInterestsRegisterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MembersInterestsMembersServiceSearchResult])
                res.members_interests_members_service_search_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MembersInterestsMembersServiceSearchResult])
                res.members_interests_members_service_search_result = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def get_api_lords_interests_staff(self, request: operations.GetAPILordsInterestsStaffRequest) -> operations.GetAPILordsInterestsStaffResponse:
        r"""Returns a list of staff
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/LordsInterests/Staff"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPILordsInterestsStaffResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MembersStaffMembersServiceSearchResult])
                res.members_staff_members_service_search_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MembersStaffMembersServiceSearchResult])
                res.members_staff_members_service_search_result = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def get_api_members_history(self, request: operations.GetAPIMembersHistoryRequest) -> operations.GetAPIMembersHistoryResponse:
        r"""Return members by ID with list of their historical names, parties and memberships
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/Members/History"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIMembersHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.MemberHistoryItem]])
                res.member_history_items = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.MemberHistoryItem]])
                res.member_history_items = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_api_members_search(self, request: operations.GetAPIMembersSearchRequest) -> operations.GetAPIMembersSearchResponse:
        r"""Returns a list of current members of the Commons or Lords
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/Members/Search"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIMembersSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MemberMembersServiceSearchResult])
                res.member_members_service_search_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MemberMembersServiceSearchResult])
                res.member_members_service_search_result = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def get_api_members_search_historical(self, request: operations.GetAPIMembersSearchHistoricalRequest) -> operations.GetAPIMembersSearchHistoricalResponse:
        r"""Returns a list of members of the Commons or Lords
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/Members/SearchHistorical"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIMembersSearchHistoricalResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MemberMembersServiceSearchResult])
                res.member_members_service_search_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MemberMembersServiceSearchResult])
                res.member_members_service_search_result = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def get_api_members_id_(self, request: operations.GetAPIMembersIDRequest) -> operations.GetAPIMembersIDResponse:
        r"""Return member by ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/Members/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIMembersIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MemberItem])
                res.member_item = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MemberItem])
                res.member_item = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_api_members_id_biography(self, request: operations.GetAPIMembersIDBiographyRequest) -> operations.GetAPIMembersIDBiographyResponse:
        r"""Return biography of member by ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/Members/{id}/Biography", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIMembersIDBiographyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MemberBiographyItem])
                res.member_biography_item = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MemberBiographyItem])
                res.member_biography_item = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_api_members_id_contact(self, request: operations.GetAPIMembersIDContactRequest) -> operations.GetAPIMembersIDContactResponse:
        r"""Return list of contact details of member by ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/Members/{id}/Contact", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIMembersIDContactResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ContactInformationListItem])
                res.contact_information_list_item = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ContactInformationListItem])
                res.contact_information_list_item = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_api_members_id_contribution_summary(self, request: operations.GetAPIMembersIDContributionSummaryRequest) -> operations.GetAPIMembersIDContributionSummaryResponse:
        r"""Return contribution summary of member by ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/Members/{id}/ContributionSummary", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIMembersIDContributionSummaryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DebateContributionMembersServiceSearchResult])
                res.debate_contribution_members_service_search_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DebateContributionMembersServiceSearchResult])
                res.debate_contribution_members_service_search_result = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_api_members_id_edms(self, request: operations.GetAPIMembersIDEdmsRequest) -> operations.GetAPIMembersIDEdmsResponse:
        r"""Return list of early day motions of member by ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/Members/{id}/Edms", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIMembersIDEdmsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EarlyDayMotionMembersServiceSearchResult])
                res.early_day_motion_members_service_search_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EarlyDayMotionMembersServiceSearchResult])
                res.early_day_motion_members_service_search_result = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_api_members_id_experience(self, request: operations.GetAPIMembersIDExperienceRequest) -> operations.GetAPIMembersIDExperienceResponse:
        r"""Return experience of member by ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/Members/{id}/Experience", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIMembersIDExperienceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BiographyExperienceListItem])
                res.biography_experience_list_item = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BiographyExperienceListItem])
                res.biography_experience_list_item = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_api_members_id_focus(self, request: operations.GetAPIMembersIDFocusRequest) -> operations.GetAPIMembersIDFocusResponse:
        r"""Return list of areas of focus of member by ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/Members/{id}/Focus", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIMembersIDFocusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MemberFocusListItem])
                res.member_focus_list_item = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MemberFocusListItem])
                res.member_focus_list_item = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_api_members_id_latest_election_result(self, request: operations.GetAPIMembersIDLatestElectionResultRequest) -> operations.GetAPIMembersIDLatestElectionResultResponse:
        r"""Return latest election result of member by ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/Members/{id}/LatestElectionResult", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIMembersIDLatestElectionResultResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ElectionResultItem])
                res.election_result_item = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ElectionResultItem])
                res.election_result_item = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_api_members_id_portrait(self, request: operations.GetAPIMembersIDPortraitRequest) -> operations.GetAPIMembersIDPortraitResponse:
        r"""Return portrait of member by ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/Members/{id}/Portrait", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIMembersIDPortraitResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_api_members_id_portrait_url(self, request: operations.GetAPIMembersIDPortraitURLRequest) -> operations.GetAPIMembersIDPortraitURLResponse:
        r"""Return portrait url of member by ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/Members/{id}/PortraitUrl", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIMembersIDPortraitURLResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StringItem])
                res.string_item = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StringItem])
                res.string_item = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_api_members_id_registered_interests(self, request: operations.GetAPIMembersIDRegisteredInterestsRequest) -> operations.GetAPIMembersIDRegisteredInterestsResponse:
        r"""Return list of registered interests of member by ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/Members/{id}/RegisteredInterests", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIMembersIDRegisteredInterestsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RegisteredInterestCategoryListItem])
                res.registered_interest_category_list_item = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RegisteredInterestCategoryListItem])
                res.registered_interest_category_list_item = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_api_members_id_staff(self, request: operations.GetAPIMembersIDStaffRequest) -> operations.GetAPIMembersIDStaffResponse:
        r"""Return list of staff of member by ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/Members/{id}/Staff", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIMembersIDStaffResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StaffListItem])
                res.staff_list_item = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StaffListItem])
                res.staff_list_item = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_api_members_id_synopsis(self, request: operations.GetAPIMembersIDSynopsisRequest) -> operations.GetAPIMembersIDSynopsisResponse:
        r"""Return synopsis of member by ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/Members/{id}/Synopsis", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIMembersIDSynopsisResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StringItem])
                res.string_item = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StringItem])
                res.string_item = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_api_members_id_thumbnail(self, request: operations.GetAPIMembersIDThumbnailRequest) -> operations.GetAPIMembersIDThumbnailResponse:
        r"""Return thumbnail of member by ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/Members/{id}/Thumbnail", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIMembersIDThumbnailResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_api_members_id_thumbnail_url(self, request: operations.GetAPIMembersIDThumbnailURLRequest) -> operations.GetAPIMembersIDThumbnailURLResponse:
        r"""Return thumbnail url of member by ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/Members/{id}/ThumbnailUrl", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIMembersIDThumbnailURLResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StringItem])
                res.string_item = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StringItem])
                res.string_item = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_api_members_id_voting(self, request: operations.GetAPIMembersIDVotingRequest) -> operations.GetAPIMembersIDVotingResponse:
        r"""Return list of votes by member by ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/Members/{id}/Voting", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIMembersIDVotingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VoteMembersServiceSearchResult])
                res.vote_members_service_search_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VoteMembersServiceSearchResult])
                res.vote_members_service_search_result = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_api_members_id_written_questions(self, request: operations.GetAPIMembersIDWrittenQuestionsRequest) -> operations.GetAPIMembersIDWrittenQuestionsResponse:
        r"""Return list of written questions by member by ID
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/Members/{id}/WrittenQuestions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIMembersIDWrittenQuestionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.WrittenQuestionMembersServiceSearchResult])
                res.written_question_members_service_search_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.WrittenQuestionMembersServiceSearchResult])
                res.written_question_members_service_search_result = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_api_parties_get_active_house_(self, request: operations.GetAPIPartiesGetActiveHouseRequest) -> operations.GetAPIPartiesGetActiveHouseResponse:
        r"""Returns a list of current parties with at least one active member.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/Parties/GetActive/{house}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIPartiesGetActiveHouseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartyMembersServiceSearchResult])
                res.party_members_service_search_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartyMembersServiceSearchResult])
                res.party_members_service_search_result = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def get_api_parties_lords_by_type_for_date_(self, request: operations.GetAPIPartiesLordsByTypeForDateRequest) -> operations.GetAPIPartiesLordsByTypeForDateResponse:
        r"""Returns the composition of the House of Lords by peerage type.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/Parties/LordsByType/{forDate}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIPartiesLordsByTypeForDateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LordsByTypeMembersServiceSearchResult])
                res.lords_by_type_members_service_search_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LordsByTypeMembersServiceSearchResult])
                res.lords_by_type_members_service_search_result = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def get_api_parties_state_of_the_parties_house_for_date_(self, request: operations.GetAPIPartiesStateOfThePartiesHouseForDateRequest) -> operations.GetAPIPartiesStateOfThePartiesHouseForDateResponse:
        r"""Returns current state of parties
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/Parties/StateOfTheParties/{house}/{forDate}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIPartiesStateOfThePartiesHouseForDateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartySeatCountMembersServiceSearchResult])
                res.party_seat_count_members_service_search_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartySeatCountMembersServiceSearchResult])
                res.party_seat_count_members_service_search_result = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def get_api_posts_departments_type_(self, request: operations.GetAPIPostsDepartmentsTypeRequest) -> operations.GetAPIPostsDepartmentsTypeResponse:
        r"""Returns a list of departments.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/Posts/Departments/{type}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIPostsDepartmentsTypeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.GovernmentDepartment]])
                res.government_departments = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.GovernmentDepartment]])
                res.government_departments = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 404:
            pass

        return res

    
    def get_api_posts_government_posts(self, request: operations.GetAPIPostsGovernmentPostsRequest) -> operations.GetAPIPostsGovernmentPostsResponse:
        r"""Returns a list of government posts.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/Posts/GovernmentPosts"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIPostsGovernmentPostsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.GovernmentOppositionPostItem]])
                res.government_opposition_post_items = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.GovernmentOppositionPostItem]])
                res.government_opposition_post_items = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_api_posts_opposition_posts(self, request: operations.GetAPIPostsOppositionPostsRequest) -> operations.GetAPIPostsOppositionPostsResponse:
        r"""Returns a list of opposition posts.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/Posts/OppositionPosts"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIPostsOppositionPostsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.GovernmentOppositionPostItem]])
                res.government_opposition_post_items = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.GovernmentOppositionPostItem]])
                res.government_opposition_post_items = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_api_posts_speaker_and_deputies_for_date_(self, request: operations.GetAPIPostsSpeakerAndDeputiesForDateRequest) -> operations.GetAPIPostsSpeakerAndDeputiesForDateResponse:
        r"""Returns a list containing the speaker and deputy speakers.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/Posts/SpeakerAndDeputies/{forDate}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIPostsSpeakerAndDeputiesForDateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.MemberItem]])
                res.member_items = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.MemberItem]])
                res.member_items = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_api_posts_spokespersons(self, request: operations.GetAPIPostsSpokespersonsRequest) -> operations.GetAPIPostsSpokespersonsResponse:
        r"""Returns a list of spokespersons.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/Posts/Spokespersons"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIPostsSpokespersonsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.GovernmentOppositionPostItem]])
                res.government_opposition_post_items = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.GovernmentOppositionPostItem]])
                res.government_opposition_post_items = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_api_reference_answering_bodies(self, request: operations.GetAPIReferenceAnsweringBodiesRequest) -> operations.GetAPIReferenceAnsweringBodiesResponse:
        r"""Returns a list of answering bodies.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/Reference/AnsweringBodies"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIReferenceAnsweringBodiesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.AnsweringBody]])
                res.answering_bodies = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.AnsweringBody]])
                res.answering_bodies = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def get_api_reference_departments(self, request: operations.GetAPIReferenceDepartmentsRequest) -> operations.GetAPIReferenceDepartmentsResponse:
        r"""Returns a list of departments.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/Reference/Departments"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIReferenceDepartmentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.GovernmentDepartment]])
                res.government_departments = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.GovernmentDepartment]])
                res.government_departments = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def get_api_reference_departments_id_logo(self, request: operations.GetAPIReferenceDepartmentsIDLogoRequest) -> operations.GetAPIReferenceDepartmentsIDLogoResponse:
        r"""Returns department logo.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/Reference/Departments/{id}/Logo", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIReferenceDepartmentsIDLogoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_api_reference_policy_interests(self) -> operations.GetAPIReferencePolicyInterestsResponse:
        r"""Returns a list of policy interest.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/Reference/PolicyInterests"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIReferencePolicyInterestsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.GenericReferenceData]])
                res.generic_reference_data = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.GenericReferenceData]])
                res.generic_reference_data = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    