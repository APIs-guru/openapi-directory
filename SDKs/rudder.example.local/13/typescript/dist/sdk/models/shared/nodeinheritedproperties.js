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
export var NodeInheritedPropertiesPropertiesHierarchyKindEnum;
(function (NodeInheritedPropertiesPropertiesHierarchyKindEnum) {
    NodeInheritedPropertiesPropertiesHierarchyKindEnum["Global"] = "global";
    NodeInheritedPropertiesPropertiesHierarchyKindEnum["Group"] = "group";
})(NodeInheritedPropertiesPropertiesHierarchyKindEnum || (NodeInheritedPropertiesPropertiesHierarchyKindEnum = {}));
var NodeInheritedPropertiesPropertiesHierarchy = /** @class */ (function (_super) {
    __extends(NodeInheritedPropertiesPropertiesHierarchy, _super);
    function NodeInheritedPropertiesPropertiesHierarchy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], NodeInheritedPropertiesPropertiesHierarchy.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], NodeInheritedPropertiesPropertiesHierarchy.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], NodeInheritedPropertiesPropertiesHierarchy.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], NodeInheritedPropertiesPropertiesHierarchy.prototype, "value", void 0);
    return NodeInheritedPropertiesPropertiesHierarchy;
}(SpeakeasyBase));
export { NodeInheritedPropertiesPropertiesHierarchy };
export var NodeInheritedPropertiesPropertiesProviderEnum;
(function (NodeInheritedPropertiesPropertiesProviderEnum) {
    NodeInheritedPropertiesPropertiesProviderEnum["Inherited"] = "inherited";
    NodeInheritedPropertiesPropertiesProviderEnum["Overridden"] = "overridden";
    NodeInheritedPropertiesPropertiesProviderEnum["PluginNameLikeDatasources"] = "plugin name like datasources";
})(NodeInheritedPropertiesPropertiesProviderEnum || (NodeInheritedPropertiesPropertiesProviderEnum = {}));
var NodeInheritedPropertiesProperties = /** @class */ (function (_super) {
    __extends(NodeInheritedPropertiesProperties, _super);
    function NodeInheritedPropertiesProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hierarchy", elemType: NodeInheritedPropertiesPropertiesHierarchy }),
        __metadata("design:type", Array)
    ], NodeInheritedPropertiesProperties.prototype, "hierarchy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], NodeInheritedPropertiesProperties.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=origval" }),
        __metadata("design:type", Object)
    ], NodeInheritedPropertiesProperties.prototype, "origval", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=provider" }),
        __metadata("design:type", String)
    ], NodeInheritedPropertiesProperties.prototype, "provider", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", Object)
    ], NodeInheritedPropertiesProperties.prototype, "value", void 0);
    return NodeInheritedPropertiesProperties;
}(SpeakeasyBase));
export { NodeInheritedPropertiesProperties };
var NodeInheritedProperties = /** @class */ (function (_super) {
    __extends(NodeInheritedProperties, _super);
    function NodeInheritedProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], NodeInheritedProperties.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=properties", elemType: NodeInheritedPropertiesProperties }),
        __metadata("design:type", Array)
    ], NodeInheritedProperties.prototype, "properties", void 0);
    return NodeInheritedProperties;
}(SpeakeasyBase));
export { NodeInheritedProperties };
