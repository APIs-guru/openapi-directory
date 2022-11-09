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
export var CREATEENTITY_SERVERS = [
    "https://verify.twilio.com",
];
var CreateEntityPathParams = /** @class */ (function (_super) {
    __extends(CreateEntityPathParams, _super);
    function CreateEntityPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], CreateEntityPathParams.prototype, "serviceSid", void 0);
    return CreateEntityPathParams;
}(SpeakeasyBase));
export { CreateEntityPathParams };
var CreateEntityCreateEntityRequest = /** @class */ (function (_super) {
    __extends(CreateEntityCreateEntityRequest, _super);
    function CreateEntityCreateEntityRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=Identity;" }),
        __metadata("design:type", String)
    ], CreateEntityCreateEntityRequest.prototype, "identity", void 0);
    return CreateEntityCreateEntityRequest;
}(SpeakeasyBase));
export { CreateEntityCreateEntityRequest };
var CreateEntitySecurity = /** @class */ (function (_super) {
    __extends(CreateEntitySecurity, _super);
    function CreateEntitySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateEntitySecurity.prototype, "accountSidAuthToken", void 0);
    return CreateEntitySecurity;
}(SpeakeasyBase));
export { CreateEntitySecurity };
var CreateEntityRequest = /** @class */ (function (_super) {
    __extends(CreateEntityRequest, _super);
    function CreateEntityRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateEntityRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateEntityPathParams)
    ], CreateEntityRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateEntityCreateEntityRequest)
    ], CreateEntityRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CreateEntitySecurity)
    ], CreateEntityRequest.prototype, "security", void 0);
    return CreateEntityRequest;
}(SpeakeasyBase));
export { CreateEntityRequest };
var CreateEntityResponse = /** @class */ (function (_super) {
    __extends(CreateEntityResponse, _super);
    function CreateEntityResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CreateEntityResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CreateEntityResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.VerifyV2ServiceEntity)
    ], CreateEntityResponse.prototype, "verifyV2ServiceEntity", void 0);
    return CreateEntityResponse;
}(SpeakeasyBase));
export { CreateEntityResponse };
