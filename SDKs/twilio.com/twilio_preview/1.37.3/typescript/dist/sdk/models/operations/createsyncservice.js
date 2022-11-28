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
export var CreateSyncServiceServerList = [
    "https://preview.twilio.com",
];
var CreateSyncServiceCreateSyncServiceRequest = /** @class */ (function (_super) {
    __extends(CreateSyncServiceCreateSyncServiceRequest, _super);
    function CreateSyncServiceCreateSyncServiceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=AclEnabled;" }),
        __metadata("design:type", Boolean)
    ], CreateSyncServiceCreateSyncServiceRequest.prototype, "aclEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateSyncServiceCreateSyncServiceRequest.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=ReachabilityWebhooksEnabled;" }),
        __metadata("design:type", Boolean)
    ], CreateSyncServiceCreateSyncServiceRequest.prototype, "reachabilityWebhooksEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=WebhookUrl;" }),
        __metadata("design:type", String)
    ], CreateSyncServiceCreateSyncServiceRequest.prototype, "webhookUrl", void 0);
    return CreateSyncServiceCreateSyncServiceRequest;
}(SpeakeasyBase));
export { CreateSyncServiceCreateSyncServiceRequest };
var CreateSyncServiceSecurity = /** @class */ (function (_super) {
    __extends(CreateSyncServiceSecurity, _super);
    function CreateSyncServiceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateSyncServiceSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateSyncServiceSecurity;
}(SpeakeasyBase));
export { CreateSyncServiceSecurity };
var CreateSyncServiceRequest = /** @class */ (function (_super) {
    __extends(CreateSyncServiceRequest, _super);
    function CreateSyncServiceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateSyncServiceRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateSyncServiceCreateSyncServiceRequest)
    ], CreateSyncServiceRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateSyncServiceSecurity)
    ], CreateSyncServiceRequest.prototype, "security", void 0);
    return CreateSyncServiceRequest;
}(SpeakeasyBase));
export { CreateSyncServiceRequest };
var CreateSyncServiceResponse = /** @class */ (function (_super) {
    __extends(CreateSyncServiceResponse, _super);
    function CreateSyncServiceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateSyncServiceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateSyncServiceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PreviewSyncService)
    ], CreateSyncServiceResponse.prototype, "previewSyncService", void 0);
    return CreateSyncServiceResponse;
}(SpeakeasyBase));
export { CreateSyncServiceResponse };
