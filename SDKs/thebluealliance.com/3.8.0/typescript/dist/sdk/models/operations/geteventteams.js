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
var GetEventTeamsPathParams = /** @class */ (function (_super) {
    __extends(GetEventTeamsPathParams, _super);
    function GetEventTeamsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=event_key" }),
        __metadata("design:type", String)
    ], GetEventTeamsPathParams.prototype, "eventKey", void 0);
    return GetEventTeamsPathParams;
}(SpeakeasyBase));
export { GetEventTeamsPathParams };
var GetEventTeamsHeaders = /** @class */ (function (_super) {
    __extends(GetEventTeamsHeaders, _super);
    function GetEventTeamsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" }),
        __metadata("design:type", String)
    ], GetEventTeamsHeaders.prototype, "ifModifiedSince", void 0);
    return GetEventTeamsHeaders;
}(SpeakeasyBase));
export { GetEventTeamsHeaders };
var GetEventTeamsSecurity = /** @class */ (function (_super) {
    __extends(GetEventTeamsSecurity, _super);
    function GetEventTeamsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetEventTeamsSecurity.prototype, "apiKey", void 0);
    return GetEventTeamsSecurity;
}(SpeakeasyBase));
export { GetEventTeamsSecurity };
var GetEventTeamsRequest = /** @class */ (function (_super) {
    __extends(GetEventTeamsRequest, _super);
    function GetEventTeamsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEventTeamsPathParams)
    ], GetEventTeamsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEventTeamsHeaders)
    ], GetEventTeamsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEventTeamsSecurity)
    ], GetEventTeamsRequest.prototype, "security", void 0);
    return GetEventTeamsRequest;
}(SpeakeasyBase));
export { GetEventTeamsRequest };
var GetEventTeamsResponse = /** @class */ (function (_super) {
    __extends(GetEventTeamsResponse, _super);
    function GetEventTeamsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetEventTeamsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetEventTeamsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetEventTeamsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Team }),
        __metadata("design:type", Array)
    ], GetEventTeamsResponse.prototype, "teams", void 0);
    return GetEventTeamsResponse;
}(SpeakeasyBase));
export { GetEventTeamsResponse };
