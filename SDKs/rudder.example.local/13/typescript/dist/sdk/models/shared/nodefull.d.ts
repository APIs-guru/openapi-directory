import { SpeakeasyBase } from "../../../internal/utils";
/**
 * BIOS information
**/
export declare class NodeFullBios extends SpeakeasyBase {
    description?: string;
    editor?: string;
    name?: string;
    quantity?: number;
    releaseDate?: string;
    version?: string;
}
export declare class NodeFullControllers extends SpeakeasyBase {
    description?: string;
    manufacturer?: string;
    name?: string;
    quantity?: number;
    type?: string;
}
export declare class NodeFullEnvironmentVariables extends SpeakeasyBase {
    name?: string;
    value?: string;
}
export declare class NodeFullFileSystems extends SpeakeasyBase {
    description?: string;
    fileCount?: number;
    freeSpace?: number;
    mountPoint?: string;
    name?: string;
    totalSpace?: number;
}
export declare enum NodeFullMachineTypeEnum {
    Physical = "Physical",
    Virtual = "Virtual"
}
/**
 * Information about the underlying machine
**/
export declare class NodeFullMachine extends SpeakeasyBase {
    id?: string;
    manufacturer?: string;
    provider?: string;
    serialNumber?: string;
    type?: NodeFullMachineTypeEnum;
}
export declare class NodeFullManagementTechnology extends SpeakeasyBase {
    capabilities?: string[];
    name: string;
    nodeKind?: string;
    rootComponents?: string[];
    version?: string;
}
/**
 * Additional information about management technology
**/
export declare class NodeFullManagementTechnologyDetails extends SpeakeasyBase {
    cfengineKeys?: string[];
    cfengineUser?: string;
}
/**
 * Memory slots
**/
export declare class NodeFullMemories extends SpeakeasyBase {
    capacity?: number;
    caption?: string;
    description?: string;
    name?: string;
    quantity?: string;
    serialNumber?: string;
    slotNumber?: number;
    speed?: number;
    type?: string;
}
export declare class NodeFullNetworkInterfaces extends SpeakeasyBase {
    dhcpServer?: string;
    ipAddresses?: string[];
    macAddress?: string;
    mask?: string[];
    name?: string;
    speed?: string;
    status?: string;
    type?: string;
}
export declare enum NodeFullOsTypeEnum {
    Windows = "Windows",
    Linux = "Linux",
    Aix = "AIX",
    FreeBsd = "FreeBSD"
}
/**
 * Information about the operating system
**/
export declare class NodeFullOs extends SpeakeasyBase {
    fullName: string;
    kernelVersion: string;
    name: string;
    servicePack?: string;
    type: NodeFullOsTypeEnum;
    version: string;
}
export declare enum NodeFullPolicyModeEnum {
    Enforce = "enforce",
    Audit = "audit",
    Default = "default"
}
export declare class NodeFullPorts extends SpeakeasyBase {
    description?: string;
    name?: string;
    quantity?: number;
    type?: string;
}
/**
 * Process information
**/
export declare class NodeFullProcesses extends SpeakeasyBase {
    cpuUsage?: number;
    description?: string;
    memory?: number;
    name?: string;
    pid?: number;
    started?: Date;
    tty?: string;
    user?: string;
    virtualMemory?: number;
}
export declare class NodeFullProcessors extends SpeakeasyBase {
    arch?: string;
    core?: number;
    cpuid?: string;
    description?: string;
    externalClock?: string;
    familyName?: string;
    manufacturer?: string;
    model?: number;
    name?: string;
    quantity?: number;
    speed?: number;
    stepping?: number;
    thread?: number;
}
export declare class NodeFullProperties extends SpeakeasyBase {
    name: string;
    value: any;
}
export declare class NodeFullSlots extends SpeakeasyBase {
    description?: string;
    name?: string;
    quantity?: number;
    status?: string;
}
/**
 * Information about the license
**/
export declare class NodeFullSoftwareLicense extends SpeakeasyBase {
    description?: string;
    expirationDate?: Date;
    name?: string;
    oem?: string;
    productId?: string;
    productKey?: string;
}
export declare class NodeFullSoftware extends SpeakeasyBase {
    description?: string;
    editor?: string;
    license?: NodeFullSoftwareLicense;
    name?: string;
    releaseDate?: Date;
    version?: string;
}
export declare class NodeFullSound extends SpeakeasyBase {
    description?: string;
    name?: string;
    quantity?: number;
}
export declare enum NodeFullStatusEnum {
    Pending = "pending",
    Accepted = "accepted",
    Deleted = "deleted"
}
export declare class NodeFullStorage extends SpeakeasyBase {
    description?: string;
    firmware?: string;
    manufacturer?: string;
    model?: string;
    name?: string;
    quantity?: number;
    serialNumber?: string;
    size?: number;
    type?: string;
}
export declare class NodeFullTimezone extends SpeakeasyBase {
    name: string;
    offset?: string;
}
export declare class NodeFullVideos extends SpeakeasyBase {
    chipset?: string;
    description?: string;
    memory?: string;
    name?: string;
    quantity?: number;
    resolution?: string;
}
export declare class NodeFullVirtualMachines extends SpeakeasyBase {
    description?: string;
    memory?: string;
    name?: string;
    owner?: string;
    status?: string;
    subsystem?: string;
    type?: string;
    uuid?: string;
    vcpu?: string;
}
export declare class NodeFull extends SpeakeasyBase {
    accounts?: string[];
    architectureDescription?: string;
    bios?: NodeFullBios;
    controllers?: NodeFullControllers[];
    description?: string;
    environmentVariables?: NodeFullEnvironmentVariables[];
    fileSystems?: NodeFullFileSystems[];
    hostname: string;
    id: string;
    ipAddresses: string[];
    lastInventoryDate?: Date;
    lastRunDate?: Date;
    machine?: NodeFullMachine;
    managementTechnology: NodeFullManagementTechnology[];
    managementTechnologyDetails?: NodeFullManagementTechnologyDetails;
    memories?: NodeFullMemories[];
    networkInterfaces?: NodeFullNetworkInterfaces[];
    os?: NodeFullOs;
    policyMode?: NodeFullPolicyModeEnum;
    policyServerId: string;
    ports?: NodeFullPorts[];
    processes?: NodeFullProcesses[];
    processors?: NodeFullProcessors[];
    properties: NodeFullProperties[];
    ram?: number;
    slots?: NodeFullSlots[];
    software?: NodeFullSoftware[];
    sound?: NodeFullSound[];
    status: NodeFullStatusEnum;
    storage?: NodeFullStorage[];
    timezone?: NodeFullTimezone;
    videos?: NodeFullVideos[];
    virtualMachines?: NodeFullVirtualMachines[];
}
