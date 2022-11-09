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
export var FETCHHOSTEDNUMBERSHOSTEDNUMBERORDER_SERVERS = [
    "https://preview.twilio.com",
];
var FetchHostedNumbersHostedNumberOrderPathParams = /** @class */ (function (_super) {
    __extends(FetchHostedNumbersHostedNumberOrderPathParams, _super);
    function FetchHostedNumbersHostedNumberOrderPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], FetchHostedNumbersHostedNumberOrderPathParams.prototype, "sid", void 0);
    return FetchHostedNumbersHostedNumberOrderPathParams;
}(SpeakeasyBase));
export { FetchHostedNumbersHostedNumberOrderPathParams };
var FetchHostedNumbersHostedNumberOrderSecurity = /** @class */ (function (_super) {
    __extends(FetchHostedNumbersHostedNumberOrderSecurity, _super);
    function FetchHostedNumbersHostedNumberOrderSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchHostedNumbersHostedNumberOrderSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchHostedNumbersHostedNumberOrderSecurity;
}(SpeakeasyBase));
export { FetchHostedNumbersHostedNumberOrderSecurity };
var FetchHostedNumbersHostedNumberOrderRequest = /** @class */ (function (_super) {
    __extends(FetchHostedNumbersHostedNumberOrderRequest, _super);
    function FetchHostedNumbersHostedNumberOrderRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchHostedNumbersHostedNumberOrderRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchHostedNumbersHostedNumberOrderPathParams)
    ], FetchHostedNumbersHostedNumberOrderRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchHostedNumbersHostedNumberOrderSecurity)
    ], FetchHostedNumbersHostedNumberOrderRequest.prototype, "security", void 0);
    return FetchHostedNumbersHostedNumberOrderRequest;
}(SpeakeasyBase));
export { FetchHostedNumbersHostedNumberOrderRequest };
var FetchHostedNumbersHostedNumberOrderResponse = /** @class */ (function (_super) {
    __extends(FetchHostedNumbersHostedNumberOrderResponse, _super);
    function FetchHostedNumbersHostedNumberOrderResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchHostedNumbersHostedNumberOrderResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FetchHostedNumbersHostedNumberOrderResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PreviewHostedNumbersHostedNumberOrder)
    ], FetchHostedNumbersHostedNumberOrderResponse.prototype, "previewHostedNumbersHostedNumberOrder", void 0);
    return FetchHostedNumbersHostedNumberOrderResponse;
}(SpeakeasyBase));
export { FetchHostedNumbersHostedNumberOrderResponse };
