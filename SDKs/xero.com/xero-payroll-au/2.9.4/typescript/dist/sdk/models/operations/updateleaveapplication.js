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
var UpdateLeaveApplicationPathParams = /** @class */ (function (_super) {
    __extends(UpdateLeaveApplicationPathParams, _super);
    function UpdateLeaveApplicationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=LeaveApplicationID" }),
        __metadata("design:type", String)
    ], UpdateLeaveApplicationPathParams.prototype, "leaveApplicationId", void 0);
    return UpdateLeaveApplicationPathParams;
}(SpeakeasyBase));
export { UpdateLeaveApplicationPathParams };
var UpdateLeaveApplicationHeaders = /** @class */ (function (_super) {
    __extends(UpdateLeaveApplicationHeaders, _super);
    function UpdateLeaveApplicationHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Xero-Tenant-Id" }),
        __metadata("design:type", String)
    ], UpdateLeaveApplicationHeaders.prototype, "xeroTenantId", void 0);
    return UpdateLeaveApplicationHeaders;
}(SpeakeasyBase));
export { UpdateLeaveApplicationHeaders };
var UpdateLeaveApplicationSecurity = /** @class */ (function (_super) {
    __extends(UpdateLeaveApplicationSecurity, _super);
    function UpdateLeaveApplicationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth2)
    ], UpdateLeaveApplicationSecurity.prototype, "oAuth2", void 0);
    return UpdateLeaveApplicationSecurity;
}(SpeakeasyBase));
export { UpdateLeaveApplicationSecurity };
var UpdateLeaveApplicationRequest = /** @class */ (function (_super) {
    __extends(UpdateLeaveApplicationRequest, _super);
    function UpdateLeaveApplicationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateLeaveApplicationPathParams)
    ], UpdateLeaveApplicationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateLeaveApplicationHeaders)
    ], UpdateLeaveApplicationRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.LeaveApplicationInput }),
        __metadata("design:type", Array)
    ], UpdateLeaveApplicationRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateLeaveApplicationSecurity)
    ], UpdateLeaveApplicationRequest.prototype, "security", void 0);
    return UpdateLeaveApplicationRequest;
}(SpeakeasyBase));
export { UpdateLeaveApplicationRequest };
var UpdateLeaveApplicationResponse = /** @class */ (function (_super) {
    __extends(UpdateLeaveApplicationResponse, _super);
    function UpdateLeaveApplicationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateLeaveApplicationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.LeaveApplications)
    ], UpdateLeaveApplicationResponse.prototype, "leaveApplications", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateLeaveApplicationResponse.prototype, "statusCode", void 0);
    return UpdateLeaveApplicationResponse;
}(SpeakeasyBase));
export { UpdateLeaveApplicationResponse };
