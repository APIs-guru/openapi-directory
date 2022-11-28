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
var GetAllowedNetworksPathParams = /** @class */ (function (_super) {
    __extends(GetAllowedNetworksPathParams, _super);
    function GetAllowedNetworksPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=nodeId" }),
        __metadata("design:type", String)
    ], GetAllowedNetworksPathParams.prototype, "nodeId", void 0);
    return GetAllowedNetworksPathParams;
}(SpeakeasyBase));
export { GetAllowedNetworksPathParams };
export var GetAllowedNetworks200ApplicationJsonActionEnum;
(function (GetAllowedNetworks200ApplicationJsonActionEnum) {
    GetAllowedNetworks200ApplicationJsonActionEnum["GetAllowedNetworks"] = "getAllowedNetworks";
})(GetAllowedNetworks200ApplicationJsonActionEnum || (GetAllowedNetworks200ApplicationJsonActionEnum = {}));
var GetAllowedNetworks200ApplicationJsonDataSettings = /** @class */ (function (_super) {
    __extends(GetAllowedNetworks200ApplicationJsonDataSettings, _super);
    function GetAllowedNetworks200ApplicationJsonDataSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowed_networks" }),
        __metadata("design:type", Array)
    ], GetAllowedNetworks200ApplicationJsonDataSettings.prototype, "allowedNetworks", void 0);
    return GetAllowedNetworks200ApplicationJsonDataSettings;
}(SpeakeasyBase));
export { GetAllowedNetworks200ApplicationJsonDataSettings };
// GetAllowedNetworks200ApplicationJsonData
/**
 * Information about the allowed_networks settings
**/
var GetAllowedNetworks200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(GetAllowedNetworks200ApplicationJsonData, _super);
    function GetAllowedNetworks200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=settings" }),
        __metadata("design:type", GetAllowedNetworks200ApplicationJsonDataSettings)
    ], GetAllowedNetworks200ApplicationJsonData.prototype, "settings", void 0);
    return GetAllowedNetworks200ApplicationJsonData;
}(SpeakeasyBase));
export { GetAllowedNetworks200ApplicationJsonData };
export var GetAllowedNetworks200ApplicationJsonResultEnum;
(function (GetAllowedNetworks200ApplicationJsonResultEnum) {
    GetAllowedNetworks200ApplicationJsonResultEnum["Success"] = "success";
    GetAllowedNetworks200ApplicationJsonResultEnum["Error"] = "error";
})(GetAllowedNetworks200ApplicationJsonResultEnum || (GetAllowedNetworks200ApplicationJsonResultEnum = {}));
var GetAllowedNetworks200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetAllowedNetworks200ApplicationJson, _super);
    function GetAllowedNetworks200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], GetAllowedNetworks200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", GetAllowedNetworks200ApplicationJsonData)
    ], GetAllowedNetworks200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetAllowedNetworks200ApplicationJson.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], GetAllowedNetworks200ApplicationJson.prototype, "result", void 0);
    return GetAllowedNetworks200ApplicationJson;
}(SpeakeasyBase));
export { GetAllowedNetworks200ApplicationJson };
var GetAllowedNetworksRequest = /** @class */ (function (_super) {
    __extends(GetAllowedNetworksRequest, _super);
    function GetAllowedNetworksRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAllowedNetworksPathParams)
    ], GetAllowedNetworksRequest.prototype, "pathParams", void 0);
    return GetAllowedNetworksRequest;
}(SpeakeasyBase));
export { GetAllowedNetworksRequest };
var GetAllowedNetworksResponse = /** @class */ (function (_super) {
    __extends(GetAllowedNetworksResponse, _super);
    function GetAllowedNetworksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAllowedNetworksResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAllowedNetworksResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAllowedNetworks200ApplicationJson)
    ], GetAllowedNetworksResponse.prototype, "getAllowedNetworks200ApplicationJsonObject", void 0);
    return GetAllowedNetworksResponse;
}(SpeakeasyBase));
export { GetAllowedNetworksResponse };
