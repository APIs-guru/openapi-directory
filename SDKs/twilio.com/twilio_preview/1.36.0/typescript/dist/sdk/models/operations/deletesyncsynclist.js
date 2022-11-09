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
export var DELETESYNCSYNCLIST_SERVERS = [
    "https://preview.twilio.com",
];
var DeleteSyncSyncListPathParams = /** @class */ (function (_super) {
    __extends(DeleteSyncSyncListPathParams, _super);
    function DeleteSyncSyncListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" }),
        __metadata("design:type", String)
    ], DeleteSyncSyncListPathParams.prototype, "serviceSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], DeleteSyncSyncListPathParams.prototype, "sid", void 0);
    return DeleteSyncSyncListPathParams;
}(SpeakeasyBase));
export { DeleteSyncSyncListPathParams };
var DeleteSyncSyncListSecurity = /** @class */ (function (_super) {
    __extends(DeleteSyncSyncListSecurity, _super);
    function DeleteSyncSyncListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], DeleteSyncSyncListSecurity.prototype, "accountSidAuthToken", void 0);
    return DeleteSyncSyncListSecurity;
}(SpeakeasyBase));
export { DeleteSyncSyncListSecurity };
var DeleteSyncSyncListRequest = /** @class */ (function (_super) {
    __extends(DeleteSyncSyncListRequest, _super);
    function DeleteSyncSyncListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteSyncSyncListRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteSyncSyncListPathParams)
    ], DeleteSyncSyncListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteSyncSyncListSecurity)
    ], DeleteSyncSyncListRequest.prototype, "security", void 0);
    return DeleteSyncSyncListRequest;
}(SpeakeasyBase));
export { DeleteSyncSyncListRequest };
var DeleteSyncSyncListResponse = /** @class */ (function (_super) {
    __extends(DeleteSyncSyncListResponse, _super);
    function DeleteSyncSyncListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteSyncSyncListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteSyncSyncListResponse.prototype, "statusCode", void 0);
    return DeleteSyncSyncListResponse;
}(SpeakeasyBase));
export { DeleteSyncSyncListResponse };
