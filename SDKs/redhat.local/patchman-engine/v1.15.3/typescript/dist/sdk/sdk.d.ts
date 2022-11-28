import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://redhat.local", "https://redhat.local/"];
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
     * latestPackage - Show me metadata of selected package
     *
     * Show me metadata of selected package
    **/
    latestPackage(req: operations.LatestPackageRequest, config?: AxiosRequestConfig): Promise<operations.LatestPackageResponse>;
    /**
     * deletesystem - Delete system by inventory id
     *
     * Delete system by inventory id
    **/
    deletesystem(req: operations.DeletesystemRequest, config?: AxiosRequestConfig): Promise<operations.DeletesystemResponse>;
    /**
     * detailAdvisory - Show me details an advisory by given advisory name
     *
     * Show me details an advisory by given advisory name
    **/
    detailAdvisory(req: operations.DetailAdvisoryRequest, config?: AxiosRequestConfig): Promise<operations.DetailAdvisoryResponse>;
    /**
     * detailSystem - Show me details about a system by given inventory id
     *
     * Show me details about a system by given inventory id
    **/
    detailSystem(req: operations.DetailSystemRequest, config?: AxiosRequestConfig): Promise<operations.DetailSystemResponse>;
    /**
     * exportAdvisories - Export applicable advisories for all my systems
     *
     * Export applicable advisories for all my systems
    **/
    exportAdvisories(req: operations.ExportAdvisoriesRequest, config?: AxiosRequestConfig): Promise<operations.ExportAdvisoriesResponse>;
    /**
     * exportAdvisorySystems - Export systems for my account
     *
     * Export systems for my account
    **/
    exportAdvisorySystems(req: operations.ExportAdvisorySystemsRequest, config?: AxiosRequestConfig): Promise<operations.ExportAdvisorySystemsResponse>;
    /**
     * exportPackageSystems - Show me all my systems which have a package installed
     *
     * Show me all my systems which have a package installed
    **/
    exportPackageSystems(req: operations.ExportPackageSystemsRequest, config?: AxiosRequestConfig): Promise<operations.ExportPackageSystemsResponse>;
    /**
     * exportPackages - Show me all installed packages across my systems
     *
     * Show me all installed packages across my systems
    **/
    exportPackages(req: operations.ExportPackagesRequest, config?: AxiosRequestConfig): Promise<operations.ExportPackagesResponse>;
    /**
     * exportSystemAdvisories - Export applicable advisories for all my systems
     *
     * Export applicable advisories for all my systems
    **/
    exportSystemAdvisories(req: operations.ExportSystemAdvisoriesRequest, config?: AxiosRequestConfig): Promise<operations.ExportSystemAdvisoriesResponse>;
    /**
     * exportSystemPackages - Show me details about a system packages by given inventory id
     *
     * Show me details about a system packages by given inventory id
    **/
    exportSystemPackages(req: operations.ExportSystemPackagesRequest, config?: AxiosRequestConfig): Promise<operations.ExportSystemPackagesResponse>;
    /**
     * exportSystems - Export systems for my account
     *
     * Export systems for my account
    **/
    exportSystems(req: operations.ExportSystemsRequest, config?: AxiosRequestConfig): Promise<operations.ExportSystemsResponse>;
    /**
     * listAdvisories - Show me all applicable advisories for all my systems
     *
     * Show me all applicable advisories for all my systems
    **/
    listAdvisories(req: operations.ListAdvisoriesRequest, config?: AxiosRequestConfig): Promise<operations.ListAdvisoriesResponse>;
    /**
     * listAdvisorySystems - Show me systems on which the given advisory is applicable
     *
     * Show me systems on which the given advisory is applicable
    **/
    listAdvisorySystems(req: operations.ListAdvisorySystemsRequest, config?: AxiosRequestConfig): Promise<operations.ListAdvisorySystemsResponse>;
    /**
     * listPackages - Show me all installed packages across my systems
     *
     * Show me all installed packages across my systems
    **/
    listPackages(req: operations.ListPackagesRequest, config?: AxiosRequestConfig): Promise<operations.ListPackagesResponse>;
    /**
     * listSystemAdvisories - Show me advisories for a system by given inventory id
     *
     * Show me advisories for a system by given inventory id
    **/
    listSystemAdvisories(req: operations.ListSystemAdvisoriesRequest, config?: AxiosRequestConfig): Promise<operations.ListSystemAdvisoriesResponse>;
    /**
     * listSystems - Show me all my systems
     *
     * Show me all my systems
    **/
    listSystems(req: operations.ListSystemsRequest, config?: AxiosRequestConfig): Promise<operations.ListSystemsResponse>;
    /**
     * packageSystems - Show me all my systems which have a package installed
     *
     * Show me all my systems which have a package installed
    **/
    packageSystems(req: operations.PackageSystemsRequest, config?: AxiosRequestConfig): Promise<operations.PackageSystemsResponse>;
    /**
     * packageVersions - Show me all package versions installed on some system
     *
     * Show me all package versions installed on some system
    **/
    packageVersions(req: operations.PackageVersionsRequest, config?: AxiosRequestConfig): Promise<operations.PackageVersionsResponse>;
    /**
     * systemPackages - Show me details about a system packages by given inventory id
     *
     * Show me details about a system packages by given inventory id
    **/
    systemPackages(req: operations.SystemPackagesRequest, config?: AxiosRequestConfig): Promise<operations.SystemPackagesResponse>;
    /**
     * viewAdvisoriesSystems - View advisory-system pairs for selected systems and advisories
     *
     * View advisory-system pairs for selected systems and advisories
    **/
    viewAdvisoriesSystems(req: operations.ViewAdvisoriesSystemsRequest, config?: AxiosRequestConfig): Promise<operations.ViewAdvisoriesSystemsResponse>;
    /**
     * viewSystemsAdvisories - View system-advisory pairs for selected systems and advisories
     *
     * View system-advisory pairs for selected systems and advisories
    **/
    viewSystemsAdvisories(req: operations.ViewSystemsAdvisoriesRequest, config?: AxiosRequestConfig): Promise<operations.ViewSystemsAdvisoriesResponse>;
}
export {};
