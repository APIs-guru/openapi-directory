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
var GetEventTeamsStatusesPathParams = /** @class */ (function (_super) {
    __extends(GetEventTeamsStatusesPathParams, _super);
    function GetEventTeamsStatusesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=event_key" }),
        __metadata("design:type", String)
    ], GetEventTeamsStatusesPathParams.prototype, "eventKey", void 0);
    return GetEventTeamsStatusesPathParams;
}(SpeakeasyBase));
export { GetEventTeamsStatusesPathParams };
var GetEventTeamsStatusesHeaders = /** @class */ (function (_super) {
    __extends(GetEventTeamsStatusesHeaders, _super);
    function GetEventTeamsStatusesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" }),
        __metadata("design:type", String)
    ], GetEventTeamsStatusesHeaders.prototype, "ifModifiedSince", void 0);
    return GetEventTeamsStatusesHeaders;
}(SpeakeasyBase));
export { GetEventTeamsStatusesHeaders };
var GetEventTeamsStatusesSecurity = /** @class */ (function (_super) {
    __extends(GetEventTeamsStatusesSecurity, _super);
    function GetEventTeamsStatusesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetEventTeamsStatusesSecurity.prototype, "apiKey", void 0);
    return GetEventTeamsStatusesSecurity;
}(SpeakeasyBase));
export { GetEventTeamsStatusesSecurity };
var GetEventTeamsStatusesRequest = /** @class */ (function (_super) {
    __extends(GetEventTeamsStatusesRequest, _super);
    function GetEventTeamsStatusesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEventTeamsStatusesPathParams)
    ], GetEventTeamsStatusesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEventTeamsStatusesHeaders)
    ], GetEventTeamsStatusesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEventTeamsStatusesSecurity)
    ], GetEventTeamsStatusesRequest.prototype, "security", void 0);
    return GetEventTeamsStatusesRequest;
}(SpeakeasyBase));
export { GetEventTeamsStatusesRequest };
var GetEventTeamsStatusesResponse = /** @class */ (function (_super) {
    __extends(GetEventTeamsStatusesResponse, _super);
    function GetEventTeamsStatusesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetEventTeamsStatusesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetEventTeamsStatusesResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetEventTeamsStatusesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.TeamEventStatus }),
        __metadata("design:type", Map)
    ], GetEventTeamsStatusesResponse.prototype, "getEventTeamsStatuses200ApplicationJsonObject", void 0);
    return GetEventTeamsStatusesResponse;
}(SpeakeasyBase));
export { GetEventTeamsStatusesResponse };
