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
export var CREATESIPCREDENTIALLIST_SERVERS = [
    "https://api.twilio.com",
];
var CreateSipCredentialListPathParams = /** @class */ (function (_super) {
    __extends(CreateSipCredentialListPathParams, _super);
    function CreateSipCredentialListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], CreateSipCredentialListPathParams.prototype, "accountSid", void 0);
    return CreateSipCredentialListPathParams;
}(SpeakeasyBase));
export { CreateSipCredentialListPathParams };
var CreateSipCredentialListCreateSipCredentialListRequest = /** @class */ (function (_super) {
    __extends(CreateSipCredentialListCreateSipCredentialListRequest, _super);
    function CreateSipCredentialListCreateSipCredentialListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateSipCredentialListCreateSipCredentialListRequest.prototype, "friendlyName", void 0);
    return CreateSipCredentialListCreateSipCredentialListRequest;
}(SpeakeasyBase));
export { CreateSipCredentialListCreateSipCredentialListRequest };
var CreateSipCredentialListSecurity = /** @class */ (function (_super) {
    __extends(CreateSipCredentialListSecurity, _super);
    function CreateSipCredentialListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateSipCredentialListSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateSipCredentialListSecurity;
}(SpeakeasyBase));
export { CreateSipCredentialListSecurity };
var CreateSipCredentialListRequest = /** @class */ (function (_super) {
    __extends(CreateSipCredentialListRequest, _super);
    function CreateSipCredentialListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateSipCredentialListRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateSipCredentialListPathParams)
    ], CreateSipCredentialListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateSipCredentialListCreateSipCredentialListRequest)
    ], CreateSipCredentialListRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateSipCredentialListSecurity)
    ], CreateSipCredentialListRequest.prototype, "security", void 0);
    return CreateSipCredentialListRequest;
}(SpeakeasyBase));
export { CreateSipCredentialListRequest };
var CreateSipCredentialListResponse = /** @class */ (function (_super) {
    __extends(CreateSipCredentialListResponse, _super);
    function CreateSipCredentialListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateSipCredentialListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateSipCredentialListResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ApiV2010AccountSipSipCredentialList)
    ], CreateSipCredentialListResponse.prototype, "apiV2010AccountSipSipCredentialList", void 0);
    return CreateSipCredentialListResponse;
}(SpeakeasyBase));
export { CreateSipCredentialListResponse };
