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
export var CreateFleetServerList = [
    "https://supersim.twilio.com",
];
export var CreateFleetCreateFleetRequestIpCommandsMethodEnum;
(function (CreateFleetCreateFleetRequestIpCommandsMethodEnum) {
    CreateFleetCreateFleetRequestIpCommandsMethodEnum["Head"] = "HEAD";
    CreateFleetCreateFleetRequestIpCommandsMethodEnum["Get"] = "GET";
    CreateFleetCreateFleetRequestIpCommandsMethodEnum["Post"] = "POST";
    CreateFleetCreateFleetRequestIpCommandsMethodEnum["Patch"] = "PATCH";
    CreateFleetCreateFleetRequestIpCommandsMethodEnum["Put"] = "PUT";
    CreateFleetCreateFleetRequestIpCommandsMethodEnum["Delete"] = "DELETE";
})(CreateFleetCreateFleetRequestIpCommandsMethodEnum || (CreateFleetCreateFleetRequestIpCommandsMethodEnum = {}));
export var CreateFleetCreateFleetRequestSmsCommandsMethodEnum;
(function (CreateFleetCreateFleetRequestSmsCommandsMethodEnum) {
    CreateFleetCreateFleetRequestSmsCommandsMethodEnum["Head"] = "HEAD";
    CreateFleetCreateFleetRequestSmsCommandsMethodEnum["Get"] = "GET";
    CreateFleetCreateFleetRequestSmsCommandsMethodEnum["Post"] = "POST";
    CreateFleetCreateFleetRequestSmsCommandsMethodEnum["Patch"] = "PATCH";
    CreateFleetCreateFleetRequestSmsCommandsMethodEnum["Put"] = "PUT";
    CreateFleetCreateFleetRequestSmsCommandsMethodEnum["Delete"] = "DELETE";
})(CreateFleetCreateFleetRequestSmsCommandsMethodEnum || (CreateFleetCreateFleetRequestSmsCommandsMethodEnum = {}));
var CreateFleetCreateFleetRequest = /** @class */ (function (_super) {
    __extends(CreateFleetCreateFleetRequest, _super);
    function CreateFleetCreateFleetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "form, name=DataEnabled;" }),
        __metadata("design:type", Boolean)
    ], CreateFleetCreateFleetRequest.prototype, "dataEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=DataLimit;" }),
        __metadata("design:type", Number)
    ], CreateFleetCreateFleetRequest.prototype, "dataLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=IpCommandsMethod;" }),
        __metadata("design:type", String)
    ], CreateFleetCreateFleetRequest.prototype, "ipCommandsMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=IpCommandsUrl;" }),
        __metadata("design:type", String)
    ], CreateFleetCreateFleetRequest.prototype, "ipCommandsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=NetworkAccessProfile;" }),
        __metadata("design:type", String)
    ], CreateFleetCreateFleetRequest.prototype, "networkAccessProfile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=SmsCommandsEnabled;" }),
        __metadata("design:type", Boolean)
    ], CreateFleetCreateFleetRequest.prototype, "smsCommandsEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=SmsCommandsMethod;" }),
        __metadata("design:type", String)
    ], CreateFleetCreateFleetRequest.prototype, "smsCommandsMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=SmsCommandsUrl;" }),
        __metadata("design:type", String)
    ], CreateFleetCreateFleetRequest.prototype, "smsCommandsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "form, name=UniqueName;" }),
        __metadata("design:type", String)
    ], CreateFleetCreateFleetRequest.prototype, "uniqueName", void 0);
    return CreateFleetCreateFleetRequest;
}(SpeakeasyBase));
export { CreateFleetCreateFleetRequest };
var CreateFleetSecurity = /** @class */ (function (_super) {
    __extends(CreateFleetSecurity, _super);
    function CreateFleetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], CreateFleetSecurity.prototype, "accountSidAuthToken", void 0);
    return CreateFleetSecurity;
}(SpeakeasyBase));
export { CreateFleetSecurity };
var CreateFleetRequest = /** @class */ (function (_super) {
    __extends(CreateFleetRequest, _super);
    function CreateFleetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateFleetRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" }),
        __metadata("design:type", CreateFleetCreateFleetRequest)
    ], CreateFleetRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateFleetSecurity)
    ], CreateFleetRequest.prototype, "security", void 0);
    return CreateFleetRequest;
}(SpeakeasyBase));
export { CreateFleetRequest };
var CreateFleetResponse = /** @class */ (function (_super) {
    __extends(CreateFleetResponse, _super);
    function CreateFleetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateFleetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateFleetResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SupersimV1Fleet)
    ], CreateFleetResponse.prototype, "supersimV1Fleet", void 0);
    return CreateFleetResponse;
}(SpeakeasyBase));
export { CreateFleetResponse };
