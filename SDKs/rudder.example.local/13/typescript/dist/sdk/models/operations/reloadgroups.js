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
export var ReloadGroups200ApplicationJsonActionEnum;
(function (ReloadGroups200ApplicationJsonActionEnum) {
    ReloadGroups200ApplicationJsonActionEnum["ReloadGroups"] = "reloadGroups";
})(ReloadGroups200ApplicationJsonActionEnum || (ReloadGroups200ApplicationJsonActionEnum = {}));
export var ReloadGroups200ApplicationJsonDataGroupsEnum;
(function (ReloadGroups200ApplicationJsonDataGroupsEnum) {
    ReloadGroups200ApplicationJsonDataGroupsEnum["Started"] = "Started";
})(ReloadGroups200ApplicationJsonDataGroupsEnum || (ReloadGroups200ApplicationJsonDataGroupsEnum = {}));
var ReloadGroups200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(ReloadGroups200ApplicationJsonData, _super);
    function ReloadGroups200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groups" }),
        __metadata("design:type", String)
    ], ReloadGroups200ApplicationJsonData.prototype, "groups", void 0);
    return ReloadGroups200ApplicationJsonData;
}(SpeakeasyBase));
export { ReloadGroups200ApplicationJsonData };
export var ReloadGroups200ApplicationJsonResultEnum;
(function (ReloadGroups200ApplicationJsonResultEnum) {
    ReloadGroups200ApplicationJsonResultEnum["Success"] = "success";
    ReloadGroups200ApplicationJsonResultEnum["Error"] = "error";
})(ReloadGroups200ApplicationJsonResultEnum || (ReloadGroups200ApplicationJsonResultEnum = {}));
var ReloadGroups200ApplicationJson = /** @class */ (function (_super) {
    __extends(ReloadGroups200ApplicationJson, _super);
    function ReloadGroups200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], ReloadGroups200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", ReloadGroups200ApplicationJsonData)
    ], ReloadGroups200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], ReloadGroups200ApplicationJson.prototype, "result", void 0);
    return ReloadGroups200ApplicationJson;
}(SpeakeasyBase));
export { ReloadGroups200ApplicationJson };
var ReloadGroupsResponse = /** @class */ (function (_super) {
    __extends(ReloadGroupsResponse, _super);
    function ReloadGroupsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReloadGroupsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReloadGroupsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReloadGroups200ApplicationJson)
    ], ReloadGroupsResponse.prototype, "reloadGroups200ApplicationJsonObject", void 0);
    return ReloadGroupsResponse;
}(SpeakeasyBase));
export { ReloadGroupsResponse };
