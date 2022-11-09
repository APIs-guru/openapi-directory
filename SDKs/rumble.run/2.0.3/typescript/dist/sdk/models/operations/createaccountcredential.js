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
var CreateAccountCredentialSecurity = /** @class */ (function (_super) {
    __extends(CreateAccountCredentialSecurity, _super);
    function CreateAccountCredentialSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], CreateAccountCredentialSecurity.prototype, "bearerAuth", void 0);
    return CreateAccountCredentialSecurity;
}(SpeakeasyBase));
export { CreateAccountCredentialSecurity };
var CreateAccountCredentialRequest = /** @class */ (function (_super) {
    __extends(CreateAccountCredentialRequest, _super);
    function CreateAccountCredentialRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CredentialOptions)
    ], CreateAccountCredentialRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateAccountCredentialSecurity)
    ], CreateAccountCredentialRequest.prototype, "security", void 0);
    return CreateAccountCredentialRequest;
}(SpeakeasyBase));
export { CreateAccountCredentialRequest };
var CreateAccountCredentialResponse = /** @class */ (function (_super) {
    __extends(CreateAccountCredentialResponse, _super);
    function CreateAccountCredentialResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateAccountCredentialResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Credential)
    ], CreateAccountCredentialResponse.prototype, "credential", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateAccountCredentialResponse.prototype, "statusCode", void 0);
    return CreateAccountCredentialResponse;
}(SpeakeasyBase));
export { CreateAccountCredentialResponse };
