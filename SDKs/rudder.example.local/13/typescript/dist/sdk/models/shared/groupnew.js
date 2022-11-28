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
var GroupNewProperties = /** @class */ (function (_super) {
    __extends(GroupNewProperties, _super);
    function GroupNewProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GroupNewProperties.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", Object)
    ], GroupNewProperties.prototype, "value", void 0);
    return GroupNewProperties;
}(SpeakeasyBase));
export { GroupNewProperties };
export var GroupNewQueryCompositionEnum;
(function (GroupNewQueryCompositionEnum) {
    GroupNewQueryCompositionEnum["And"] = "and";
    GroupNewQueryCompositionEnum["Or"] = "or";
})(GroupNewQueryCompositionEnum || (GroupNewQueryCompositionEnum = {}));
var GroupNewQueryWhere = /** @class */ (function (_super) {
    __extends(GroupNewQueryWhere, _super);
    function GroupNewQueryWhere() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attribute" }),
        __metadata("design:type", String)
    ], GroupNewQueryWhere.prototype, "attribute", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comparator" }),
        __metadata("design:type", String)
    ], GroupNewQueryWhere.prototype, "comparator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=objectType" }),
        __metadata("design:type", String)
    ], GroupNewQueryWhere.prototype, "objectType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], GroupNewQueryWhere.prototype, "value", void 0);
    return GroupNewQueryWhere;
}(SpeakeasyBase));
export { GroupNewQueryWhere };
// GroupNewQuery
/**
 * The criteria defining the group. If not provided, the group will be empty.
**/
var GroupNewQuery = /** @class */ (function (_super) {
    __extends(GroupNewQuery, _super);
    function GroupNewQuery() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=composition" }),
        __metadata("design:type", String)
    ], GroupNewQuery.prototype, "composition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=select" }),
        __metadata("design:type", String)
    ], GroupNewQuery.prototype, "select", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=where", elemType: GroupNewQueryWhere }),
        __metadata("design:type", Array)
    ], GroupNewQuery.prototype, "where", void 0);
    return GroupNewQuery;
}(SpeakeasyBase));
export { GroupNewQuery };
var GroupNew = /** @class */ (function (_super) {
    __extends(GroupNew, _super);
    function GroupNew() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], GroupNew.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GroupNew.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GroupNew.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dynamic" }),
        __metadata("design:type", Boolean)
    ], GroupNew.prototype, "dynamic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], GroupNew.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GroupNew.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=properties", elemType: GroupNewProperties }),
        __metadata("design:type", Array)
    ], GroupNew.prototype, "properties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=query" }),
        __metadata("design:type", GroupNewQuery)
    ], GroupNew.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=source" }),
        __metadata("design:type", String)
    ], GroupNew.prototype, "source", void 0);
    return GroupNew;
}(SpeakeasyBase));
export { GroupNew };
