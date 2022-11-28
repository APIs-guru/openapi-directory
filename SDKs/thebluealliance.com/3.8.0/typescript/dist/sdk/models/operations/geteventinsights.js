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
import * as shared from "../shared";
var GetEventInsightsPathParams = /** @class */ (function (_super) {
    __extends(GetEventInsightsPathParams, _super);
    function GetEventInsightsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=event_key" }),
        __metadata("design:type", String)
    ], GetEventInsightsPathParams.prototype, "eventKey", void 0);
    return GetEventInsightsPathParams;
}(SpeakeasyBase));
export { GetEventInsightsPathParams };
var GetEventInsightsHeaders = /** @class */ (function (_super) {
    __extends(GetEventInsightsHeaders, _super);
    function GetEventInsightsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" }),
        __metadata("design:type", String)
    ], GetEventInsightsHeaders.prototype, "ifModifiedSince", void 0);
    return GetEventInsightsHeaders;
}(SpeakeasyBase));
export { GetEventInsightsHeaders };
var GetEventInsightsSecurity = /** @class */ (function (_super) {
    __extends(GetEventInsightsSecurity, _super);
    function GetEventInsightsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetEventInsightsSecurity.prototype, "apiKey", void 0);
    return GetEventInsightsSecurity;
}(SpeakeasyBase));
export { GetEventInsightsSecurity };
var GetEventInsightsRequest = /** @class */ (function (_super) {
    __extends(GetEventInsightsRequest, _super);
    function GetEventInsightsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEventInsightsPathParams)
    ], GetEventInsightsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEventInsightsHeaders)
    ], GetEventInsightsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEventInsightsSecurity)
    ], GetEventInsightsRequest.prototype, "security", void 0);
    return GetEventInsightsRequest;
}(SpeakeasyBase));
export { GetEventInsightsRequest };
var GetEventInsightsResponse = /** @class */ (function (_super) {
    __extends(GetEventInsightsResponse, _super);
    function GetEventInsightsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetEventInsightsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.EventInsights)
    ], GetEventInsightsResponse.prototype, "eventInsights", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetEventInsightsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetEventInsightsResponse.prototype, "statusCode", void 0);
    return GetEventInsightsResponse;
}(SpeakeasyBase));
export { GetEventInsightsResponse };
