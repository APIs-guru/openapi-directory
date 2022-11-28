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
var GetApiV2ListMarketsHeaders = /** @class */ (function (_super) {
    __extends(GetApiV2ListMarketsHeaders, _super);
    function GetApiV2ListMarketsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-RapidApi-Key" }),
        __metadata("design:type", String)
    ], GetApiV2ListMarketsHeaders.prototype, "xRapidApiKey", void 0);
    return GetApiV2ListMarketsHeaders;
}(SpeakeasyBase));
export { GetApiV2ListMarketsHeaders };
var GetApiV2ListMarkets200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(GetApiV2ListMarkets200ApplicationJsonData, _super);
    function GetApiV2ListMarkets200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=all" }),
        __metadata("design:type", Array)
    ], GetApiV2ListMarkets200ApplicationJsonData.prototype, "all", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowed_for_your_subscription" }),
        __metadata("design:type", Array)
    ], GetApiV2ListMarkets200ApplicationJsonData.prototype, "allowedForYourSubscription", void 0);
    return GetApiV2ListMarkets200ApplicationJsonData;
}(SpeakeasyBase));
export { GetApiV2ListMarkets200ApplicationJsonData };
var GetApiV2ListMarkets200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetApiV2ListMarkets200ApplicationJson, _super);
    function GetApiV2ListMarkets200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", GetApiV2ListMarkets200ApplicationJsonData)
    ], GetApiV2ListMarkets200ApplicationJson.prototype, "data", void 0);
    return GetApiV2ListMarkets200ApplicationJson;
}(SpeakeasyBase));
export { GetApiV2ListMarkets200ApplicationJson };
var GetApiV2ListMarkets404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetApiV2ListMarkets404ApplicationJson, _super);
    function GetApiV2ListMarkets404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors" }),
        __metadata("design:type", Map)
    ], GetApiV2ListMarkets404ApplicationJson.prototype, "errors", void 0);
    return GetApiV2ListMarkets404ApplicationJson;
}(SpeakeasyBase));
export { GetApiV2ListMarkets404ApplicationJson };
var GetApiV2ListMarketsRequest = /** @class */ (function (_super) {
    __extends(GetApiV2ListMarketsRequest, _super);
    function GetApiV2ListMarketsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetApiV2ListMarketsHeaders)
    ], GetApiV2ListMarketsRequest.prototype, "headers", void 0);
    return GetApiV2ListMarketsRequest;
}(SpeakeasyBase));
export { GetApiV2ListMarketsRequest };
var GetApiV2ListMarketsResponse = /** @class */ (function (_super) {
    __extends(GetApiV2ListMarketsResponse, _super);
    function GetApiV2ListMarketsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetApiV2ListMarketsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetApiV2ListMarkets200ApplicationJson)
    ], GetApiV2ListMarketsResponse.prototype, "getApiV2ListMarkets200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetApiV2ListMarkets404ApplicationJson)
    ], GetApiV2ListMarketsResponse.prototype, "getApiV2ListMarkets404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetApiV2ListMarketsResponse.prototype, "statusCode", void 0);
    return GetApiV2ListMarketsResponse;
}(SpeakeasyBase));
export { GetApiV2ListMarketsResponse };
