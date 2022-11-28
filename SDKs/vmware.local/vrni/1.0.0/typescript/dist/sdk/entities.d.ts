import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Entities {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getCluster - Show cluster details
     *
     * Show cluster details
    **/
    getCluster(req: operations.GetClusterRequest, config?: AxiosRequestConfig): Promise<operations.GetClusterResponse>;
    /**
     * getDatacenter - Show vCenter datacenter details
     *
     * Show vCenter datacenter details
    **/
    getDatacenter(req: operations.GetDatacenterRequest, config?: AxiosRequestConfig): Promise<operations.GetDatacenterResponse>;
    /**
     * getDatastore - Show datastore details
     *
     * Show datastore details
    **/
    getDatastore(req: operations.GetDatastoreRequest, config?: AxiosRequestConfig): Promise<operations.GetDatastoreResponse>;
    /**
     * getDistributedVirtualPortgroup - Show distributed virtual portgroup details
     *
     * Show distributed virtual portgroup details
    **/
    getDistributedVirtualPortgroup(req: operations.GetDistributedVirtualPortgroupRequest, config?: AxiosRequestConfig): Promise<operations.GetDistributedVirtualPortgroupResponse>;
    /**
     * getDistributedVirtualSwitch - Show distributed virtual switch details
     *
     * Show distributed virtual switch details
    **/
    getDistributedVirtualSwitch(req: operations.GetDistributedVirtualSwitchRequest, config?: AxiosRequestConfig): Promise<operations.GetDistributedVirtualSwitchResponse>;
    /**
     * getFirewall - Show firewall details
     *
     * Show firewall details
    **/
    getFirewall(req: operations.GetFirewallRequest, config?: AxiosRequestConfig): Promise<operations.GetFirewallResponse>;
    /**
     * getFirewallRule - Show firewall rule details
     *
     * Show firewall rule details
    **/
    getFirewallRule(req: operations.GetFirewallRuleRequest, config?: AxiosRequestConfig): Promise<operations.GetFirewallRuleResponse>;
    /**
     * getFlow - Show flow details
     *
     * Show flow details
    **/
    getFlow(req: operations.GetFlowRequest, config?: AxiosRequestConfig): Promise<operations.GetFlowResponse>;
    /**
     * getFlows - List flows
     *
     * List flows
    **/
    getFlows(req: operations.GetFlowsRequest, config?: AxiosRequestConfig): Promise<operations.GetFlowsResponse>;
    /**
     * getFolder - Show folder details
     *
     * Show folder details
    **/
    getFolder(req: operations.GetFolderRequest, config?: AxiosRequestConfig): Promise<operations.GetFolderResponse>;
    /**
     * getHost - Show host details
     *
     * Show host details
    **/
    getHost(req: operations.GetHostRequest, config?: AxiosRequestConfig): Promise<operations.GetHostResponse>;
    /**
     * getIpSet - Show ip set details
     *
     * Show ip set details
    **/
    getIpSet(req: operations.GetIpSetRequest, config?: AxiosRequestConfig): Promise<operations.GetIpSetResponse>;
    /**
     * getLayer2Network - Show layer2 network details
     *
     * Show layer2 network details
    **/
    getLayer2Network(req: operations.GetLayer2NetworkRequest, config?: AxiosRequestConfig): Promise<operations.GetLayer2NetworkResponse>;
    /**
     * getNsxManager - Show nsx manager details
     *
     * Show nsx manager details
    **/
    getNsxManager(req: operations.GetNsxManagerRequest, config?: AxiosRequestConfig): Promise<operations.GetNsxManagerResponse>;
    /**
     * getName - Get name of an entity
     *
     * Get name of an entity
    **/
    getName(req: operations.GetNameRequest, config?: AxiosRequestConfig): Promise<operations.GetNameResponse>;
    /**
     * getNames - Get names for entities
     *
     * Get names for entities.Limit of 1000 entities in a single request.
    **/
    getNames(req: operations.GetNamesRequest, config?: AxiosRequestConfig): Promise<operations.GetNamesResponse>;
    /**
     * getProblemEvent - Show problem details
     *
     * Show problem event details.
    **/
    getProblemEvent(req: operations.GetProblemEventRequest, config?: AxiosRequestConfig): Promise<operations.GetProblemEventResponse>;
    /**
     * getSecurityGroup - Show security group details
     *
     * Show security group details
    **/
    getSecurityGroup(req: operations.GetSecurityGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetSecurityGroupResponse>;
    /**
     * getSecurityTag - Show security tag details
     *
     * Show security tag details
    **/
    getSecurityTag(req: operations.GetSecurityTagRequest, config?: AxiosRequestConfig): Promise<operations.GetSecurityTagResponse>;
    /**
     * getService - Show service details
     *
     * Show service details
    **/
    getService(req: operations.GetServiceRequest, config?: AxiosRequestConfig): Promise<operations.GetServiceResponse>;
    /**
     * getServiceGroup - Show service group details
     *
     * Show service group details
    **/
    getServiceGroup(req: operations.GetServiceGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetServiceGroupResponse>;
    /**
     * getVcenterManager - Show vCenter manager details
     *
     * Show vCenter manager details
    **/
    getVcenterManager(req: operations.GetVcenterManagerRequest, config?: AxiosRequestConfig): Promise<operations.GetVcenterManagerResponse>;
    /**
     * getVm - Show vm details
     *
     * Show vm details
    **/
    getVm(req: operations.GetVmRequest, config?: AxiosRequestConfig): Promise<operations.GetVmResponse>;
    /**
     * getVmknic - Show vmknic details
     *
     * Show vmknic details
    **/
    getVmknic(req: operations.GetVmknicRequest, config?: AxiosRequestConfig): Promise<operations.GetVmknicResponse>;
    /**
     * getVnic - Show vnic details
     *
     * Show vnic details
    **/
    getVnic(req: operations.GetVnicRequest, config?: AxiosRequestConfig): Promise<operations.GetVnicResponse>;
    /**
     * listClusters - List clusters
     *
     * List clusters
    **/
    listClusters(req: operations.ListClustersRequest, config?: AxiosRequestConfig): Promise<operations.ListClustersResponse>;
    /**
     * listDatacenters - List vCenter datacenters
     *
     * List vCenter datacenters
    **/
    listDatacenters(req: operations.ListDatacentersRequest, config?: AxiosRequestConfig): Promise<operations.ListDatacentersResponse>;
    /**
     * listDatastores - List datastores
     *
     * List datastores
    **/
    listDatastores(req: operations.ListDatastoresRequest, config?: AxiosRequestConfig): Promise<operations.ListDatastoresResponse>;
    /**
     * listDistributedVirtualPortgroups - List distributed virtual portgroups
     *
     * List distributed virtual portgroups
    **/
    listDistributedVirtualPortgroups(req: operations.ListDistributedVirtualPortgroupsRequest, config?: AxiosRequestConfig): Promise<operations.ListDistributedVirtualPortgroupsResponse>;
    /**
     * listDistributedVirtualSwitches - List distributed virtual switches
     *
     * List distributed virtual switches
    **/
    listDistributedVirtualSwitches(req: operations.ListDistributedVirtualSwitchesRequest, config?: AxiosRequestConfig): Promise<operations.ListDistributedVirtualSwitchesResponse>;
    /**
     * listFirewallRules - List firewall rules
     *
     * List firewall rules
    **/
    listFirewallRules(req: operations.ListFirewallRulesRequest, config?: AxiosRequestConfig): Promise<operations.ListFirewallRulesResponse>;
    /**
     * listFirewalls - List firewalls
     *
     * List firewalls
    **/
    listFirewalls(req: operations.ListFirewallsRequest, config?: AxiosRequestConfig): Promise<operations.ListFirewallsResponse>;
    /**
     * listFolders - List folders
     *
     * List folders
    **/
    listFolders(req: operations.ListFoldersRequest, config?: AxiosRequestConfig): Promise<operations.ListFoldersResponse>;
    /**
     * listHosts - List hosts
     *
     * List hosts
    **/
    listHosts(req: operations.ListHostsRequest, config?: AxiosRequestConfig): Promise<operations.ListHostsResponse>;
    /**
     * listIpSets - List ip sets
     *
     * List ip sets
    **/
    listIpSets(req: operations.ListIpSetsRequest, config?: AxiosRequestConfig): Promise<operations.ListIpSetsResponse>;
    /**
     * listLayer2Networks - List layer2 networks
     *
     * List layer2 networks
    **/
    listLayer2Networks(req: operations.ListLayer2NetworksRequest, config?: AxiosRequestConfig): Promise<operations.ListLayer2NetworksResponse>;
    /**
     * listNsxManagers - List nsx managers
     *
     * List nsx managers
    **/
    listNsxManagers(req: operations.ListNsxManagersRequest, config?: AxiosRequestConfig): Promise<operations.ListNsxManagersResponse>;
    /**
     * listProblemEvents - List problems
     *
     * List problem events.
    **/
    listProblemEvents(req: operations.ListProblemEventsRequest, config?: AxiosRequestConfig): Promise<operations.ListProblemEventsResponse>;
    /**
     * listSecurityGroups - List security groups
     *
     * List security groups
    **/
    listSecurityGroups(req: operations.ListSecurityGroupsRequest, config?: AxiosRequestConfig): Promise<operations.ListSecurityGroupsResponse>;
    /**
     * listSecurityTags - List security tags
     *
     * List security tags
    **/
    listSecurityTags(req: operations.ListSecurityTagsRequest, config?: AxiosRequestConfig): Promise<operations.ListSecurityTagsResponse>;
    /**
     * listServiceGroups - List service groups
     *
     * List service groups
    **/
    listServiceGroups(req: operations.ListServiceGroupsRequest, config?: AxiosRequestConfig): Promise<operations.ListServiceGroupsResponse>;
    /**
     * listServices - List services
     *
     * List services
    **/
    listServices(req: operations.ListServicesRequest, config?: AxiosRequestConfig): Promise<operations.ListServicesResponse>;
    /**
     * listVcenterManagers - List vCenter managers
     *
     * List vCenter managers
    **/
    listVcenterManagers(req: operations.ListVcenterManagersRequest, config?: AxiosRequestConfig): Promise<operations.ListVcenterManagersResponse>;
    /**
     * listVmknics - List vmknics
     *
     * List vmknics
    **/
    listVmknics(req: operations.ListVmknicsRequest, config?: AxiosRequestConfig): Promise<operations.ListVmknicsResponse>;
    /**
     * listVms - List vms
     *
     * List vms
    **/
    listVms(req: operations.ListVmsRequest, config?: AxiosRequestConfig): Promise<operations.ListVmsResponse>;
    /**
     * listVnics - List vnics
     *
     * List vnics
    **/
    listVnics(req: operations.ListVnicsRequest, config?: AxiosRequestConfig): Promise<operations.ListVnicsResponse>;
}
