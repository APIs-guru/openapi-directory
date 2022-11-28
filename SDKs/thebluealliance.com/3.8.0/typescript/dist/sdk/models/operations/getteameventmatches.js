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
var GetTeamEventMatchesPathParams = /** @class */ (function (_super) {
    __extends(GetTeamEventMatchesPathParams, _super);
    function GetTeamEventMatchesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=event_key" }),
        __metadata("design:type", String)
    ], GetTeamEventMatchesPathParams.prototype, "eventKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_key" }),
        __metadata("design:type", String)
    ], GetTeamEventMatchesPathParams.prototype, "teamKey", void 0);
    return GetTeamEventMatchesPathParams;
}(SpeakeasyBase));
export { GetTeamEventMatchesPathParams };
var GetTeamEventMatchesHeaders = /** @class */ (function (_super) {
    __extends(GetTeamEventMatchesHeaders, _super);
    function GetTeamEventMatchesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" }),
        __metadata("design:type", String)
    ], GetTeamEventMatchesHeaders.prototype, "ifModifiedSince", void 0);
    return GetTeamEventMatchesHeaders;
}(SpeakeasyBase));
export { GetTeamEventMatchesHeaders };
var GetTeamEventMatchesSecurity = /** @class */ (function (_super) {
    __extends(GetTeamEventMatchesSecurity, _super);
    function GetTeamEventMatchesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetTeamEventMatchesSecurity.prototype, "apiKey", void 0);
    return GetTeamEventMatchesSecurity;
}(SpeakeasyBase));
export { GetTeamEventMatchesSecurity };
var GetTeamEventMatchesRequest = /** @class */ (function (_super) {
    __extends(GetTeamEventMatchesRequest, _super);
    function GetTeamEventMatchesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamEventMatchesPathParams)
    ], GetTeamEventMatchesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamEventMatchesHeaders)
    ], GetTeamEventMatchesRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamEventMatchesSecurity)
    ], GetTeamEventMatchesRequest.prototype, "security", void 0);
    return GetTeamEventMatchesRequest;
}(SpeakeasyBase));
export { GetTeamEventMatchesRequest };
var GetTeamEventMatchesResponse = /** @class */ (function (_super) {
    __extends(GetTeamEventMatchesResponse, _super);
    function GetTeamEventMatchesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTeamEventMatchesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetTeamEventMatchesResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Match }),
        __metadata("design:type", Array)
    ], GetTeamEventMatchesResponse.prototype, "matches", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTeamEventMatchesResponse.prototype, "statusCode", void 0);
    return GetTeamEventMatchesResponse;
}(SpeakeasyBase));
export { GetTeamEventMatchesResponse };
