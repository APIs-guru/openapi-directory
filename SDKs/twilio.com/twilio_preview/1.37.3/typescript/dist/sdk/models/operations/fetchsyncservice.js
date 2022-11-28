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
export var FetchSyncServiceServerList = [
    "https://preview.twilio.com",
];
var FetchSyncServicePathParams = /** @class */ (function (_super) {
    __extends(FetchSyncServicePathParams, _super);
    function FetchSyncServicePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], FetchSyncServicePathParams.prototype, "sid", void 0);
    return FetchSyncServicePathParams;
}(SpeakeasyBase));
export { FetchSyncServicePathParams };
var FetchSyncServiceSecurity = /** @class */ (function (_super) {
    __extends(FetchSyncServiceSecurity, _super);
    function FetchSyncServiceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchSyncServiceSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchSyncServiceSecurity;
}(SpeakeasyBase));
export { FetchSyncServiceSecurity };
var FetchSyncServiceRequest = /** @class */ (function (_super) {
    __extends(FetchSyncServiceRequest, _super);
    function FetchSyncServiceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchSyncServiceRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchSyncServicePathParams)
    ], FetchSyncServiceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchSyncServiceSecurity)
    ], FetchSyncServiceRequest.prototype, "security", void 0);
    return FetchSyncServiceRequest;
}(SpeakeasyBase));
export { FetchSyncServiceRequest };
var FetchSyncServiceResponse = /** @class */ (function (_super) {
    __extends(FetchSyncServiceResponse, _super);
    function FetchSyncServiceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchSyncServiceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FetchSyncServiceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PreviewSyncService)
    ], FetchSyncServiceResponse.prototype, "previewSyncService", void 0);
    return FetchSyncServiceResponse;
}(SpeakeasyBase));
export { FetchSyncServiceResponse };
