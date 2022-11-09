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
export var LISTINCOMINGPHONENUMBERASSIGNEDADDONEXTENSION_SERVERS = [
    "https://api.twilio.com",
];
var ListIncomingPhoneNumberAssignedAddOnExtensionPathParams = /** @class */ (function (_super) {
    __extends(ListIncomingPhoneNumberAssignedAddOnExtensionPathParams, _super);
    function ListIncomingPhoneNumberAssignedAddOnExtensionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], ListIncomingPhoneNumberAssignedAddOnExtensionPathParams.prototype, "accountSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AssignedAddOnSid" }),
        __metadata("design:type", String)
    ], ListIncomingPhoneNumberAssignedAddOnExtensionPathParams.prototype, "assignedAddOnSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ResourceSid" }),
        __metadata("design:type", String)
    ], ListIncomingPhoneNumberAssignedAddOnExtensionPathParams.prototype, "resourceSid", void 0);
    return ListIncomingPhoneNumberAssignedAddOnExtensionPathParams;
}(SpeakeasyBase));
export { ListIncomingPhoneNumberAssignedAddOnExtensionPathParams };
var ListIncomingPhoneNumberAssignedAddOnExtensionQueryParams = /** @class */ (function (_super) {
    __extends(ListIncomingPhoneNumberAssignedAddOnExtensionQueryParams, _super);
    function ListIncomingPhoneNumberAssignedAddOnExtensionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListIncomingPhoneNumberAssignedAddOnExtensionQueryParams.prototype, "pageSize", void 0);
    return ListIncomingPhoneNumberAssignedAddOnExtensionQueryParams;
}(SpeakeasyBase));
export { ListIncomingPhoneNumberAssignedAddOnExtensionQueryParams };
var ListIncomingPhoneNumberAssignedAddOnExtensionSecurity = /** @class */ (function (_super) {
    __extends(ListIncomingPhoneNumberAssignedAddOnExtensionSecurity, _super);
    function ListIncomingPhoneNumberAssignedAddOnExtensionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListIncomingPhoneNumberAssignedAddOnExtensionSecurity.prototype, "accountSidAuthToken", void 0);
    return ListIncomingPhoneNumberAssignedAddOnExtensionSecurity;
}(SpeakeasyBase));
export { ListIncomingPhoneNumberAssignedAddOnExtensionSecurity };
var ListIncomingPhoneNumberAssignedAddOnExtensionRequest = /** @class */ (function (_super) {
    __extends(ListIncomingPhoneNumberAssignedAddOnExtensionRequest, _super);
    function ListIncomingPhoneNumberAssignedAddOnExtensionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListIncomingPhoneNumberAssignedAddOnExtensionRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListIncomingPhoneNumberAssignedAddOnExtensionPathParams)
    ], ListIncomingPhoneNumberAssignedAddOnExtensionRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListIncomingPhoneNumberAssignedAddOnExtensionQueryParams)
    ], ListIncomingPhoneNumberAssignedAddOnExtensionRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListIncomingPhoneNumberAssignedAddOnExtensionSecurity)
    ], ListIncomingPhoneNumberAssignedAddOnExtensionRequest.prototype, "security", void 0);
    return ListIncomingPhoneNumberAssignedAddOnExtensionRequest;
}(SpeakeasyBase));
export { ListIncomingPhoneNumberAssignedAddOnExtensionRequest };
var ListIncomingPhoneNumberAssignedAddOnExtensionListIncomingPhoneNumberAssignedAddOnExtensionResponse = /** @class */ (function (_super) {
    __extends(ListIncomingPhoneNumberAssignedAddOnExtensionListIncomingPhoneNumberAssignedAddOnExtensionResponse, _super);
    function ListIncomingPhoneNumberAssignedAddOnExtensionListIncomingPhoneNumberAssignedAddOnExtensionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=end" }),
        __metadata("design:type", Number)
    ], ListIncomingPhoneNumberAssignedAddOnExtensionListIncomingPhoneNumberAssignedAddOnExtensionResponse.prototype, "end", void 0);
    __decorate([
        Metadata({ data: "json, name=extensions", elemType: shared.ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOnIncomingPhoneNumberAssignedAddOnExtension }),
        __metadata("design:type", Array)
    ], ListIncomingPhoneNumberAssignedAddOnExtensionListIncomingPhoneNumberAssignedAddOnExtensionResponse.prototype, "extensions", void 0);
    __decorate([
        Metadata({ data: "json, name=first_page_uri" }),
        __metadata("design:type", String)
    ], ListIncomingPhoneNumberAssignedAddOnExtensionListIncomingPhoneNumberAssignedAddOnExtensionResponse.prototype, "firstPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_uri" }),
        __metadata("design:type", String)
    ], ListIncomingPhoneNumberAssignedAddOnExtensionListIncomingPhoneNumberAssignedAddOnExtensionResponse.prototype, "nextPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListIncomingPhoneNumberAssignedAddOnExtensionListIncomingPhoneNumberAssignedAddOnExtensionResponse.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListIncomingPhoneNumberAssignedAddOnExtensionListIncomingPhoneNumberAssignedAddOnExtensionResponse.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_uri" }),
        __metadata("design:type", String)
    ], ListIncomingPhoneNumberAssignedAddOnExtensionListIncomingPhoneNumberAssignedAddOnExtensionResponse.prototype, "previousPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=start" }),
        __metadata("design:type", Number)
    ], ListIncomingPhoneNumberAssignedAddOnExtensionListIncomingPhoneNumberAssignedAddOnExtensionResponse.prototype, "start", void 0);
    __decorate([
        Metadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ListIncomingPhoneNumberAssignedAddOnExtensionListIncomingPhoneNumberAssignedAddOnExtensionResponse.prototype, "uri", void 0);
    return ListIncomingPhoneNumberAssignedAddOnExtensionListIncomingPhoneNumberAssignedAddOnExtensionResponse;
}(SpeakeasyBase));
export { ListIncomingPhoneNumberAssignedAddOnExtensionListIncomingPhoneNumberAssignedAddOnExtensionResponse };
var ListIncomingPhoneNumberAssignedAddOnExtensionResponse = /** @class */ (function (_super) {
    __extends(ListIncomingPhoneNumberAssignedAddOnExtensionResponse, _super);
    function ListIncomingPhoneNumberAssignedAddOnExtensionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListIncomingPhoneNumberAssignedAddOnExtensionResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListIncomingPhoneNumberAssignedAddOnExtensionListIncomingPhoneNumberAssignedAddOnExtensionResponse)
    ], ListIncomingPhoneNumberAssignedAddOnExtensionResponse.prototype, "listIncomingPhoneNumberAssignedAddOnExtensionResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListIncomingPhoneNumberAssignedAddOnExtensionResponse.prototype, "statusCode", void 0);
    return ListIncomingPhoneNumberAssignedAddOnExtensionResponse;
}(SpeakeasyBase));
export { ListIncomingPhoneNumberAssignedAddOnExtensionResponse };
