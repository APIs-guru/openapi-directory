import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class DataSources {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * reloadAllDatasourcesAllNodes - Update properties from data sources
     *
     * Update properties from all data source on all nodes. The call is asynchronous.
    **/
    reloadAllDatasourcesAllNodes(config?: AxiosRequestConfig): Promise<operations.ReloadAllDatasourcesAllNodesResponse>;
    /**
     * reloadAllDatasourcesOneNode - Update properties for one node from all data sources
     *
     * Update properties from all data sources on one nodes. The call is asynchronous.
    **/
    reloadAllDatasourcesOneNode(req: operations.ReloadAllDatasourcesOneNodeRequest, config?: AxiosRequestConfig): Promise<operations.ReloadAllDatasourcesOneNodeResponse>;
    /**
     * reloadOneDatasourceAllNodes - Update properties from data sources
     *
     * Update properties from all data source on all nodes. The call is asynchronous.
    **/
    reloadOneDatasourceAllNodes(req: operations.ReloadOneDatasourceAllNodesRequest, config?: AxiosRequestConfig): Promise<operations.ReloadOneDatasourceAllNodesResponse>;
    /**
     * reloadOneDatasourceOneNode - Update properties for one node from a data source
     *
     * Update properties from a data source on one nodes. The call is asynchronous.
    **/
    reloadOneDatasourceOneNode(req: operations.ReloadOneDatasourceOneNodeRequest, config?: AxiosRequestConfig): Promise<operations.ReloadOneDatasourceOneNodeResponse>;
    /**
     * createDataSource - Create a data source
     *
     * Create a new data source
    **/
    createDataSource(req: operations.CreateDataSourceRequest, config?: AxiosRequestConfig): Promise<operations.CreateDataSourceResponse>;
    /**
     * deleteDataSource - Delete a data source
     *
     * Delete a data source configuration
    **/
    deleteDataSource(req: operations.DeleteDataSourceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDataSourceResponse>;
    /**
     * getAllDataSources - List all data sources
     *
     * Get the configuration of all present data sources
    **/
    getAllDataSources(config?: AxiosRequestConfig): Promise<operations.GetAllDataSourcesResponse>;
    /**
     * getDataSource - Get data source configuration
     *
     * Get the configuration of a data source
    **/
    getDataSource(req: operations.GetDataSourceRequest, config?: AxiosRequestConfig): Promise<operations.GetDataSourceResponse>;
    /**
     * updateDataSource - Update a data source configuration
     *
     * Update the configuration of a data source
    **/
    updateDataSource(req: operations.UpdateDataSourceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDataSourceResponse>;
}
