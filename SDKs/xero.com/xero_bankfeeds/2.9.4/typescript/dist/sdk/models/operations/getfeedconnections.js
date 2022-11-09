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
import * as shared from "../shared";
var GetFeedConnectionsQueryParams = /** @class */ (function (_super) {
    __extends(GetFeedConnectionsQueryParams, _super);
    function GetFeedConnectionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetFeedConnectionsQueryParams.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], GetFeedConnectionsQueryParams.prototype, "pageSize", void 0);
    return GetFeedConnectionsQueryParams;
}(SpeakeasyBase));
export { GetFeedConnectionsQueryParams };
var GetFeedConnectionsHeaders = /** @class */ (function (_super) {
    __extends(GetFeedConnectionsHeaders, _super);
    function GetFeedConnectionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" }),
        __metadata("design:type", String)
    ], GetFeedConnectionsHeaders.prototype, "xeroTenantId", void 0);
    return GetFeedConnectionsHeaders;
}(SpeakeasyBase));
export { GetFeedConnectionsHeaders };
var GetFeedConnectionsSecurity = /** @class */ (function (_super) {
    __extends(GetFeedConnectionsSecurity, _super);
    function GetFeedConnectionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], GetFeedConnectionsSecurity.prototype, "oAuth2", void 0);
    return GetFeedConnectionsSecurity;
}(SpeakeasyBase));
export { GetFeedConnectionsSecurity };
var GetFeedConnectionsRequest = /** @class */ (function (_super) {
    __extends(GetFeedConnectionsRequest, _super);
    function GetFeedConnectionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetFeedConnectionsQueryParams)
    ], GetFeedConnectionsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetFeedConnectionsHeaders)
    ], GetFeedConnectionsRequest.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetFeedConnectionsSecurity)
    ], GetFeedConnectionsRequest.prototype, "security", void 0);
    return GetFeedConnectionsRequest;
}(SpeakeasyBase));
export { GetFeedConnectionsRequest };
var GetFeedConnectionsResponse = /** @class */ (function (_super) {
    __extends(GetFeedConnectionsResponse, _super);
    function GetFeedConnectionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetFeedConnectionsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.FeedConnections)
    ], GetFeedConnectionsResponse.prototype, "feedConnections", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetFeedConnectionsResponse.prototype, "statusCode", void 0);
    return GetFeedConnectionsResponse;
}(SpeakeasyBase));
export { GetFeedConnectionsResponse };
