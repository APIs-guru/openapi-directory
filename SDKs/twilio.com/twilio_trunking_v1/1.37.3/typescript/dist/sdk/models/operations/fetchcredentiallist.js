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
export var FetchCredentialListServerList = [
    "https://trunking.twilio.com",
];
var FetchCredentialListPathParams = /** @class */ (function (_super) {
    __extends(FetchCredentialListPathParams, _super);
    function FetchCredentialListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], FetchCredentialListPathParams.prototype, "sid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TrunkSid" }),
        __metadata("design:type", String)
    ], FetchCredentialListPathParams.prototype, "trunkSid", void 0);
    return FetchCredentialListPathParams;
}(SpeakeasyBase));
export { FetchCredentialListPathParams };
var FetchCredentialListSecurity = /** @class */ (function (_super) {
    __extends(FetchCredentialListSecurity, _super);
    function FetchCredentialListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchCredentialListSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchCredentialListSecurity;
}(SpeakeasyBase));
export { FetchCredentialListSecurity };
var FetchCredentialListRequest = /** @class */ (function (_super) {
    __extends(FetchCredentialListRequest, _super);
    function FetchCredentialListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchCredentialListRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchCredentialListPathParams)
    ], FetchCredentialListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchCredentialListSecurity)
    ], FetchCredentialListRequest.prototype, "security", void 0);
    return FetchCredentialListRequest;
}(SpeakeasyBase));
export { FetchCredentialListRequest };
var FetchCredentialListResponse = /** @class */ (function (_super) {
    __extends(FetchCredentialListResponse, _super);
    function FetchCredentialListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchCredentialListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FetchCredentialListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TrunkingV1TrunkCredentialList)
    ], FetchCredentialListResponse.prototype, "trunkingV1TrunkCredentialList", void 0);
    return FetchCredentialListResponse;
}(SpeakeasyBase));
export { FetchCredentialListResponse };
