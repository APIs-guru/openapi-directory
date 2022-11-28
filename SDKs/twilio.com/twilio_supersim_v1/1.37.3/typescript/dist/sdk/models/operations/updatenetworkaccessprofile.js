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
export var UpdateNetworkAccessProfileServerList = [
    "https://supersim.twilio.com",
];
var UpdateNetworkAccessProfilePathParams = /** @class */ (function (_super) {
    __extends(UpdateNetworkAccessProfilePathParams, _super);
    function UpdateNetworkAccessProfilePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateNetworkAccessProfilePathParams.prototype, "sid", void 0);
    return UpdateNetworkAccessProfilePathParams;
}(SpeakeasyBase));
export { UpdateNetworkAccessProfilePathParams };
var UpdateNetworkAccessProfileUpdateNetworkAccessProfileRequest = /** @class */ (function (_super) {
    __extends(UpdateNetworkAccessProfileUpdateNetworkAccessProfileRequest, _super);
    function UpdateNetworkAccessProfileUpdateNetworkAccessProfileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=UniqueName;" }),
        __metadata("design:type", String)
    ], UpdateNetworkAccessProfileUpdateNetworkAccessProfileRequest.prototype, "uniqueName", void 0);
    return UpdateNetworkAccessProfileUpdateNetworkAccessProfileRequest;
}(SpeakeasyBase));
export { UpdateNetworkAccessProfileUpdateNetworkAccessProfileRequest };
var UpdateNetworkAccessProfileSecurity = /** @class */ (function (_super) {
    __extends(UpdateNetworkAccessProfileSecurity, _super);
    function UpdateNetworkAccessProfileSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateNetworkAccessProfileSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateNetworkAccessProfileSecurity;
}(SpeakeasyBase));
export { UpdateNetworkAccessProfileSecurity };
var UpdateNetworkAccessProfileRequest = /** @class */ (function (_super) {
    __extends(UpdateNetworkAccessProfileRequest, _super);
    function UpdateNetworkAccessProfileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateNetworkAccessProfileRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateNetworkAccessProfilePathParams)
    ], UpdateNetworkAccessProfileRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateNetworkAccessProfileUpdateNetworkAccessProfileRequest)
    ], UpdateNetworkAccessProfileRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateNetworkAccessProfileSecurity)
    ], UpdateNetworkAccessProfileRequest.prototype, "security", void 0);
    return UpdateNetworkAccessProfileRequest;
}(SpeakeasyBase));
export { UpdateNetworkAccessProfileRequest };
var UpdateNetworkAccessProfileResponse = /** @class */ (function (_super) {
    __extends(UpdateNetworkAccessProfileResponse, _super);
    function UpdateNetworkAccessProfileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateNetworkAccessProfileResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateNetworkAccessProfileResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SupersimV1NetworkAccessProfile)
    ], UpdateNetworkAccessProfileResponse.prototype, "supersimV1NetworkAccessProfile", void 0);
    return UpdateNetworkAccessProfileResponse;
}(SpeakeasyBase));
export { UpdateNetworkAccessProfileResponse };
