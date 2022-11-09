import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


// NodeFullBios
/** 
 * BIOS information
**/
export class NodeFullBios extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=editor" })
  editor?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=quantity" })
  quantity?: number;

  @Metadata({ data: "json, name=releaseDate" })
  releaseDate?: string;

  @Metadata({ data: "json, name=version" })
  version?: string;
}


export class NodeFullControllers extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=manufacturer" })
  manufacturer?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=quantity" })
  quantity?: number;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class NodeFullEnvironmentVariables extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class NodeFullFileSystems extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=fileCount" })
  fileCount?: number;

  @Metadata({ data: "json, name=freeSpace" })
  freeSpace?: number;

  @Metadata({ data: "json, name=mountPoint" })
  mountPoint?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=totalSpace" })
  totalSpace?: number;
}

export enum NodeFullMachineTypeEnum {
    Physical = "Physical"
,    Virtual = "Virtual"
}


// NodeFullMachine
/** 
 * Information about the underlying machine
**/
export class NodeFullMachine extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=manufacturer" })
  manufacturer?: string;

  @Metadata({ data: "json, name=provider" })
  provider?: string;

  @Metadata({ data: "json, name=serialNumber" })
  serialNumber?: string;

  @Metadata({ data: "json, name=type" })
  type?: NodeFullMachineTypeEnum;
}


export class NodeFullManagementTechnology extends SpeakeasyBase {
  @Metadata({ data: "json, name=capabilities" })
  capabilities?: string[];

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=nodeKind" })
  nodeKind?: string;

  @Metadata({ data: "json, name=rootComponents" })
  rootComponents?: string[];

  @Metadata({ data: "json, name=version" })
  version?: string;
}


// NodeFullManagementTechnologyDetails
/** 
 * Additional information about management technology
**/
export class NodeFullManagementTechnologyDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=cfengineKeys" })
  cfengineKeys?: string[];

  @Metadata({ data: "json, name=cfengineUser" })
  cfengineUser?: string;
}


// NodeFullMemories
/** 
 * Memory slots
**/
export class NodeFullMemories extends SpeakeasyBase {
  @Metadata({ data: "json, name=capacity" })
  capacity?: number;

  @Metadata({ data: "json, name=caption" })
  caption?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=quantity" })
  quantity?: string;

  @Metadata({ data: "json, name=serialNumber" })
  serialNumber?: string;

  @Metadata({ data: "json, name=slotNumber" })
  slotNumber?: number;

  @Metadata({ data: "json, name=speed" })
  speed?: number;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class NodeFullNetworkInterfaces extends SpeakeasyBase {
  @Metadata({ data: "json, name=dhcpServer" })
  dhcpServer?: string;

  @Metadata({ data: "json, name=ipAddresses" })
  ipAddresses?: string[];

  @Metadata({ data: "json, name=macAddress" })
  macAddress?: string;

  @Metadata({ data: "json, name=mask" })
  mask?: string[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=speed" })
  speed?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}

export enum NodeFullOsTypeEnum {
    Windows = "Windows"
,    Linux = "Linux"
,    Aix = "AIX"
,    FreeBsd = "FreeBSD"
}


// NodeFullOs
/** 
 * Information about the operating system
**/
export class NodeFullOs extends SpeakeasyBase {
  @Metadata({ data: "json, name=fullName" })
  fullName: string;

  @Metadata({ data: "json, name=kernelVersion" })
  kernelVersion: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=servicePack" })
  servicePack?: string;

  @Metadata({ data: "json, name=type" })
  type: NodeFullOsTypeEnum;

  @Metadata({ data: "json, name=version" })
  version: string;
}

export enum NodeFullPolicyModeEnum {
    Enforce = "enforce"
,    Audit = "audit"
,    Default = "default"
}


export class NodeFullPorts extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=quantity" })
  quantity?: number;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


// NodeFullProcesses
/** 
 * Process information
**/
export class NodeFullProcesses extends SpeakeasyBase {
  @Metadata({ data: "json, name=cpuUsage" })
  cpuUsage?: number;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=memory" })
  memory?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=pid" })
  pid?: number;

  @Metadata({ data: "json, name=started" })
  started?: Date;

  @Metadata({ data: "json, name=tty" })
  tty?: string;

  @Metadata({ data: "json, name=user" })
  user?: string;

  @Metadata({ data: "json, name=virtualMemory" })
  virtualMemory?: number;
}


export class NodeFullProcessors extends SpeakeasyBase {
  @Metadata({ data: "json, name=arch" })
  arch?: string;

  @Metadata({ data: "json, name=core" })
  core?: number;

  @Metadata({ data: "json, name=cpuid" })
  cpuid?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=externalClock" })
  externalClock?: string;

  @Metadata({ data: "json, name=familyName" })
  familyName?: string;

  @Metadata({ data: "json, name=manufacturer" })
  manufacturer?: string;

  @Metadata({ data: "json, name=model" })
  model?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=quantity" })
  quantity?: number;

  @Metadata({ data: "json, name=speed" })
  speed?: number;

  @Metadata({ data: "json, name=stepping" })
  stepping?: number;

  @Metadata({ data: "json, name=thread" })
  thread?: number;
}


export class NodeFullProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=value" })
  value: any;
}


export class NodeFullSlots extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=quantity" })
  quantity?: number;

  @Metadata({ data: "json, name=status" })
  status?: string;
}


