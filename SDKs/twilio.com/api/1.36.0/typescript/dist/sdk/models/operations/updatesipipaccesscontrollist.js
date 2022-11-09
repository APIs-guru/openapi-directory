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
export var UPDATESIPIPACCESSCONTROLLIST_SERVERS = [
    "https://api.twilio.com",
];
var UpdateSipIpAccessControlListPathParams = /** @class */ (function (_super) {
    __extends(UpdateSipIpAccessControlListPathParams, _super);
    function UpdateSipIpAccessControlListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], UpdateSipIpAccessControlListPathParams.prototype, "accountSid", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateSipIpAccessControlListPathParams.prototype, "sid", void 0);
    return UpdateSipIpAccessControlListPathParams;
}(SpeakeasyBase));
export { UpdateSipIpAccessControlListPathParams };
var UpdateSipIpAccessControlListUpdateSipIpAccessControlListRequest = /** @class */ (function (_super) {
    __extends(UpdateSipIpAccessControlListUpdateSipIpAccessControlListRequest, _super);
    function UpdateSipIpAccessControlListUpdateSipIpAccessControlListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], UpdateSipIpAccessControlListUpdateSipIpAccessControlListRequest.prototype, "friendlyName", void 0);
    return UpdateSipIpAccessControlListUpdateSipIpAccessControlListRequest;
}(SpeakeasyBase));
export { UpdateSipIpAccessControlListUpdateSipIpAccessControlListRequest };
var UpdateSipIpAccessControlListSecurity = /** @class */ (function (_super) {
    __extends(UpdateSipIpAccessControlListSecurity, _super);
    function UpdateSipIpAccessControlListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateSipIpAccessControlListSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateSipIpAccessControlListSecurity;
}(SpeakeasyBase));
export { UpdateSipIpAccessControlListSecurity };
var UpdateSipIpAccessControlListRequest = /** @class */ (function (_super) {
    __extends(UpdateSipIpAccessControlListRequest, _super);
    function UpdateSipIpAccessControlListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateSipIpAccessControlListRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateSipIpAccessControlListPathParams)
    ], UpdateSipIpAccessControlListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateSipIpAccessControlListUpdateSipIpAccessControlListRequest)
    ], UpdateSipIpAccessControlListRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", UpdateSipIpAccessControlListSecurity)
    ], UpdateSipIpAccessControlListRequest.prototype, "security", void 0);
    return UpdateSipIpAccessControlListRequest;
}(SpeakeasyBase));
export { UpdateSipIpAccessControlListRequest };
var UpdateSipIpAccessControlListResponse = /** @class */ (function (_super) {
    __extends(UpdateSipIpAccessControlListResponse, _super);
    function UpdateSipIpAccessControlListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], UpdateSipIpAccessControlListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], UpdateSipIpAccessControlListResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ApiV2010AccountSipSipIpAccessControlList)
    ], UpdateSipIpAccessControlListResponse.prototype, "apiV2010AccountSipSipIpAccessControlList", void 0);
    return UpdateSipIpAccessControlListResponse;
}(SpeakeasyBase));
export { UpdateSipIpAccessControlListResponse };
