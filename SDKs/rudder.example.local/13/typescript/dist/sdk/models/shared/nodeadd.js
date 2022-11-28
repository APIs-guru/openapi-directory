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
import { AgentKey } from "./agentkey";
import { Os } from "./os";
import { Timezone } from "./timezone";
export var NodeAddMachineTypeEnum;
(function (NodeAddMachineTypeEnum) {
    NodeAddMachineTypeEnum["Vmware"] = "vmware";
    NodeAddMachineTypeEnum["Physical"] = "physical";
    NodeAddMachineTypeEnum["Vm"] = "vm";
    NodeAddMachineTypeEnum["Solariszone"] = "solariszone";
    NodeAddMachineTypeEnum["Qemu"] = "qemu";
    NodeAddMachineTypeEnum["Xen"] = "xen";
    NodeAddMachineTypeEnum["Aixlpar"] = "aixlpar";
    NodeAddMachineTypeEnum["Hyperv"] = "hyperv";
    NodeAddMachineTypeEnum["Bsdjail"] = "bsdjail";
})(NodeAddMachineTypeEnum || (NodeAddMachineTypeEnum = {}));
export var NodeAddPolicyModeEnum;
(function (NodeAddPolicyModeEnum) {
    NodeAddPolicyModeEnum["Enforce"] = "enforce";
    NodeAddPolicyModeEnum["Audit"] = "audit";
})(NodeAddPolicyModeEnum || (NodeAddPolicyModeEnum = {}));
export var NodeAddPropertiesTagsEnum;
(function (NodeAddPropertiesTagsEnum) {
    NodeAddPropertiesTagsEnum["Some"] = "some";
    NodeAddPropertiesTagsEnum["Tags"] = "tags";
})(NodeAddPropertiesTagsEnum || (NodeAddPropertiesTagsEnum = {}));
var NodeAddPropertiesVars = /** @class */ (function (_super) {
    __extends(NodeAddPropertiesVars, _super);
    function NodeAddPropertiesVars() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=var1" }),
        __metadata("design:type", String)
    ], NodeAddPropertiesVars.prototype, "var1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vars2" }),
        __metadata("design:type", String)
    ], NodeAddPropertiesVars.prototype, "vars2", void 0);
    return NodeAddPropertiesVars;
}(SpeakeasyBase));
export { NodeAddPropertiesVars };
// NodeAddProperties
/**
 * Node properties in "key":"value" format, where "key" is a string, and "value" is either a string, a json array, or a json object. The following example shows you three example of &#58; &#173; a json array on the example of "tags":[ "some", "tags" ] &#173; a simple string on the example of "env":"prod" &#173; a complex json object on the example of "vars":{ "var1":"value1", "var2":"value2" } They are optional and can be used in any combination as long the keys are unique within the properties object.
**/
var NodeAddProperties = /** @class */ (function (_super) {
    __extends(NodeAddProperties, _super);
    function NodeAddProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=env" }),
        __metadata("design:type", String)
    ], NodeAddProperties.prototype, "env", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], NodeAddProperties.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vars" }),
        __metadata("design:type", NodeAddPropertiesVars)
    ], NodeAddProperties.prototype, "vars", void 0);
    return NodeAddProperties;
}(SpeakeasyBase));
export { NodeAddProperties };
export var NodeAddStateEnum;
(function (NodeAddStateEnum) {
    NodeAddStateEnum["Enable"] = "enable";
    NodeAddStateEnum["Ignored"] = "ignored";
    NodeAddStateEnum["EmptyPolicies"] = "empty-policies";
    NodeAddStateEnum["Initializing"] = "initializing";
    NodeAddStateEnum["PreparingEol"] = "preparing-eol";
})(NodeAddStateEnum || (NodeAddStateEnum = {}));
export var NodeAddStatusEnum;
(function (NodeAddStatusEnum) {
    NodeAddStatusEnum["Accepted"] = "accepted";
    NodeAddStatusEnum["Pending"] = "pending";
})(NodeAddStatusEnum || (NodeAddStatusEnum = {}));
var NodeAdd = /** @class */ (function (_super) {
    __extends(NodeAdd, _super);
    function NodeAdd() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=agentKey" }),
        __metadata("design:type", AgentKey)
    ], NodeAdd.prototype, "agentKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hostname" }),
        __metadata("design:type", String)
    ], NodeAdd.prototype, "hostname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], NodeAdd.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ipAddresses" }),
        __metadata("design:type", Array)
    ], NodeAdd.prototype, "ipAddresses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=machineType" }),
        __metadata("design:type", String)
    ], NodeAdd.prototype, "machineType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=os" }),
        __metadata("design:type", Os)
    ], NodeAdd.prototype, "os", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=policyMode" }),
        __metadata("design:type", String)
    ], NodeAdd.prototype, "policyMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=policyServerId" }),
        __metadata("design:type", String)
    ], NodeAdd.prototype, "policyServerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=properties" }),
        __metadata("design:type", NodeAddProperties)
    ], NodeAdd.prototype, "properties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], NodeAdd.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], NodeAdd.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timezone" }),
        __metadata("design:type", Timezone)
    ], NodeAdd.prototype, "timezone", void 0);
    return NodeAdd;
}(SpeakeasyBase));
export { NodeAdd };
