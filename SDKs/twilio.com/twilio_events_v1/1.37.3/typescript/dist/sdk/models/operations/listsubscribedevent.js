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
export var ListSubscribedEventServerList = [
    "https://events.twilio.com",
];
var ListSubscribedEventPathParams = /** @class */ (function (_super) {
    __extends(ListSubscribedEventPathParams, _super);
    function ListSubscribedEventPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=SubscriptionSid" }),
        __metadata("design:type", String)
    ], ListSubscribedEventPathParams.prototype, "subscriptionSid", void 0);
    return ListSubscribedEventPathParams;
}(SpeakeasyBase));
export { ListSubscribedEventPathParams };
var ListSubscribedEventQueryParams = /** @class */ (function (_super) {
    __extends(ListSubscribedEventQueryParams, _super);
    function ListSubscribedEventQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListSubscribedEventQueryParams.prototype, "pageSize", void 0);
    return ListSubscribedEventQueryParams;
}(SpeakeasyBase));
export { ListSubscribedEventQueryParams };
var ListSubscribedEventSecurity = /** @class */ (function (_super) {
    __extends(ListSubscribedEventSecurity, _super);
    function ListSubscribedEventSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListSubscribedEventSecurity.prototype, "accountSidAuthToken", void 0);
    return ListSubscribedEventSecurity;
}(SpeakeasyBase));
export { ListSubscribedEventSecurity };
var ListSubscribedEventListSubscribedEventResponseMeta = /** @class */ (function (_super) {
    __extends(ListSubscribedEventListSubscribedEventResponseMeta, _super);
    function ListSubscribedEventListSubscribedEventResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListSubscribedEventListSubscribedEventResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListSubscribedEventListSubscribedEventResponseMeta.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListSubscribedEventListSubscribedEventResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListSubscribedEventListSubscribedEventResponseMeta.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListSubscribedEventListSubscribedEventResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListSubscribedEventListSubscribedEventResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListSubscribedEventListSubscribedEventResponseMeta.prototype, "url", void 0);
    return ListSubscribedEventListSubscribedEventResponseMeta;
}(SpeakeasyBase));
export { ListSubscribedEventListSubscribedEventResponseMeta };
var ListSubscribedEventListSubscribedEventResponse = /** @class */ (function (_super) {
    __extends(ListSubscribedEventListSubscribedEventResponse, _super);
    function ListSubscribedEventListSubscribedEventResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", ListSubscribedEventListSubscribedEventResponseMeta)
    ], ListSubscribedEventListSubscribedEventResponse.prototype, "meta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=types", elemType: shared.EventsV1SubscriptionSubscribedEvent }),
        __metadata("design:type", Array)
    ], ListSubscribedEventListSubscribedEventResponse.prototype, "types", void 0);
    return ListSubscribedEventListSubscribedEventResponse;
}(SpeakeasyBase));
export { ListSubscribedEventListSubscribedEventResponse };
var ListSubscribedEventRequest = /** @class */ (function (_super) {
    __extends(ListSubscribedEventRequest, _super);
    function ListSubscribedEventRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListSubscribedEventRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSubscribedEventPathParams)
    ], ListSubscribedEventRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSubscribedEventQueryParams)
    ], ListSubscribedEventRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSubscribedEventSecurity)
    ], ListSubscribedEventRequest.prototype, "security", void 0);
    return ListSubscribedEventRequest;
}(SpeakeasyBase));
export { ListSubscribedEventRequest };
var ListSubscribedEventResponse = /** @class */ (function (_super) {
    __extends(ListSubscribedEventResponse, _super);
    function ListSubscribedEventResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListSubscribedEventResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListSubscribedEventListSubscribedEventResponse)
    ], ListSubscribedEventResponse.prototype, "listSubscribedEventResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListSubscribedEventResponse.prototype, "statusCode", void 0);
    return ListSubscribedEventResponse;
}(SpeakeasyBase));
export { ListSubscribedEventResponse };
