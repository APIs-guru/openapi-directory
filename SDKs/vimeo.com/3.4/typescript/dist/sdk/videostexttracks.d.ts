import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class VideosTextTracks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createTextTrack - Add a text track to a video
     *
     * For additional information, see our [text track upload guide](https://developer.vimeo.com/api/upload/texttracks).
    **/
    createTextTrack(req: operations.CreateTextTrackRequest, config?: AxiosRequestConfig): Promise<operations.CreateTextTrackResponse>;
    /**
     * createTextTrackAlt1 - Add a text track to a video
     *
     * For additional information, see our [text track upload guide](https://developer.vimeo.com/api/upload/texttracks).
    **/
    createTextTrackAlt1(req: operations.CreateTextTrackAlt1Request, config?: AxiosRequestConfig): Promise<operations.CreateTextTrackAlt1Response>;
    /**
     * deleteTextTrack - Delete a text track
    **/
    deleteTextTrack(req: operations.DeleteTextTrackRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTextTrackResponse>;
    /**
     * editTextTrack - Edit a text track
    **/
    editTextTrack(req: operations.EditTextTrackRequest, config?: AxiosRequestConfig): Promise<operations.EditTextTrackResponse>;
    /**
     * getTextTrack - Get a specific text track
    **/
    getTextTrack(req: operations.GetTextTrackRequest, config?: AxiosRequestConfig): Promise<operations.GetTextTrackResponse>;
    /**
     * getTextTracks - Get all the text tracks of a video
    **/
    getTextTracks(req: operations.GetTextTracksRequest, config?: AxiosRequestConfig): Promise<operations.GetTextTracksResponse>;
    /**
     * getTextTracksAlt1 - Get all the text tracks of a video
    **/
    getTextTracksAlt1(req: operations.GetTextTracksAlt1Request, config?: AxiosRequestConfig): Promise<operations.GetTextTracksAlt1Response>;
}
