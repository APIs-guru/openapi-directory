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
var DeleteFeedConnectionsHeaders = /** @class */ (function (_super) {
    __extends(DeleteFeedConnectionsHeaders, _super);
    function DeleteFeedConnectionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" }),
        __metadata("design:type", String)
    ], DeleteFeedConnectionsHeaders.prototype, "xeroTenantId", void 0);
    return DeleteFeedConnectionsHeaders;
}(SpeakeasyBase));
export { DeleteFeedConnectionsHeaders };
var DeleteFeedConnectionsSecurity = /** @class */ (function (_super) {
    __extends(DeleteFeedConnectionsSecurity, _super);
    function DeleteFeedConnectionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], DeleteFeedConnectionsSecurity.prototype, "oAuth2", void 0);
    return DeleteFeedConnectionsSecurity;
}(SpeakeasyBase));
export { DeleteFeedConnectionsSecurity };
var DeleteFeedConnectionsRequest = /** @class */ (function (_super) {
    __extends(DeleteFeedConnectionsRequest, _super);
    function DeleteFeedConnectionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteFeedConnectionsHeaders)
    ], DeleteFeedConnectionsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.FeedConnections)
    ], DeleteFeedConnectionsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteFeedConnectionsSecurity)
    ], DeleteFeedConnectionsRequest.prototype, "security", void 0);
    return DeleteFeedConnectionsRequest;
}(SpeakeasyBase));
export { DeleteFeedConnectionsRequest };
var DeleteFeedConnectionsResponse = /** @class */ (function (_super) {
    __extends(DeleteFeedConnectionsResponse, _super);
    function DeleteFeedConnectionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteFeedConnectionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FeedConnections)
    ], DeleteFeedConnectionsResponse.prototype, "feedConnections", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteFeedConnectionsResponse.prototype, "statusCode", void 0);
    return DeleteFeedConnectionsResponse;
}(SpeakeasyBase));
export { DeleteFeedConnectionsResponse };
