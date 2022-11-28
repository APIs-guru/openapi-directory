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
export var FetchEngagementServerList = [
    "https://studio.twilio.com",
];
var FetchEngagementPathParams = /** @class */ (function (_super) {
    __extends(FetchEngagementPathParams, _super);
    function FetchEngagementPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=FlowSid" }),
        __metadata("design:type", String)
    ], FetchEngagementPathParams.prototype, "flowSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], FetchEngagementPathParams.prototype, "sid", void 0);
    return FetchEngagementPathParams;
}(SpeakeasyBase));
export { FetchEngagementPathParams };
var FetchEngagementSecurity = /** @class */ (function (_super) {
    __extends(FetchEngagementSecurity, _super);
    function FetchEngagementSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchEngagementSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchEngagementSecurity;
}(SpeakeasyBase));
export { FetchEngagementSecurity };
var FetchEngagementRequest = /** @class */ (function (_super) {
    __extends(FetchEngagementRequest, _super);
    function FetchEngagementRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchEngagementRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchEngagementPathParams)
    ], FetchEngagementRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchEngagementSecurity)
    ], FetchEngagementRequest.prototype, "security", void 0);
    return FetchEngagementRequest;
}(SpeakeasyBase));
export { FetchEngagementRequest };
var FetchEngagementResponse = /** @class */ (function (_super) {
    __extends(FetchEngagementResponse, _super);
    function FetchEngagementResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchEngagementResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FetchEngagementResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.StudioV1FlowEngagement)
    ], FetchEngagementResponse.prototype, "studioV1FlowEngagement", void 0);
    return FetchEngagementResponse;
}(SpeakeasyBase));
export { FetchEngagementResponse };
