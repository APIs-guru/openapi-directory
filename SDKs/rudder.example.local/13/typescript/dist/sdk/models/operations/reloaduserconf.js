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
export var ReloadUserConf200ApplicationJsonActionEnum;
(function (ReloadUserConf200ApplicationJsonActionEnum) {
    ReloadUserConf200ApplicationJsonActionEnum["ReloadUserConf"] = "reloadUserConf";
})(ReloadUserConf200ApplicationJsonActionEnum || (ReloadUserConf200ApplicationJsonActionEnum = {}));
var ReloadUserConf200ApplicationJsonDataReload = /** @class */ (function (_super) {
    __extends(ReloadUserConf200ApplicationJsonDataReload, _super);
    function ReloadUserConf200ApplicationJsonDataReload() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ReloadUserConf200ApplicationJsonDataReload.prototype, "status", void 0);
    return ReloadUserConf200ApplicationJsonDataReload;
}(SpeakeasyBase));
export { ReloadUserConf200ApplicationJsonDataReload };
var ReloadUserConf200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(ReloadUserConf200ApplicationJsonData, _super);
    function ReloadUserConf200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reload" }),
        __metadata("design:type", ReloadUserConf200ApplicationJsonDataReload)
    ], ReloadUserConf200ApplicationJsonData.prototype, "reload", void 0);
    return ReloadUserConf200ApplicationJsonData;
}(SpeakeasyBase));
export { ReloadUserConf200ApplicationJsonData };
export var ReloadUserConf200ApplicationJsonResultEnum;
(function (ReloadUserConf200ApplicationJsonResultEnum) {
    ReloadUserConf200ApplicationJsonResultEnum["Success"] = "success";
    ReloadUserConf200ApplicationJsonResultEnum["Error"] = "error";
})(ReloadUserConf200ApplicationJsonResultEnum || (ReloadUserConf200ApplicationJsonResultEnum = {}));
var ReloadUserConf200ApplicationJson = /** @class */ (function (_super) {
    __extends(ReloadUserConf200ApplicationJson, _super);
    function ReloadUserConf200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], ReloadUserConf200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", ReloadUserConf200ApplicationJsonData)
    ], ReloadUserConf200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], ReloadUserConf200ApplicationJson.prototype, "result", void 0);
    return ReloadUserConf200ApplicationJson;
}(SpeakeasyBase));
export { ReloadUserConf200ApplicationJson };
var ReloadUserConfResponse = /** @class */ (function (_super) {
    __extends(ReloadUserConfResponse, _super);
    function ReloadUserConfResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReloadUserConfResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReloadUserConfResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReloadUserConf200ApplicationJson)
    ], ReloadUserConfResponse.prototype, "reloadUserConf200ApplicationJsonObject", void 0);
    return ReloadUserConfResponse;
}(SpeakeasyBase));
export { ReloadUserConfResponse };
