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
export var FetchIpAccessControlListServerList = [
    "https://trunking.twilio.com",
];
var FetchIpAccessControlListPathParams = /** @class */ (function (_super) {
    __extends(FetchIpAccessControlListPathParams, _super);
    function FetchIpAccessControlListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], FetchIpAccessControlListPathParams.prototype, "sid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TrunkSid" }),
        __metadata("design:type", String)
    ], FetchIpAccessControlListPathParams.prototype, "trunkSid", void 0);
    return FetchIpAccessControlListPathParams;
}(SpeakeasyBase));
export { FetchIpAccessControlListPathParams };
var FetchIpAccessControlListSecurity = /** @class */ (function (_super) {
    __extends(FetchIpAccessControlListSecurity, _super);
    function FetchIpAccessControlListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchIpAccessControlListSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchIpAccessControlListSecurity;
}(SpeakeasyBase));
export { FetchIpAccessControlListSecurity };
var FetchIpAccessControlListRequest = /** @class */ (function (_super) {
    __extends(FetchIpAccessControlListRequest, _super);
    function FetchIpAccessControlListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchIpAccessControlListRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchIpAccessControlListPathParams)
    ], FetchIpAccessControlListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchIpAccessControlListSecurity)
    ], FetchIpAccessControlListRequest.prototype, "security", void 0);
    return FetchIpAccessControlListRequest;
}(SpeakeasyBase));
export { FetchIpAccessControlListRequest };
var FetchIpAccessControlListResponse = /** @class */ (function (_super) {
    __extends(FetchIpAccessControlListResponse, _super);
    function FetchIpAccessControlListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchIpAccessControlListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FetchIpAccessControlListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TrunkingV1TrunkIpAccessControlList)
    ], FetchIpAccessControlListResponse.prototype, "trunkingV1TrunkIpAccessControlList", void 0);
    return FetchIpAccessControlListResponse;
}(SpeakeasyBase));
export { FetchIpAccessControlListResponse };
