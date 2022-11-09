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
export var LISTOUTGOINGCALLERID_SERVERS = [
    "https://api.twilio.com",
];
var ListOutgoingCallerIdPathParams = /** @class */ (function (_super) {
    __extends(ListOutgoingCallerIdPathParams, _super);
    function ListOutgoingCallerIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], ListOutgoingCallerIdPathParams.prototype, "accountSid", void 0);
    return ListOutgoingCallerIdPathParams;
}(SpeakeasyBase));
export { ListOutgoingCallerIdPathParams };
var ListOutgoingCallerIdQueryParams = /** @class */ (function (_super) {
    __extends(ListOutgoingCallerIdQueryParams, _super);
    function ListOutgoingCallerIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=FriendlyName" }),
        __metadata("design:type", String)
    ], ListOutgoingCallerIdQueryParams.prototype, "friendlyName", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListOutgoingCallerIdQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PhoneNumber" }),
        __metadata("design:type", String)
    ], ListOutgoingCallerIdQueryParams.prototype, "phoneNumber", void 0);
    return ListOutgoingCallerIdQueryParams;
}(SpeakeasyBase));
export { ListOutgoingCallerIdQueryParams };
var ListOutgoingCallerIdSecurity = /** @class */ (function (_super) {
    __extends(ListOutgoingCallerIdSecurity, _super);
    function ListOutgoingCallerIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListOutgoingCallerIdSecurity.prototype, "accountSidAuthToken", void 0);
    return ListOutgoingCallerIdSecurity;
}(SpeakeasyBase));
export { ListOutgoingCallerIdSecurity };
var ListOutgoingCallerIdRequest = /** @class */ (function (_super) {
    __extends(ListOutgoingCallerIdRequest, _super);
    function ListOutgoingCallerIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListOutgoingCallerIdRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListOutgoingCallerIdPathParams)
    ], ListOutgoingCallerIdRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListOutgoingCallerIdQueryParams)
    ], ListOutgoingCallerIdRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListOutgoingCallerIdSecurity)
    ], ListOutgoingCallerIdRequest.prototype, "security", void 0);
    return ListOutgoingCallerIdRequest;
}(SpeakeasyBase));
export { ListOutgoingCallerIdRequest };
var ListOutgoingCallerIdListOutgoingCallerIdResponse = /** @class */ (function (_super) {
    __extends(ListOutgoingCallerIdListOutgoingCallerIdResponse, _super);
    function ListOutgoingCallerIdListOutgoingCallerIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=end" }),
        __metadata("design:type", Number)
    ], ListOutgoingCallerIdListOutgoingCallerIdResponse.prototype, "end", void 0);
    __decorate([
        Metadata({ data: "json, name=first_page_uri" }),
        __metadata("design:type", String)
    ], ListOutgoingCallerIdListOutgoingCallerIdResponse.prototype, "firstPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_uri" }),
        __metadata("design:type", String)
    ], ListOutgoingCallerIdListOutgoingCallerIdResponse.prototype, "nextPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=outgoing_caller_ids", elemType: shared.ApiV2010AccountOutgoingCallerId }),
        __metadata("design:type", Array)
    ], ListOutgoingCallerIdListOutgoingCallerIdResponse.prototype, "outgoingCallerIds", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListOutgoingCallerIdListOutgoingCallerIdResponse.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListOutgoingCallerIdListOutgoingCallerIdResponse.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_uri" }),
        __metadata("design:type", String)
    ], ListOutgoingCallerIdListOutgoingCallerIdResponse.prototype, "previousPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=start" }),
        __metadata("design:type", Number)
    ], ListOutgoingCallerIdListOutgoingCallerIdResponse.prototype, "start", void 0);
    __decorate([
        Metadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ListOutgoingCallerIdListOutgoingCallerIdResponse.prototype, "uri", void 0);
    return ListOutgoingCallerIdListOutgoingCallerIdResponse;
}(SpeakeasyBase));
export { ListOutgoingCallerIdListOutgoingCallerIdResponse };
var ListOutgoingCallerIdResponse = /** @class */ (function (_super) {
    __extends(ListOutgoingCallerIdResponse, _super);
    function ListOutgoingCallerIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListOutgoingCallerIdResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListOutgoingCallerIdListOutgoingCallerIdResponse)
    ], ListOutgoingCallerIdResponse.prototype, "listOutgoingCallerIdResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListOutgoingCallerIdResponse.prototype, "statusCode", void 0);
    return ListOutgoingCallerIdResponse;
}(SpeakeasyBase));
export { ListOutgoingCallerIdResponse };
