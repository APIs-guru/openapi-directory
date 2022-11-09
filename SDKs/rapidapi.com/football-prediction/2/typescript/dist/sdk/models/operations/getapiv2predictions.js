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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
var GetApiV2PredictionsHeaders = /** @class */ (function (_super) {
    __extends(GetApiV2PredictionsHeaders, _super);
    function GetApiV2PredictionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-RapidApi-Key" }),
        __metadata("design:type", String)
    ], GetApiV2PredictionsHeaders.prototype, "xRapidApiKey", void 0);
    return GetApiV2PredictionsHeaders;
}(SpeakeasyBase));
export { GetApiV2PredictionsHeaders };
var GetApiV2PredictionsRequest = /** @class */ (function (_super) {
    __extends(GetApiV2PredictionsRequest, _super);
    function GetApiV2PredictionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetApiV2PredictionsHeaders)
    ], GetApiV2PredictionsRequest.prototype, "headers", void 0);
    return GetApiV2PredictionsRequest;
}(SpeakeasyBase));
export { GetApiV2PredictionsRequest };
var GetApiV2Predictions404ApplicationJson = /** @class */ (function (_super) {
    __extends(GetApiV2Predictions404ApplicationJson, _super);
    function GetApiV2Predictions404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=errors" }),
        __metadata("design:type", Map)
    ], GetApiV2Predictions404ApplicationJson.prototype, "errors", void 0);
    return GetApiV2Predictions404ApplicationJson;
}(SpeakeasyBase));
export { GetApiV2Predictions404ApplicationJson };
var GetApiV2PredictionsResponse = /** @class */ (function (_super) {
    __extends(GetApiV2PredictionsResponse, _super);
    function GetApiV2PredictionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetApiV2PredictionsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetApiV2Predictions404ApplicationJson)
    ], GetApiV2PredictionsResponse.prototype, "getApiV2Predictions404ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetApiV2PredictionsResponse.prototype, "statusCode", void 0);
    return GetApiV2PredictionsResponse;
}(SpeakeasyBase));
export { GetApiV2PredictionsResponse };
