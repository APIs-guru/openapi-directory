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
export var CREATECREDENTIALLIST_SERVERS = [
    "https://trunking.twilio.com",
];
var CreateCredentialListPathParams = /** @class */ (function (_super) {
    __extends(CreateCredentialListPathParams, _super);
    function CreateCredentialListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=TrunkSid" }),
        __metadata("design:type", String)
    ], CreateCredentialListPathParams.prototype, "trunkSid", void 0);
    return CreateCredentialListPathParams;
}(SpeakeasyBase));
export { CreateCredentialListPathParams };
var CreateCredentialListCreateCredentialListRequest = /** @class */ (function (_super) {
    __extends(CreateCredentialListCreateCredentialListRequest, _super);
    function CreateCredentialListCreateCredentialListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=CredentialListSid;" }),
        __metadata("design:type", String)
    ], CreateCredentialListCreateCredentialListRequest.prototype, "credentialListSid", void 0);
    return CreateCredentialListCreateCredentialListRequest;
}(SpeakeasyBase));
export { CreateCredentialListCreateCredentialListRequest };
var CreateCredentialListSecurity = /** @class */ (function (_super) {
    __extends(CreateCredentialListSecurity, _super);
    function CreateCredentialListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateCredentialListSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateCredentialListSecurity;
}(SpeakeasyBase));
export { CreateCredentialListSecurity };
var CreateCredentialListRequest = /** @class */ (function (_super) {
    __extends(CreateCredentialListRequest, _super);
    function CreateCredentialListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateCredentialListRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateCredentialListPathParams)
    ], CreateCredentialListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateCredentialListCreateCredentialListRequest)
    ], CreateCredentialListRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateCredentialListSecurity)
    ], CreateCredentialListRequest.prototype, "security", void 0);
    return CreateCredentialListRequest;
}(SpeakeasyBase));
export { CreateCredentialListRequest };
var CreateCredentialListResponse = /** @class */ (function (_super) {
    __extends(CreateCredentialListResponse, _super);
    function CreateCredentialListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateCredentialListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateCredentialListResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.TrunkingV1TrunkCredentialList)
    ], CreateCredentialListResponse.prototype, "trunkingV1TrunkCredentialList", void 0);
    return CreateCredentialListResponse;
}(SpeakeasyBase));
export { CreateCredentialListResponse };
