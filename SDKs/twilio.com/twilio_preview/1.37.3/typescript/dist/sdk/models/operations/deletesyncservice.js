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
export var DeleteSyncServiceServerList = [
    "https://preview.twilio.com",
];
var DeleteSyncServicePathParams = /** @class */ (function (_super) {
    __extends(DeleteSyncServicePathParams, _super);
    function DeleteSyncServicePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], DeleteSyncServicePathParams.prototype, "sid", void 0);
    return DeleteSyncServicePathParams;
}(SpeakeasyBase));
export { DeleteSyncServicePathParams };
var DeleteSyncServiceSecurity = /** @class */ (function (_super) {
    __extends(DeleteSyncServiceSecurity, _super);
    function DeleteSyncServiceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], DeleteSyncServiceSecurity.prototype, "accountSidAuthToken", void 0);
    return DeleteSyncServiceSecurity;
}(SpeakeasyBase));
export { DeleteSyncServiceSecurity };
var DeleteSyncServiceRequest = /** @class */ (function (_super) {
    __extends(DeleteSyncServiceRequest, _super);
    function DeleteSyncServiceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteSyncServiceRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteSyncServicePathParams)
    ], DeleteSyncServiceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteSyncServiceSecurity)
    ], DeleteSyncServiceRequest.prototype, "security", void 0);
    return DeleteSyncServiceRequest;
}(SpeakeasyBase));
export { DeleteSyncServiceRequest };
var DeleteSyncServiceResponse = /** @class */ (function (_super) {
    __extends(DeleteSyncServiceResponse, _super);
    function DeleteSyncServiceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteSyncServiceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteSyncServiceResponse.prototype, "statusCode", void 0);
    return DeleteSyncServiceResponse;
}(SpeakeasyBase));
export { DeleteSyncServiceResponse };
