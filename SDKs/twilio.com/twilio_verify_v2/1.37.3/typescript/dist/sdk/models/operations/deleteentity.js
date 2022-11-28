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
export var DeleteEntityServerList = [
    "https://verify.twilio.com",
];
var DeleteEntityPathParams = /** @class */ (function (_super) {
    __extends(DeleteEntityPathParams, _super);
    function DeleteEntityPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Identity" }),
        __metadata("design:type", String)
    ], DeleteEntityPathParams.prototype, "identity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], DeleteEntityPathParams.prototype, "serviceSid", void 0);
    return DeleteEntityPathParams;
}(SpeakeasyBase));
export { DeleteEntityPathParams };
var DeleteEntitySecurity = /** @class */ (function (_super) {
    __extends(DeleteEntitySecurity, _super);
    function DeleteEntitySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], DeleteEntitySecurity.prototype, "accountSidAuthToken", void 0);
    return DeleteEntitySecurity;
}(SpeakeasyBase));
export { DeleteEntitySecurity };
var DeleteEntityRequest = /** @class */ (function (_super) {
    __extends(DeleteEntityRequest, _super);
    function DeleteEntityRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteEntityRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteEntityPathParams)
    ], DeleteEntityRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteEntitySecurity)
    ], DeleteEntityRequest.prototype, "security", void 0);
    return DeleteEntityRequest;
}(SpeakeasyBase));
export { DeleteEntityRequest };
var DeleteEntityResponse = /** @class */ (function (_super) {
    __extends(DeleteEntityResponse, _super);
    function DeleteEntityResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteEntityResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteEntityResponse.prototype, "statusCode", void 0);
    return DeleteEntityResponse;
}(SpeakeasyBase));
export { DeleteEntityResponse };
