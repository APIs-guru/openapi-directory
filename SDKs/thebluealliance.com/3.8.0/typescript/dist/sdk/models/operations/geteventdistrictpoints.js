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
var GetEventDistrictPointsPathParams = /** @class */ (function (_super) {
    __extends(GetEventDistrictPointsPathParams, _super);
    function GetEventDistrictPointsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=event_key" }),
        __metadata("design:type", String)
    ], GetEventDistrictPointsPathParams.prototype, "eventKey", void 0);
    return GetEventDistrictPointsPathParams;
}(SpeakeasyBase));
export { GetEventDistrictPointsPathParams };
var GetEventDistrictPointsHeaders = /** @class */ (function (_super) {
    __extends(GetEventDistrictPointsHeaders, _super);
    function GetEventDistrictPointsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" }),
        __metadata("design:type", String)
    ], GetEventDistrictPointsHeaders.prototype, "ifModifiedSince", void 0);
    return GetEventDistrictPointsHeaders;
}(SpeakeasyBase));
export { GetEventDistrictPointsHeaders };
var GetEventDistrictPointsSecurity = /** @class */ (function (_super) {
    __extends(GetEventDistrictPointsSecurity, _super);
    function GetEventDistrictPointsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetEventDistrictPointsSecurity.prototype, "apiKey", void 0);
    return GetEventDistrictPointsSecurity;
}(SpeakeasyBase));
export { GetEventDistrictPointsSecurity };
var GetEventDistrictPointsRequest = /** @class */ (function (_super) {
    __extends(GetEventDistrictPointsRequest, _super);
    function GetEventDistrictPointsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEventDistrictPointsPathParams)
    ], GetEventDistrictPointsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEventDistrictPointsHeaders)
    ], GetEventDistrictPointsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEventDistrictPointsSecurity)
    ], GetEventDistrictPointsRequest.prototype, "security", void 0);
    return GetEventDistrictPointsRequest;
}(SpeakeasyBase));
export { GetEventDistrictPointsRequest };
var GetEventDistrictPointsResponse = /** @class */ (function (_super) {
    __extends(GetEventDistrictPointsResponse, _super);
    function GetEventDistrictPointsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetEventDistrictPointsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.EventDistrictPoints)
    ], GetEventDistrictPointsResponse.prototype, "eventDistrictPoints", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetEventDistrictPointsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetEventDistrictPointsResponse.prototype, "statusCode", void 0);
    return GetEventDistrictPointsResponse;
}(SpeakeasyBase));
export { GetEventDistrictPointsResponse };
