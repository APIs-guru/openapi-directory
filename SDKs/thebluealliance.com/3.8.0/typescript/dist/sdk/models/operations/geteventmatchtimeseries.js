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
var GetEventMatchTimeseriesPathParams = /** @class */ (function (_super) {
    __extends(GetEventMatchTimeseriesPathParams, _super);
    function GetEventMatchTimeseriesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=event_key" }),
        __metadata("design:type", String)
    ], GetEventMatchTimeseriesPathParams.prototype, "eventKey", void 0);
    return GetEventMatchTimeseriesPathParams;
}(SpeakeasyBase));
export { GetEventMatchTimeseriesPathParams };
var GetEventMatchTimeseriesHeaders = /** @class */ (function (_super) {
    __extends(GetEventMatchTimeseriesHeaders, _super);
    function GetEventMatchTimeseriesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" }),
        __metadata("design:type", String)
    ], GetEventMatchTimeseriesHeaders.prototype, "ifModifiedSince", void 0);
    return GetEventMatchTimeseriesHeaders;
}(SpeakeasyBase));
export { GetEventMatchTimeseriesHeaders };
var GetEventMatchTimeseriesSecurity = /** @class */ (function (_super) {
    __extends(GetEventMatchTimeseriesSecurity, _super);
    function GetEventMatchTimeseriesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetEventMatchTimeseriesSecurity.prototype, "apiKey", void 0);
    return GetEventMatchTimeseriesSecurity;
}(SpeakeasyBase));
export { GetEventMatchTimeseriesSecurity };
var GetEventMatchTimeseriesRequest = /** @class */ (function (_super) {
    __extends(GetEventMatchTimeseriesRequest, _super);
    function GetEventMatchTimeseriesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEventMatchTimeseriesPathParams)
    ], GetEventMatchTimeseriesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEventMatchTimeseriesHeaders)
    ], GetEventMatchTimeseriesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEventMatchTimeseriesSecurity)
    ], GetEventMatchTimeseriesRequest.prototype, "security", void 0);
    return GetEventMatchTimeseriesRequest;
}(SpeakeasyBase));
export { GetEventMatchTimeseriesRequest };
var GetEventMatchTimeseriesResponse = /** @class */ (function (_super) {
    __extends(GetEventMatchTimeseriesResponse, _super);
    function GetEventMatchTimeseriesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetEventMatchTimeseriesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetEventMatchTimeseriesResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetEventMatchTimeseriesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Array)
    ], GetEventMatchTimeseriesResponse.prototype, "getEventMatchTimeseries200ApplicationJsonStrings", void 0);
    return GetEventMatchTimeseriesResponse;
}(SpeakeasyBase));
export { GetEventMatchTimeseriesResponse };
