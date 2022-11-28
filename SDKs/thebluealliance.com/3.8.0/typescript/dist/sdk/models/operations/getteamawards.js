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
var GetTeamAwardsPathParams = /** @class */ (function (_super) {
    __extends(GetTeamAwardsPathParams, _super);
    function GetTeamAwardsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=team_key" }),
        __metadata("design:type", String)
    ], GetTeamAwardsPathParams.prototype, "teamKey", void 0);
    return GetTeamAwardsPathParams;
}(SpeakeasyBase));
export { GetTeamAwardsPathParams };
var GetTeamAwardsHeaders = /** @class */ (function (_super) {
    __extends(GetTeamAwardsHeaders, _super);
    function GetTeamAwardsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" }),
        __metadata("design:type", String)
    ], GetTeamAwardsHeaders.prototype, "ifModifiedSince", void 0);
    return GetTeamAwardsHeaders;
}(SpeakeasyBase));
export { GetTeamAwardsHeaders };
var GetTeamAwardsSecurity = /** @class */ (function (_super) {
    __extends(GetTeamAwardsSecurity, _super);
    function GetTeamAwardsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetTeamAwardsSecurity.prototype, "apiKey", void 0);
    return GetTeamAwardsSecurity;
}(SpeakeasyBase));
export { GetTeamAwardsSecurity };
var GetTeamAwardsRequest = /** @class */ (function (_super) {
    __extends(GetTeamAwardsRequest, _super);
    function GetTeamAwardsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamAwardsPathParams)
    ], GetTeamAwardsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamAwardsHeaders)
    ], GetTeamAwardsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTeamAwardsSecurity)
    ], GetTeamAwardsRequest.prototype, "security", void 0);
    return GetTeamAwardsRequest;
}(SpeakeasyBase));
export { GetTeamAwardsRequest };
var GetTeamAwardsResponse = /** @class */ (function (_super) {
    __extends(GetTeamAwardsResponse, _super);
    function GetTeamAwardsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: shared.Award }),
        __metadata("design:type", Array)
    ], GetTeamAwardsResponse.prototype, "awards", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTeamAwardsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetTeamAwardsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTeamAwardsResponse.prototype, "statusCode", void 0);
    return GetTeamAwardsResponse;
}(SpeakeasyBase));
export { GetTeamAwardsResponse };
