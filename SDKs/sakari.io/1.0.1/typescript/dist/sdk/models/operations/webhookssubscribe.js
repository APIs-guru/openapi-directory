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
var WebhooksSubscribePathParams = /** @class */ (function (_super) {
    __extends(WebhooksSubscribePathParams, _super);
    function WebhooksSubscribePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], WebhooksSubscribePathParams.prototype, "accountId", void 0);
    return WebhooksSubscribePathParams;
}(SpeakeasyBase));
export { WebhooksSubscribePathParams };
var WebhooksSubscribeRequestBody = /** @class */ (function (_super) {
    __extends(WebhooksSubscribeRequestBody, _super);
    function WebhooksSubscribeRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventTypes" }),
        __metadata("design:type", Array)
    ], WebhooksSubscribeRequestBody.prototype, "eventTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], WebhooksSubscribeRequestBody.prototype, "url", void 0);
    return WebhooksSubscribeRequestBody;
}(SpeakeasyBase));
export { WebhooksSubscribeRequestBody };
var WebhooksSubscribeSecurity = /** @class */ (function (_super) {
    __extends(WebhooksSubscribeSecurity, _super);
    function WebhooksSubscribeSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeSakariAuth)
    ], WebhooksSubscribeSecurity.prototype, "sakariAuth", void 0);
    return WebhooksSubscribeSecurity;
}(SpeakeasyBase));
export { WebhooksSubscribeSecurity };
var WebhooksSubscribeRequest = /** @class */ (function (_super) {
    __extends(WebhooksSubscribeRequest, _super);
    function WebhooksSubscribeRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", WebhooksSubscribePathParams)
    ], WebhooksSubscribeRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", WebhooksSubscribeRequestBody)
    ], WebhooksSubscribeRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", WebhooksSubscribeSecurity)
    ], WebhooksSubscribeRequest.prototype, "security", void 0);
    return WebhooksSubscribeRequest;
}(SpeakeasyBase));
export { WebhooksSubscribeRequest };
var WebhooksSubscribeResponse = /** @class */ (function (_super) {
    __extends(WebhooksSubscribeResponse, _super);
    function WebhooksSubscribeResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], WebhooksSubscribeResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], WebhooksSubscribeResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.WebhookResponse)
    ], WebhooksSubscribeResponse.prototype, "webhookResponse", void 0);
    return WebhooksSubscribeResponse;
}(SpeakeasyBase));
export { WebhooksSubscribeResponse };
