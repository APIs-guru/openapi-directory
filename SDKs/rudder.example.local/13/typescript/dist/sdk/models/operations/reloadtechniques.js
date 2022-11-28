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
export var ReloadTechniques200ApplicationJsonActionEnum;
(function (ReloadTechniques200ApplicationJsonActionEnum) {
    ReloadTechniques200ApplicationJsonActionEnum["ReloadTechniques"] = "reloadTechniques";
})(ReloadTechniques200ApplicationJsonActionEnum || (ReloadTechniques200ApplicationJsonActionEnum = {}));
export var ReloadTechniques200ApplicationJsonDataTechniquesEnum;
(function (ReloadTechniques200ApplicationJsonDataTechniquesEnum) {
    ReloadTechniques200ApplicationJsonDataTechniquesEnum["Started"] = "Started";
})(ReloadTechniques200ApplicationJsonDataTechniquesEnum || (ReloadTechniques200ApplicationJsonDataTechniquesEnum = {}));
var ReloadTechniques200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(ReloadTechniques200ApplicationJsonData, _super);
    function ReloadTechniques200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=techniques" }),
        __metadata("design:type", String)
    ], ReloadTechniques200ApplicationJsonData.prototype, "techniques", void 0);
    return ReloadTechniques200ApplicationJsonData;
}(SpeakeasyBase));
export { ReloadTechniques200ApplicationJsonData };
export var ReloadTechniques200ApplicationJsonResultEnum;
(function (ReloadTechniques200ApplicationJsonResultEnum) {
    ReloadTechniques200ApplicationJsonResultEnum["Success"] = "success";
    ReloadTechniques200ApplicationJsonResultEnum["Error"] = "error";
})(ReloadTechniques200ApplicationJsonResultEnum || (ReloadTechniques200ApplicationJsonResultEnum = {}));
var ReloadTechniques200ApplicationJson = /** @class */ (function (_super) {
    __extends(ReloadTechniques200ApplicationJson, _super);
    function ReloadTechniques200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], ReloadTechniques200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", ReloadTechniques200ApplicationJsonData)
    ], ReloadTechniques200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], ReloadTechniques200ApplicationJson.prototype, "result", void 0);
    return ReloadTechniques200ApplicationJson;
}(SpeakeasyBase));
export { ReloadTechniques200ApplicationJson };
var ReloadTechniquesResponse = /** @class */ (function (_super) {
    __extends(ReloadTechniquesResponse, _super);
    function ReloadTechniquesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReloadTechniquesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReloadTechniquesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReloadTechniques200ApplicationJson)
    ], ReloadTechniquesResponse.prototype, "reloadTechniques200ApplicationJsonObject", void 0);
    return ReloadTechniquesResponse;
}(SpeakeasyBase));
export { ReloadTechniquesResponse };
