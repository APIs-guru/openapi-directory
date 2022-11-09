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
export var LISTINCOMINGPHONENUMBERASSIGNEDADDON_SERVERS = [
    "https://api.twilio.com",
];
var ListIncomingPhoneNumberAssignedAddOnPathParams = /** @class */ (function (_super) {
    __extends(ListIncomingPhoneNumberAssignedAddOnPathParams, _super);
    function ListIncomingPhoneNumberAssignedAddOnPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], ListIncomingPhoneNumberAssignedAddOnPathParams.prototype, "accountSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ResourceSid" }),
        __metadata("design:type", String)
    ], ListIncomingPhoneNumberAssignedAddOnPathParams.prototype, "resourceSid", void 0);
    return ListIncomingPhoneNumberAssignedAddOnPathParams;
}(SpeakeasyBase));
export { ListIncomingPhoneNumberAssignedAddOnPathParams };
var ListIncomingPhoneNumberAssignedAddOnQueryParams = /** @class */ (function (_super) {
    __extends(ListIncomingPhoneNumberAssignedAddOnQueryParams, _super);
    function ListIncomingPhoneNumberAssignedAddOnQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListIncomingPhoneNumberAssignedAddOnQueryParams.prototype, "pageSize", void 0);
    return ListIncomingPhoneNumberAssignedAddOnQueryParams;
}(SpeakeasyBase));
export { ListIncomingPhoneNumberAssignedAddOnQueryParams };
var ListIncomingPhoneNumberAssignedAddOnSecurity = /** @class */ (function (_super) {
    __extends(ListIncomingPhoneNumberAssignedAddOnSecurity, _super);
    function ListIncomingPhoneNumberAssignedAddOnSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListIncomingPhoneNumberAssignedAddOnSecurity.prototype, "accountSidAuthToken", void 0);
    return ListIncomingPhoneNumberAssignedAddOnSecurity;
}(SpeakeasyBase));
export { ListIncomingPhoneNumberAssignedAddOnSecurity };
var ListIncomingPhoneNumberAssignedAddOnRequest = /** @class */ (function (_super) {
    __extends(ListIncomingPhoneNumberAssignedAddOnRequest, _super);
    function ListIncomingPhoneNumberAssignedAddOnRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListIncomingPhoneNumberAssignedAddOnRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListIncomingPhoneNumberAssignedAddOnPathParams)
    ], ListIncomingPhoneNumberAssignedAddOnRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListIncomingPhoneNumberAssignedAddOnQueryParams)
    ], ListIncomingPhoneNumberAssignedAddOnRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListIncomingPhoneNumberAssignedAddOnSecurity)
    ], ListIncomingPhoneNumberAssignedAddOnRequest.prototype, "security", void 0);
    return ListIncomingPhoneNumberAssignedAddOnRequest;
}(SpeakeasyBase));
export { ListIncomingPhoneNumberAssignedAddOnRequest };
var ListIncomingPhoneNumberAssignedAddOnListIncomingPhoneNumberAssignedAddOnResponse = /** @class */ (function (_super) {
    __extends(ListIncomingPhoneNumberAssignedAddOnListIncomingPhoneNumberAssignedAddOnResponse, _super);
    function ListIncomingPhoneNumberAssignedAddOnListIncomingPhoneNumberAssignedAddOnResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=assigned_add_ons", elemType: shared.ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn }),
        __metadata("design:type", Array)
    ], ListIncomingPhoneNumberAssignedAddOnListIncomingPhoneNumberAssignedAddOnResponse.prototype, "assignedAddOns", void 0);
    __decorate([
        Metadata({ data: "json, name=end" }),
        __metadata("design:type", Number)
    ], ListIncomingPhoneNumberAssignedAddOnListIncomingPhoneNumberAssignedAddOnResponse.prototype, "end", void 0);
    __decorate([
        Metadata({ data: "json, name=first_page_uri" }),
        __metadata("design:type", String)
    ], ListIncomingPhoneNumberAssignedAddOnListIncomingPhoneNumberAssignedAddOnResponse.prototype, "firstPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_uri" }),
        __metadata("design:type", String)
    ], ListIncomingPhoneNumberAssignedAddOnListIncomingPhoneNumberAssignedAddOnResponse.prototype, "nextPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListIncomingPhoneNumberAssignedAddOnListIncomingPhoneNumberAssignedAddOnResponse.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListIncomingPhoneNumberAssignedAddOnListIncomingPhoneNumberAssignedAddOnResponse.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_uri" }),
        __metadata("design:type", String)
    ], ListIncomingPhoneNumberAssignedAddOnListIncomingPhoneNumberAssignedAddOnResponse.prototype, "previousPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=start" }),
        __metadata("design:type", Number)
    ], ListIncomingPhoneNumberAssignedAddOnListIncomingPhoneNumberAssignedAddOnResponse.prototype, "start", void 0);
    __decorate([
        Metadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ListIncomingPhoneNumberAssignedAddOnListIncomingPhoneNumberAssignedAddOnResponse.prototype, "uri", void 0);
    return ListIncomingPhoneNumberAssignedAddOnListIncomingPhoneNumberAssignedAddOnResponse;
}(SpeakeasyBase));
export { ListIncomingPhoneNumberAssignedAddOnListIncomingPhoneNumberAssignedAddOnResponse };
var ListIncomingPhoneNumberAssignedAddOnResponse = /** @class */ (function (_super) {
    __extends(ListIncomingPhoneNumberAssignedAddOnResponse, _super);
    function ListIncomingPhoneNumberAssignedAddOnResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListIncomingPhoneNumberAssignedAddOnResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListIncomingPhoneNumberAssignedAddOnListIncomingPhoneNumberAssignedAddOnResponse)
    ], ListIncomingPhoneNumberAssignedAddOnResponse.prototype, "listIncomingPhoneNumberAssignedAddOnResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListIncomingPhoneNumberAssignedAddOnResponse.prototype, "statusCode", void 0);
    return ListIncomingPhoneNumberAssignedAddOnResponse;
}(SpeakeasyBase));
export { ListIncomingPhoneNumberAssignedAddOnResponse };
