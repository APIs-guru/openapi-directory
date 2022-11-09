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
export var LISTCALLNOTIFICATION_SERVERS = [
    "https://api.twilio.com",
];
var ListCallNotificationPathParams = /** @class */ (function (_super) {
    __extends(ListCallNotificationPathParams, _super);
    function ListCallNotificationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], ListCallNotificationPathParams.prototype, "accountSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=CallSid" }),
        __metadata("design:type", String)
    ], ListCallNotificationPathParams.prototype, "callSid", void 0);
    return ListCallNotificationPathParams;
}(SpeakeasyBase));
export { ListCallNotificationPathParams };
var ListCallNotificationQueryParams = /** @class */ (function (_super) {
    __extends(ListCallNotificationQueryParams, _super);
    function ListCallNotificationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Log" }),
        __metadata("design:type", Number)
    ], ListCallNotificationQueryParams.prototype, "log", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MessageDate" }),
        __metadata("design:type", Date)
    ], ListCallNotificationQueryParams.prototype, "messageDate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MessageDate<" }),
        __metadata("design:type", Date)
    ], ListCallNotificationQueryParams.prototype, "messageDateLessThan", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=MessageDate>" }),
        __metadata("design:type", Date)
    ], ListCallNotificationQueryParams.prototype, "messageDateGreaterThan", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListCallNotificationQueryParams.prototype, "pageSize", void 0);
    return ListCallNotificationQueryParams;
}(SpeakeasyBase));
export { ListCallNotificationQueryParams };
var ListCallNotificationSecurity = /** @class */ (function (_super) {
    __extends(ListCallNotificationSecurity, _super);
    function ListCallNotificationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListCallNotificationSecurity.prototype, "accountSidAuthToken", void 0);
    return ListCallNotificationSecurity;
}(SpeakeasyBase));
export { ListCallNotificationSecurity };
var ListCallNotificationRequest = /** @class */ (function (_super) {
    __extends(ListCallNotificationRequest, _super);
    function ListCallNotificationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListCallNotificationRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListCallNotificationPathParams)
    ], ListCallNotificationRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListCallNotificationQueryParams)
    ], ListCallNotificationRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListCallNotificationSecurity)
    ], ListCallNotificationRequest.prototype, "security", void 0);
    return ListCallNotificationRequest;
}(SpeakeasyBase));
export { ListCallNotificationRequest };
var ListCallNotificationListCallNotificationResponse = /** @class */ (function (_super) {
    __extends(ListCallNotificationListCallNotificationResponse, _super);
    function ListCallNotificationListCallNotificationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=end" }),
        __metadata("design:type", Number)
    ], ListCallNotificationListCallNotificationResponse.prototype, "end", void 0);
    __decorate([
        Metadata({ data: "json, name=first_page_uri" }),
        __metadata("design:type", String)
    ], ListCallNotificationListCallNotificationResponse.prototype, "firstPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_uri" }),
        __metadata("design:type", String)
    ], ListCallNotificationListCallNotificationResponse.prototype, "nextPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=notifications", elemType: shared.ApiV2010AccountCallCallNotification }),
        __metadata("design:type", Array)
    ], ListCallNotificationListCallNotificationResponse.prototype, "notifications", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListCallNotificationListCallNotificationResponse.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListCallNotificationListCallNotificationResponse.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_uri" }),
        __metadata("design:type", String)
    ], ListCallNotificationListCallNotificationResponse.prototype, "previousPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=start" }),
        __metadata("design:type", Number)
    ], ListCallNotificationListCallNotificationResponse.prototype, "start", void 0);
    __decorate([
        Metadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ListCallNotificationListCallNotificationResponse.prototype, "uri", void 0);
    return ListCallNotificationListCallNotificationResponse;
}(SpeakeasyBase));
export { ListCallNotificationListCallNotificationResponse };
var ListCallNotificationResponse = /** @class */ (function (_super) {
    __extends(ListCallNotificationResponse, _super);
    function ListCallNotificationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListCallNotificationResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListCallNotificationListCallNotificationResponse)
    ], ListCallNotificationResponse.prototype, "listCallNotificationResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListCallNotificationResponse.prototype, "statusCode", void 0);
    return ListCallNotificationResponse;
}(SpeakeasyBase));
export { ListCallNotificationResponse };
