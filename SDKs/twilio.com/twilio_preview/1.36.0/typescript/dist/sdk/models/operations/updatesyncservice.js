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
export var UPDATESYNCSERVICE_SERVERS = [
    "https://preview.twilio.com",
];
var UpdateSyncServicePathParams = /** @class */ (function (_super) {
    __extends(UpdateSyncServicePathParams, _super);
    function UpdateSyncServicePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateSyncServicePathParams.prototype, "sid", void 0);
    return UpdateSyncServicePathParams;
}(SpeakeasyBase));
export { UpdateSyncServicePathParams };
var UpdateSyncServiceUpdateSyncServiceRequest = /** @class */ (function (_super) {
    __extends(UpdateSyncServiceUpdateSyncServiceRequest, _super);
    function UpdateSyncServiceUpdateSyncServiceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=AclEnabled;" }),
        __metadata("design:type", Boolean)
    ], UpdateSyncServiceUpdateSyncServiceRequest.prototype, "aclEnabled", void 0);
    __decorate([
        Metadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], UpdateSyncServiceUpdateSyncServiceRequest.prototype, "friendlyName", void 0);
    __decorate([
        Metadata({ data: "form, name=ReachabilityWebhooksEnabled;" }),
        __metadata("design:type", Boolean)
    ], UpdateSyncServiceUpdateSyncServiceRequest.prototype, "reachabilityWebhooksEnabled", void 0);
    __decorate([
        Metadata({ data: "form, name=WebhookUrl;" }),
        __metadata("design:type", String)
    ], UpdateSyncServiceUpdateSyncServiceRequest.prototype, "webhookUrl", void 0);
    return UpdateSyncServiceUpdateSyncServiceRequest;
}(SpeakeasyBase));
export { UpdateSyncServiceUpdateSyncServiceRequest };
var UpdateSyncServiceSecurity = /** @class */ (function (_super) {
    __extends(UpdateSyncServiceSecurity, _super);
    function UpdateSyncServiceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateSyncServiceSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateSyncServiceSecurity;
}(SpeakeasyBase));
export { UpdateSyncServiceSecurity };
var UpdateSyncServiceRequest = /** @class */ (function (_super) {
    __extends(UpdateSyncServiceRequest, _super);
    function UpdateSyncServiceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateSyncServiceRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateSyncServicePathParams)
    ], UpdateSyncServiceRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateSyncServiceUpdateSyncServiceRequest)
    ], UpdateSyncServiceRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateSyncServiceSecurity)
    ], UpdateSyncServiceRequest.prototype, "security", void 0);
    return UpdateSyncServiceRequest;
}(SpeakeasyBase));
export { UpdateSyncServiceRequest };
var UpdateSyncServiceResponse = /** @class */ (function (_super) {
    __extends(UpdateSyncServiceResponse, _super);
    function UpdateSyncServiceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateSyncServiceResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateSyncServiceResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PreviewSyncService)
    ], UpdateSyncServiceResponse.prototype, "previewSyncService", void 0);
    return UpdateSyncServiceResponse;
}(SpeakeasyBase));
export { UpdateSyncServiceResponse };
