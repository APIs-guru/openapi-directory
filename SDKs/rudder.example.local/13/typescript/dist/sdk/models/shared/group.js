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
var GroupProperties = /** @class */ (function (_super) {
    __extends(GroupProperties, _super);
    function GroupProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GroupProperties.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", Object)
    ], GroupProperties.prototype, "value", void 0);
    return GroupProperties;
}(SpeakeasyBase));
export { GroupProperties };
export var GroupQueryCompositionEnum;
(function (GroupQueryCompositionEnum) {
    GroupQueryCompositionEnum["And"] = "and";
    GroupQueryCompositionEnum["Or"] = "or";
})(GroupQueryCompositionEnum || (GroupQueryCompositionEnum = {}));
var GroupQueryWhere = /** @class */ (function (_super) {
    __extends(GroupQueryWhere, _super);
    function GroupQueryWhere() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attribute" }),
        __metadata("design:type", String)
    ], GroupQueryWhere.prototype, "attribute", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comparator" }),
        __metadata("design:type", String)
    ], GroupQueryWhere.prototype, "comparator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=objectType" }),
        __metadata("design:type", String)
    ], GroupQueryWhere.prototype, "objectType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], GroupQueryWhere.prototype, "value", void 0);
    return GroupQueryWhere;
}(SpeakeasyBase));
export { GroupQueryWhere };
// GroupQuery
/**
 * The criteria defining the group
**/
var GroupQuery = /** @class */ (function (_super) {
    __extends(GroupQuery, _super);
    function GroupQuery() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=composition" }),
        __metadata("design:type", String)
    ], GroupQuery.prototype, "composition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=select" }),
        __metadata("design:type", String)
    ], GroupQuery.prototype, "select", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=where", elemType: GroupQueryWhere }),
        __metadata("design:type", Array)
    ], GroupQuery.prototype, "where", void 0);
    return GroupQuery;
}(SpeakeasyBase));
export { GroupQuery };
var Group = /** @class */ (function (_super) {
    __extends(Group, _super);
    function Group() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Group.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], Group.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dynamic" }),
        __metadata("design:type", Boolean)
    ], Group.prototype, "dynamic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], Group.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupClass" }),
        __metadata("design:type", Array)
    ], Group.prototype, "groupClass", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Group.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nodeIds" }),
        __metadata("design:type", Array)
    ], Group.prototype, "nodeIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=properties", elemType: GroupProperties }),
        __metadata("design:type", Array)
    ], Group.prototype, "properties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=query" }),
        __metadata("design:type", GroupQuery)
    ], Group.prototype, "query", void 0);
    return Group;
}(SpeakeasyBase));
export { Group };
