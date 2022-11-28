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
export var FetchIpCommandServerList = [
    "https://supersim.twilio.com",
];
var FetchIpCommandPathParams = /** @class */ (function (_super) {
    __extends(FetchIpCommandPathParams, _super);
    function FetchIpCommandPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], FetchIpCommandPathParams.prototype, "sid", void 0);
    return FetchIpCommandPathParams;
}(SpeakeasyBase));
export { FetchIpCommandPathParams };
var FetchIpCommandSecurity = /** @class */ (function (_super) {
    __extends(FetchIpCommandSecurity, _super);
    function FetchIpCommandSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchIpCommandSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchIpCommandSecurity;
}(SpeakeasyBase));
export { FetchIpCommandSecurity };
var FetchIpCommandRequest = /** @class */ (function (_super) {
    __extends(FetchIpCommandRequest, _super);
    function FetchIpCommandRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchIpCommandRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchIpCommandPathParams)
    ], FetchIpCommandRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", FetchIpCommandSecurity)
    ], FetchIpCommandRequest.prototype, "security", void 0);
    return FetchIpCommandRequest;
}(SpeakeasyBase));
export { FetchIpCommandRequest };
var FetchIpCommandResponse = /** @class */ (function (_super) {
    __extends(FetchIpCommandResponse, _super);
    function FetchIpCommandResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], FetchIpCommandResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], FetchIpCommandResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SupersimV1IpCommand)
    ], FetchIpCommandResponse.prototype, "supersimV1IpCommand", void 0);
    return FetchIpCommandResponse;
}(SpeakeasyBase));
export { FetchIpCommandResponse };
