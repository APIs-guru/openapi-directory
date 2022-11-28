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
var PutWebhooksWebhookIdPathParams = /** @class */ (function (_super) {
    __extends(PutWebhooksWebhookIdPathParams, _super);
    function PutWebhooksWebhookIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webhookId" }),
        __metadata("design:type", String)
    ], PutWebhooksWebhookIdPathParams.prototype, "webhookId", void 0);
    return PutWebhooksWebhookIdPathParams;
}(SpeakeasyBase));
export { PutWebhooksWebhookIdPathParams };
var PutWebhooksWebhookIdRequests = /** @class */ (function (_super) {
    __extends(PutWebhooksWebhookIdRequests, _super);
    function PutWebhooksWebhookIdRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.WebhookBaseInfo)
    ], PutWebhooksWebhookIdRequests.prototype, "webhookBaseInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.WebhookBaseInfo)
    ], PutWebhooksWebhookIdRequests.prototype, "webhookBaseInfo1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" }),
        __metadata("design:type", shared.WebhookBaseInfo)
    ], PutWebhooksWebhookIdRequests.prototype, "webhookBaseInfo2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.WebhookBaseInfo)
    ], PutWebhooksWebhookIdRequests.prototype, "webhookBaseInfo3", void 0);
    return PutWebhooksWebhookIdRequests;
}(SpeakeasyBase));
export { PutWebhooksWebhookIdRequests };
var PutWebhooksWebhookIdRequest = /** @class */ (function (_super) {
    __extends(PutWebhooksWebhookIdRequest, _super);
    function PutWebhooksWebhookIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutWebhooksWebhookIdPathParams)
    ], PutWebhooksWebhookIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutWebhooksWebhookIdRequests)
    ], PutWebhooksWebhookIdRequest.prototype, "request", void 0);
    return PutWebhooksWebhookIdRequest;
}(SpeakeasyBase));
export { PutWebhooksWebhookIdRequest };
var PutWebhooksWebhookIdResponse = /** @class */ (function (_super) {
    __extends(PutWebhooksWebhookIdResponse, _super);
    function PutWebhooksWebhookIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PutWebhooksWebhookIdResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutWebhooksWebhookIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseContent)
    ], PutWebhooksWebhookIdResponse.prototype, "errorResponseContent", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutWebhooksWebhookIdResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.WebhookInfo)
    ], PutWebhooksWebhookIdResponse.prototype, "webhookInfo", void 0);
    return PutWebhooksWebhookIdResponse;
}(SpeakeasyBase));
export { PutWebhooksWebhookIdResponse };
