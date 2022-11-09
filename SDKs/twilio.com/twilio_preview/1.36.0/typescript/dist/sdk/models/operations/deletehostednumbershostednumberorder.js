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
export var DELETEHOSTEDNUMBERSHOSTEDNUMBERORDER_SERVERS = [
    "https://preview.twilio.com",
];
var DeleteHostedNumbersHostedNumberOrderPathParams = /** @class */ (function (_super) {
    __extends(DeleteHostedNumbersHostedNumberOrderPathParams, _super);
    function DeleteHostedNumbersHostedNumberOrderPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], DeleteHostedNumbersHostedNumberOrderPathParams.prototype, "sid", void 0);
    return DeleteHostedNumbersHostedNumberOrderPathParams;
}(SpeakeasyBase));
export { DeleteHostedNumbersHostedNumberOrderPathParams };
var DeleteHostedNumbersHostedNumberOrderSecurity = /** @class */ (function (_super) {
    __extends(DeleteHostedNumbersHostedNumberOrderSecurity, _super);
    function DeleteHostedNumbersHostedNumberOrderSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], DeleteHostedNumbersHostedNumberOrderSecurity.prototype, "accountSidAuthToken", void 0);
    return DeleteHostedNumbersHostedNumberOrderSecurity;
}(SpeakeasyBase));
export { DeleteHostedNumbersHostedNumberOrderSecurity };
var DeleteHostedNumbersHostedNumberOrderRequest = /** @class */ (function (_super) {
    __extends(DeleteHostedNumbersHostedNumberOrderRequest, _super);
    function DeleteHostedNumbersHostedNumberOrderRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteHostedNumbersHostedNumberOrderRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteHostedNumbersHostedNumberOrderPathParams)
    ], DeleteHostedNumbersHostedNumberOrderRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteHostedNumbersHostedNumberOrderSecurity)
    ], DeleteHostedNumbersHostedNumberOrderRequest.prototype, "security", void 0);
    return DeleteHostedNumbersHostedNumberOrderRequest;
}(SpeakeasyBase));
export { DeleteHostedNumbersHostedNumberOrderRequest };
var DeleteHostedNumbersHostedNumberOrderResponse = /** @class */ (function (_super) {
    __extends(DeleteHostedNumbersHostedNumberOrderResponse, _super);
    function DeleteHostedNumbersHostedNumberOrderResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteHostedNumbersHostedNumberOrderResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteHostedNumbersHostedNumberOrderResponse.prototype, "statusCode", void 0);
    return DeleteHostedNumbersHostedNumberOrderResponse;
}(SpeakeasyBase));
export { DeleteHostedNumbersHostedNumberOrderResponse };
