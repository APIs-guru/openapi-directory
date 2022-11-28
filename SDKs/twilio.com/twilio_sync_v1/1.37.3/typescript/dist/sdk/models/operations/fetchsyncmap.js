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
export var FetchSyncMapServerList = [
    "https://sync.twilio.com",
];
var FetchSyncMapPathParams = /** @class */ (function (_super) {
    __extends(FetchSyncMapPathParams, _super);
    function FetchSyncMapPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], FetchSyncMapPathParams.prototype, "serviceSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], FetchSyncMapPathParams.prototype, "sid", void 0);
    return FetchSyncMapPathParams;
}(SpeakeasyBase));
export { FetchSyncMapPathParams };
var FetchSyncMapSecurity = /** @class */ (function (_super) {
    __extends(FetchSyncMapSecurity, _super);
    function FetchSyncMapSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchSyncMapSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchSyncMapSecurity;
}(SpeakeasyBase));
export { FetchSyncMapSecurity };
var FetchSyncMapRequest = /** @class */ (function (_super) {
    __extends(FetchSyncMapRequest, _super);
    function FetchSyncMapRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchSyncMapRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchSyncMapPathParams)
    ], FetchSyncMapRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchSyncMapSecurity)
    ], FetchSyncMapRequest.prototype, "security", void 0);
    return FetchSyncMapRequest;
}(SpeakeasyBase));
export { FetchSyncMapRequest };
var FetchSyncMapResponse = /** @class */ (function (_super) {
    __extends(FetchSyncMapResponse, _super);
    function FetchSyncMapResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchSyncMapResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FetchSyncMapResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SyncV1ServiceSyncMap)
    ], FetchSyncMapResponse.prototype, "syncV1ServiceSyncMap", void 0);
    return FetchSyncMapResponse;
}(SpeakeasyBase));
export { FetchSyncMapResponse };
