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
var GetTeamMediaByYearPathParams = /** @class */ (function (_super) {
    __extends(GetTeamMediaByYearPathParams, _super);
    function GetTeamMediaByYearPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_key" }),
        __metadata("design:type", String)
    ], GetTeamMediaByYearPathParams.prototype, "teamKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=year" }),
        __metadata("design:type", Number)
    ], GetTeamMediaByYearPathParams.prototype, "year", void 0);
    return GetTeamMediaByYearPathParams;
}(SpeakeasyBase));
export { GetTeamMediaByYearPathParams };
var GetTeamMediaByYearHeaders = /** @class */ (function (_super) {
    __extends(GetTeamMediaByYearHeaders, _super);
    function GetTeamMediaByYearHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" }),
        __metadata("design:type", String)
    ], GetTeamMediaByYearHeaders.prototype, "ifModifiedSince", void 0);
    return GetTeamMediaByYearHeaders;
}(SpeakeasyBase));
export { GetTeamMediaByYearHeaders };
var GetTeamMediaByYearSecurity = /** @class */ (function (_super) {
    __extends(GetTeamMediaByYearSecurity, _super);
    function GetTeamMediaByYearSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetTeamMediaByYearSecurity.prototype, "apiKey", void 0);
    return GetTeamMediaByYearSecurity;
}(SpeakeasyBase));
export { GetTeamMediaByYearSecurity };
var GetTeamMediaByYearRequest = /** @class */ (function (_super) {
    __extends(GetTeamMediaByYearRequest, _super);
    function GetTeamMediaByYearRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamMediaByYearPathParams)
    ], GetTeamMediaByYearRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamMediaByYearHeaders)
    ], GetTeamMediaByYearRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamMediaByYearSecurity)
    ], GetTeamMediaByYearRequest.prototype, "security", void 0);
    return GetTeamMediaByYearRequest;
}(SpeakeasyBase));
export { GetTeamMediaByYearRequest };
var GetTeamMediaByYearResponse = /** @class */ (function (_super) {
    __extends(GetTeamMediaByYearResponse, _super);
    function GetTeamMediaByYearResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTeamMediaByYearResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetTeamMediaByYearResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Media }),
        __metadata("design:type", Array)
    ], GetTeamMediaByYearResponse.prototype, "media", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTeamMediaByYearResponse.prototype, "statusCode", void 0);
    return GetTeamMediaByYearResponse;
}(SpeakeasyBase));
export { GetTeamMediaByYearResponse };
