import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    /**
     * Show me metadata of selected package
    **/
    LatestPackage(req: operations.LatestPackageRequest, config?: AxiosRequestConfig): Promise<operations.LatestPackageResponse>;
    /**
     * Delete system by inventory id
    **/
    Deletesystem(req: operations.DeletesystemRequest, config?: AxiosRequestConfig): Promise<operations.DeletesystemResponse>;
    /**
     * Show me details an advisory by given advisory name
    **/
    DetailAdvisory(req: operations.DetailAdvisoryRequest, config?: AxiosRequestConfig): Promise<operations.DetailAdvisoryResponse>;
    /**
     * Show me details about a system by given inventory id
    **/
    DetailSystem(req: operations.DetailSystemRequest, config?: AxiosRequestConfig): Promise<operations.DetailSystemResponse>;
    /**
     * Export applicable advisories for all my systems
    **/
    ExportAdvisories(req: operations.ExportAdvisoriesRequest, config?: AxiosRequestConfig): Promise<operations.ExportAdvisoriesResponse>;
    /**
     * Export systems for my account
    **/
    ExportAdvisorySystems(req: operations.ExportAdvisorySystemsRequest, config?: AxiosRequestConfig): Promise<operations.ExportAdvisorySystemsResponse>;
    /**
     * Show me all my systems which have a package installed
    **/
    ExportPackageSystems(req: operations.ExportPackageSystemsRequest, config?: AxiosRequestConfig): Promise<operations.ExportPackageSystemsResponse>;
    /**
     * Show me all installed packages across my systems
    **/
    ExportPackages(req: operations.ExportPackagesRequest, config?: AxiosRequestConfig): Promise<operations.ExportPackagesResponse>;
    /**
     * Export applicable advisories for all my systems
    **/
    ExportSystemAdvisories(req: operations.ExportSystemAdvisoriesRequest, config?: AxiosRequestConfig): Promise<operations.ExportSystemAdvisoriesResponse>;
    /**
     * Show me details about a system packages by given inventory id
    **/
    ExportSystemPackages(req: operations.ExportSystemPackagesRequest, config?: AxiosRequestConfig): Promise<operations.ExportSystemPackagesResponse>;
    /**
     * Export systems for my account
    **/
    ExportSystems(req: operations.ExportSystemsRequest, config?: AxiosRequestConfig): Promise<operations.ExportSystemsResponse>;
    /**
     * Show me all applicable advisories for all my systems
    **/
    ListAdvisories(req: operations.ListAdvisoriesRequest, config?: AxiosRequestConfig): Promise<operations.ListAdvisoriesResponse>;
    /**
     * Show me systems on which the given advisory is applicable
    **/
    ListAdvisorySystems(req: operations.ListAdvisorySystemsRequest, config?: AxiosRequestConfig): Promise<operations.ListAdvisorySystemsResponse>;
    /**
     * Show me all installed packages across my systems
    **/
    ListPackages(req: operations.ListPackagesRequest, config?: AxiosRequestConfig): Promise<operations.ListPackagesResponse>;
    /**
     * Show me advisories for a system by given inventory id
    **/
    ListSystemAdvisories(req: operations.ListSystemAdvisoriesRequest, config?: AxiosRequestConfig): Promise<operations.ListSystemAdvisoriesResponse>;
    /**
     * Show me all my systems
    **/
    ListSystems(req: operations.ListSystemsRequest, config?: AxiosRequestConfig): Promise<operations.ListSystemsResponse>;
    /**
     * Show me all my systems which have a package installed
    **/
    PackageSystems(req: operations.PackageSystemsRequest, config?: AxiosRequestConfig): Promise<operations.PackageSystemsResponse>;
    /**
     * Show me all package versions installed on some system
    **/
    PackageVersions(req: operations.PackageVersionsRequest, config?: AxiosRequestConfig): Promise<operations.PackageVersionsResponse>;
    /**
     * Show me details about a system packages by given inventory id
    **/
    SystemPackages(req: operations.SystemPackagesRequest, config?: AxiosRequestConfig): Promise<operations.SystemPackagesResponse>;
    /**
     * View advisory-system pairs for selected systems and advisories
    **/
    ViewAdvisoriesSystems(req: operations.ViewAdvisoriesSystemsRequest, config?: AxiosRequestConfig): Promise<operations.ViewAdvisoriesSystemsResponse>;
    /**
     * View system-advisory pairs for selected systems and advisories
    **/
    ViewSystemsAdvisories(req: operations.ViewSystemsAdvisoriesRequest, config?: AxiosRequestConfig): Promise<operations.ViewSystemsAdvisoriesResponse>;
}
export {};
