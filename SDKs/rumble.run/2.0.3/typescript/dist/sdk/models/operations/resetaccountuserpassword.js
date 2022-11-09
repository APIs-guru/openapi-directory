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
var ResetAccountUserPasswordPathParams = /** @class */ (function (_super) {
    __extends(ResetAccountUserPasswordPathParams, _super);
    function ResetAccountUserPasswordPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" }),
        __metadata("design:type", String)
    ], ResetAccountUserPasswordPathParams.prototype, "userId", void 0);
    return ResetAccountUserPasswordPathParams;
}(SpeakeasyBase));
export { ResetAccountUserPasswordPathParams };
var ResetAccountUserPasswordSecurity = /** @class */ (function (_super) {
    __extends(ResetAccountUserPasswordSecurity, _super);
    function ResetAccountUserPasswordSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], ResetAccountUserPasswordSecurity.prototype, "bearerAuth", void 0);
    return ResetAccountUserPasswordSecurity;
}(SpeakeasyBase));
export { ResetAccountUserPasswordSecurity };
var ResetAccountUserPasswordRequest = /** @class */ (function (_super) {
    __extends(ResetAccountUserPasswordRequest, _super);
    function ResetAccountUserPasswordRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ResetAccountUserPasswordPathParams)
    ], ResetAccountUserPasswordRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ResetAccountUserPasswordSecurity)
    ], ResetAccountUserPasswordRequest.prototype, "security", void 0);
    return ResetAccountUserPasswordRequest;
}(SpeakeasyBase));
export { ResetAccountUserPasswordRequest };
var ResetAccountUserPasswordResponse = /** @class */ (function (_super) {
    __extends(ResetAccountUserPasswordResponse, _super);
    function ResetAccountUserPasswordResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], ResetAccountUserPasswordResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ResetAccountUserPasswordResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ResetAccountUserPasswordResponse.prototype, "statusCode", void 0);
    return ResetAccountUserPasswordResponse;
}(SpeakeasyBase));
export { ResetAccountUserPasswordResponse };
