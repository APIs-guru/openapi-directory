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
export var CreateSipIpAccessControlListServerList = [
    "https://api.twilio.com",
];
var CreateSipIpAccessControlListPathParams = /** @class */ (function (_super) {
    __extends(CreateSipIpAccessControlListPathParams, _super);
    function CreateSipIpAccessControlListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], CreateSipIpAccessControlListPathParams.prototype, "accountSid", void 0);
    return CreateSipIpAccessControlListPathParams;
}(SpeakeasyBase));
export { CreateSipIpAccessControlListPathParams };
var CreateSipIpAccessControlListCreateSipIpAccessControlListRequest = /** @class */ (function (_super) {
    __extends(CreateSipIpAccessControlListCreateSipIpAccessControlListRequest, _super);
    function CreateSipIpAccessControlListCreateSipIpAccessControlListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=FriendlyName;" }),
        __metadata("design:type", String)
    ], CreateSipIpAccessControlListCreateSipIpAccessControlListRequest.prototype, "friendlyName", void 0);
    return CreateSipIpAccessControlListCreateSipIpAccessControlListRequest;
}(SpeakeasyBase));
export { CreateSipIpAccessControlListCreateSipIpAccessControlListRequest };
var CreateSipIpAccessControlListSecurity = /** @class */ (function (_super) {
    __extends(CreateSipIpAccessControlListSecurity, _super);
    function CreateSipIpAccessControlListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateSipIpAccessControlListSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateSipIpAccessControlListSecurity;
}(SpeakeasyBase));
export { CreateSipIpAccessControlListSecurity };
var CreateSipIpAccessControlListRequest = /** @class */ (function (_super) {
    __extends(CreateSipIpAccessControlListRequest, _super);
    function CreateSipIpAccessControlListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateSipIpAccessControlListRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateSipIpAccessControlListPathParams)
    ], CreateSipIpAccessControlListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateSipIpAccessControlListCreateSipIpAccessControlListRequest)
    ], CreateSipIpAccessControlListRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateSipIpAccessControlListSecurity)
    ], CreateSipIpAccessControlListRequest.prototype, "security", void 0);
    return CreateSipIpAccessControlListRequest;
}(SpeakeasyBase));
export { CreateSipIpAccessControlListRequest };
var CreateSipIpAccessControlListResponse = /** @class */ (function (_super) {
    __extends(CreateSipIpAccessControlListResponse, _super);
    function CreateSipIpAccessControlListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateSipIpAccessControlListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateSipIpAccessControlListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiV2010AccountSipSipIpAccessControlList)
    ], CreateSipIpAccessControlListResponse.prototype, "apiV2010AccountSipSipIpAccessControlList", void 0);
    return CreateSipIpAccessControlListResponse;
}(SpeakeasyBase));
export { CreateSipIpAccessControlListResponse };
