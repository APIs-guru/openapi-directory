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
export var ListNotificationServerList = [
    "https://api.twilio.com",
];
var ListNotificationPathParams = /** @class */ (function (_super) {
    __extends(ListNotificationPathParams, _super);
    function ListNotificationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], ListNotificationPathParams.prototype, "accountSid", void 0);
    return ListNotificationPathParams;
}(SpeakeasyBase));
export { ListNotificationPathParams };
var ListNotificationQueryParams = /** @class */ (function (_super) {
    __extends(ListNotificationQueryParams, _super);
    function ListNotificationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Log" }),
        __metadata("design:type", Number)
    ], ListNotificationQueryParams.prototype, "log", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MessageDate" }),
        __metadata("design:type", Date)
    ], ListNotificationQueryParams.prototype, "messageDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MessageDate<" }),
        __metadata("design:type", Date)
    ], ListNotificationQueryParams.prototype, "messageDateLessThan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MessageDate>" }),
        __metadata("design:type", Date)
    ], ListNotificationQueryParams.prototype, "messageDateGreaterThan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListNotificationQueryParams.prototype, "pageSize", void 0);
    return ListNotificationQueryParams;
}(SpeakeasyBase));
export { ListNotificationQueryParams };
var ListNotificationSecurity = /** @class */ (function (_super) {
    __extends(ListNotificationSecurity, _super);
    function ListNotificationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListNotificationSecurity.prototype, "accountSidAuthToken", void 0);
    return ListNotificationSecurity;
}(SpeakeasyBase));
export { ListNotificationSecurity };
var ListNotificationListNotificationResponse = /** @class */ (function (_super) {
    __extends(ListNotificationListNotificationResponse, _super);
    function ListNotificationListNotificationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end" }),
        __metadata("design:type", Number)
    ], ListNotificationListNotificationResponse.prototype, "end", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_uri" }),
        __metadata("design:type", String)
    ], ListNotificationListNotificationResponse.prototype, "firstPageUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_uri" }),
        __metadata("design:type", String)
    ], ListNotificationListNotificationResponse.prototype, "nextPageUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notifications", elemType: shared.ApiV2010AccountNotification }),
        __metadata("design:type", Array)
    ], ListNotificationListNotificationResponse.prototype, "notifications", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListNotificationListNotificationResponse.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListNotificationListNotificationResponse.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_uri" }),
        __metadata("design:type", String)
    ], ListNotificationListNotificationResponse.prototype, "previousPageUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start" }),
        __metadata("design:type", Number)
    ], ListNotificationListNotificationResponse.prototype, "start", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ListNotificationListNotificationResponse.prototype, "uri", void 0);
    return ListNotificationListNotificationResponse;
}(SpeakeasyBase));
export { ListNotificationListNotificationResponse };
var ListNotificationRequest = /** @class */ (function (_super) {
    __extends(ListNotificationRequest, _super);
    function ListNotificationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListNotificationRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListNotificationPathParams)
    ], ListNotificationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListNotificationQueryParams)
    ], ListNotificationRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListNotificationSecurity)
    ], ListNotificationRequest.prototype, "security", void 0);
    return ListNotificationRequest;
}(SpeakeasyBase));
export { ListNotificationRequest };
var ListNotificationResponse = /** @class */ (function (_super) {
    __extends(ListNotificationResponse, _super);
    function ListNotificationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListNotificationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListNotificationListNotificationResponse)
    ], ListNotificationResponse.prototype, "listNotificationResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListNotificationResponse.prototype, "statusCode", void 0);
    return ListNotificationResponse;
}(SpeakeasyBase));
export { ListNotificationResponse };
