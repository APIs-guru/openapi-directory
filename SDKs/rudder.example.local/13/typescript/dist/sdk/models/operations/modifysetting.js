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
var ModifySettingPathParams = /** @class */ (function (_super) {
    __extends(ModifySettingPathParams, _super);
    function ModifySettingPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=settingId" }),
        __metadata("design:type", String)
    ], ModifySettingPathParams.prototype, "settingId", void 0);
    return ModifySettingPathParams;
}(SpeakeasyBase));
export { ModifySettingPathParams };
var ModifySettingRequestBody = /** @class */ (function (_super) {
    __extends(ModifySettingRequestBody, _super);
    function ModifySettingRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=value" }),
        __metadata("design:type", String)
    ], ModifySettingRequestBody.prototype, "value", void 0);
    return ModifySettingRequestBody;
}(SpeakeasyBase));
export { ModifySettingRequestBody };
export var ModifySetting200ApplicationJsonActionEnum;
(function (ModifySetting200ApplicationJsonActionEnum) {
    ModifySetting200ApplicationJsonActionEnum["ModifySetting"] = "modifySetting";
})(ModifySetting200ApplicationJsonActionEnum || (ModifySetting200ApplicationJsonActionEnum = {}));
// ModifySetting200ApplicationJsonData
/**
 * Information about the setting
**/
var ModifySetting200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(ModifySetting200ApplicationJsonData, _super);
    function ModifySetting200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=settingId" }),
        __metadata("design:type", String)
    ], ModifySetting200ApplicationJsonData.prototype, "settingId", void 0);
    return ModifySetting200ApplicationJsonData;
}(SpeakeasyBase));
export { ModifySetting200ApplicationJsonData };
export var ModifySetting200ApplicationJsonResultEnum;
(function (ModifySetting200ApplicationJsonResultEnum) {
    ModifySetting200ApplicationJsonResultEnum["Success"] = "success";
    ModifySetting200ApplicationJsonResultEnum["Error"] = "error";
})(ModifySetting200ApplicationJsonResultEnum || (ModifySetting200ApplicationJsonResultEnum = {}));
var ModifySetting200ApplicationJson = /** @class */ (function (_super) {
    __extends(ModifySetting200ApplicationJson, _super);
    function ModifySetting200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], ModifySetting200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", ModifySetting200ApplicationJsonData)
    ], ModifySetting200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ModifySetting200ApplicationJson.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], ModifySetting200ApplicationJson.prototype, "result", void 0);
    return ModifySetting200ApplicationJson;
}(SpeakeasyBase));
export { ModifySetting200ApplicationJson };
var ModifySettingRequest = /** @class */ (function (_super) {
    __extends(ModifySettingRequest, _super);
    function ModifySettingRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ModifySettingPathParams)
    ], ModifySettingRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ModifySettingRequestBody)
    ], ModifySettingRequest.prototype, "request", void 0);
    return ModifySettingRequest;
}(SpeakeasyBase));
export { ModifySettingRequest };
var ModifySettingResponse = /** @class */ (function (_super) {
    __extends(ModifySettingResponse, _super);
    function ModifySettingResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ModifySettingResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ModifySettingResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ModifySetting200ApplicationJson)
    ], ModifySettingResponse.prototype, "modifySetting200ApplicationJsonObject", void 0);
    return ModifySettingResponse;
}(SpeakeasyBase));
export { ModifySettingResponse };
