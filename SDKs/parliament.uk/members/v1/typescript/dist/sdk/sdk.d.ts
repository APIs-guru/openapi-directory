import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://parliament.uk"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * getApiLocationBrowseLocationTypeLocationName - Returns a list of locations, both parent and child
    **/
    getApiLocationBrowseLocationTypeLocationName(req: operations.GetApiLocationBrowseLocationTypeLocationNameRequest, config?: AxiosRequestConfig): Promise<operations.GetApiLocationBrowseLocationTypeLocationNameResponse>;
    /**
     * getApiLocationConstituencySearch - Returns a list of constituencies
    **/
    getApiLocationConstituencySearch(req: operations.GetApiLocationConstituencySearchRequest, config?: AxiosRequestConfig): Promise<operations.GetApiLocationConstituencySearchResponse>;
    /**
     * getApiLocationConstituencyId - Returns a constituency by ID
    **/
    getApiLocationConstituencyId(req: operations.GetApiLocationConstituencyIdRequest, config?: AxiosRequestConfig): Promise<operations.GetApiLocationConstituencyIdResponse>;
    /**
     * getApiLocationConstituencyIdElectionResultLatest - Returns latest election result by constituency id
    **/
    getApiLocationConstituencyIdElectionResultLatest(req: operations.GetApiLocationConstituencyIdElectionResultLatestRequest, config?: AxiosRequestConfig): Promise<operations.GetApiLocationConstituencyIdElectionResultLatestResponse>;
    /**
     * getApiLocationConstituencyIdElectionResultElectionId - Returns an election result by constituency and election id
    **/
    getApiLocationConstituencyIdElectionResultElectionId(req: operations.GetApiLocationConstituencyIdElectionResultElectionIdRequest, config?: AxiosRequestConfig): Promise<operations.GetApiLocationConstituencyIdElectionResultElectionIdResponse>;
    /**
     * getApiLocationConstituencyIdElectionResults - Returns a list of election results by constituency ID
    **/
    getApiLocationConstituencyIdElectionResults(req: operations.GetApiLocationConstituencyIdElectionResultsRequest, config?: AxiosRequestConfig): Promise<operations.GetApiLocationConstituencyIdElectionResultsResponse>;
    /**
     * getApiLocationConstituencyIdGeometry - Returns geometry by constituency ID
    **/
    getApiLocationConstituencyIdGeometry(req: operations.GetApiLocationConstituencyIdGeometryRequest, config?: AxiosRequestConfig): Promise<operations.GetApiLocationConstituencyIdGeometryResponse>;
    /**
     * getApiLocationConstituencyIdRepresentations - Returns a list of representations by constituency ID
    **/
    getApiLocationConstituencyIdRepresentations(req: operations.GetApiLocationConstituencyIdRepresentationsRequest, config?: AxiosRequestConfig): Promise<operations.GetApiLocationConstituencyIdRepresentationsResponse>;
    /**
     * getApiLocationConstituencyIdSynopsis - Returns a synopsis by constituency ID
    **/
    getApiLocationConstituencyIdSynopsis(req: operations.GetApiLocationConstituencyIdSynopsisRequest, config?: AxiosRequestConfig): Promise<operations.GetApiLocationConstituencyIdSynopsisResponse>;
    /**
     * getApiLordsInterestsRegister - Returns a list of registered interests
    **/
    getApiLordsInterestsRegister(req: operations.GetApiLordsInterestsRegisterRequest, config?: AxiosRequestConfig): Promise<operations.GetApiLordsInterestsRegisterResponse>;
    /**
     * getApiLordsInterestsStaff - Returns a list of staff
    **/
    getApiLordsInterestsStaff(req: operations.GetApiLordsInterestsStaffRequest, config?: AxiosRequestConfig): Promise<operations.GetApiLordsInterestsStaffResponse>;
    /**
     * getApiMembersHistory - Return members by ID with list of their historical names, parties and memberships
    **/
    getApiMembersHistory(req: operations.GetApiMembersHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetApiMembersHistoryResponse>;
    /**
     * getApiMembersSearch - Returns a list of current members of the Commons or Lords
    **/
    getApiMembersSearch(req: operations.GetApiMembersSearchRequest, config?: AxiosRequestConfig): Promise<operations.GetApiMembersSearchResponse>;
    /**
     * getApiMembersSearchHistorical - Returns a list of members of the Commons or Lords
    **/
    getApiMembersSearchHistorical(req: operations.GetApiMembersSearchHistoricalRequest, config?: AxiosRequestConfig): Promise<operations.GetApiMembersSearchHistoricalResponse>;
    /**
     * getApiMembersId - Return member by ID
    **/
    getApiMembersId(req: operations.GetApiMembersIdRequest, config?: AxiosRequestConfig): Promise<operations.GetApiMembersIdResponse>;
    /**
     * getApiMembersIdBiography - Return biography of member by ID
    **/
    getApiMembersIdBiography(req: operations.GetApiMembersIdBiographyRequest, config?: AxiosRequestConfig): Promise<operations.GetApiMembersIdBiographyResponse>;
    /**
     * getApiMembersIdContact - Return list of contact details of member by ID
    **/
    getApiMembersIdContact(req: operations.GetApiMembersIdContactRequest, config?: AxiosRequestConfig): Promise<operations.GetApiMembersIdContactResponse>;
    /**
     * getApiMembersIdContributionSummary - Return contribution summary of member by ID
    **/
    getApiMembersIdContributionSummary(req: operations.GetApiMembersIdContributionSummaryRequest, config?: AxiosRequestConfig): Promise<operations.GetApiMembersIdContributionSummaryResponse>;
    /**
     * getApiMembersIdEdms - Return list of early day motions of member by ID
    **/
    getApiMembersIdEdms(req: operations.GetApiMembersIdEdmsRequest, config?: AxiosRequestConfig): Promise<operations.GetApiMembersIdEdmsResponse>;
    /**
     * getApiMembersIdExperience - Return experience of member by ID
    **/
    getApiMembersIdExperience(req: operations.GetApiMembersIdExperienceRequest, config?: AxiosRequestConfig): Promise<operations.GetApiMembersIdExperienceResponse>;
    /**
     * getApiMembersIdFocus - Return list of areas of focus of member by ID
    **/
    getApiMembersIdFocus(req: operations.GetApiMembersIdFocusRequest, config?: AxiosRequestConfig): Promise<operations.GetApiMembersIdFocusResponse>;
    /**
     * getApiMembersIdLatestElectionResult - Return latest election result of member by ID
    **/
    getApiMembersIdLatestElectionResult(req: operations.GetApiMembersIdLatestElectionResultRequest, config?: AxiosRequestConfig): Promise<operations.GetApiMembersIdLatestElectionResultResponse>;
    /**
     * getApiMembersIdPortrait - Return portrait of member by ID
    **/
    getApiMembersIdPortrait(req: operations.GetApiMembersIdPortraitRequest, config?: AxiosRequestConfig): Promise<operations.GetApiMembersIdPortraitResponse>;
    /**
     * getApiMembersIdPortraitUrl - Return portrait url of member by ID
    **/
    getApiMembersIdPortraitUrl(req: operations.GetApiMembersIdPortraitUrlRequest, config?: AxiosRequestConfig): Promise<operations.GetApiMembersIdPortraitUrlResponse>;
    /**
     * getApiMembersIdRegisteredInterests - Return list of registered interests of member by ID
    **/
    getApiMembersIdRegisteredInterests(req: operations.GetApiMembersIdRegisteredInterestsRequest, config?: AxiosRequestConfig): Promise<operations.GetApiMembersIdRegisteredInterestsResponse>;
    /**
     * getApiMembersIdStaff - Return list of staff of member by ID
    **/
    getApiMembersIdStaff(req: operations.GetApiMembersIdStaffRequest, config?: AxiosRequestConfig): Promise<operations.GetApiMembersIdStaffResponse>;
    /**
     * getApiMembersIdSynopsis - Return synopsis of member by ID
    **/
    getApiMembersIdSynopsis(req: operations.GetApiMembersIdSynopsisRequest, config?: AxiosRequestConfig): Promise<operations.GetApiMembersIdSynopsisResponse>;
    /**
     * getApiMembersIdThumbnail - Return thumbnail of member by ID
    **/
    getApiMembersIdThumbnail(req: operations.GetApiMembersIdThumbnailRequest, config?: AxiosRequestConfig): Promise<operations.GetApiMembersIdThumbnailResponse>;
    /**
     * getApiMembersIdThumbnailUrl - Return thumbnail url of member by ID
    **/
    getApiMembersIdThumbnailUrl(req: operations.GetApiMembersIdThumbnailUrlRequest, config?: AxiosRequestConfig): Promise<operations.GetApiMembersIdThumbnailUrlResponse>;
    /**
     * getApiMembersIdVoting - Return list of votes by member by ID
    **/
    getApiMembersIdVoting(req: operations.GetApiMembersIdVotingRequest, config?: AxiosRequestConfig): Promise<operations.GetApiMembersIdVotingResponse>;
    /**
     * getApiMembersIdWrittenQuestions - Return list of written questions by member by ID
    **/
    getApiMembersIdWrittenQuestions(req: operations.GetApiMembersIdWrittenQuestionsRequest, config?: AxiosRequestConfig): Promise<operations.GetApiMembersIdWrittenQuestionsResponse>;
    /**
     * getApiPartiesGetActiveHouse - Returns a list of current parties with at least one active member.
    **/
    getApiPartiesGetActiveHouse(req: operations.GetApiPartiesGetActiveHouseRequest, config?: AxiosRequestConfig): Promise<operations.GetApiPartiesGetActiveHouseResponse>;
    /**
     * getApiPartiesLordsByTypeForDate - Returns the composition of the House of Lords by peerage type.
    **/
    getApiPartiesLordsByTypeForDate(req: operations.GetApiPartiesLordsByTypeForDateRequest, config?: AxiosRequestConfig): Promise<operations.GetApiPartiesLordsByTypeForDateResponse>;
    /**
     * getApiPartiesStateOfThePartiesHouseForDate - Returns current state of parties
    **/
    getApiPartiesStateOfThePartiesHouseForDate(req: operations.GetApiPartiesStateOfThePartiesHouseForDateRequest, config?: AxiosRequestConfig): Promise<operations.GetApiPartiesStateOfThePartiesHouseForDateResponse>;
    /**
     * getApiPostsDepartmentsType - Returns a list of departments.
    **/
    getApiPostsDepartmentsType(req: operations.GetApiPostsDepartmentsTypeRequest, config?: AxiosRequestConfig): Promise<operations.GetApiPostsDepartmentsTypeResponse>;
    /**
     * getApiPostsGovernmentPosts - Returns a list of government posts.
    **/
    getApiPostsGovernmentPosts(req: operations.GetApiPostsGovernmentPostsRequest, config?: AxiosRequestConfig): Promise<operations.GetApiPostsGovernmentPostsResponse>;
    /**
     * getApiPostsOppositionPosts - Returns a list of opposition posts.
    **/
    getApiPostsOppositionPosts(req: operations.GetApiPostsOppositionPostsRequest, config?: AxiosRequestConfig): Promise<operations.GetApiPostsOppositionPostsResponse>;
    /**
     * getApiPostsSpeakerAndDeputiesForDate - Returns a list containing the speaker and deputy speakers.
    **/
    getApiPostsSpeakerAndDeputiesForDate(req: operations.GetApiPostsSpeakerAndDeputiesForDateRequest, config?: AxiosRequestConfig): Promise<operations.GetApiPostsSpeakerAndDeputiesForDateResponse>;
    /**
     * getApiPostsSpokespersons - Returns a list of spokespersons.
    **/
    getApiPostsSpokespersons(req: operations.GetApiPostsSpokespersonsRequest, config?: AxiosRequestConfig): Promise<operations.GetApiPostsSpokespersonsResponse>;
    /**
     * getApiReferenceAnsweringBodies - Returns a list of answering bodies.
    **/
    getApiReferenceAnsweringBodies(req: operations.GetApiReferenceAnsweringBodiesRequest, config?: AxiosRequestConfig): Promise<operations.GetApiReferenceAnsweringBodiesResponse>;
    /**
     * getApiReferenceDepartments - Returns a list of departments.
    **/
    getApiReferenceDepartments(req: operations.GetApiReferenceDepartmentsRequest, config?: AxiosRequestConfig): Promise<operations.GetApiReferenceDepartmentsResponse>;
    /**
     * getApiReferenceDepartmentsIdLogo - Returns department logo.
    **/
    getApiReferenceDepartmentsIdLogo(req: operations.GetApiReferenceDepartmentsIdLogoRequest, config?: AxiosRequestConfig): Promise<operations.GetApiReferenceDepartmentsIdLogoResponse>;
    /**
     * getApiReferencePolicyInterests - Returns a list of policy interest.
    **/
    getApiReferencePolicyInterests(config?: AxiosRequestConfig): Promise<operations.GetApiReferencePolicyInterestsResponse>;
}
export {};
