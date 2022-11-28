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
var GetApiV2ListFederationsHeaders = /** @class */ (function (_super) {
    __extends(GetApiV2ListFederationsHeaders, _super);
    function GetApiV2ListFederationsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-RapidApi-Key" }),
        __metadata("design:type", String)
    ], GetApiV2ListFederationsHeaders.prototype, "xRapidApiKey", void 0);
    return GetApiV2ListFederationsHeaders;
}(SpeakeasyBase));
export { GetApiV2ListFederationsHeaders };
var GetApiV2ListFederations200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetApiV2ListFederations200ApplicationJson, _super);
    function GetApiV2ListFederations200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Array)
    ], GetApiV2ListFederations200ApplicationJson.prototype, "data", void 0);
    return GetApiV2ListFederations200ApplicationJson;
}(SpeakeasyBase));
export { GetApiV2ListFederations200ApplicationJson };
var GetApiV2ListFederations404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetApiV2ListFederations404ApplicationJson, _super);
    function GetApiV2ListFederations404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors" }),
        __metadata("design:type", Map)
    ], GetApiV2ListFederations404ApplicationJson.prototype, "errors", void 0);
    return GetApiV2ListFederations404ApplicationJson;
}(SpeakeasyBase));
export { GetApiV2ListFederations404ApplicationJson };
var GetApiV2ListFederationsRequest = /** @class */ (function (_super) {
    __extends(GetApiV2ListFederationsRequest, _super);
    function GetApiV2ListFederationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetApiV2ListFederationsHeaders)
    ], GetApiV2ListFederationsRequest.prototype, "headers", void 0);
    return GetApiV2ListFederationsRequest;
}(SpeakeasyBase));
export { GetApiV2ListFederationsRequest };
var GetApiV2ListFederationsResponse = /** @class */ (function (_super) {
    __extends(GetApiV2ListFederationsResponse, _super);
    function GetApiV2ListFederationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetApiV2ListFederationsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetApiV2ListFederations200ApplicationJson)
    ], GetApiV2ListFederationsResponse.prototype, "getApiV2ListFederations200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetApiV2ListFederations404ApplicationJson)
    ], GetApiV2ListFederationsResponse.prototype, "getApiV2ListFederations404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetApiV2ListFederationsResponse.prototype, "statusCode", void 0);
    return GetApiV2ListFederationsResponse;
}(SpeakeasyBase));
export { GetApiV2ListFederationsResponse };
