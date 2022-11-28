import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Groups {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * contactModerators - Contact group moderators
    **/
    contactModerators(req: operations.ContactModeratorsRequest, config?: AxiosRequestConfig): Promise<operations.ContactModeratorsResponse>;
    /**
     * getGroup - Retrieve a group
    **/
    getGroup(req: operations.GetGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetGroupResponse>;
    /**
     * getGroupsByIds - Retrieve multiple groups
    **/
    getGroupsByIds(req: operations.GetGroupsByIdsRequest, config?: AxiosRequestConfig): Promise<operations.GetGroupsByIdsResponse>;
    /**
     * joinGroups - Join groups
     *
     * Request membership to one or more groups. <br /><br /> NOTE: Any group with a has_questions field set to true will also require answers to the groups' new member questionnaire to be submitted.  Groups waiting for answers will have their membership field set to 'pending-questions'.  And the questionnaire that needs to be answered can be found in the membership.questionnaire field of the group after a subscribe request is made to that group.
     *
    **/
    joinGroups(req: operations.JoinGroupsRequest, config?: AxiosRequestConfig): Promise<operations.JoinGroupsResponse>;
    /**
     * leaveGroup - Leave a group
    **/
    leaveGroup(req: operations.LeaveGroupRequest, config?: AxiosRequestConfig): Promise<operations.LeaveGroupResponse>;
    /**
     * searchGroups - Search groups
    **/
    searchGroups(req: operations.SearchGroupsRequest, config?: AxiosRequestConfig): Promise<operations.SearchGroupsResponse>;
    /**
     * submitAnswers - Submit group answers
     *
     * Submits answers to a groups' membership questionnaire. <br /><br /> The request body should be a JSON object mapping each question from the group membership.questionnaire.questions field to an answer (eg. {"Where do you live?": "New York City"} ). All questions are required so no null or empty string answers are allowed.
     *
    **/
    submitAnswers(req: operations.SubmitAnswersRequest, config?: AxiosRequestConfig): Promise<operations.SubmitAnswersResponse>;
}
