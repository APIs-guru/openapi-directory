import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PortfoliosVideos {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addVideoToPortfolio - Add a video to a portfolio
    **/
    addVideoToPortfolio(req: operations.AddVideoToPortfolioRequest, config?: AxiosRequestConfig): Promise<operations.AddVideoToPortfolioResponse>;
    /**
     * addVideoToPortfolioAlt1 - Add a video to a portfolio
    **/
    addVideoToPortfolioAlt1(req: operations.AddVideoToPortfolioAlt1Request, config?: AxiosRequestConfig): Promise<operations.AddVideoToPortfolioAlt1Response>;
    /**
     * deleteVideoFromPortfolio - Remove a video from a portfolio
    **/
    deleteVideoFromPortfolio(req: operations.DeleteVideoFromPortfolioRequest, config?: AxiosRequestConfig): Promise<operations.DeleteVideoFromPortfolioResponse>;
    /**
     * deleteVideoFromPortfolioAlt1 - Remove a video from a portfolio
    **/
    deleteVideoFromPortfolioAlt1(req: operations.DeleteVideoFromPortfolioAlt1Request, config?: AxiosRequestConfig): Promise<operations.DeleteVideoFromPortfolioAlt1Response>;
    /**
     * getPortfolioVideo - Get a specific video in a portfolio
    **/
    getPortfolioVideo(req: operations.GetPortfolioVideoRequest, config?: AxiosRequestConfig): Promise<operations.GetPortfolioVideoResponse>;
    /**
     * getPortfolioVideoAlt1 - Get a specific video in a portfolio
    **/
    getPortfolioVideoAlt1(req: operations.GetPortfolioVideoAlt1Request, config?: AxiosRequestConfig): Promise<operations.GetPortfolioVideoAlt1Response>;
    /**
     * getPortfolioVideos - Get all the videos in a portfolio
    **/
    getPortfolioVideos(req: operations.GetPortfolioVideosRequest, config?: AxiosRequestConfig): Promise<operations.GetPortfolioVideosResponse>;
    /**
     * getPortfolioVideosAlt1 - Get all the videos in a portfolio
    **/
    getPortfolioVideosAlt1(req: operations.GetPortfolioVideosAlt1Request, config?: AxiosRequestConfig): Promise<operations.GetPortfolioVideosAlt1Response>;
}
