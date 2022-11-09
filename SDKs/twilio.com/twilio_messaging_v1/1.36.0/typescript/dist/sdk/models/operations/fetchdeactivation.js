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
export var FETCHDEACTIVATION_SERVERS = [
    "https://messaging.twilio.com",
];
var FetchDeactivationQueryParams = /** @class */ (function (_super) {
    __extends(FetchDeactivationQueryParams, _super);
    function FetchDeactivationQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Date" }),
        __metadata("design:type", Date)
    ], FetchDeactivationQueryParams.prototype, "date", void 0);
    return FetchDeactivationQueryParams;
}(SpeakeasyBase));
export { FetchDeactivationQueryParams };
var FetchDeactivationSecurity = /** @class */ (function (_super) {
    __extends(FetchDeactivationSecurity, _super);
    function FetchDeactivationSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchDeactivationSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchDeactivationSecurity;
}(SpeakeasyBase));
export { FetchDeactivationSecurity };
var FetchDeactivationRequest = /** @class */ (function (_super) {
    __extends(FetchDeactivationRequest, _super);
    function FetchDeactivationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchDeactivationRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchDeactivationQueryParams)
    ], FetchDeactivationRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchDeactivationSecurity)
    ], FetchDeactivationRequest.prototype, "security", void 0);
    return FetchDeactivationRequest;
}(SpeakeasyBase));
export { FetchDeactivationRequest };
var FetchDeactivationResponse = /** @class */ (function (_super) {
    __extends(FetchDeactivationResponse, _super);
    function FetchDeactivationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchDeactivationResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FetchDeactivationResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.MessagingV1Deactivation)
    ], FetchDeactivationResponse.prototype, "messagingV1Deactivation", void 0);
    return FetchDeactivationResponse;
}(SpeakeasyBase));
export { FetchDeactivationResponse };
