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
var RemoveAccountKeyPathParams = /** @class */ (function (_super) {
    __extends(RemoveAccountKeyPathParams, _super);
    function RemoveAccountKeyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=key_id" }),
        __metadata("design:type", String)
    ], RemoveAccountKeyPathParams.prototype, "keyId", void 0);
    return RemoveAccountKeyPathParams;
}(SpeakeasyBase));
export { RemoveAccountKeyPathParams };
var RemoveAccountKeySecurity = /** @class */ (function (_super) {
    __extends(RemoveAccountKeySecurity, _super);
    function RemoveAccountKeySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], RemoveAccountKeySecurity.prototype, "bearerAuth", void 0);
    return RemoveAccountKeySecurity;
}(SpeakeasyBase));
export { RemoveAccountKeySecurity };
var RemoveAccountKeyRequest = /** @class */ (function (_super) {
    __extends(RemoveAccountKeyRequest, _super);
    function RemoveAccountKeyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", RemoveAccountKeyPathParams)
    ], RemoveAccountKeyRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", RemoveAccountKeySecurity)
    ], RemoveAccountKeyRequest.prototype, "security", void 0);
    return RemoveAccountKeyRequest;
}(SpeakeasyBase));
export { RemoveAccountKeyRequest };
var RemoveAccountKeyResponse = /** @class */ (function (_super) {
    __extends(RemoveAccountKeyResponse, _super);
    function RemoveAccountKeyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], RemoveAccountKeyResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], RemoveAccountKeyResponse.prototype, "statusCode", void 0);
    return RemoveAccountKeyResponse;
}(SpeakeasyBase));
export { RemoveAccountKeyResponse };
