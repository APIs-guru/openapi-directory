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
export var FETCHSMSCOMMAND_SERVERS = [
    "https://supersim.twilio.com",
];
var FetchSmsCommandPathParams = /** @class */ (function (_super) {
    __extends(FetchSmsCommandPathParams, _super);
    function FetchSmsCommandPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], FetchSmsCommandPathParams.prototype, "sid", void 0);
    return FetchSmsCommandPathParams;
}(SpeakeasyBase));
export { FetchSmsCommandPathParams };
var FetchSmsCommandSecurity = /** @class */ (function (_super) {
    __extends(FetchSmsCommandSecurity, _super);
    function FetchSmsCommandSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], FetchSmsCommandSecurity.prototype, "accountSidAuthToken", void 0);
    return FetchSmsCommandSecurity;
}(SpeakeasyBase));
export { FetchSmsCommandSecurity };
var FetchSmsCommandRequest = /** @class */ (function (_super) {
    __extends(FetchSmsCommandRequest, _super);
    function FetchSmsCommandRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchSmsCommandRequest.prototype, "serverUrl", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchSmsCommandPathParams)
    ], FetchSmsCommandRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FetchSmsCommandSecurity)
    ], FetchSmsCommandRequest.prototype, "security", void 0);
    return FetchSmsCommandRequest;
}(SpeakeasyBase));
export { FetchSmsCommandRequest };
var FetchSmsCommandResponse = /** @class */ (function (_super) {
    __extends(FetchSmsCommandResponse, _super);
    function FetchSmsCommandResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FetchSmsCommandResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FetchSmsCommandResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.SupersimV1SmsCommand)
    ], FetchSmsCommandResponse.prototype, "supersimV1SmsCommand", void 0);
    return FetchSmsCommandResponse;
}(SpeakeasyBase));
export { FetchSmsCommandResponse };
