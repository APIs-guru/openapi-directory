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
export var ListMessageInteractionServerList = [
    "https://proxy.twilio.com",
];
var ListMessageInteractionPathParams = /** @class */ (function (_super) {
    __extends(ListMessageInteractionPathParams, _super);
    function ListMessageInteractionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ParticipantSid" }),
        __metadata("design:type", String)
    ], ListMessageInteractionPathParams.prototype, "participantSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], ListMessageInteractionPathParams.prototype, "serviceSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=SessionSid" }),
        __metadata("design:type", String)
    ], ListMessageInteractionPathParams.prototype, "sessionSid", void 0);
    return ListMessageInteractionPathParams;
}(SpeakeasyBase));
export { ListMessageInteractionPathParams };
var ListMessageInteractionQueryParams = /** @class */ (function (_super) {
    __extends(ListMessageInteractionQueryParams, _super);
    function ListMessageInteractionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListMessageInteractionQueryParams.prototype, "pageSize", void 0);
    return ListMessageInteractionQueryParams;
}(SpeakeasyBase));
export { ListMessageInteractionQueryParams };
var ListMessageInteractionSecurity = /** @class */ (function (_super) {
    __extends(ListMessageInteractionSecurity, _super);
    function ListMessageInteractionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListMessageInteractionSecurity.prototype, "accountSidAuthToken", void 0);
    return ListMessageInteractionSecurity;
}(SpeakeasyBase));
export { ListMessageInteractionSecurity };
var ListMessageInteractionListMessageInteractionResponseMeta = /** @class */ (function (_super) {
    __extends(ListMessageInteractionListMessageInteractionResponseMeta, _super);
    function ListMessageInteractionListMessageInteractionResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListMessageInteractionListMessageInteractionResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListMessageInteractionListMessageInteractionResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListMessageInteractionListMessageInteractionResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListMessageInteractionListMessageInteractionResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListMessageInteractionListMessageInteractionResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListMessageInteractionListMessageInteractionResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListMessageInteractionListMessageInteractionResponseMeta.prototype, "url", void 0);
    return ListMessageInteractionListMessageInteractionResponseMeta;
}(SpeakeasyBase));
export { ListMessageInteractionListMessageInteractionResponseMeta };
var ListMessageInteractionListMessageInteractionResponse = /** @class */ (function (_super) {
    __extends(ListMessageInteractionListMessageInteractionResponse, _super);
    function ListMessageInteractionListMessageInteractionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=interactions", elemType: shared.ProxyV1ServiceSessionParticipantMessageInteraction }),
        __metadata("design:type", Array)
    ], ListMessageInteractionListMessageInteractionResponse.prototype, "interactions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListMessageInteractionListMessageInteractionResponseMeta)
    ], ListMessageInteractionListMessageInteractionResponse.prototype, "meta", void 0);
    return ListMessageInteractionListMessageInteractionResponse;
}(SpeakeasyBase));
export { ListMessageInteractionListMessageInteractionResponse };
var ListMessageInteractionRequest = /** @class */ (function (_super) {
    __extends(ListMessageInteractionRequest, _super);
    function ListMessageInteractionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListMessageInteractionRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListMessageInteractionPathParams)
    ], ListMessageInteractionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListMessageInteractionQueryParams)
    ], ListMessageInteractionRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListMessageInteractionSecurity)
    ], ListMessageInteractionRequest.prototype, "security", void 0);
    return ListMessageInteractionRequest;
}(SpeakeasyBase));
export { ListMessageInteractionRequest };
var ListMessageInteractionResponse = /** @class */ (function (_super) {
    __extends(ListMessageInteractionResponse, _super);
    function ListMessageInteractionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListMessageInteractionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListMessageInteractionListMessageInteractionResponse)
    ], ListMessageInteractionResponse.prototype, "listMessageInteractionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListMessageInteractionResponse.prototype, "statusCode", void 0);
    return ListMessageInteractionResponse;
}(SpeakeasyBase));
export { ListMessageInteractionResponse };
