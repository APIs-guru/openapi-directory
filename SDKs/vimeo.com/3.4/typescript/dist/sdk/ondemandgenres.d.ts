import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class OnDemandGenres {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addVodGenre - Add a genre to an On Demand page
    **/
    addVodGenre(req: operations.AddVodGenreRequest, config?: AxiosRequestConfig): Promise<operations.AddVodGenreResponse>;
    /**
     * deleteVodGenre - Remove a genre from an On Demand page
    **/
    deleteVodGenre(req: operations.DeleteVodGenreRequest, config?: AxiosRequestConfig): Promise<operations.DeleteVodGenreResponse>;
    /**
     * getGenreVod - Get a specific On Demand page in a genre
     *
     * Check whether a genre contains an On Demand page.
    **/
    getGenreVod(req: operations.GetGenreVodRequest, config?: AxiosRequestConfig): Promise<operations.GetGenreVodResponse>;
    /**
     * getGenreVods - Get all the On Demand pages in a genre
    **/
    getGenreVods(req: operations.GetGenreVodsRequest, config?: AxiosRequestConfig): Promise<operations.GetGenreVodsResponse>;
    /**
     * getVodGenre - Get a specific On Demand genre
    **/
    getVodGenre(req: operations.GetVodGenreRequest, config?: AxiosRequestConfig): Promise<operations.GetVodGenreResponse>;
    /**
     * getVodGenreByOndemandId - Check whether an On Demand page belongs to a genre
    **/
    getVodGenreByOndemandId(req: operations.GetVodGenreByOndemandIdRequest, config?: AxiosRequestConfig): Promise<operations.GetVodGenreByOndemandIdResponse>;
    /**
     * getVodGenres - Get all On Demand genres
    **/
    getVodGenres(config?: AxiosRequestConfig): Promise<operations.GetVodGenresResponse>;
    /**
     * getVodGenresByOndemandId - Get all the genres of an On Demand page
    **/
    getVodGenresByOndemandId(req: operations.GetVodGenresByOndemandIdRequest, config?: AxiosRequestConfig): Promise<operations.GetVodGenresByOndemandIdResponse>;
}
