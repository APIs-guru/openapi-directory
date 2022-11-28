import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NodeFullBios
/** 
 * BIOS information
**/
export class NodeFullBios extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=editor" })
  editor?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;

  @SpeakeasyMetadata({ data: "json, name=releaseDate" })
  releaseDate?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}


export class NodeFullControllers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=manufacturer" })
  manufacturer?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class NodeFullEnvironmentVariables extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class NodeFullFileSystems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=fileCount" })
  fileCount?: number;

  @SpeakeasyMetadata({ data: "json, name=freeSpace" })
  freeSpace?: number;

  @SpeakeasyMetadata({ data: "json, name=mountPoint" })
  mountPoint?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=totalSpace" })
  totalSpace?: number;
}

export enum NodeFullMachineTypeEnum {
    Physical = "Physical",
    Virtual = "Virtual"
}


// NodeFullMachine
/** 
 * Information about the underlying machine
**/
export class NodeFullMachine extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=manufacturer" })
  manufacturer?: string;

  @SpeakeasyMetadata({ data: "json, name=provider" })
  provider?: string;

  @SpeakeasyMetadata({ data: "json, name=serialNumber" })
  serialNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: NodeFullMachineTypeEnum;
}


export class NodeFullManagementTechnology extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=capabilities" })
  capabilities?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=nodeKind" })
  nodeKind?: string;

  @SpeakeasyMetadata({ data: "json, name=rootComponents" })
  rootComponents?: string[];

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}


// NodeFullManagementTechnologyDetails
/** 
 * Additional information about management technology
**/
export class NodeFullManagementTechnologyDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cfengineKeys" })
  cfengineKeys?: string[];

  @SpeakeasyMetadata({ data: "json, name=cfengineUser" })
  cfengineUser?: string;
}


// NodeFullMemories
/** 
 * Memory slots
**/
export class NodeFullMemories extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=capacity" })
  capacity?: number;

  @SpeakeasyMetadata({ data: "json, name=caption" })
  caption?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: string;

  @SpeakeasyMetadata({ data: "json, name=serialNumber" })
  serialNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=slotNumber" })
  slotNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=speed" })
  speed?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class NodeFullNetworkInterfaces extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dhcpServer" })
  dhcpServer?: string;

  @SpeakeasyMetadata({ data: "json, name=ipAddresses" })
  ipAddresses?: string[];

  @SpeakeasyMetadata({ data: "json, name=macAddress" })
  macAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=mask" })
  mask?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=speed" })
  speed?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}

export enum NodeFullOsTypeEnum {
    Windows = "Windows",
    Linux = "Linux",
    Aix = "AIX",
    FreeBsd = "FreeBSD"
}


// NodeFullOs
/** 
 * Information about the operating system
**/
export class NodeFullOs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fullName" })
  fullName: string;

  @SpeakeasyMetadata({ data: "json, name=kernelVersion" })
  kernelVersion: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=servicePack" })
  servicePack?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: NodeFullOsTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version: string;
}

export enum NodeFullPolicyModeEnum {
    Enforce = "enforce",
    Audit = "audit",
    Default = "default"
}


export class NodeFullPorts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


// NodeFullProcesses
/** 
 * Process information
**/
export class NodeFullProcesses extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cpuUsage" })
  cpuUsage?: number;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=memory" })
  memory?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=pid" })
  pid?: number;

  @SpeakeasyMetadata({ data: "json, name=started" })
  started?: Date;

  @SpeakeasyMetadata({ data: "json, name=tty" })
  tty?: string;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: string;

  @SpeakeasyMetadata({ data: "json, name=virtualMemory" })
  virtualMemory?: number;
}


export class NodeFullProcessors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arch" })
  arch?: string;

  @SpeakeasyMetadata({ data: "json, name=core" })
  core?: number;

  @SpeakeasyMetadata({ data: "json, name=cpuid" })
  cpuid?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=externalClock" })
  externalClock?: string;

  @SpeakeasyMetadata({ data: "json, name=familyName" })
  familyName?: string;

  @SpeakeasyMetadata({ data: "json, name=manufacturer" })
  manufacturer?: string;

  @SpeakeasyMetadata({ data: "json, name=model" })
  model?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;

  @SpeakeasyMetadata({ data: "json, name=speed" })
  speed?: number;

  @SpeakeasyMetadata({ data: "json, name=stepping" })
  stepping?: number;

  @SpeakeasyMetadata({ data: "json, name=thread" })
  thread?: number;
}


export class NodeFullProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: any;
}


export class NodeFullSlots extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}


// NodeFullSoftwareLicense
/** 
 * Information about the license
**/
export class NodeFullSoftwareLicense extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=expirationDate" })
  expirationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=oem" })
  oem?: string;

  @SpeakeasyMetadata({ data: "json, name=productId" })
  productId?: string;

  @SpeakeasyMetadata({ data: "json, name=productKey" })
  productKey?: string;
}


