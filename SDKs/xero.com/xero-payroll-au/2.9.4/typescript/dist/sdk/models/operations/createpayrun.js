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
var CreatePayRunHeaders = /** @class */ (function (_super) {
    __extends(CreatePayRunHeaders, _super);
    function CreatePayRunHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" }),
        __metadata("design:type", String)
    ], CreatePayRunHeaders.prototype, "xeroTenantId", void 0);
    return CreatePayRunHeaders;
}(SpeakeasyBase));
export { CreatePayRunHeaders };
var CreatePayRunSecurity = /** @class */ (function (_super) {
    __extends(CreatePayRunSecurity, _super);
    function CreatePayRunSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], CreatePayRunSecurity.prototype, "oAuth2", void 0);
    return CreatePayRunSecurity;
}(SpeakeasyBase));
export { CreatePayRunSecurity };
var CreatePayRunRequest = /** @class */ (function (_super) {
    __extends(CreatePayRunRequest, _super);
    function CreatePayRunRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreatePayRunHeaders)
    ], CreatePayRunRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.PayRunInput }),
        __metadata("design:type", Array)
    ], CreatePayRunRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreatePayRunSecurity)
    ], CreatePayRunRequest.prototype, "security", void 0);
    return CreatePayRunRequest;
}(SpeakeasyBase));
export { CreatePayRunRequest };
var CreatePayRunResponse = /** @class */ (function (_super) {
    __extends(CreatePayRunResponse, _super);
    function CreatePayRunResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreatePayRunResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PayRuns)
    ], CreatePayRunResponse.prototype, "payRuns", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreatePayRunResponse.prototype, "statusCode", void 0);
    return CreatePayRunResponse;
}(SpeakeasyBase));
export { CreatePayRunResponse };
