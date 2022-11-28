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
var GetSettingPathParams = /** @class */ (function (_super) {
    __extends(GetSettingPathParams, _super);
    function GetSettingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=settingId" }),
        __metadata("design:type", String)
    ], GetSettingPathParams.prototype, "settingId", void 0);
    return GetSettingPathParams;
}(SpeakeasyBase));
export { GetSettingPathParams };
export var GetSetting200ApplicationJsonActionEnum;
(function (GetSetting200ApplicationJsonActionEnum) {
    GetSetting200ApplicationJsonActionEnum["GetSetting"] = "getSetting";
})(GetSetting200ApplicationJsonActionEnum || (GetSetting200ApplicationJsonActionEnum = {}));
// GetSetting200ApplicationJsonData
/**
 * Information about the setting
**/
var GetSetting200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(GetSetting200ApplicationJsonData, _super);
    function GetSetting200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=settingId" }),
        __metadata("design:type", String)
    ], GetSetting200ApplicationJsonData.prototype, "settingId", void 0);
    return GetSetting200ApplicationJsonData;
}(SpeakeasyBase));
export { GetSetting200ApplicationJsonData };
export var GetSetting200ApplicationJsonResultEnum;
(function (GetSetting200ApplicationJsonResultEnum) {
    GetSetting200ApplicationJsonResultEnum["Success"] = "success";
    GetSetting200ApplicationJsonResultEnum["Error"] = "error";
})(GetSetting200ApplicationJsonResultEnum || (GetSetting200ApplicationJsonResultEnum = {}));
var GetSetting200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetSetting200ApplicationJson, _super);
    function GetSetting200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], GetSetting200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", GetSetting200ApplicationJsonData)
    ], GetSetting200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetSetting200ApplicationJson.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], GetSetting200ApplicationJson.prototype, "result", void 0);
    return GetSetting200ApplicationJson;
}(SpeakeasyBase));
export { GetSetting200ApplicationJson };
var GetSettingRequest = /** @class */ (function (_super) {
    __extends(GetSettingRequest, _super);
    function GetSettingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSettingPathParams)
    ], GetSettingRequest.prototype, "pathParams", void 0);
    return GetSettingRequest;
}(SpeakeasyBase));
export { GetSettingRequest };
var GetSettingResponse = /** @class */ (function (_super) {
    __extends(GetSettingResponse, _super);
    function GetSettingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSettingResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSettingResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSetting200ApplicationJson)
    ], GetSettingResponse.prototype, "getSetting200ApplicationJsonObject", void 0);
    return GetSettingResponse;
}(SpeakeasyBase));
export { GetSettingResponse };
