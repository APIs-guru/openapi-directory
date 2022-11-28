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
export var FetchWirelessCommandServerList = [
    "https://preview.twilio.com",
];
var FetchWirelessCommandPathParams = /** @class */ (function (_super) {
    __extends(FetchWirelessCommandPathParams, _super);
    function FetchWirelessCommandPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], FetchWirelessCommandPathParams.prototype, "sid", void 0);
    return FetchWirelessCommandPathParams;
}(SpeakeasyBase));
export { FetchWirelessCommandPathParams };
var FetchWirelessCommandSecurity = /** @class */ (function (_super) {
    __extends(FetchWirelessCommandSecurity, _super);
    function FetchWirelessCommandSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchWirelessCommandSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchWirelessCommandSecurity;
}(SpeakeasyBase));
export { FetchWirelessCommandSecurity };
var FetchWirelessCommandRequest = /** @class */ (function (_super) {
    __extends(FetchWirelessCommandRequest, _super);
    function FetchWirelessCommandRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchWirelessCommandRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchWirelessCommandPathParams)
    ], FetchWirelessCommandRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchWirelessCommandSecurity)
    ], FetchWirelessCommandRequest.prototype, "security", void 0);
    return FetchWirelessCommandRequest;
}(SpeakeasyBase));
export { FetchWirelessCommandRequest };
var FetchWirelessCommandResponse = /** @class */ (function (_super) {
    __extends(FetchWirelessCommandResponse, _super);
    function FetchWirelessCommandResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchWirelessCommandResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FetchWirelessCommandResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PreviewWirelessCommand)
    ], FetchWirelessCommandResponse.prototype, "previewWirelessCommand", void 0);
    return FetchWirelessCommandResponse;
}(SpeakeasyBase));
export { FetchWirelessCommandResponse };
