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
     * addAristaSwitch - Create an arista switch data source
     *
     * Add arista switch data source
    **/
    addAristaSwitch(req: operations.AddAristaSwitchRequest, config?: AxiosRequestConfig): Promise<operations.AddAristaSwitchResponse>;
    /**
     * addBrocadeSwitch - Create a brocade switch data source
     *
     * Add brocade switch as a data source
    **/
    addBrocadeSwitch(req: operations.AddBrocadeSwitchRequest, config?: AxiosRequestConfig): Promise<operations.AddBrocadeSwitchResponse>;
    /**
     * addCheckpointFirewall - Create a checkpoint firewall
     *
     * Add checkpoint firewall as data source
    **/
    addCheckpointFirewall(req: operations.AddCheckpointFirewallRequest, config?: AxiosRequestConfig): Promise<operations.AddCheckpointFirewallResponse>;
    /**
     * addCiscoSwitch - Create a cisco switch data source
     *
     * Add cisco switch as data source. User must provide one of ip or fqdn field in the request body.
     * Appropriate proxy id is retrieved from infra/nodes URL to select the proxy node.
    **/
    addCiscoSwitch(req: operations.AddCiscoSwitchRequest, config?: AxiosRequestConfig): Promise<operations.AddCiscoSwitchResponse>;
    /**
     * addDellSwitch - Create a dell switch data source
     *
     * Add a dell switch as data source
    **/
    addDellSwitch(req: operations.AddDellSwitchRequest, config?: AxiosRequestConfig): Promise<operations.AddDellSwitchResponse>;
    /**
     * addHpovManager - Create a hp oneview manager data source
     *
     * Add a hp oneview manager data source
    **/
    addHpovManager(req: operations.AddHpovManagerRequest, config?: AxiosRequestConfig): Promise<operations.AddHpovManagerResponse>;
    /**
     * addHpvcManager - Create a hpvc manager data source
     *
     * Add hpvc manager data source
    **/
    addHpvcManager(req: operations.AddHpvcManagerRequest, config?: AxiosRequestConfig): Promise<operations.AddHpvcManagerResponse>;
    /**
     * addJuniperSwitch - Add a juniper switch as data source
     *
     * Add switch Datasource
    **/
    addJuniperSwitch(req: operations.AddJuniperSwitchRequest, config?: AxiosRequestConfig): Promise<operations.AddJuniperSwitchResponse>;
    /**
     * addNsxvManagerDatasource - Create a nsx-v manager data source
     *
     * Add a nsx-v manager data source
    **/
    addNsxvManagerDatasource(req: operations.AddNsxvManagerDatasourceRequest, config?: AxiosRequestConfig): Promise<operations.AddNsxvManagerDatasourceResponse>;
    /**
     * addPanoramaFirewall - Create panorama firewall data source
     *
     * Add panorama firewall as data source
    **/
    addPanoramaFirewall(req: operations.AddPanoramaFirewallRequest, config?: AxiosRequestConfig): Promise<operations.AddPanoramaFirewallResponse>;
    /**
     * addUcsManager - Create an ucs manager data source
     *
     * Add an ucs manager as data source
    **/
    addUcsManager(req: operations.AddUcsManagerRequest, config?: AxiosRequestConfig): Promise<operations.AddUcsManagerResponse>;
    /**
     * addVcenterDatasource - Create a vCenter data source
     *
     * Add a vcenter data source. User must provide one of ip or fqdn field in the request body.
     * Appropriate proxy id is retrieved from infra/nodes URL to select the proxy node.
    **/
    addVcenterDatasource(req: operations.AddVcenterDatasourceRequest, config?: AxiosRequestConfig): Promise<operations.AddVcenterDatasourceResponse>;
    /**
     * deleteAristaSwitch - Delete an arista switch data source
     *
     * Delete an arista switch data source
    **/
    deleteAristaSwitch(req: operations.DeleteAristaSwitchRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAristaSwitchResponse>;
    /**
     * deleteBrocadeSwitch - Delete a brocade switch data source
     *
     * Delete a brocade switch data source
    **/
    deleteBrocadeSwitch(req: operations.DeleteBrocadeSwitchRequest, config?: AxiosRequestConfig): Promise<operations.DeleteBrocadeSwitchResponse>;
    /**
     * deleteCheckpointFirewall - Delete a checkpoint firewall data source
     *
     * Delete a checkpoint firewall data source
    **/
    deleteCheckpointFirewall(req: operations.DeleteCheckpointFirewallRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCheckpointFirewallResponse>;
    /**
     * deleteCiscoSwitch - Delete a cisco switch data source
     *
     * Delete a cisco switch data source
    **/
    deleteCiscoSwitch(req: operations.DeleteCiscoSwitchRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCiscoSwitchResponse>;
    /**
     * deleteDellSwitch - Delete a dell switch data source
     *
     * Delete a data source
    **/
    deleteDellSwitch(req: operations.DeleteDellSwitchRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDellSwitchResponse>;
    /**
     * deleteHpovManager - Delete a hp oneview data source
     *
     * Delete a hp oneview data source
    **/
    deleteHpovManager(req: operations.DeleteHpovManagerRequest, config?: AxiosRequestConfig): Promise<operations.DeleteHpovManagerResponse>;
    /**
     * deleteHpvcManager - Delete a hpvc manager data source
     *
     * Delete a hpvc manager data source
    **/
    deleteHpvcManager(req: operations.DeleteHpvcManagerRequest, config?: AxiosRequestConfig): Promise<operations.DeleteHpvcManagerResponse>;
    /**
     * deleteJuniperSwitch - Delete a juniper switch data source
     *
     * Delete a juniper switch data source
    **/
    deleteJuniperSwitch(req: operations.DeleteJuniperSwitchRequest, config?: AxiosRequestConfig): Promise<operations.DeleteJuniperSwitchResponse>;
    /**
     * deleteNsxvManager - Delete a nsx-v manager data source
     *
     * Delete a nsx-v manager data source
    **/
    deleteNsxvManager(req: operations.DeleteNsxvManagerRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNsxvManagerResponse>;
    /**
     * deletePanoramaFirewall - Delete a panorama firewall data source
     *
     * Delete a panorama firewall data source
    **/
    deletePanoramaFirewall(req: operations.DeletePanoramaFirewallRequest, config?: AxiosRequestConfig): Promise<operations.DeletePanoramaFirewallResponse>;
    /**
     * deleteUcsManager - Delete an ucs manager data source
     *
     * Delete an ucs manager data source
    **/
    deleteUcsManager(req: operations.DeleteUcsManagerRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUcsManagerResponse>;
    /**
     * deleteVcenter - Delete a vCenter data source
     *
     * Delete a data source
    **/
    deleteVcenter(req: operations.DeleteVcenterRequest, config?: AxiosRequestConfig): Promise<operations.DeleteVcenterResponse>;
    /**
     * disableAristaSwitch - Disable an arista switch data source
     *
     * Disable an arista switch data source
    **/
    disableAristaSwitch(req: operations.DisableAristaSwitchRequest, config?: AxiosRequestConfig): Promise<operations.DisableAristaSwitchResponse>;
    /**
     * disableBrocadeSwitch - Disable a brocade switch data source
    **/
    disableBrocadeSwitch(req: operations.DisableBrocadeSwitchRequest, config?: AxiosRequestConfig): Promise<operations.DisableBrocadeSwitchResponse>;
    /**
     * disableCheckpointFirewall - Disable a checkpoint firewall data source
     *
     * Disable a checkpoint firewall data source
    **/
    disableCheckpointFirewall(req: operations.DisableCheckpointFirewallRequest, config?: AxiosRequestConfig): Promise<operations.DisableCheckpointFirewallResponse>;
    /**
     * disableCiscoSwitch - Disable a cisco switch data source
     *
     * Disable a cisco switch data source
    **/
    disableCiscoSwitch(req: operations.DisableCiscoSwitchRequest, config?: AxiosRequestConfig): Promise<operations.DisableCiscoSwitchResponse>;
    /**
     * disableDellSwitch - Disable a dell switch data source
     *
     * Disable a dell switch data source
    **/
    disableDellSwitch(req: operations.DisableDellSwitchRequest, config?: AxiosRequestConfig): Promise<operations.DisableDellSwitchResponse>;
    /**
     * disableHpovManager - Disable a hp oneview data source
     *
     * Disable a hp oneview data source
    **/
    disableHpovManager(req: operations.DisableHpovManagerRequest, config?: AxiosRequestConfig): Promise<operations.DisableHpovManagerResponse>;
    /**
     * disableHpvcManager - Disable a hpvc manager data source
     *
     * Disable a hpvc manager data source
    **/
    disableHpvcManager(req: operations.DisableHpvcManagerRequest, config?: AxiosRequestConfig): Promise<operations.DisableHpvcManagerResponse>;
    /**
     * disableJuniperSwitch - Disable a juniper switch data source
     *
     * Disable a juniper switch data source
    **/
    disableJuniperSwitch(req: operations.DisableJuniperSwitchRequest, config?: AxiosRequestConfig): Promise<operations.DisableJuniperSwitchResponse>;
    /**
     * disableNsxvManager - Disable a nsx-v manager data source
     *
     * Disable a nsx-v manager data source
    **/
    disableNsxvManager(req: operations.DisableNsxvManagerRequest, config?: AxiosRequestConfig): Promise<operations.DisableNsxvManagerResponse>;
    /**
     * disablePanoramaFirewall - Disable a panorama firewall data source
     *
     * Disable a panorama firewall data source
    **/
    disablePanoramaFirewall(req: operations.DisablePanoramaFirewallRequest, config?: AxiosRequestConfig): Promise<operations.DisablePanoramaFirewallResponse>;
    /**
     * disableUcsManager - Disable an ucs manager data source
     *
     * Disable an ucs manager data source
    **/
    disableUcsManager(req: operations.DisableUcsManagerRequest, config?: AxiosRequestConfig): Promise<operations.DisableUcsManagerResponse>;
    /**
     * disableVcenter - Disable a vCenter data source
     *
     * Disable a vCenter data source
    **/
    disableVcenter(req: operations.DisableVcenterRequest, config?: AxiosRequestConfig): Promise<operations.DisableVcenterResponse>;
    /**
     * enableAristaSwitch - Enable an arista switch data source
     *
     * Enable an arista switch data source
    **/
    enableAristaSwitch(req: operations.EnableAristaSwitchRequest, config?: AxiosRequestConfig): Promise<operations.EnableAristaSwitchResponse>;
    /**
     * enableBrocadeSwitch - Enable a brocade switch data source
    **/
    enableBrocadeSwitch(req: operations.EnableBrocadeSwitchRequest, config?: AxiosRequestConfig): Promise<operations.EnableBrocadeSwitchResponse>;
    /**
     * enableCheckpointFirewall - Enable a checkpoint firewall data source
     *
     * Enable a checkpoint firewall data source
    **/
    enableCheckpointFirewall(req: operations.EnableCheckpointFirewallRequest, config?: AxiosRequestConfig): Promise<operations.EnableCheckpointFirewallResponse>;
    /**
     * enableCiscoSwitch - Enable a cisco switch data source
     *
     * Enable a cisco switch data source
    **/
    enableCiscoSwitch(req: operations.EnableCiscoSwitchRequest, config?: AxiosRequestConfig): Promise<operations.EnableCiscoSwitchResponse>;
    /**
     * enableDellSwitch - Enable a dell switch data source
     *
     * Enable a dell switch data source
    **/
    enableDellSwitch(req: operations.EnableDellSwitchRequest, config?: AxiosRequestConfig): Promise<operations.EnableDellSwitchResponse>;
    /**
     * enableHpovManager - Enable a hp oneview data source
     *
     * Enable a hp oneview data source
    **/
    enableHpovManager(req: operations.EnableHpovManagerRequest, config?: AxiosRequestConfig): Promise<operations.EnableHpovManagerResponse>;
    /**
     * enableHpvcManager - Enable a hpvc manager data source
     *
     * Enable a hpvc manager data source
    **/
    enableHpvcManager(req: operations.EnableHpvcManagerRequest, config?: AxiosRequestConfig): Promise<operations.EnableHpvcManagerResponse>;
    /**
     * enableJuniperSwitch - Enable a juniper switch data source
     *
     * Enable a juniper switch data source
    **/
    enableJuniperSwitch(req: operations.EnableJuniperSwitchRequest, config?: AxiosRequestConfig): Promise<operations.EnableJuniperSwitchResponse>;
    /**
     * enableNsxvManager - Enable a nsx-v manager data source
     *
     * Enable a nsx-v manager data source
    **/
    enableNsxvManager(req: operations.EnableNsxvManagerRequest, config?: AxiosRequestConfig): Promise<operations.EnableNsxvManagerResponse>;
    /**
     * enablePanoramaFirewall - Enable a panorama firewall data source
     *
     * Enable a panorama firewall data source
    **/
    enablePanoramaFirewall(req: operations.EnablePanoramaFirewallRequest, config?: AxiosRequestConfig): Promise<operations.EnablePanoramaFirewallResponse>;
    /**
     * enableUcsManager - Enable an ucs manager data source
     *
     * Enable an ucs manager data source
    **/
    enableUcsManager(req: operations.EnableUcsManagerRequest, config?: AxiosRequestConfig): Promise<operations.EnableUcsManagerResponse>;
    /**
     * enableVcenter - Enable a vCenter data source
     *
     * Enable a vCenter data source
    **/
    enableVcenter(req: operations.EnableVcenterRequest, config?: AxiosRequestConfig): Promise<operations.EnableVcenterResponse>;
    /**
     * getAristaSwitch - Show arista switch data source details
     *
     * Show arista switch data source details
    **/
    getAristaSwitch(req: operations.GetAristaSwitchRequest, config?: AxiosRequestConfig): Promise<operations.GetAristaSwitchResponse>;
    /**
     * getAristaSwitchSnmpConfig - Show snmp config for arista switch data source
     *
     * Show snmp config for arista switch data source
    **/
    getAristaSwitchSnmpConfig(req: operations.GetAristaSwitchSnmpConfigRequest, config?: AxiosRequestConfig): Promise<operations.GetAristaSwitchSnmpConfigResponse>;
    /**
     * getBrocadeSwitch - Show brocade switch data source details
     *
     * Show brocade switch data source details
    **/
    getBrocadeSwitch(req: operations.GetBrocadeSwitchRequest, config?: AxiosRequestConfig): Promise<operations.GetBrocadeSwitchResponse>;
    /**
     * getBrocadeSwitchSnmpConfig - Show snmp config for brocade switch data source
     *
     * Show snmp config for brocade switch data source
    **/
    getBrocadeSwitchSnmpConfig(req: operations.GetBrocadeSwitchSnmpConfigRequest, config?: AxiosRequestConfig): Promise<operations.GetBrocadeSwitchSnmpConfigResponse>;
    /**
     * getCheckpointFirewall - Show checkpoint firewall data source details
     *
     * Show checkpoint firewall data source details
    **/
    getCheckpointFirewall(req: operations.GetCheckpointFirewallRequest, config?: AxiosRequestConfig): Promise<operations.GetCheckpointFirewallResponse>;
    /**
     * getCiscoSwitch - Show cisco switch data source details
     *
     * Show cisco switch data source details
    **/
    getCiscoSwitch(req: operations.GetCiscoSwitchRequest, config?: AxiosRequestConfig): Promise<operations.GetCiscoSwitchResponse>;
    /**
     * getCiscoSwitchSnmpConfig - Show snmp config for cisco switch data source
     *
     * Show snmp config for cisco switch data source
    **/
    getCiscoSwitchSnmpConfig(req: operations.GetCiscoSwitchSnmpConfigRequest, config?: AxiosRequestConfig): Promise<operations.GetCiscoSwitchSnmpConfigResponse>;
    /**
     * getDellSwitch - Show dell switch data source details
     *
     * Get a dell switch data source details
    **/
    getDellSwitch(req: operations.GetDellSwitchRequest, config?: AxiosRequestConfig): Promise<operations.GetDellSwitchResponse>;
    /**
     * getDellSwitchSnmpConfig - Show snmp config for dell switch data source
     *
     * Show snmp config for dell switch data source
    **/
    getDellSwitchSnmpConfig(req: operations.GetDellSwitchSnmpConfigRequest, config?: AxiosRequestConfig): Promise<operations.GetDellSwitchSnmpConfigResponse>;
    /**
     * getHpovManager - Show hp oneview data source details
     *
     * Show hp oneview data source details
    **/
    getHpovManager(req: operations.GetHpovManagerRequest, config?: AxiosRequestConfig): Promise<operations.GetHpovManagerResponse>;
    /**
     * getHpvcManager - Show hpvc data source details
     *
     * Show hpvc data source details
    **/
    getHpvcManager(req: operations.GetHpvcManagerRequest, config?: AxiosRequestConfig): Promise<operations.GetHpvcManagerResponse>;
    /**
     * getJuniperSwitch - Show juniper switch data source details
     *
     * Show juniper switch data source details
    **/
    getJuniperSwitch(req: operations.GetJuniperSwitchRequest, config?: AxiosRequestConfig): Promise<operations.GetJuniperSwitchResponse>;
    /**
     * getJuniperSwitchSnmpConfig - Show snmp config for juniper switch data source
     *
     * Show snmp config for juniper switch data source
    **/
    getJuniperSwitchSnmpConfig(req: operations.GetJuniperSwitchSnmpConfigRequest, config?: AxiosRequestConfig): Promise<operations.GetJuniperSwitchSnmpConfigResponse>;
    /**
     * getNsxvControllerCluster - Show nsx controller-cluster details
     *
     * Show nsx controller-cluster details
    **/
    getNsxvControllerCluster(req: operations.GetNsxvControllerClusterRequest, config?: AxiosRequestConfig): Promise<operations.GetNsxvControllerClusterResponse>;
    /**
     * getNsxvManager - Show nsx-v manager data source details
     *
     * Show nsx-v manager data source details
    **/
    getNsxvManager(req: operations.GetNsxvManagerRequest, config?: AxiosRequestConfig): Promise<operations.GetNsxvManagerResponse>;
    /**
     * getPanoramaFirewall - Show panorama firewall data source details
     *
     * Show panorama firewall data source details
    **/
    getPanoramaFirewall(req: operations.GetPanoramaFirewallRequest, config?: AxiosRequestConfig): Promise<operations.GetPanoramaFirewallResponse>;
    /**
     * getUcsManager - Show ucs manager data source details
     *
     * Show ucs manager data source details
    **/
    getUcsManager(req: operations.GetUcsManagerRequest, config?: AxiosRequestConfig): Promise<operations.GetUcsManagerResponse>;
    /**
     * getUcsSnmpConfig - Show snmp config for ucs fabric interconnects
     *
     * Show snmp config for ucs fabric interconnects
    **/
    getUcsSnmpConfig(req: operations.GetUcsSnmpConfigRequest, config?: AxiosRequestConfig): Promise<operations.GetUcsSnmpConfigResponse>;
    /**
     * getVcenter - Show vCenter data source details
     *
     * Show vCenter data source details
    **/
    getVcenter(req: operations.GetVcenterRequest, config?: AxiosRequestConfig): Promise<operations.GetVcenterResponse>;
    /**
     * listAristaSwitches - List arista switch data sources
     *
     * List arista switch data sources
    **/
    listAristaSwitches(req: operations.ListAristaSwitchesRequest, config?: AxiosRequestConfig): Promise<operations.ListAristaSwitchesResponse>;
    /**
     * listBrocadeSwitches - List brocade switch data sources
     *
     * List brocade switch data sources
    **/
    listBrocadeSwitches(req: operations.ListBrocadeSwitchesRequest, config?: AxiosRequestConfig): Promise<operations.ListBrocadeSwitchesResponse>;
    /**
     * listCheckpointFirewalls - List checkpoint firewall data sources
     *
     * List checkpoint firewall data sources
    **/
    listCheckpointFirewalls(req: operations.ListCheckpointFirewallsRequest, config?: AxiosRequestConfig): Promise<operations.ListCheckpointFirewallsResponse>;
    /**
     * listCiscoSwitches - List cisco switch data sources
     *
     * List cisco switch data sources
    **/
    listCiscoSwitches(req: operations.ListCiscoSwitchesRequest, config?: AxiosRequestConfig): Promise<operations.ListCiscoSwitchesResponse>;
    /**
     * listDellSwitches - List dell switch data sources
     *
     * List dell switch data sources
    **/
    listDellSwitches(req: operations.ListDellSwitchesRequest, config?: AxiosRequestConfig): Promise<operations.ListDellSwitchesResponse>;
    /**
     * listHpovManagers - List hp oneview manager data sources
     *
     * List hp oneview manager data sources
    **/
    listHpovManagers(req: operations.ListHpovManagersRequest, config?: AxiosRequestConfig): Promise<operations.ListHpovManagersResponse>;
    /**
     * listHpvcManagers - List hpvc manager data sources
     *
     * List hpvc manager data sources
    **/
    listHpvcManagers(req: operations.ListHpvcManagersRequest, config?: AxiosRequestConfig): Promise<operations.ListHpvcManagersResponse>;
    /**
     * listJuniperSwitches - List juniper switch data sources
     *
     * List juniper switch data sources
    **/
    listJuniperSwitches(req: operations.ListJuniperSwitchesRequest, config?: AxiosRequestConfig): Promise<operations.ListJuniperSwitchesResponse>;
    /**
     * listNsxvManagers - List nsx-v manager data sources
     *
     * List nsx-v manager data sources
    **/
    listNsxvManagers(req: operations.ListNsxvManagersRequest, config?: AxiosRequestConfig): Promise<operations.ListNsxvManagersResponse>;
    /**
     * listPanoramaFirewalls - List panorama firewall data sources
     *
     * List panorama firewall data sources
    **/
    listPanoramaFirewalls(req: operations.ListPanoramaFirewallsRequest, config?: AxiosRequestConfig): Promise<operations.ListPanoramaFirewallsResponse>;
    /**
     * listUcsManagers - List ucs manager data sources
     *
     * List ucs manager data sources
    **/
    listUcsManagers(req: operations.ListUcsManagersRequest, config?: AxiosRequestConfig): Promise<operations.ListUcsManagersResponse>;
    /**
     * listVcenters - List vCenter data sources
     *
     * List vCenter data sources
    **/
    listVcenters(req: operations.ListVcentersRequest, config?: AxiosRequestConfig): Promise<operations.ListVcentersResponse>;
    /**
     * updateAristaSwitch - Update an arista switch data source
     *
     * Update an switch data source
    **/
    updateAristaSwitch(req: operations.UpdateAristaSwitchRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAristaSwitchResponse>;
    /**
     * updateAristaSwitchSnmpConfig - Update snmp config for arista switch data source
     *
     * Update snmp config for arista switch data source
    **/
    updateAristaSwitchSnmpConfig(req: operations.UpdateAristaSwitchSnmpConfigRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAristaSwitchSnmpConfigResponse>;
    /**
     * updateBrocadeSwitch - Update a brocade switch data source
     *
     * Update a brocade switch data source. Only credentials, nickname and notes can be updated.
    **/
    updateBrocadeSwitch(req: operations.UpdateBrocadeSwitchRequest, config?: AxiosRequestConfig): Promise<operations.UpdateBrocadeSwitchResponse>;
    /**
     * updateBrocadeSwitchSnmpConfig - Update snmp config for brocade switch data source
     *
     * Update snmp config for brocade switch data source
    **/
    updateBrocadeSwitchSnmpConfig(req: operations.UpdateBrocadeSwitchSnmpConfigRequest, config?: AxiosRequestConfig): Promise<operations.UpdateBrocadeSwitchSnmpConfigResponse>;
    /**
     * updateCheckpointFirewall - Update a checkpoint firewall data source
     *
     * Update a checkpoint firewall data source
    **/
    updateCheckpointFirewall(req: operations.UpdateCheckpointFirewallRequest, config?: AxiosRequestConfig): Promise<operations.UpdateCheckpointFirewallResponse>;
    /**
     * updateCiscoSwitch - Update a cisco switch data source
     *
     * Update a cisco switch data source. Only credentials, nickname and notes can be updated.
    **/
    updateCiscoSwitch(req: operations.UpdateCiscoSwitchRequest, config?: AxiosRequestConfig): Promise<operations.UpdateCiscoSwitchResponse>;
    /**
     * updateCiscoSwitchSnmpConfig - Update snmp config for cisco switch data source
     *
     * Update snmp config for cisco switch data source
    **/
    updateCiscoSwitchSnmpConfig(req: operations.UpdateCiscoSwitchSnmpConfigRequest, config?: AxiosRequestConfig): Promise<operations.UpdateCiscoSwitchSnmpConfigResponse>;
    /**
     * updateDellSwitch - Update a dell switch data source
     *
     * Update a dell switch data source. Only credentials, nickname and notes can be updated
    **/
    updateDellSwitch(req: operations.UpdateDellSwitchRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDellSwitchResponse>;
    /**
     * updateDellSwitchSnmpConfig - Update snmp config for dell switch data source
     *
     * Update snmp config for dell switch data source
    **/
    updateDellSwitchSnmpConfig(req: operations.UpdateDellSwitchSnmpConfigRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDellSwitchSnmpConfigResponse>;
    /**
     * updateHpovManager - Update a hp oneview data source
     *
     * Update a hp oneview data source
    **/
    updateHpovManager(req: operations.UpdateHpovManagerRequest, config?: AxiosRequestConfig): Promise<operations.UpdateHpovManagerResponse>;
    /**
     * updateHpvcManager - Update a hpvc manager data source
     *
     * Update a hpvc manager data source
    **/
    updateHpvcManager(req: operations.UpdateHpvcManagerRequest, config?: AxiosRequestConfig): Promise<operations.UpdateHpvcManagerResponse>;
    /**
     * updateJuniperSwitch - Update a juniper switch data source
     *
     * Update a juniper switch data source
    **/
    updateJuniperSwitch(req: operations.UpdateJuniperSwitchRequest, config?: AxiosRequestConfig): Promise<operations.UpdateJuniperSwitchResponse>;
    /**
     * updateJuniperSwitchSnmpConfig - Update snmp config for a juniper switch data source
     *
     * Update snmp config for a juniper switch data source
    **/
    updateJuniperSwitchSnmpConfig(req: operations.UpdateJuniperSwitchSnmpConfigRequest, config?: AxiosRequestConfig): Promise<operations.UpdateJuniperSwitchSnmpConfigResponse>;
    /**
     * updateNsxvControllerCluster - Update nsx controller-cluster details
     *
     * Update nsx controller-cluster details
    **/
    updateNsxvControllerCluster(req: operations.UpdateNsxvControllerClusterRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNsxvControllerClusterResponse>;
    /**
     * updateNsxvManager - Update a nsx-v manager data source
     *
     * Update a nsx-v manager data source
    **/
    updateNsxvManager(req: operations.UpdateNsxvManagerRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNsxvManagerResponse>;
    /**
     * updatePanoramaFirewall - Update a panorama firewall data source
     *
     * Update a panorama firewall data source
    **/
    updatePanoramaFirewall(req: operations.UpdatePanoramaFirewallRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePanoramaFirewallResponse>;
    /**
     * updateUcsManager - Update an ucs manager data source
     *
     * Update an ucs manager data source
    **/
    updateUcsManager(req: operations.UpdateUcsManagerRequest, config?: AxiosRequestConfig): Promise<operations.UpdateUcsManagerResponse>;
    /**
     * updateUcsSnmpConfig - Update snmp config for ucs fabric interconnects
     *
     * Update snmp config for ucs fabric interconnects
    **/
    updateUcsSnmpConfig(req: operations.UpdateUcsSnmpConfigRequest, config?: AxiosRequestConfig): Promise<operations.UpdateUcsSnmpConfigResponse>;
    /**
     * updateVcenter - Update a vCenter data source.
     *
     * Update a vcenter data source. Only nickname, notes and credentials can be updated.
    **/
    updateVcenter(req: operations.UpdateVcenterRequest, config?: AxiosRequestConfig): Promise<operations.UpdateVcenterResponse>;
}
