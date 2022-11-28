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
export var UpdateFleetServerList = [
    "https://supersim.twilio.com",
];
var UpdateFleetPathParams = /** @class */ (function (_super) {
    __extends(UpdateFleetPathParams, _super);
    function UpdateFleetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" }),
        __metadata("design:type", String)
    ], UpdateFleetPathParams.prototype, "sid", void 0);
    return UpdateFleetPathParams;
}(SpeakeasyBase));
export { UpdateFleetPathParams };
export var UpdateFleetUpdateFleetRequestIpCommandsMethodEnum;
(function (UpdateFleetUpdateFleetRequestIpCommandsMethodEnum) {
    UpdateFleetUpdateFleetRequestIpCommandsMethodEnum["Head"] = "HEAD";
    UpdateFleetUpdateFleetRequestIpCommandsMethodEnum["Get"] = "GET";
    UpdateFleetUpdateFleetRequestIpCommandsMethodEnum["Post"] = "POST";
    UpdateFleetUpdateFleetRequestIpCommandsMethodEnum["Patch"] = "PATCH";
    UpdateFleetUpdateFleetRequestIpCommandsMethodEnum["Put"] = "PUT";
    UpdateFleetUpdateFleetRequestIpCommandsMethodEnum["Delete"] = "DELETE";
})(UpdateFleetUpdateFleetRequestIpCommandsMethodEnum || (UpdateFleetUpdateFleetRequestIpCommandsMethodEnum = {}));
export var UpdateFleetUpdateFleetRequestSmsCommandsMethodEnum;
(function (UpdateFleetUpdateFleetRequestSmsCommandsMethodEnum) {
    UpdateFleetUpdateFleetRequestSmsCommandsMethodEnum["Head"] = "HEAD";
    UpdateFleetUpdateFleetRequestSmsCommandsMethodEnum["Get"] = "GET";
    UpdateFleetUpdateFleetRequestSmsCommandsMethodEnum["Post"] = "POST";
    UpdateFleetUpdateFleetRequestSmsCommandsMethodEnum["Patch"] = "PATCH";
    UpdateFleetUpdateFleetRequestSmsCommandsMethodEnum["Put"] = "PUT";
    UpdateFleetUpdateFleetRequestSmsCommandsMethodEnum["Delete"] = "DELETE";
})(UpdateFleetUpdateFleetRequestSmsCommandsMethodEnum || (UpdateFleetUpdateFleetRequestSmsCommandsMethodEnum = {}));
var UpdateFleetUpdateFleetRequest = /** @class */ (function (_super) {
    __extends(UpdateFleetUpdateFleetRequest, _super);
    function UpdateFleetUpdateFleetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=DataLimit;" }),
        __metadata("design:type", Number)
    ], UpdateFleetUpdateFleetRequest.prototype, "dataLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=IpCommandsMethod;" }),
        __metadata("design:type", String)
    ], UpdateFleetUpdateFleetRequest.prototype, "ipCommandsMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=IpCommandsUrl;" }),
        __metadata("design:type", String)
    ], UpdateFleetUpdateFleetRequest.prototype, "ipCommandsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=NetworkAccessProfile;" }),
        __metadata("design:type", String)
    ], UpdateFleetUpdateFleetRequest.prototype, "networkAccessProfile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=SmsCommandsMethod;" }),
        __metadata("design:type", String)
    ], UpdateFleetUpdateFleetRequest.prototype, "smsCommandsMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=SmsCommandsUrl;" }),
        __metadata("design:type", String)
    ], UpdateFleetUpdateFleetRequest.prototype, "smsCommandsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=UniqueName;" }),
        __metadata("design:type", String)
    ], UpdateFleetUpdateFleetRequest.prototype, "uniqueName", void 0);
    return UpdateFleetUpdateFleetRequest;
}(SpeakeasyBase));
export { UpdateFleetUpdateFleetRequest };
var UpdateFleetSecurity = /** @class */ (function (_super) {
    __extends(UpdateFleetSecurity, _super);
    function UpdateFleetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], UpdateFleetSecurity.prototype, "accountSidAuthToken", void 0);
    return UpdateFleetSecurity;
}(SpeakeasyBase));
export { UpdateFleetSecurity };
var UpdateFleetRequest = /** @class */ (function (_super) {
    __extends(UpdateFleetRequest, _super);
    function UpdateFleetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateFleetRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateFleetPathParams)
    ], UpdateFleetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", UpdateFleetUpdateFleetRequest)
    ], UpdateFleetRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateFleetSecurity)
    ], UpdateFleetRequest.prototype, "security", void 0);
    return UpdateFleetRequest;
}(SpeakeasyBase));
export { UpdateFleetRequest };
var UpdateFleetResponse = /** @class */ (function (_super) {
    __extends(UpdateFleetResponse, _super);
    function UpdateFleetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateFleetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateFleetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SupersimV1Fleet)
    ], UpdateFleetResponse.prototype, "supersimV1Fleet", void 0);
    return UpdateFleetResponse;
}(SpeakeasyBase));
export { UpdateFleetResponse };
