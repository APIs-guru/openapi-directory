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
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
var CreateStatementsHeaders = /** @class */ (function (_super) {
    __extends(CreateStatementsHeaders, _super);
    function CreateStatementsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" }),
        __metadata("design:type", String)
    ], CreateStatementsHeaders.prototype, "xeroTenantId", void 0);
    return CreateStatementsHeaders;
}(SpeakeasyBase));
export { CreateStatementsHeaders };
var CreateStatementsSecurity = /** @class */ (function (_super) {
    __extends(CreateStatementsSecurity, _super);
    function CreateStatementsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], CreateStatementsSecurity.prototype, "oAuth2", void 0);
    return CreateStatementsSecurity;
}(SpeakeasyBase));
export { CreateStatementsSecurity };
var CreateStatementsRequest = /** @class */ (function (_super) {
    __extends(CreateStatementsRequest, _super);
    function CreateStatementsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateStatementsHeaders)
    ], CreateStatementsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Statements)
    ], CreateStatementsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateStatementsSecurity)
    ], CreateStatementsRequest.prototype, "security", void 0);
    return CreateStatementsRequest;
}(SpeakeasyBase));
export { CreateStatementsRequest };
var CreateStatementsResponse = /** @class */ (function (_super) {
    __extends(CreateStatementsResponse, _super);
    function CreateStatementsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateStatementsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], CreateStatementsResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Statements)
    ], CreateStatementsResponse.prototype, "statements", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateStatementsResponse.prototype, "statusCode", void 0);
    return CreateStatementsResponse;
}(SpeakeasyBase));
export { CreateStatementsResponse };
