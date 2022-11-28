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
export var ListCallEventServerList = [
    "https://api.twilio.com",
];
var ListCallEventPathParams = /** @class */ (function (_super) {
    __extends(ListCallEventPathParams, _super);
    function ListCallEventPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], ListCallEventPathParams.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=CallSid" }),
        __metadata("design:type", String)
    ], ListCallEventPathParams.prototype, "callSid", void 0);
    return ListCallEventPathParams;
}(SpeakeasyBase));
export { ListCallEventPathParams };
var ListCallEventQueryParams = /** @class */ (function (_super) {
    __extends(ListCallEventQueryParams, _super);
    function ListCallEventQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListCallEventQueryParams.prototype, "pageSize", void 0);
    return ListCallEventQueryParams;
}(SpeakeasyBase));
export { ListCallEventQueryParams };
var ListCallEventSecurity = /** @class */ (function (_super) {
    __extends(ListCallEventSecurity, _super);
    function ListCallEventSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListCallEventSecurity.prototype, "accountSidAuthToken", void 0);
    return ListCallEventSecurity;
}(SpeakeasyBase));
export { ListCallEventSecurity };
var ListCallEventListCallEventResponse = /** @class */ (function (_super) {
    __extends(ListCallEventListCallEventResponse, _super);
    function ListCallEventListCallEventResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end" }),
        __metadata("design:type", Number)
    ], ListCallEventListCallEventResponse.prototype, "end", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=events", elemType: shared.ApiV2010AccountCallCallEvent }),
        __metadata("design:type", Array)
    ], ListCallEventListCallEventResponse.prototype, "events", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_uri" }),
        __metadata("design:type", String)
    ], ListCallEventListCallEventResponse.prototype, "firstPageUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_uri" }),
        __metadata("design:type", String)
    ], ListCallEventListCallEventResponse.prototype, "nextPageUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListCallEventListCallEventResponse.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListCallEventListCallEventResponse.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_uri" }),
        __metadata("design:type", String)
    ], ListCallEventListCallEventResponse.prototype, "previousPageUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start" }),
        __metadata("design:type", Number)
    ], ListCallEventListCallEventResponse.prototype, "start", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ListCallEventListCallEventResponse.prototype, "uri", void 0);
    return ListCallEventListCallEventResponse;
}(SpeakeasyBase));
export { ListCallEventListCallEventResponse };
var ListCallEventRequest = /** @class */ (function (_super) {
    __extends(ListCallEventRequest, _super);
    function ListCallEventRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListCallEventRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListCallEventPathParams)
    ], ListCallEventRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListCallEventQueryParams)
    ], ListCallEventRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListCallEventSecurity)
    ], ListCallEventRequest.prototype, "security", void 0);
    return ListCallEventRequest;
}(SpeakeasyBase));
export { ListCallEventRequest };
var ListCallEventResponse = /** @class */ (function (_super) {
    __extends(ListCallEventResponse, _super);
    function ListCallEventResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListCallEventResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListCallEventListCallEventResponse)
    ], ListCallEventResponse.prototype, "listCallEventResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListCallEventResponse.prototype, "statusCode", void 0);
    return ListCallEventResponse;
}(SpeakeasyBase));
export { ListCallEventResponse };
