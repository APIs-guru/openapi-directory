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
export var FetchTrunksServerList = [
    "https://routes.twilio.com",
];
var FetchTrunksPathParams = /** @class */ (function (_super) {
    __extends(FetchTrunksPathParams, _super);
    function FetchTrunksPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=SipTrunkDomain" }),
        __metadata("design:type", String)
    ], FetchTrunksPathParams.prototype, "sipTrunkDomain", void 0);
    return FetchTrunksPathParams;
}(SpeakeasyBase));
export { FetchTrunksPathParams };
var FetchTrunksSecurity = /** @class */ (function (_super) {
    __extends(FetchTrunksSecurity, _super);
    function FetchTrunksSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchTrunksSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchTrunksSecurity;
}(SpeakeasyBase));
export { FetchTrunksSecurity };
var FetchTrunksRequest = /** @class */ (function (_super) {
    __extends(FetchTrunksRequest, _super);
    function FetchTrunksRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchTrunksRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchTrunksPathParams)
    ], FetchTrunksRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchTrunksSecurity)
    ], FetchTrunksRequest.prototype, "security", void 0);
    return FetchTrunksRequest;
}(SpeakeasyBase));
export { FetchTrunksRequest };
var FetchTrunksResponse = /** @class */ (function (_super) {
    __extends(FetchTrunksResponse, _super);
    function FetchTrunksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchTrunksResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FetchTrunksResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RoutesV2Trunks)
    ], FetchTrunksResponse.prototype, "routesV2Trunks", void 0);
    return FetchTrunksResponse;
}(SpeakeasyBase));
export { FetchTrunksResponse };
