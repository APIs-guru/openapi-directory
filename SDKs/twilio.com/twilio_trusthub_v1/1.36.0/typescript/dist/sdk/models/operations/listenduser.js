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
export var LISTENDUSER_SERVERS = [
    "https://trusthub.twilio.com",
];
var ListEndUserQueryParams = /** @class */ (function (_super) {
    __extends(ListEndUserQueryParams, _super);
    function ListEndUserQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListEndUserQueryParams.prototype, "pageSize", void 0);
    return ListEndUserQueryParams;
}(SpeakeasyBase));
export { ListEndUserQueryParams };
var ListEndUserSecurity = /** @class */ (function (_super) {
    __extends(ListEndUserSecurity, _super);
    function ListEndUserSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListEndUserSecurity.prototype, "accountSidAuthToken", void 0);
    return ListEndUserSecurity;
}(SpeakeasyBase));
export { ListEndUserSecurity };
var ListEndUserRequest = /** @class */ (function (_super) {
    __extends(ListEndUserRequest, _super);
    function ListEndUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListEndUserRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListEndUserQueryParams)
    ], ListEndUserRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListEndUserSecurity)
    ], ListEndUserRequest.prototype, "security", void 0);
    return ListEndUserRequest;
}(SpeakeasyBase));
export { ListEndUserRequest };
var ListEndUserListEndUserResponseMeta = /** @class */ (function (_super) {
    __extends(ListEndUserListEndUserResponseMeta, _super);
    function ListEndUserListEndUserResponseMeta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=first_page_url" }),
        __metadata("design:type", String)
    ], ListEndUserListEndUserResponseMeta.prototype, "firstPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ListEndUserListEndUserResponseMeta.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_url" }),
        __metadata("design:type", String)
    ], ListEndUserListEndUserResponseMeta.prototype, "nextPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListEndUserListEndUserResponseMeta.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListEndUserListEndUserResponseMeta.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_url" }),
        __metadata("design:type", String)
    ], ListEndUserListEndUserResponseMeta.prototype, "previousPageUrl", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], ListEndUserListEndUserResponseMeta.prototype, "url", void 0);
    return ListEndUserListEndUserResponseMeta;
}(SpeakeasyBase));
export { ListEndUserListEndUserResponseMeta };
var ListEndUserListEndUserResponse = /** @class */ (function (_super) {
    __extends(ListEndUserListEndUserResponse, _super);
    function ListEndUserListEndUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=meta" }),
        __metadata("design:type", ListEndUserListEndUserResponseMeta)
    ], ListEndUserListEndUserResponse.prototype, "meta", void 0);
    __decorate([
        Metadata({ data: "json, name=results", elemType: shared.TrusthubV1EndUser }),
        __metadata("design:type", Array)
    ], ListEndUserListEndUserResponse.prototype, "results", void 0);
    return ListEndUserListEndUserResponse;
}(SpeakeasyBase));
export { ListEndUserListEndUserResponse };
var ListEndUserResponse = /** @class */ (function (_super) {
    __extends(ListEndUserResponse, _super);
    function ListEndUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListEndUserResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListEndUserListEndUserResponse)
    ], ListEndUserResponse.prototype, "listEndUserResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListEndUserResponse.prototype, "statusCode", void 0);
    return ListEndUserResponse;
}(SpeakeasyBase));
export { ListEndUserResponse };
