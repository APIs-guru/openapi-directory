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
export var FetchNetworkAccessProfileNetworkServerList = [
    "https://supersim.twilio.com",
];
var FetchNetworkAccessProfileNetworkPathParams = /** @class */ (function (_super) {
    __extends(FetchNetworkAccessProfileNetworkPathParams, _super);
    function FetchNetworkAccessProfileNetworkPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=NetworkAccessProfileSid" }),
        __metadata("design:type", String)
    ], FetchNetworkAccessProfileNetworkPathParams.prototype, "networkAccessProfileSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], FetchNetworkAccessProfileNetworkPathParams.prototype, "sid", void 0);
    return FetchNetworkAccessProfileNetworkPathParams;
}(SpeakeasyBase));
export { FetchNetworkAccessProfileNetworkPathParams };
var FetchNetworkAccessProfileNetworkSecurity = /** @class */ (function (_super) {
    __extends(FetchNetworkAccessProfileNetworkSecurity, _super);
    function FetchNetworkAccessProfileNetworkSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchNetworkAccessProfileNetworkSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchNetworkAccessProfileNetworkSecurity;
}(SpeakeasyBase));
export { FetchNetworkAccessProfileNetworkSecurity };
var FetchNetworkAccessProfileNetworkRequest = /** @class */ (function (_super) {
    __extends(FetchNetworkAccessProfileNetworkRequest, _super);
    function FetchNetworkAccessProfileNetworkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchNetworkAccessProfileNetworkRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchNetworkAccessProfileNetworkPathParams)
    ], FetchNetworkAccessProfileNetworkRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchNetworkAccessProfileNetworkSecurity)
    ], FetchNetworkAccessProfileNetworkRequest.prototype, "security", void 0);
    return FetchNetworkAccessProfileNetworkRequest;
}(SpeakeasyBase));
export { FetchNetworkAccessProfileNetworkRequest };
var FetchNetworkAccessProfileNetworkResponse = /** @class */ (function (_super) {
    __extends(FetchNetworkAccessProfileNetworkResponse, _super);
    function FetchNetworkAccessProfileNetworkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchNetworkAccessProfileNetworkResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FetchNetworkAccessProfileNetworkResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SupersimV1NetworkAccessProfileNetworkAccessProfileNetwork)
    ], FetchNetworkAccessProfileNetworkResponse.prototype, "supersimV1NetworkAccessProfileNetworkAccessProfileNetwork", void 0);
    return FetchNetworkAccessProfileNetworkResponse;
}(SpeakeasyBase));
export { FetchNetworkAccessProfileNetworkResponse };