// NodeFullSoftwareLicense
/** 
 * Information about the license
**/
export class NodeFullSoftwareLicense extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=expirationDate" })
  expirationDate?: Date;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=oem" })
  oem?: string;

  @Metadata({ data: "json, name=productId" })
  productId?: string;

  @Metadata({ data: "json, name=productKey" })
  productKey?: string;
}


export class NodeFullSoftware extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=editor" })
  editor?: string;

  @Metadata({ data: "json, name=license" })
  license?: NodeFullSoftwareLicense;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=releaseDate" })
  releaseDate?: Date;

  @Metadata({ data: "json, name=version" })
  version?: string;
}


export class NodeFullSound extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=quantity" })
  quantity?: number;
}

export enum NodeFullStatusEnum {
    Pending = "pending"
,    Accepted = "accepted"
,    Deleted = "deleted"
}


export class NodeFullStorage extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=firmware" })
  firmware?: string;

  @Metadata({ data: "json, name=manufacturer" })
  manufacturer?: string;

  @Metadata({ data: "json, name=model" })
  model?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=quantity" })
  quantity?: number;

  @Metadata({ data: "json, name=serialNumber" })
  serialNumber?: string;

  @Metadata({ data: "json, name=size" })
  size?: number;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class NodeFullTimezone extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=offset" })
  offset?: string;
}


export class NodeFullVideos extends SpeakeasyBase {
  @Metadata({ data: "json, name=chipset" })
  chipset?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=memory" })
  memory?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=quantity" })
  quantity?: number;

  @Metadata({ data: "json, name=resolution" })
  resolution?: string;
}


export class NodeFullVirtualMachines extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=memory" })
  memory?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=owner" })
  owner?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=subsystem" })
  subsystem?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=uuid" })
  uuid?: string;

  @Metadata({ data: "json, name=vcpu" })
  vcpu?: string;
}


export class NodeFull extends SpeakeasyBase {
  @Metadata({ data: "json, name=accounts" })
  accounts?: string[];

  @Metadata({ data: "json, name=architectureDescription" })
  architectureDescription?: string;

  @Metadata({ data: "json, name=bios" })
  bios?: NodeFullBios;

  @Metadata({ data: "json, name=controllers", elemType: shared.NodeFullControllers })
  controllers?: NodeFullControllers[];

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=environmentVariables", elemType: shared.NodeFullEnvironmentVariables })
  environmentVariables?: NodeFullEnvironmentVariables[];

  @Metadata({ data: "json, name=fileSystems", elemType: shared.NodeFullFileSystems })
  fileSystems?: NodeFullFileSystems[];

  @Metadata({ data: "json, name=hostname" })
  hostname: string;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=ipAddresses" })
  ipAddresses: string[];

  @Metadata({ data: "json, name=lastInventoryDate" })
  lastInventoryDate?: Date;

  @Metadata({ data: "json, name=lastRunDate" })
  lastRunDate?: Date;

  @Metadata({ data: "json, name=machine" })
  machine?: NodeFullMachine;

  @Metadata({ data: "json, name=managementTechnology", elemType: shared.NodeFullManagementTechnology })
  managementTechnology: NodeFullManagementTechnology[];

  @Metadata({ data: "json, name=managementTechnologyDetails" })
  managementTechnologyDetails?: NodeFullManagementTechnologyDetails;

  @Metadata({ data: "json, name=memories", elemType: shared.NodeFullMemories })
  memories?: NodeFullMemories[];

  @Metadata({ data: "json, name=networkInterfaces", elemType: shared.NodeFullNetworkInterfaces })
  networkInterfaces?: NodeFullNetworkInterfaces[];

  @Metadata({ data: "json, name=os" })
  os?: NodeFullOs;

  @Metadata({ data: "json, name=policyMode" })
  policyMode?: NodeFullPolicyModeEnum;

  @Metadata({ data: "json, name=policyServerId" })
  policyServerId: string;

  @Metadata({ data: "json, name=ports", elemType: shared.NodeFullPorts })
  ports?: NodeFullPorts[];

  @Metadata({ data: "json, name=processes", elemType: shared.NodeFullProcesses })
  processes?: NodeFullProcesses[];

  @Metadata({ data: "json, name=processors", elemType: shared.NodeFullProcessors })
  processors?: NodeFullProcessors[];

  @Metadata({ data: "json, name=properties", elemType: shared.NodeFullProperties })
  properties: NodeFullProperties[];

  @Metadata({ data: "json, name=ram" })
  ram?: number;

  @Metadata({ data: "json, name=slots", elemType: shared.NodeFullSlots })
  slots?: NodeFullSlots[];

  @Metadata({ data: "json, name=software", elemType: shared.NodeFullSoftware })
  software?: NodeFullSoftware[];

  @Metadata({ data: "json, name=sound", elemType: shared.NodeFullSound })
  sound?: NodeFullSound[];

  @Metadata({ data: "json, name=status" })
  status: NodeFullStatusEnum;

  @Metadata({ data: "json, name=storage", elemType: shared.NodeFullStorage })
  storage?: NodeFullStorage[];

  @Metadata({ data: "json, name=timezone" })
  timezone?: NodeFullTimezone;

  @Metadata({ data: "json, name=videos", elemType: shared.NodeFullVideos })
  videos?: NodeFullVideos[];

  @Metadata({ data: "json, name=virtualMachines", elemType: shared.NodeFullVirtualMachines })
  virtualMachines?: NodeFullVirtualMachines[];
}
