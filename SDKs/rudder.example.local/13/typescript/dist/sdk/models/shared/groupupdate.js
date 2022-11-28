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
export var GroupUpdateQueryCompositionEnum;
(function (GroupUpdateQueryCompositionEnum) {
    GroupUpdateQueryCompositionEnum["And"] = "and";
    GroupUpdateQueryCompositionEnum["Or"] = "or";
})(GroupUpdateQueryCompositionEnum || (GroupUpdateQueryCompositionEnum = {}));
var GroupUpdateQueryWhere = /** @class */ (function (_super) {
    __extends(GroupUpdateQueryWhere, _super);
    function GroupUpdateQueryWhere() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attribute" }),
        __metadata("design:type", String)
    ], GroupUpdateQueryWhere.prototype, "attribute", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comparator" }),
        __metadata("design:type", String)
    ], GroupUpdateQueryWhere.prototype, "comparator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=objectType" }),
        __metadata("design:type", String)
    ], GroupUpdateQueryWhere.prototype, "objectType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], GroupUpdateQueryWhere.prototype, "value", void 0);
    return GroupUpdateQueryWhere;
}(SpeakeasyBase));
export { GroupUpdateQueryWhere };
// GroupUpdateQuery
/**
 * The criteria defining the group. If not provided, the group will be empty.
**/
var GroupUpdateQuery = /** @class */ (function (_super) {
    __extends(GroupUpdateQuery, _super);
    function GroupUpdateQuery() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=composition" }),
        __metadata("design:type", String)
    ], GroupUpdateQuery.prototype, "composition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=select" }),
        __metadata("design:type", String)
    ], GroupUpdateQuery.prototype, "select", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=where", elemType: GroupUpdateQueryWhere }),
        __metadata("design:type", Array)
    ], GroupUpdateQuery.prototype, "where", void 0);
    return GroupUpdateQuery;
}(SpeakeasyBase));
export { GroupUpdateQuery };
var GroupUpdate = /** @class */ (function (_super) {
    __extends(GroupUpdate, _super);
    function GroupUpdate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], GroupUpdate.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GroupUpdate.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GroupUpdate.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dynamic" }),
        __metadata("design:type", Boolean)
    ], GroupUpdate.prototype, "dynamic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], GroupUpdate.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=query" }),
        __metadata("design:type", GroupUpdateQuery)
    ], GroupUpdate.prototype, "query", void 0);
    return GroupUpdate;
}(SpeakeasyBase));
export { GroupUpdate };
