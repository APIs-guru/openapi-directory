import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://webservice.wikipathways.org"];
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
     * getFindInteractions - findInteractionsFind interactions defined in WikiPathways pathways.
    **/
    getFindInteractions(req: operations.GetFindInteractionsRequest, config?: AxiosRequestConfig): Promise<operations.GetFindInteractionsResponse>;
    /**
     * getFindPathwaysByLiterature - findPathwaysByLiterature
    **/
    getFindPathwaysByLiterature(req: operations.GetFindPathwaysByLiteratureRequest, config?: AxiosRequestConfig): Promise<operations.GetFindPathwaysByLiteratureResponse>;
    /**
     * getFindPathwaysByText - findPathwaysByText
    **/
    getFindPathwaysByText(req: operations.GetFindPathwaysByTextRequest, config?: AxiosRequestConfig): Promise<operations.GetFindPathwaysByTextResponse>;
    /**
     * getFindPathwaysByXref - findPathwaysByXref
    **/
    getFindPathwaysByXref(req: operations.GetFindPathwaysByXrefRequest, config?: AxiosRequestConfig): Promise<operations.GetFindPathwaysByXrefResponse>;
    /**
     * getGetColoredPathway - getColoredPathwayGet a colored image version of the pathway.
    **/
    getGetColoredPathway(req: operations.GetGetColoredPathwayRequest, config?: AxiosRequestConfig): Promise<operations.GetGetColoredPathwayResponse>;
    /**
     * getGetCurationTagHistory - getCurationTagHistory
    **/
    getGetCurationTagHistory(req: operations.GetGetCurationTagHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetGetCurationTagHistoryResponse>;
    /**
     * getGetCurationTags - getCurationTagsGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.
    **/
    getGetCurationTags(req: operations.GetGetCurationTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetGetCurationTagsResponse>;
    /**
     * getGetCurationTagsByName - getCurationTagsByNameGet all curation tags for the given tag name. Use this method if you want to find all pathways that are tagged with a specific curation tag.
    **/
    getGetCurationTagsByName(req: operations.GetGetCurationTagsByNameRequest, config?: AxiosRequestConfig): Promise<operations.GetGetCurationTagsByNameResponse>;
    /**
     * getGetOntologyTermsByPathway - getOntologyTermsByPathway
    **/
    getGetOntologyTermsByPathway(req: operations.GetGetOntologyTermsByPathwayRequest, config?: AxiosRequestConfig): Promise<operations.GetGetOntologyTermsByPathwayResponse>;
    /**
     * getGetPathway - getPathway
    **/
    getGetPathway(req: operations.GetGetPathwayRequest, config?: AxiosRequestConfig): Promise<operations.GetGetPathwayResponse>;
    /**
     * getGetPathwayAs - getPathwayAsDownload a pathway in the specified file format.
    **/
    getGetPathwayAs(req: operations.GetGetPathwayAsRequest, config?: AxiosRequestConfig): Promise<operations.GetGetPathwayAsResponse>;
    /**
     * getGetPathwayHistory - getPathwayHistoryGet the revision history of a pathway.
    **/
    getGetPathwayHistory(req: operations.GetGetPathwayHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetGetPathwayHistoryResponse>;
    /**
     * getGetPathwayInfo - getPathwayInfoGet some general info about the pathway, such as the name, species, without downloading the GPML.
    **/
    getGetPathwayInfo(req: operations.GetGetPathwayInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetGetPathwayInfoResponse>;
    /**
     * getGetPathwaysByOntologyTerm - getPathwaysByOntologyTerm
    **/
    getGetPathwaysByOntologyTerm(req: operations.GetGetPathwaysByOntologyTermRequest, config?: AxiosRequestConfig): Promise<operations.GetGetPathwaysByOntologyTermResponse>;
    /**
     * getGetPathwaysByParentOntologyTerm - getPathwaysByParentOntologyTerm
    **/
    getGetPathwaysByParentOntologyTerm(req: operations.GetGetPathwaysByParentOntologyTermRequest, config?: AxiosRequestConfig): Promise<operations.GetGetPathwaysByParentOntologyTermResponse>;
    /**
     * getGetRecentChanges - getRecentChangesGet the recently changed pathways.<br>Note: the recent changes table only retains items for a limited time (2 months), so there is no guarantee that you will get all changes when the timestamp points to a date that is more than 2 months in the past.
    **/
    getGetRecentChanges(req: operations.GetGetRecentChangesRequest, config?: AxiosRequestConfig): Promise<operations.GetGetRecentChangesResponse>;
    /**
     * getGetUserByOrcid - getUserByOrcid
    **/
    getGetUserByOrcid(req: operations.GetGetUserByOrcidRequest, config?: AxiosRequestConfig): Promise<operations.GetGetUserByOrcidResponse>;
    /**
     * getGetXrefList - getXrefList
    **/
    getGetXrefList(req: operations.GetGetXrefListRequest, config?: AxiosRequestConfig): Promise<operations.GetGetXrefListResponse>;
    /**
     * getListOrganisms - listOrganisms
    **/
    getListOrganisms(req: operations.GetListOrganismsRequest, config?: AxiosRequestConfig): Promise<operations.GetListOrganismsResponse>;
    /**
     * getListPathways - listPathways
    **/
    getListPathways(req: operations.GetListPathwaysRequest, config?: AxiosRequestConfig): Promise<operations.GetListPathwaysResponse>;
    /**
     * getLogin - loginStart a logged in session, using an existing WikiPathways account. This function will return an authentication code that can be used to excecute methods that need authentication (e.g. updatePathway).
    **/
    getLogin(req: operations.GetLoginRequest, config?: AxiosRequestConfig): Promise<operations.GetLoginResponse>;
    /**
     * getRemoveCurationTag - removeCurationTagRemove a curation tag from a pathway.
    **/
    getRemoveCurationTag(req: operations.GetRemoveCurationTagRequest, config?: AxiosRequestConfig): Promise<operations.GetRemoveCurationTagResponse>;
    /**
     * getRemoveOntologyTag - removeOntologyTag
    **/
    getRemoveOntologyTag(req: operations.GetRemoveOntologyTagRequest, config?: AxiosRequestConfig): Promise<operations.GetRemoveOntologyTagResponse>;
    /**
     * getSaveCurationTag - saveCurationTag
    **/
    getSaveCurationTag(req: operations.GetSaveCurationTagRequest, config?: AxiosRequestConfig): Promise<operations.GetSaveCurationTagResponse>;
    /**
     * getSaveOntologyTag - saveOntologyTag
    **/
    getSaveOntologyTag(req: operations.GetSaveOntologyTagRequest, config?: AxiosRequestConfig): Promise<operations.GetSaveOntologyTagResponse>;
    /**
     * getUpdatePathway - updatePathwayUpdate a pathway on the wiki with the given GPML code.<br>Note: To create/modify pathways via the web service, you need to have an account with web service write permissions. Please contact us to request write access for the web service.
    **/
    getUpdatePathway(req: operations.GetUpdatePathwayRequest, config?: AxiosRequestConfig): Promise<operations.GetUpdatePathwayResponse>;
    /**
     * postCreatePathway - createPathwayCreate a new pathway on the wiki with the given GPML code.<br>Note: To create/modify pathways via the web service, you need to have an account with web service write permissions. Please contact us to request write access for the web service.
    **/
    postCreatePathway(req: operations.PostCreatePathwayRequest, config?: AxiosRequestConfig): Promise<operations.PostCreatePathwayResponse>;
}
export {};
