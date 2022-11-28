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
var GetEventMatchesPathParams = /** @class */ (function (_super) {
    __extends(GetEventMatchesPathParams, _super);
    function GetEventMatchesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=event_key" }),
        __metadata("design:type", String)
    ], GetEventMatchesPathParams.prototype, "eventKey", void 0);
    return GetEventMatchesPathParams;
}(SpeakeasyBase));
export { GetEventMatchesPathParams };
var GetEventMatchesHeaders = /** @class */ (function (_super) {
    __extends(GetEventMatchesHeaders, _super);
    function GetEventMatchesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" }),
        __metadata("design:type", String)
    ], GetEventMatchesHeaders.prototype, "ifModifiedSince", void 0);
    return GetEventMatchesHeaders;
}(SpeakeasyBase));
export { GetEventMatchesHeaders };
var GetEventMatchesSecurity = /** @class */ (function (_super) {
    __extends(GetEventMatchesSecurity, _super);
    function GetEventMatchesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetEventMatchesSecurity.prototype, "apiKey", void 0);
    return GetEventMatchesSecurity;
}(SpeakeasyBase));
export { GetEventMatchesSecurity };
var GetEventMatchesRequest = /** @class */ (function (_super) {
    __extends(GetEventMatchesRequest, _super);
    function GetEventMatchesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEventMatchesPathParams)
    ], GetEventMatchesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEventMatchesHeaders)
    ], GetEventMatchesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEventMatchesSecurity)
    ], GetEventMatchesRequest.prototype, "security", void 0);
    return GetEventMatchesRequest;
}(SpeakeasyBase));
export { GetEventMatchesRequest };
var GetEventMatchesResponse = /** @class */ (function (_super) {
    __extends(GetEventMatchesResponse, _super);
    function GetEventMatchesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetEventMatchesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetEventMatchesResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Match }),
        __metadata("design:type", Array)
    ], GetEventMatchesResponse.prototype, "matches", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetEventMatchesResponse.prototype, "statusCode", void 0);
    return GetEventMatchesResponse;
}(SpeakeasyBase));
export { GetEventMatchesResponse };
