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
export var DeleteSyncListPermissionServerList = [
    "https://sync.twilio.com",
];
var DeleteSyncListPermissionPathParams = /** @class */ (function (_super) {
    __extends(DeleteSyncListPermissionPathParams, _super);
    function DeleteSyncListPermissionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Identity" }),
        __metadata("design:type", String)
    ], DeleteSyncListPermissionPathParams.prototype, "identity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ListSid" }),
        __metadata("design:type", String)
    ], DeleteSyncListPermissionPathParams.prototype, "listSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], DeleteSyncListPermissionPathParams.prototype, "serviceSid", void 0);
    return DeleteSyncListPermissionPathParams;
}(SpeakeasyBase));
export { DeleteSyncListPermissionPathParams };
var DeleteSyncListPermissionSecurity = /** @class */ (function (_super) {
    __extends(DeleteSyncListPermissionSecurity, _super);
    function DeleteSyncListPermissionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], DeleteSyncListPermissionSecurity.prototype, "accountSidAuthToken", void 0);
    return DeleteSyncListPermissionSecurity;
}(SpeakeasyBase));
export { DeleteSyncListPermissionSecurity };
var DeleteSyncListPermissionRequest = /** @class */ (function (_super) {
    __extends(DeleteSyncListPermissionRequest, _super);
    function DeleteSyncListPermissionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteSyncListPermissionRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteSyncListPermissionPathParams)
    ], DeleteSyncListPermissionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteSyncListPermissionSecurity)
    ], DeleteSyncListPermissionRequest.prototype, "security", void 0);
    return DeleteSyncListPermissionRequest;
}(SpeakeasyBase));
export { DeleteSyncListPermissionRequest };
var DeleteSyncListPermissionResponse = /** @class */ (function (_super) {
    __extends(DeleteSyncListPermissionResponse, _super);
    function DeleteSyncListPermissionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteSyncListPermissionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteSyncListPermissionResponse.prototype, "statusCode", void 0);
    return DeleteSyncListPermissionResponse;
}(SpeakeasyBase));
export { DeleteSyncListPermissionResponse };
