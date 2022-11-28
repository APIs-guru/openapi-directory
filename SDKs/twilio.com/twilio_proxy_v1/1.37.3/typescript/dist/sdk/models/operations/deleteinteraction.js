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
export var DeleteInteractionServerList = [
    "https://proxy.twilio.com",
];
var DeleteInteractionPathParams = /** @class */ (function (_super) {
    __extends(DeleteInteractionPathParams, _super);
    function DeleteInteractionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], DeleteInteractionPathParams.prototype, "serviceSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=SessionSid" }),
        __metadata("design:type", String)
    ], DeleteInteractionPathParams.prototype, "sessionSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], DeleteInteractionPathParams.prototype, "sid", void 0);
    return DeleteInteractionPathParams;
}(SpeakeasyBase));
export { DeleteInteractionPathParams };
var DeleteInteractionSecurity = /** @class */ (function (_super) {
    __extends(DeleteInteractionSecurity, _super);
    function DeleteInteractionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], DeleteInteractionSecurity.prototype, "accountSidAuthToken", void 0);
    return DeleteInteractionSecurity;
}(SpeakeasyBase));
export { DeleteInteractionSecurity };
var DeleteInteractionRequest = /** @class */ (function (_super) {
    __extends(DeleteInteractionRequest, _super);
    function DeleteInteractionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteInteractionRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteInteractionPathParams)
    ], DeleteInteractionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteInteractionSecurity)
    ], DeleteInteractionRequest.prototype, "security", void 0);
    return DeleteInteractionRequest;
}(SpeakeasyBase));
export { DeleteInteractionRequest };
var DeleteInteractionResponse = /** @class */ (function (_super) {
    __extends(DeleteInteractionResponse, _super);
    function DeleteInteractionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteInteractionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteInteractionResponse.prototype, "statusCode", void 0);
    return DeleteInteractionResponse;
}(SpeakeasyBase));
export { DeleteInteractionResponse };
