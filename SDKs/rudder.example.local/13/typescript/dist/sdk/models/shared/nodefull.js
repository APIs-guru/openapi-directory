var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
// NodeFullBios
/**
 * BIOS information
**/
var NodeFullBios = /** @class */ (function (_super) {
    __extends(NodeFullBios, _super);
    function NodeFullBios() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], NodeFullBios.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=editor" }),
        __metadata("design:type", String)
    ], NodeFullBios.prototype, "editor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], NodeFullBios.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quantity" }),
        __metadata("design:type", Number)
    ], NodeFullBios.prototype, "quantity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=releaseDate" }),
        __metadata("design:type", String)
    ], NodeFullBios.prototype, "releaseDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], NodeFullBios.prototype, "version", void 0);
    return NodeFullBios;
}(SpeakeasyBase));
export { NodeFullBios };
var NodeFullControllers = /** @class */ (function (_super) {
    __extends(NodeFullControllers, _super);
    function NodeFullControllers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], NodeFullControllers.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=manufacturer" }),
        __metadata("design:type", String)
    ], NodeFullControllers.prototype, "manufacturer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], NodeFullControllers.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quantity" }),
        __metadata("design:type", Number)
    ], NodeFullControllers.prototype, "quantity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], NodeFullControllers.prototype, "type", void 0);
    return NodeFullControllers;
}(SpeakeasyBase));
export { NodeFullControllers };
var NodeFullEnvironmentVariables = /** @class */ (function (_super) {
    __extends(NodeFullEnvironmentVariables, _super);
    function NodeFullEnvironmentVariables() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], NodeFullEnvironmentVariables.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], NodeFullEnvironmentVariables.prototype, "value", void 0);
    return NodeFullEnvironmentVariables;
}(SpeakeasyBase));
export { NodeFullEnvironmentVariables };
var NodeFullFileSystems = /** @class */ (function (_super) {
    __extends(NodeFullFileSystems, _super);
    function NodeFullFileSystems() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], NodeFullFileSystems.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fileCount" }),
        __metadata("design:type", Number)
    ], NodeFullFileSystems.prototype, "fileCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=freeSpace" }),
        __metadata("design:type", Number)
    ], NodeFullFileSystems.prototype, "freeSpace", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mountPoint" }),
        __metadata("design:type", String)
    ], NodeFullFileSystems.prototype, "mountPoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], NodeFullFileSystems.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totalSpace" }),
        __metadata("design:type", Number)
    ], NodeFullFileSystems.prototype, "totalSpace", void 0);
    return NodeFullFileSystems;
}(SpeakeasyBase));
export { NodeFullFileSystems };
export var NodeFullMachineTypeEnum;
(function (NodeFullMachineTypeEnum) {
    NodeFullMachineTypeEnum["Physical"] = "Physical";
    NodeFullMachineTypeEnum["Virtual"] = "Virtual";
})(NodeFullMachineTypeEnum || (NodeFullMachineTypeEnum = {}));
// NodeFullMachine
/**
 * Information about the underlying machine
**/
var NodeFullMachine = /** @class */ (function (_super) {
    __extends(NodeFullMachine, _super);
    function NodeFullMachine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], NodeFullMachine.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=manufacturer" }),
        __metadata("design:type", String)
    ], NodeFullMachine.prototype, "manufacturer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=provider" }),
        __metadata("design:type", String)
    ], NodeFullMachine.prototype, "provider", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serialNumber" }),
        __metadata("design:type", String)
    ], NodeFullMachine.prototype, "serialNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], NodeFullMachine.prototype, "type", void 0);
    return NodeFullMachine;
}(SpeakeasyBase));
export { NodeFullMachine };
var NodeFullManagementTechnology = /** @class */ (function (_super) {
    __extends(NodeFullManagementTechnology, _super);
    function NodeFullManagementTechnology() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=capabilities" }),
        __metadata("design:type", Array)
    ], NodeFullManagementTechnology.prototype, "capabilities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], NodeFullManagementTechnology.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodeKind" }),
        __metadata("design:type", String)
    ], NodeFullManagementTechnology.prototype, "nodeKind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rootComponents" }),
        __metadata("design:type", Array)
    ], NodeFullManagementTechnology.prototype, "rootComponents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], NodeFullManagementTechnology.prototype, "version", void 0);
    return NodeFullManagementTechnology;
}(SpeakeasyBase));
export { NodeFullManagementTechnology };
// NodeFullManagementTechnologyDetails
/**
 * Additional information about management technology
**/
var NodeFullManagementTechnologyDetails = /** @class */ (function (_super) {
    __extends(NodeFullManagementTechnologyDetails, _super);
    function NodeFullManagementTechnologyDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cfengineKeys" }),
        __metadata("design:type", Array)
    ], NodeFullManagementTechnologyDetails.prototype, "cfengineKeys", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cfengineUser" }),
        __metadata("design:type", String)
    ], NodeFullManagementTechnologyDetails.prototype, "cfengineUser", void 0);
    return NodeFullManagementTechnologyDetails;
}(SpeakeasyBase));
export { NodeFullManagementTechnologyDetails };
// NodeFullMemories
/**
 * Memory slots
**/
var NodeFullMemories = /** @class */ (function (_super) {
    __extends(NodeFullMemories, _super);
    function NodeFullMemories() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=capacity" }),
        __metadata("design:type", Number)
    ], NodeFullMemories.prototype, "capacity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=caption" }),
        __metadata("design:type", String)
    ], NodeFullMemories.prototype, "caption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], NodeFullMemories.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], NodeFullMemories.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quantity" }),
        __metadata("design:type", String)
    ], NodeFullMemories.prototype, "quantity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serialNumber" }),
        __metadata("design:type", String)
    ], NodeFullMemories.prototype, "serialNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slotNumber" }),
        __metadata("design:type", Number)
    ], NodeFullMemories.prototype, "slotNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=speed" }),
        __metadata("design:type", Number)
    ], NodeFullMemories.prototype, "speed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], NodeFullMemories.prototype, "type", void 0);
    return NodeFullMemories;
}(SpeakeasyBase));
export { NodeFullMemories };
var NodeFullNetworkInterfaces = /** @class */ (function (_super) {
    __extends(NodeFullNetworkInterfaces, _super);
    function NodeFullNetworkInterfaces() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dhcpServer" }),
        __metadata("design:type", String)
    ], NodeFullNetworkInterfaces.prototype, "dhcpServer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ipAddresses" }),
        __metadata("design:type", Array)
    ], NodeFullNetworkInterfaces.prototype, "ipAddresses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=macAddress" }),
        __metadata("design:type", String)
    ], NodeFullNetworkInterfaces.prototype, "macAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mask" }),
        __metadata("design:type", Array)
    ], NodeFullNetworkInterfaces.prototype, "mask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], NodeFullNetworkInterfaces.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=speed" }),
        __metadata("design:type", String)
    ], NodeFullNetworkInterfaces.prototype, "speed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], NodeFullNetworkInterfaces.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], NodeFullNetworkInterfaces.prototype, "type", void 0);
    return NodeFullNetworkInterfaces;
}(SpeakeasyBase));
export { NodeFullNetworkInterfaces };
export var NodeFullOsTypeEnum;
(function (NodeFullOsTypeEnum) {
    NodeFullOsTypeEnum["Windows"] = "Windows";
    NodeFullOsTypeEnum["Linux"] = "Linux";
    NodeFullOsTypeEnum["Aix"] = "AIX";
    NodeFullOsTypeEnum["FreeBsd"] = "FreeBSD";
})(NodeFullOsTypeEnum || (NodeFullOsTypeEnum = {}));
// NodeFullOs
/**
 * Information about the operating system
**/
var NodeFullOs = /** @class */ (function (_super) {
    __extends(NodeFullOs, _super);
    function NodeFullOs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fullName" }),
        __metadata("design:type", String)
    ], NodeFullOs.prototype, "fullName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kernelVersion" }),
        __metadata("design:type", String)
    ], NodeFullOs.prototype, "kernelVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], NodeFullOs.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=servicePack" }),
        __metadata("design:type", String)
    ], NodeFullOs.prototype, "servicePack", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], NodeFullOs.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], NodeFullOs.prototype, "version", void 0);
    return NodeFullOs;
}(SpeakeasyBase));
export { NodeFullOs };
export var NodeFullPolicyModeEnum;
(function (NodeFullPolicyModeEnum) {
    NodeFullPolicyModeEnum["Enforce"] = "enforce";
    NodeFullPolicyModeEnum["Audit"] = "audit";
    NodeFullPolicyModeEnum["Default"] = "default";
})(NodeFullPolicyModeEnum || (NodeFullPolicyModeEnum = {}));
var NodeFullPorts = /** @class */ (function (_super) {
    __extends(NodeFullPorts, _super);
    function NodeFullPorts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], NodeFullPorts.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], NodeFullPorts.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quantity" }),
        __metadata("design:type", Number)
    ], NodeFullPorts.prototype, "quantity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], NodeFullPorts.prototype, "type", void 0);
    return NodeFullPorts;
}(SpeakeasyBase));
export { NodeFullPorts };
// NodeFullProcesses
/**
 * Process information
**/
var NodeFullProcesses = /** @class */ (function (_super) {
    __extends(NodeFullProcesses, _super);
    function NodeFullProcesses() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cpuUsage" }),
        __metadata("design:type", Number)
    ], NodeFullProcesses.prototype, "cpuUsage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], NodeFullProcesses.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memory" }),
        __metadata("design:type", Number)
    ], NodeFullProcesses.prototype, "memory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], NodeFullProcesses.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pid" }),
        __metadata("design:type", Number)
    ], NodeFullProcesses.prototype, "pid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=started" }),
        __metadata("design:type", Date)
    ], NodeFullProcesses.prototype, "started", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tty" }),
        __metadata("design:type", String)
    ], NodeFullProcesses.prototype, "tty", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user" }),
        __metadata("design:type", String)
    ], NodeFullProcesses.prototype, "user", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=virtualMemory" }),
        __metadata("design:type", Number)
    ], NodeFullProcesses.prototype, "virtualMemory", void 0);
    return NodeFullProcesses;
}(SpeakeasyBase));
export { NodeFullProcesses };
var NodeFullProcessors = /** @class */ (function (_super) {
    __extends(NodeFullProcessors, _super);
    function NodeFullProcessors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=arch" }),
        __metadata("design:type", String)
    ], NodeFullProcessors.prototype, "arch", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=core" }),
        __metadata("design:type", Number)
    ], NodeFullProcessors.prototype, "core", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cpuid" }),
        __metadata("design:type", String)
    ], NodeFullProcessors.prototype, "cpuid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], NodeFullProcessors.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=externalClock" }),
        __metadata("design:type", String)
    ], NodeFullProcessors.prototype, "externalClock", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=familyName" }),
        __metadata("design:type", String)
    ], NodeFullProcessors.prototype, "familyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=manufacturer" }),
        __metadata("design:type", String)
    ], NodeFullProcessors.prototype, "manufacturer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=model" }),
        __metadata("design:type", Number)
    ], NodeFullProcessors.prototype, "model", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], NodeFullProcessors.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quantity" }),
        __metadata("design:type", Number)
    ], NodeFullProcessors.prototype, "quantity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=speed" }),
        __metadata("design:type", Number)
    ], NodeFullProcessors.prototype, "speed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stepping" }),
        __metadata("design:type", Number)
    ], NodeFullProcessors.prototype, "stepping", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thread" }),
        __metadata("design:type", Number)
    ], NodeFullProcessors.prototype, "thread", void 0);
    return NodeFullProcessors;
}(SpeakeasyBase));
export { NodeFullProcessors };
var NodeFullProperties = /** @class */ (function (_super) {
    __extends(NodeFullProperties, _super);
    function NodeFullProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], NodeFullProperties.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", Object)
    ], NodeFullProperties.prototype, "value", void 0);
    return NodeFullProperties;
}(SpeakeasyBase));
export { NodeFullProperties };
var NodeFullSlots = /** @class */ (function (_super) {
    __extends(NodeFullSlots, _super);
    function NodeFullSlots() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], NodeFullSlots.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], NodeFullSlots.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quantity" }),
        __metadata("design:type", Number)
    ], NodeFullSlots.prototype, "quantity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], NodeFullSlots.prototype, "status", void 0);
    return NodeFullSlots;
}(SpeakeasyBase));
export { NodeFullSlots };
// NodeFullSoftwareLicense
/**
 * Information about the license
**/
var NodeFullSoftwareLicense = /** @class */ (function (_super) {
    __extends(NodeFullSoftwareLicense, _super);
    function NodeFullSoftwareLicense() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], NodeFullSoftwareLicense.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expirationDate" }),
        __metadata("design:type", Date)
    ], NodeFullSoftwareLicense.prototype, "expirationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], NodeFullSoftwareLicense.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oem" }),
        __metadata("design:type", String)
    ], NodeFullSoftwareLicense.prototype, "oem", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productId" }),
        __metadata("design:type", String)
    ], NodeFullSoftwareLicense.prototype, "productId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=productKey" }),
        __metadata("design:type", String)
    ], NodeFullSoftwareLicense.prototype, "productKey", void 0);
    return NodeFullSoftwareLicense;
}(SpeakeasyBase));
export { NodeFullSoftwareLicense };
var NodeFullSoftware = /** @class */ (function (_super) {
    __extends(NodeFullSoftware, _super);
    function NodeFullSoftware() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], NodeFullSoftware.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=editor" }),
        __metadata("design:type", String)
    ], NodeFullSoftware.prototype, "editor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=license" }),
        __metadata("design:type", NodeFullSoftwareLicense)
    ], NodeFullSoftware.prototype, "license", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], NodeFullSoftware.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=releaseDate" }),
        __metadata("design:type", Date)
    ], NodeFullSoftware.prototype, "releaseDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], NodeFullSoftware.prototype, "version", void 0);
    return NodeFullSoftware;
}(SpeakeasyBase));
export { NodeFullSoftware };
var NodeFullSound = /** @class */ (function (_super) {
    __extends(NodeFullSound, _super);
    function NodeFullSound() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], NodeFullSound.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], NodeFullSound.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quantity" }),
        __metadata("design:type", Number)
    ], NodeFullSound.prototype, "quantity", void 0);
    return NodeFullSound;
}(SpeakeasyBase));
export { NodeFullSound };
export var NodeFullStatusEnum;
(function (NodeFullStatusEnum) {
    NodeFullStatusEnum["Pending"] = "pending";
    NodeFullStatusEnum["Accepted"] = "accepted";
    NodeFullStatusEnum["Deleted"] = "deleted";
})(NodeFullStatusEnum || (NodeFullStatusEnum = {}));
var NodeFullStorage = /** @class */ (function (_super) {
    __extends(NodeFullStorage, _super);
    function NodeFullStorage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], NodeFullStorage.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firmware" }),
        __metadata("design:type", String)
    ], NodeFullStorage.prototype, "firmware", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=manufacturer" }),
        __metadata("design:type", String)
    ], NodeFullStorage.prototype, "manufacturer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=model" }),
        __metadata("design:type", String)
    ], NodeFullStorage.prototype, "model", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], NodeFullStorage.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quantity" }),
        __metadata("design:type", Number)
    ], NodeFullStorage.prototype, "quantity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serialNumber" }),
        __metadata("design:type", String)
    ], NodeFullStorage.prototype, "serialNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=size" }),
        __metadata("design:type", Number)
    ], NodeFullStorage.prototype, "size", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], NodeFullStorage.prototype, "type", void 0);
    return NodeFullStorage;
}(SpeakeasyBase));
export { NodeFullStorage };
var NodeFullTimezone = /** @class */ (function (_super) {
    __extends(NodeFullTimezone, _super);
    function NodeFullTimezone() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], NodeFullTimezone.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offset" }),
        __metadata("design:type", String)
    ], NodeFullTimezone.prototype, "offset", void 0);
    return NodeFullTimezone;
}(SpeakeasyBase));
export { NodeFullTimezone };
var NodeFullVideos = /** @class */ (function (_super) {
    __extends(NodeFullVideos, _super);
    function NodeFullVideos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=chipset" }),
        __metadata("design:type", String)
    ], NodeFullVideos.prototype, "chipset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], NodeFullVideos.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memory" }),
        __metadata("design:type", String)
    ], NodeFullVideos.prototype, "memory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], NodeFullVideos.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quantity" }),
        __metadata("design:type", Number)
    ], NodeFullVideos.prototype, "quantity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resolution" }),
        __metadata("design:type", String)
    ], NodeFullVideos.prototype, "resolution", void 0);
    return NodeFullVideos;
}(SpeakeasyBase));
export { NodeFullVideos };
var NodeFullVirtualMachines = /** @class */ (function (_super) {
    __extends(NodeFullVirtualMachines, _super);
    function NodeFullVirtualMachines() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], NodeFullVirtualMachines.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memory" }),
        __metadata("design:type", String)
    ], NodeFullVirtualMachines.prototype, "memory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], NodeFullVirtualMachines.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=owner" }),
        __metadata("design:type", String)
    ], NodeFullVirtualMachines.prototype, "owner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], NodeFullVirtualMachines.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subsystem" }),
        __metadata("design:type", String)
    ], NodeFullVirtualMachines.prototype, "subsystem", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], NodeFullVirtualMachines.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uuid" }),
        __metadata("design:type", String)
    ], NodeFullVirtualMachines.prototype, "uuid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vcpu" }),
        __metadata("design:type", String)
    ], NodeFullVirtualMachines.prototype, "vcpu", void 0);
    return NodeFullVirtualMachines;
}(SpeakeasyBase));
export { NodeFullVirtualMachines };
var NodeFull = /** @class */ (function (_super) {
    __extends(NodeFull, _super);
    function NodeFull() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accounts" }),
        __metadata("design:type", Array)
    ], NodeFull.prototype, "accounts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=architectureDescription" }),
        __metadata("design:type", String)
    ], NodeFull.prototype, "architectureDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bios" }),
        __metadata("design:type", NodeFullBios)
    ], NodeFull.prototype, "bios", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=controllers", elemType: NodeFullControllers }),
        __metadata("design:type", Array)
    ], NodeFull.prototype, "controllers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], NodeFull.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environmentVariables", elemType: NodeFullEnvironmentVariables }),
        __metadata("design:type", Array)
    ], NodeFull.prototype, "environmentVariables", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fileSystems", elemType: NodeFullFileSystems }),
        __metadata("design:type", Array)
    ], NodeFull.prototype, "fileSystems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hostname" }),
        __metadata("design:type", String)
    ], NodeFull.prototype, "hostname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], NodeFull.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ipAddresses" }),
        __metadata("design:type", Array)
    ], NodeFull.prototype, "ipAddresses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastInventoryDate" }),
        __metadata("design:type", Date)
    ], NodeFull.prototype, "lastInventoryDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastRunDate" }),
        __metadata("design:type", Date)
    ], NodeFull.prototype, "lastRunDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=machine" }),
        __metadata("design:type", NodeFullMachine)
    ], NodeFull.prototype, "machine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=managementTechnology", elemType: NodeFullManagementTechnology }),
        __metadata("design:type", Array)
    ], NodeFull.prototype, "managementTechnology", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=managementTechnologyDetails" }),
        __metadata("design:type", NodeFullManagementTechnologyDetails)
    ], NodeFull.prototype, "managementTechnologyDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memories", elemType: NodeFullMemories }),
        __metadata("design:type", Array)
    ], NodeFull.prototype, "memories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=networkInterfaces", elemType: NodeFullNetworkInterfaces }),
        __metadata("design:type", Array)
    ], NodeFull.prototype, "networkInterfaces", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=os" }),
        __metadata("design:type", NodeFullOs)
    ], NodeFull.prototype, "os", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=policyMode" }),
        __metadata("design:type", String)
    ], NodeFull.prototype, "policyMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=policyServerId" }),
        __metadata("design:type", String)
    ], NodeFull.prototype, "policyServerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ports", elemType: NodeFullPorts }),
        __metadata("design:type", Array)
    ], NodeFull.prototype, "ports", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=processes", elemType: NodeFullProcesses }),
        __metadata("design:type", Array)
    ], NodeFull.prototype, "processes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=processors", elemType: NodeFullProcessors }),
        __metadata("design:type", Array)
    ], NodeFull.prototype, "processors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=properties", elemType: NodeFullProperties }),
        __metadata("design:type", Array)
    ], NodeFull.prototype, "properties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ram" }),
        __metadata("design:type", Number)
    ], NodeFull.prototype, "ram", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=slots", elemType: NodeFullSlots }),
        __metadata("design:type", Array)
    ], NodeFull.prototype, "slots", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=software", elemType: NodeFullSoftware }),
        __metadata("design:type", Array)
    ], NodeFull.prototype, "software", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sound", elemType: NodeFullSound }),
        __metadata("design:type", Array)
    ], NodeFull.prototype, "sound", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], NodeFull.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=storage", elemType: NodeFullStorage }),
        __metadata("design:type", Array)
    ], NodeFull.prototype, "storage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timezone" }),
        __metadata("design:type", NodeFullTimezone)
    ], NodeFull.prototype, "timezone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videos", elemType: NodeFullVideos }),
        __metadata("design:type", Array)
    ], NodeFull.prototype, "videos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=virtualMachines", elemType: NodeFullVirtualMachines }),
        __metadata("design:type", Array)
    ], NodeFull.prototype, "virtualMachines", void 0);
    return NodeFull;
}(SpeakeasyBase));
export { NodeFull };