export class NodeFullSoftware extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=editor" })
  editor?: string;

  @SpeakeasyMetadata({ data: "json, name=license" })
  license?: NodeFullSoftwareLicense;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=releaseDate" })
  releaseDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}


export class NodeFullSound extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;
}

export enum NodeFullStatusEnum {
    Pending = "pending",
    Accepted = "accepted",
    Deleted = "deleted"
}


export class NodeFullStorage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=firmware" })
  firmware?: string;

  @SpeakeasyMetadata({ data: "json, name=manufacturer" })
  manufacturer?: string;

  @SpeakeasyMetadata({ data: "json, name=model" })
  model?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;

  @SpeakeasyMetadata({ data: "json, name=serialNumber" })
  serialNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class NodeFullTimezone extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset?: string;
}


export class NodeFullVideos extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=chipset" })
  chipset?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=memory" })
  memory?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;

  @SpeakeasyMetadata({ data: "json, name=resolution" })
  resolution?: string;
}


export class NodeFullVirtualMachines extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=memory" })
  memory?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=owner" })
  owner?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=subsystem" })
  subsystem?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=uuid" })
  uuid?: string;

  @SpeakeasyMetadata({ data: "json, name=vcpu" })
  vcpu?: string;
}


export class NodeFull extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accounts" })
  accounts?: string[];

  @SpeakeasyMetadata({ data: "json, name=architectureDescription" })
  architectureDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=bios" })
  bios?: NodeFullBios;

  @SpeakeasyMetadata({ data: "json, name=controllers", elemType: NodeFullControllers })
  controllers?: NodeFullControllers[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=environmentVariables", elemType: NodeFullEnvironmentVariables })
  environmentVariables?: NodeFullEnvironmentVariables[];

  @SpeakeasyMetadata({ data: "json, name=fileSystems", elemType: NodeFullFileSystems })
  fileSystems?: NodeFullFileSystems[];

  @SpeakeasyMetadata({ data: "json, name=hostname" })
  hostname: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=ipAddresses" })
  ipAddresses: string[];

  @SpeakeasyMetadata({ data: "json, name=lastInventoryDate" })
  lastInventoryDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=lastRunDate" })
  lastRunDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=machine" })
  machine?: NodeFullMachine;

  @SpeakeasyMetadata({ data: "json, name=managementTechnology", elemType: NodeFullManagementTechnology })
  managementTechnology: NodeFullManagementTechnology[];

  @SpeakeasyMetadata({ data: "json, name=managementTechnologyDetails" })
  managementTechnologyDetails?: NodeFullManagementTechnologyDetails;

  @SpeakeasyMetadata({ data: "json, name=memories", elemType: NodeFullMemories })
  memories?: NodeFullMemories[];

  @SpeakeasyMetadata({ data: "json, name=networkInterfaces", elemType: NodeFullNetworkInterfaces })
  networkInterfaces?: NodeFullNetworkInterfaces[];

  @SpeakeasyMetadata({ data: "json, name=os" })
  os?: NodeFullOs;

  @SpeakeasyMetadata({ data: "json, name=policyMode" })
  policyMode?: NodeFullPolicyModeEnum;

  @SpeakeasyMetadata({ data: "json, name=policyServerId" })
  policyServerId: string;

  @SpeakeasyMetadata({ data: "json, name=ports", elemType: NodeFullPorts })
  ports?: NodeFullPorts[];

  @SpeakeasyMetadata({ data: "json, name=processes", elemType: NodeFullProcesses })
  processes?: NodeFullProcesses[];

  @SpeakeasyMetadata({ data: "json, name=processors", elemType: NodeFullProcessors })
  processors?: NodeFullProcessors[];

  @SpeakeasyMetadata({ data: "json, name=properties", elemType: NodeFullProperties })
  properties: NodeFullProperties[];

  @SpeakeasyMetadata({ data: "json, name=ram" })
  ram?: number;

  @SpeakeasyMetadata({ data: "json, name=slots", elemType: NodeFullSlots })
  slots?: NodeFullSlots[];

  @SpeakeasyMetadata({ data: "json, name=software", elemType: NodeFullSoftware })
  software?: NodeFullSoftware[];

  @SpeakeasyMetadata({ data: "json, name=sound", elemType: NodeFullSound })
  sound?: NodeFullSound[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: NodeFullStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=storage", elemType: NodeFullStorage })
  storage?: NodeFullStorage[];

  @SpeakeasyMetadata({ data: "json, name=timezone" })
  timezone?: NodeFullTimezone;

  @SpeakeasyMetadata({ data: "json, name=videos", elemType: NodeFullVideos })
  videos?: NodeFullVideos[];

  @SpeakeasyMetadata({ data: "json, name=virtualMachines", elemType: NodeFullVirtualMachines })
  virtualMachines?: NodeFullVirtualMachines[];
}
