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
export var FETCHNETWORK_SERVERS = [
    "https://supersim.twilio.com",
];
var FetchNetworkPathParams = /** @class */ (function (_super) {
    __extends(FetchNetworkPathParams, _super);
    function FetchNetworkPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], FetchNetworkPathParams.prototype, "sid", void 0);
    return FetchNetworkPathParams;
}(SpeakeasyBase));
export { FetchNetworkPathParams };
var FetchNetworkSecurity = /** @class */ (function (_super) {
    __extends(FetchNetworkSecurity, _super);
    function FetchNetworkSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchNetworkSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchNetworkSecurity;
}(SpeakeasyBase));
export { FetchNetworkSecurity };
var FetchNetworkRequest = /** @class */ (function (_super) {
    __extends(FetchNetworkRequest, _super);
    function FetchNetworkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchNetworkRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchNetworkPathParams)
    ], FetchNetworkRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchNetworkSecurity)
    ], FetchNetworkRequest.prototype, "security", void 0);
    return FetchNetworkRequest;
}(SpeakeasyBase));
export { FetchNetworkRequest };
var FetchNetworkResponse = /** @class */ (function (_super) {
    __extends(FetchNetworkResponse, _super);
    function FetchNetworkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchNetworkResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FetchNetworkResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.SupersimV1Network)
    ], FetchNetworkResponse.prototype, "supersimV1Network", void 0);
    return FetchNetworkResponse;
}(SpeakeasyBase));
export { FetchNetworkResponse };
