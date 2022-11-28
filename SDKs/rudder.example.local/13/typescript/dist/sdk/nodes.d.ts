import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Nodes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * applyNode - Trigger an agent run
     *
     * This API allows to trigger an agent run on the target node. Response is a stream of the actual agent run on the node.
    **/
    applyNode(req: operations.ApplyNodeRequest, config?: AxiosRequestConfig): Promise<operations.ApplyNodeResponse>;
    /**
     * applyPolicyAllNodes - Trigger an agent run on all nodes
     *
     * This API allows to trigger an agent run on all nodes. Response contains a json stating if agent could be started on each node, but not if the run went fine and do not display any output from it. You can see the result of the run in Rudder web interface or in the each agent logs.
    **/
    applyPolicyAllNodes(config?: AxiosRequestConfig): Promise<operations.ApplyPolicyAllNodesResponse>;
    /**
     * changePendingNodeStatus - Update pending Node status
     *
     * Accept or refuse a pending node
    **/
    changePendingNodeStatus(req: operations.ChangePendingNodeStatusRequest, config?: AxiosRequestConfig): Promise<operations.ChangePendingNodeStatusResponse>;
    /**
     * deleteNode - Delete a node
     *
     * Remove a node from the Rudder server. It won't be managed anymore.
    **/
    deleteNode(req: operations.DeleteNodeRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNodeResponse>;
    /**
     * getNodesStatus - Get nodes acceptation status
     *
     * Get acceptation status (pending, accepted, deleted, unknown) of a list of nodes
    **/
    getNodesStatus(req: operations.GetNodesStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetNodesStatusResponse>;
    /**
     * listAcceptedNodes - List managed nodes
     *
     * Get information about the nodes managed by the target server
    **/
    listAcceptedNodes(req: operations.ListAcceptedNodesRequest, config?: AxiosRequestConfig): Promise<operations.ListAcceptedNodesResponse>;
    /**
     * listPendingNodes - List pending nodes
     *
     * Get information about the nodes pending acceptation
    **/
    listPendingNodes(req: operations.ListPendingNodesRequest, config?: AxiosRequestConfig): Promise<operations.ListPendingNodesResponse>;
    /**
     * nodeDetails - Get information about a node
     *
     * Get details about a given node
    **/
    nodeDetails(req: operations.NodeDetailsRequest, config?: AxiosRequestConfig): Promise<operations.NodeDetailsResponse>;
    /**
     * nodeInheritedProperties - Get inherited node properties for a node
     *
     * This API returns all node properties for a node, including group inherited ones.
    **/
    nodeInheritedProperties(req: operations.NodeInheritedPropertiesRequest, config?: AxiosRequestConfig): Promise<operations.NodeInheritedPropertiesResponse>;
    /**
     * updateNode - Update node settings and properties
     *
     * Update node settings and properties
    **/
    updateNode(req: operations.UpdateNodeRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNodeResponse>;
}
