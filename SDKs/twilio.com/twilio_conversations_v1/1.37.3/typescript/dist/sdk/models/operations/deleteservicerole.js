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
export var DeleteServiceRoleServerList = [
    "https://conversations.twilio.com",
];
var DeleteServiceRolePathParams = /** @class */ (function (_super) {
    __extends(DeleteServiceRolePathParams, _super);
    function DeleteServiceRolePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ChatServiceSid" }),
        __metadata("design:type", String)
    ], DeleteServiceRolePathParams.prototype, "chatServiceSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], DeleteServiceRolePathParams.prototype, "sid", void 0);
    return DeleteServiceRolePathParams;
}(SpeakeasyBase));
export { DeleteServiceRolePathParams };
var DeleteServiceRoleSecurity = /** @class */ (function (_super) {
    __extends(DeleteServiceRoleSecurity, _super);
    function DeleteServiceRoleSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], DeleteServiceRoleSecurity.prototype, "accountSidAuthToken", void 0);
    return DeleteServiceRoleSecurity;
}(SpeakeasyBase));
export { DeleteServiceRoleSecurity };
var DeleteServiceRoleRequest = /** @class */ (function (_super) {
    __extends(DeleteServiceRoleRequest, _super);
    function DeleteServiceRoleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteServiceRoleRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteServiceRolePathParams)
    ], DeleteServiceRoleRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteServiceRoleSecurity)
    ], DeleteServiceRoleRequest.prototype, "security", void 0);
    return DeleteServiceRoleRequest;
}(SpeakeasyBase));
export { DeleteServiceRoleRequest };
var DeleteServiceRoleResponse = /** @class */ (function (_super) {
    __extends(DeleteServiceRoleResponse, _super);
    function DeleteServiceRoleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteServiceRoleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteServiceRoleResponse.prototype, "statusCode", void 0);
    return DeleteServiceRoleResponse;
}(SpeakeasyBase));
export { DeleteServiceRoleResponse };
