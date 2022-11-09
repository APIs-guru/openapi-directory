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
export var LISTKEY_SERVERS = [
    "https://api.twilio.com",
];
var ListKeyPathParams = /** @class */ (function (_super) {
    __extends(ListKeyPathParams, _super);
    function ListKeyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], ListKeyPathParams.prototype, "accountSid", void 0);
    return ListKeyPathParams;
}(SpeakeasyBase));
export { ListKeyPathParams };
var ListKeyQueryParams = /** @class */ (function (_super) {
    __extends(ListKeyQueryParams, _super);
    function ListKeyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListKeyQueryParams.prototype, "pageSize", void 0);
    return ListKeyQueryParams;
}(SpeakeasyBase));
export { ListKeyQueryParams };
var ListKeySecurity = /** @class */ (function (_super) {
    __extends(ListKeySecurity, _super);
    function ListKeySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListKeySecurity.prototype, "accountSidAuthToken", void 0);
    return ListKeySecurity;
}(SpeakeasyBase));
export { ListKeySecurity };
var ListKeyRequest = /** @class */ (function (_super) {
    __extends(ListKeyRequest, _super);
    function ListKeyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListKeyRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListKeyPathParams)
    ], ListKeyRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListKeyQueryParams)
    ], ListKeyRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListKeySecurity)
    ], ListKeyRequest.prototype, "security", void 0);
    return ListKeyRequest;
}(SpeakeasyBase));
export { ListKeyRequest };
var ListKeyListKeyResponse = /** @class */ (function (_super) {
    __extends(ListKeyListKeyResponse, _super);
    function ListKeyListKeyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=end" }),
        __metadata("design:type", Number)
    ], ListKeyListKeyResponse.prototype, "end", void 0);
    __decorate([
        Metadata({ data: "json, name=first_page_uri" }),
        __metadata("design:type", String)
    ], ListKeyListKeyResponse.prototype, "firstPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=keys", elemType: shared.ApiV2010AccountKey }),
        __metadata("design:type", Array)
    ], ListKeyListKeyResponse.prototype, "keys", void 0);
    __decorate([
        Metadata({ data: "json, name=next_page_uri" }),
        __metadata("design:type", String)
    ], ListKeyListKeyResponse.prototype, "nextPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListKeyListKeyResponse.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListKeyListKeyResponse.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "json, name=previous_page_uri" }),
        __metadata("design:type", String)
    ], ListKeyListKeyResponse.prototype, "previousPageUri", void 0);
    __decorate([
        Metadata({ data: "json, name=start" }),
        __metadata("design:type", Number)
    ], ListKeyListKeyResponse.prototype, "start", void 0);
    __decorate([
        Metadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ListKeyListKeyResponse.prototype, "uri", void 0);
    return ListKeyListKeyResponse;
}(SpeakeasyBase));
export { ListKeyListKeyResponse };
var ListKeyResponse = /** @class */ (function (_super) {
    __extends(ListKeyResponse, _super);
    function ListKeyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ListKeyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ListKeyListKeyResponse)
    ], ListKeyResponse.prototype, "listKeyResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ListKeyResponse.prototype, "statusCode", void 0);
    return ListKeyResponse;
}(SpeakeasyBase));
export { ListKeyResponse };
