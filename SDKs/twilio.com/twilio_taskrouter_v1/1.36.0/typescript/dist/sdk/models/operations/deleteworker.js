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
export var DELETEWORKER_SERVERS = [
    "https://taskrouter.twilio.com",
];
var DeleteWorkerPathParams = /** @class */ (function (_super) {
    __extends(DeleteWorkerPathParams, _super);
    function DeleteWorkerPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], DeleteWorkerPathParams.prototype, "sid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=WorkspaceSid" }),
        __metadata("design:type", String)
    ], DeleteWorkerPathParams.prototype, "workspaceSid", void 0);
    return DeleteWorkerPathParams;
}(SpeakeasyBase));
export { DeleteWorkerPathParams };
var DeleteWorkerHeaders = /** @class */ (function (_super) {
    __extends(DeleteWorkerHeaders, _super);
    function DeleteWorkerHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=If-Match" }),
        __metadata("design:type", String)
    ], DeleteWorkerHeaders.prototype, "ifMatch", void 0);
    return DeleteWorkerHeaders;
}(SpeakeasyBase));
export { DeleteWorkerHeaders };
var DeleteWorkerSecurity = /** @class */ (function (_super) {
    __extends(DeleteWorkerSecurity, _super);
    function DeleteWorkerSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], DeleteWorkerSecurity.prototype, "accountSidAuthToken", void 0);
    return DeleteWorkerSecurity;
}(SpeakeasyBase));
export { DeleteWorkerSecurity };
var DeleteWorkerRequest = /** @class */ (function (_super) {
    __extends(DeleteWorkerRequest, _super);
    function DeleteWorkerRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteWorkerRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteWorkerPathParams)
    ], DeleteWorkerRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteWorkerHeaders)
    ], DeleteWorkerRequest.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteWorkerSecurity)
    ], DeleteWorkerRequest.prototype, "security", void 0);
    return DeleteWorkerRequest;
}(SpeakeasyBase));
export { DeleteWorkerRequest };
var DeleteWorkerResponse = /** @class */ (function (_super) {
    __extends(DeleteWorkerResponse, _super);
    function DeleteWorkerResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteWorkerResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteWorkerResponse.prototype, "statusCode", void 0);
    return DeleteWorkerResponse;
}(SpeakeasyBase));
export { DeleteWorkerResponse };
