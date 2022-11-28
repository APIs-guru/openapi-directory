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
export var CreateRoleServerList = [
    "https://chat.twilio.com",
];
var CreateRolePathParams = /** @class */ (function (_super) {
    __extends(CreateRolePathParams, _super);
    function CreateRolePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], CreateRolePathParams.prototype, "serviceSid", void 0);
    return CreateRolePathParams;
}(SpeakeasyBase));
export { CreateRolePathParams };
var CreateRoleCreateRoleRequest = /** @class */ (function (_super) {
    __extends(CreateRoleCreateRoleRequest, _super);
    function CreateRoleCreateRoleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateRoleCreateRoleRequest.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Permission;" }),
        __metadata("design:type", Array)
    ], CreateRoleCreateRoleRequest.prototype, "permission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=Type;" }),
        __metadata("design:type", String)
    ], CreateRoleCreateRoleRequest.prototype, "type", void 0);
    return CreateRoleCreateRoleRequest;
}(SpeakeasyBase));
export { CreateRoleCreateRoleRequest };
var CreateRoleSecurity = /** @class */ (function (_super) {
    __extends(CreateRoleSecurity, _super);
    function CreateRoleSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateRoleSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateRoleSecurity;
}(SpeakeasyBase));
export { CreateRoleSecurity };
var CreateRoleRequest = /** @class */ (function (_super) {
    __extends(CreateRoleRequest, _super);
    function CreateRoleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateRoleRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateRolePathParams)
    ], CreateRoleRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateRoleCreateRoleRequest)
    ], CreateRoleRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateRoleSecurity)
    ], CreateRoleRequest.prototype, "security", void 0);
    return CreateRoleRequest;
}(SpeakeasyBase));
export { CreateRoleRequest };
var CreateRoleResponse = /** @class */ (function (_super) {
    __extends(CreateRoleResponse, _super);
    function CreateRoleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateRoleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateRoleResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ChatV1ServiceRole)
    ], CreateRoleResponse.prototype, "chatV1ServiceRole", void 0);
    return CreateRoleResponse;
}(SpeakeasyBase));
export { CreateRoleResponse };
