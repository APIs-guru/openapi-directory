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
export var DELETEWORKSPACE_SERVERS = [
    "https://taskrouter.twilio.com",
];
var DeleteWorkspacePathParams = /** @class */ (function (_super) {
    __extends(DeleteWorkspacePathParams, _super);
    function DeleteWorkspacePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], DeleteWorkspacePathParams.prototype, "sid", void 0);
    return DeleteWorkspacePathParams;
}(SpeakeasyBase));
export { DeleteWorkspacePathParams };
var DeleteWorkspaceSecurity = /** @class */ (function (_super) {
    __extends(DeleteWorkspaceSecurity, _super);
    function DeleteWorkspaceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], DeleteWorkspaceSecurity.prototype, "accountSidAuthToken", void 0);
    return DeleteWorkspaceSecurity;
}(SpeakeasyBase));
export { DeleteWorkspaceSecurity };
var DeleteWorkspaceRequest = /** @class */ (function (_super) {
    __extends(DeleteWorkspaceRequest, _super);
    function DeleteWorkspaceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteWorkspaceRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteWorkspacePathParams)
    ], DeleteWorkspaceRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteWorkspaceSecurity)
    ], DeleteWorkspaceRequest.prototype, "security", void 0);
    return DeleteWorkspaceRequest;
}(SpeakeasyBase));
export { DeleteWorkspaceRequest };
var DeleteWorkspaceResponse = /** @class */ (function (_super) {
    __extends(DeleteWorkspaceResponse, _super);
    function DeleteWorkspaceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteWorkspaceResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteWorkspaceResponse.prototype, "statusCode", void 0);
    return DeleteWorkspaceResponse;
}(SpeakeasyBase));
export { DeleteWorkspaceResponse };
