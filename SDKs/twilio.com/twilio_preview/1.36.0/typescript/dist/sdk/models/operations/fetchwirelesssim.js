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
export var FETCHWIRELESSSIM_SERVERS = [
    "https://preview.twilio.com",
];
var FetchWirelessSimPathParams = /** @class */ (function (_super) {
    __extends(FetchWirelessSimPathParams, _super);
    function FetchWirelessSimPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], FetchWirelessSimPathParams.prototype, "sid", void 0);
    return FetchWirelessSimPathParams;
}(SpeakeasyBase));
export { FetchWirelessSimPathParams };
var FetchWirelessSimSecurity = /** @class */ (function (_super) {
    __extends(FetchWirelessSimSecurity, _super);
    function FetchWirelessSimSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchWirelessSimSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchWirelessSimSecurity;
}(SpeakeasyBase));
export { FetchWirelessSimSecurity };
var FetchWirelessSimRequest = /** @class */ (function (_super) {
    __extends(FetchWirelessSimRequest, _super);
    function FetchWirelessSimRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchWirelessSimRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchWirelessSimPathParams)
    ], FetchWirelessSimRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchWirelessSimSecurity)
    ], FetchWirelessSimRequest.prototype, "security", void 0);
    return FetchWirelessSimRequest;
}(SpeakeasyBase));
export { FetchWirelessSimRequest };
var FetchWirelessSimResponse = /** @class */ (function (_super) {
    __extends(FetchWirelessSimResponse, _super);
    function FetchWirelessSimResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchWirelessSimResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FetchWirelessSimResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.PreviewWirelessSim)
    ], FetchWirelessSimResponse.prototype, "previewWirelessSim", void 0);
    return FetchWirelessSimResponse;
}(SpeakeasyBase));
export { FetchWirelessSimResponse };
