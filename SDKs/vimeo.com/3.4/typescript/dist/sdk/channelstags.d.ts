import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ChannelsTags {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addChannelTag - Add a specific tag to a channel
     *
     * This method adds a single tag to the specified channel.
    **/
    addChannelTag(req: operations.AddChannelTagRequest, config?: AxiosRequestConfig): Promise<operations.AddChannelTagResponse>;
    /**
     * addTagsToChannel - Add a list of tags to a channel
     *
     * This method adds multiple tags to the specified channel.
    **/
    addTagsToChannel(req: operations.AddTagsToChannelRequest, config?: AxiosRequestConfig): Promise<operations.AddTagsToChannelResponse>;
    /**
     * checkIfChannelHasTag - Check if a tag has been added to a channel
     *
     * This method determines whether a specific tag has been added to the channel in question.
    **/
    checkIfChannelHasTag(req: operations.CheckIfChannelHasTagRequest, config?: AxiosRequestConfig): Promise<operations.CheckIfChannelHasTagResponse>;
    /**
     * deleteTagFromChannel - Remove a tag from a channel
     *
     * This method removes a single tag from the specified channel.
    **/
    deleteTagFromChannel(req: operations.DeleteTagFromChannelRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTagFromChannelResponse>;
    /**
     * getChannelTags - Get all the tags that have been added to a channel
     *
     * This method gets all the tags that have been added to the specified channel.
    **/
    getChannelTags(req: operations.GetChannelTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetChannelTagsResponse>;
}
